CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    emoji VARCHAR(10) NOT NULL,
    color VARCHAR(20) DEFAULT 'emerald',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS expenses (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL DEFAULT 'demo',
    category_id INTEGER REFERENCES categories(id),
    amount NUMERIC(12, 2) NOT NULL,
    description VARCHAR(255),
    spent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_expenses_user ON expenses(user_id);
CREATE INDEX IF NOT EXISTS idx_expenses_spent_at ON expenses(spent_at DESC);

CREATE TABLE IF NOT EXISTS budgets (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL DEFAULT 'demo',
    category_id INTEGER REFERENCES categories(id),
    limit_amount NUMERIC(12, 2) NOT NULL,
    period VARCHAR(20) DEFAULT 'monthly',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories (name, emoji, color) VALUES
('Еда и кафе', '🍔', 'orange'),
('Продукты', '🛒', 'emerald'),
('Транспорт', '🚗', 'blue'),
('Жильё и ЖКХ', '🏠', 'violet'),
('Развлечения', '🎮', 'pink'),
('Здоровье', '💊', 'red'),
('Одежда', '👕', 'amber'),
('Подписки', '📱', 'cyan')
ON CONFLICT DO NOTHING;
