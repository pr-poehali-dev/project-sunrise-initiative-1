import { useEffect, useState } from "react"
import { api, Category, Expense, Summary } from "@/lib/api"
import Icon from "@/components/ui/icon"
import { toast } from "sonner"

export default function AppPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [summary, setSummary] = useState<Summary | null>(null)
  const [loading, setLoading] = useState(true)
  const [showAdd, setShowAdd] = useState(false)
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [categoryId, setCategoryId] = useState<number | null>(null)
  const [saving, setSaving] = useState(false)

  const loadAll = async () => {
    try {
      const [c, e, s] = await Promise.all([api.getCategories(), api.getExpenses(50), api.getSummary()])
      setCategories(c.categories)
      setExpenses(e.expenses)
      setSummary(s)
      if (!categoryId && c.categories.length) setCategoryId(c.categories[0].id)
    } catch (err) {
      toast.error("Не удалось загрузить данные")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadAll()
  }, [])

  const handleAdd = async () => {
    const amt = parseFloat(amount.replace(",", "."))
    if (!amt || amt <= 0 || !categoryId) {
      toast.error("Введите сумму и категорию")
      return
    }
    setSaving(true)
    try {
      await api.addExpense({ amount: amt, category_id: categoryId, description })
      toast.success("Расход добавлен")
      setAmount("")
      setDescription("")
      setShowAdd(false)
      loadAll()
    } catch (err) {
      toast.error("Ошибка при добавлении")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await api.deleteExpense(id)
      toast.success("Удалено")
      loadAll()
    } catch {
      toast.error("Ошибка")
    }
  }

  const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(Math.round(n))

  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-32">
      <header className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur border-b border-zinc-800 px-5 py-4">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wallet" size={22} className="text-emerald-400" />
            <span className="font-semibold">Finflow</span>
          </div>
          <a href="/" className="text-zinc-500 hover:text-zinc-300 text-sm">
            О приложении
          </a>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-5 py-6">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-900/40 to-emerald-950/60 border border-emerald-800/30 p-6 mb-6">
          <p className="text-emerald-300/70 text-sm mb-1">Расходы в этом месяце</p>
          {loading ? (
            <div className="h-10 w-40 bg-zinc-800 animate-pulse rounded" />
          ) : (
            <p className="text-4xl font-bold text-white">−{fmt(summary?.total_spent ?? 0)} ₽</p>
          )}
          <p className="text-zinc-400 text-xs mt-2">
            Транзакций: {expenses.length}
          </p>
        </div>

        {summary && summary.categories.filter((c) => c.spent > 0).length > 0 && (
          <section className="mb-6">
            <h2 className="text-sm font-medium text-zinc-400 mb-3">По категориям</h2>
            <div className="space-y-2">
              {summary.categories
                .filter((c) => c.spent > 0)
                .slice(0, 6)
                .map((c) => (
                  <div key={c.id} className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3">
                    <span className="text-xl">{c.emoji}</span>
                    <span className="flex-1 text-sm">{c.name}</span>
                    <span className="text-sm font-medium text-zinc-300">−{fmt(Number(c.spent))} ₽</span>
                  </div>
                ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-sm font-medium text-zinc-400 mb-3">Последние траты</h2>
          {loading ? (
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 bg-zinc-900 animate-pulse rounded-xl" />
              ))}
            </div>
          ) : expenses.length === 0 ? (
            <div className="text-center py-12 bg-zinc-900/50 border border-dashed border-zinc-800 rounded-2xl">
              <Icon name="Receipt" size={32} className="text-zinc-700 mx-auto mb-2" />
              <p className="text-zinc-500 text-sm">Пока нет расходов</p>
              <p className="text-zinc-600 text-xs mt-1">Нажми «+», чтобы добавить первый</p>
            </div>
          ) : (
            <div className="space-y-2">
              {expenses.map((e) => (
                <div key={e.id} className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 group">
                  <span className="text-xl">{e.emoji || "💸"}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{e.description || e.category_name}</p>
                    <p className="text-xs text-zinc-500">
                      {e.category_name} · {new Date(e.spent_at).toLocaleDateString("ru-RU", { day: "numeric", month: "short" })}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-white">−{fmt(Number(e.amount))} ₽</span>
                  <button
                    onClick={() => handleDelete(e.id)}
                    className="opacity-0 group-hover:opacity-100 text-zinc-600 hover:text-red-400 transition-all"
                  >
                    <Icon name="Trash2" size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <button
        onClick={() => setShowAdd(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center transition-colors z-20"
      >
        <Icon name="Plus" size={24} />
      </button>

      {showAdd && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center"
          onClick={() => setShowAdd(false)}
        >
          <div
            className="w-full md:max-w-md bg-zinc-900 border-t md:border border-zinc-800 rounded-t-3xl md:rounded-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold">Новый расход</h3>
              <button onClick={() => setShowAdd(false)} className="text-zinc-500 hover:text-zinc-300">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="mb-4">
              <input
                type="text"
                inputMode="decimal"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9.,]/g, ""))}
                className="w-full text-4xl font-bold bg-transparent text-white text-center py-4 outline-none placeholder:text-zinc-700"
                autoFocus
              />
              <p className="text-center text-zinc-500 text-sm -mt-2">₽</p>
            </div>

            <div className="mb-4">
              <label className="text-xs text-zinc-500 mb-2 block">Категория</label>
              <div className="grid grid-cols-4 gap-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCategoryId(c.id)}
                    className={`p-3 rounded-xl border transition-all ${
                      categoryId === c.id
                        ? "bg-emerald-500/10 border-emerald-500"
                        : "bg-zinc-800/50 border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    <div className="text-xl mb-1">{c.emoji}</div>
                    <div className="text-[10px] text-zinc-400 leading-tight">{c.name}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label className="text-xs text-zinc-500 mb-2 block">Описание (необязательно)</label>
              <input
                type="text"
                placeholder="Например, кофе в офисе"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-zinc-800/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <button
              onClick={handleAdd}
              disabled={saving}
              className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-800 text-white font-medium py-3.5 rounded-xl transition-colors"
            >
              {saving ? "Сохранение..." : "Сохранить расход"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
