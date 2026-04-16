import func2url from "../../backend/func2url.json"

const EXPENSES_URL = (func2url as Record<string, string>).expenses

export interface Category {
  id: number
  name: string
  emoji: string
  color: string
}

export interface Expense {
  id: number
  amount: number
  description: string | null
  spent_at: string
  category_id: number
  category_name: string
  emoji: string
  color: string
}

export interface CategorySummary {
  id: number
  name: string
  emoji: string
  color: string
  spent: number
  limit_amount: number
}

export interface Summary {
  categories: CategorySummary[]
  total_spent: number
}

function getUserId(): string {
  let uid = localStorage.getItem("finflow-user-id")
  if (!uid) {
    uid = "u_" + Math.random().toString(36).slice(2, 12)
    localStorage.setItem("finflow-user-id", uid)
  }
  return uid
}

async function request<T>(path = "", options: RequestInit = {}): Promise<T> {
  const res = await fetch(EXPENSES_URL + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": getUserId(),
      ...(options.headers || {}),
    },
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `HTTP ${res.status}`)
  }
  return res.json() as Promise<T>
}

export const api = {
  getCategories: () => request<{ categories: Category[] }>("?type=categories"),
  getExpenses: (limit = 50) => request<{ expenses: Expense[] }>(`?type=expenses&limit=${limit}`),
  getSummary: () => request<Summary>("?type=summary"),
  addExpense: (data: { amount: number; category_id: number; description?: string }) =>
    request<{ expense: Expense }>("", { method: "POST", body: JSON.stringify(data) }),
  deleteExpense: (id: number) =>
    request<{ deleted: boolean }>(`?id=${id}`, { method: "DELETE" }),
}
