import json
import os
from datetime import datetime
from decimal import Decimal
import psycopg2
from psycopg2.extras import RealDictCursor


def handler(event: dict, context) -> dict:
    """
    API для управления расходами Finflow: категории, расходы, сводка по бюджету.
    Методы: GET (?type=categories|expenses|summary), POST (добавить расход), DELETE (?id=)
    """
    method = event.get('httpMethod', 'GET')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json'
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    dsn = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(dsn)
    conn.autocommit = True

    try:
        headers = event.get('headers') or {}
        user_id = headers.get('X-User-Id') or headers.get('x-user-id') or 'demo'
        user_id_safe = user_id.replace("'", "''")[:100]

        params = event.get('queryStringParameters') or {}

        if method == 'GET':
            kind = params.get('type', 'expenses')

            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                if kind == 'categories':
                    cur.execute("SELECT id, name, emoji, color FROM categories ORDER BY id")
                    rows = cur.fetchall()
                    return {'statusCode': 200, 'headers': cors_headers, 'body': json.dumps({'categories': rows}, default=_json_default, ensure_ascii=False)}

                if kind == 'summary':
                    cur.execute(f"""
                        SELECT 
                            c.id, c.name, c.emoji, c.color,
                            COALESCE(SUM(e.amount), 0) AS spent,
                            COALESCE(b.limit_amount, 0) AS limit_amount
                        FROM categories c
                        LEFT JOIN expenses e ON e.category_id = c.id 
                            AND e.user_id = '{user_id_safe}'
                            AND date_trunc('month', e.spent_at) = date_trunc('month', CURRENT_DATE)
                        LEFT JOIN budgets b ON b.category_id = c.id AND b.user_id = '{user_id_safe}'
                        GROUP BY c.id, c.name, c.emoji, c.color, b.limit_amount
                        ORDER BY spent DESC
                    """)
                    rows = cur.fetchall()
                    cur.execute(f"""
                        SELECT COALESCE(SUM(amount), 0) AS total
                        FROM expenses
                        WHERE user_id = '{user_id_safe}'
                        AND date_trunc('month', spent_at) = date_trunc('month', CURRENT_DATE)
                    """)
                    total = cur.fetchone()
                    return {'statusCode': 200, 'headers': cors_headers, 'body': json.dumps({'categories': rows, 'total_spent': total['total'] if total else 0}, default=_json_default, ensure_ascii=False)}

                limit = int(params.get('limit', 50))
                if limit > 200:
                    limit = 200
                cur.execute(f"""
                    SELECT e.id, e.amount, e.description, e.spent_at,
                           c.id AS category_id, c.name AS category_name, c.emoji, c.color
                    FROM expenses e
                    LEFT JOIN categories c ON c.id = e.category_id
                    WHERE e.user_id = '{user_id_safe}'
                    ORDER BY e.spent_at DESC
                    LIMIT {limit}
                """)
                rows = cur.fetchall()
                return {'statusCode': 200, 'headers': cors_headers, 'body': json.dumps({'expenses': rows}, default=_json_default, ensure_ascii=False)}

        if method == 'POST':
            body_str = event.get('body') or '{}'
            body = json.loads(body_str)

            amount = body.get('amount')
            category_id = body.get('category_id')
            description = (body.get('description') or '')[:255]

            if amount is None or category_id is None:
                return {'statusCode': 400, 'headers': cors_headers, 'body': json.dumps({'error': 'amount and category_id required'})}

            try:
                amount_val = float(amount)
                category_id_val = int(category_id)
            except (TypeError, ValueError):
                return {'statusCode': 400, 'headers': cors_headers, 'body': json.dumps({'error': 'invalid amount or category_id'})}

            desc_safe = description.replace("'", "''")

            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute(f"""
                    INSERT INTO expenses (user_id, category_id, amount, description)
                    VALUES ('{user_id_safe}', {category_id_val}, {amount_val}, '{desc_safe}')
                    RETURNING id, amount, description, spent_at, category_id
                """)
                row = cur.fetchone()
                return {'statusCode': 200, 'headers': cors_headers, 'body': json.dumps({'expense': row}, default=_json_default, ensure_ascii=False)}

        if method == 'DELETE':
            expense_id = params.get('id')
            if not expense_id:
                return {'statusCode': 400, 'headers': cors_headers, 'body': json.dumps({'error': 'id required'})}
            try:
                expense_id_val = int(expense_id)
            except ValueError:
                return {'statusCode': 400, 'headers': cors_headers, 'body': json.dumps({'error': 'invalid id'})}

            with conn.cursor() as cur:
                cur.execute(f"DELETE FROM expenses WHERE id = {expense_id_val} AND user_id = '{user_id_safe}'")
                return {'statusCode': 200, 'headers': cors_headers, 'body': json.dumps({'deleted': True})}

        return {'statusCode': 405, 'headers': cors_headers, 'body': json.dumps({'error': 'Method not allowed'})}

    finally:
        conn.close()


def _json_default(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    if isinstance(obj, datetime):
        return obj.isoformat()
    raise TypeError(f"not serializable: {type(obj)}")
