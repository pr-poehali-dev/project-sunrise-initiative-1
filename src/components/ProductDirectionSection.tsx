import { ChevronRight } from "lucide-react"
import Icon from "@/components/ui/icon"

export function ProductDirectionSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-violet-500" />
          <span className="text-zinc-400 text-sm">Бюджет и цели</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Ставь финансовые цели и достигай их
        </h2>

        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Планируй бюджет по категориям.</span> Устанавливайте лимиты,
          отслеживайте прогресс и копите на мечту — всё в одном месте.
        </p>

        <div
          className="relative w-full mb-16"
          style={{
            perspective: "1200px",
          }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateX(50deg) rotateZ(-35deg)",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            <div className="relative h-[400px]">
              <div
                className="absolute w-[1px] bg-zinc-600/50"
                style={{
                  height: "600px",
                  left: "55%",
                  top: "-100px",
                  transform: "rotate(0deg)",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(113, 113, 122, 0.5) 4px, rgba(113, 113, 122, 0.5) 8px)",
                }}
              />

              <div className="absolute top-0 left-0 right-0 flex items-end">
                <div className="flex items-end gap-[3px] absolute bottom-0 left-[5%] right-0">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-zinc-600/60"
                      style={{
                        width: "1px",
                        height: i % 7 === 0 ? "16px" : "8px",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute text-zinc-500 text-sm" style={{ left: "8%", top: "80px" }}>
                Янв
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "18%", top: "55px" }}>
                Фев
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "32%", top: "35px" }}>
                Мар
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "48%", top: "15px" }}>
                Апр
              </div>
              <div
                className="absolute px-3 py-1 rounded-md bg-emerald-900/80 text-emerald-300 text-sm font-medium"
                style={{ left: "58%", top: "-10px" }}
              >
                Сейчас
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "70%", top: "-5px" }}>
                Май
              </div>
              <div className="absolute text-zinc-500/50 text-sm" style={{ left: "88%", top: "-25px" }}>
                Июн
              </div>

              <div
                className="absolute rounded-lg bg-emerald-950/90 border border-emerald-800/50 px-4 py-3 flex items-center gap-3"
                style={{
                  left: "5%",
                  top: "100px",
                  width: "45%",
                  height: "48px",
                }}
              >
                <div className="w-4 h-4 rotate-45 bg-emerald-500/60" />
                <span className="text-emerald-300 text-sm font-medium">Накопить на отпуск — 120 000 ₽</span>
                <div
                  className="absolute w-5 h-5 rotate-45 border-2 border-emerald-500 bg-transparent"
                  style={{ right: "15%", top: "50%", transform: "translateY(-50%) rotate(45deg)" }}
                />
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center gap-3"
                style={{
                  left: "15%",
                  top: "155px",
                  width: "25%",
                  height: "44px",
                }}
              >
                <div className="w-3 h-3 rotate-45 bg-violet-500/60" />
                <span className="text-zinc-400 text-sm">Подушка безопасности</span>
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-zinc-700/50 px-4 py-3 flex items-center justify-between"
                style={{
                  left: "45%",
                  top: "155px",
                  width: "45%",
                  height: "48px",
                }}
              >
                <span className="text-zinc-400 text-sm">Новый ноутбук</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-amber-500/60" />
                </div>
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center justify-between"
                style={{
                  left: "35%",
                  top: "240px",
                  width: "28%",
                  height: "48px",
                }}
              >
                <span className="text-zinc-400 text-sm">Ремонт квартиры</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-zinc-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-zinc-500/60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Управляй бюджетом по категориям</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Установите лимиты на еду, транспорт, развлечения и другие категории — Finflow предупредит о перерасходе.
            </p>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h4 className="text-lg font-medium text-zinc-200 mb-5">Бюджет на апрель</h4>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">Статус</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-900/50 text-emerald-300 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    В норме
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800 text-zinc-300 text-xs">
                    <Icon name="Calendar" size={12} />
                    12 дней до конца
                  </span>
                </div>
              </div>

              <div className="space-y-3 mt-5">
                <BudgetRow category="🍔 Еда" spent={12400} limit={15000} />
                <BudgetRow category="🚗 Транспорт" spent={5600} limit={8000} />
                <BudgetRow category="🎮 Развлечения" spent={3200} limit={5000} />
                <BudgetRow category="🛒 Продукты" spent={18900} limit={20000} warn />
              </div>
            </div>
          </div>

          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Копите на цели</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Создавайте цели накопления — отпуск, покупка, подушка безопасности. Finflow покажет, когда вы достигнете цели.
            </p>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 space-y-4">
              <GoalCard title="Отпуск в Турции" saved={78000} target={120000} icon="Plane" color="emerald" />
              <GoalCard title="iPhone 16 Pro" saved={45000} target={130000} icon="Smartphone" color="violet" />
              <GoalCard title="Подушка безопасности" saved={200000} target={300000} icon="Shield" color="amber" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BudgetRow({ category, spent, limit, warn }: { category: string; spent: number; limit: number; warn?: boolean }) {
  const pct = Math.min((spent / limit) * 100, 100)
  const isOver = pct > 90
  return (
    <div className="flex items-center gap-3">
      <span className="text-zinc-300 text-sm w-28 shrink-0">{category}</span>
      <div className="flex-1 bg-zinc-800 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${isOver ? "bg-amber-500" : "bg-emerald-500"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`text-xs w-24 text-right shrink-0 ${isOver ? "text-amber-400" : "text-zinc-500"}`}>
        {spent.toLocaleString("ru")} / {limit.toLocaleString("ru")} ₽
      </span>
    </div>
  )
}

function GoalCard({ title, saved, target, icon, color }: { title: string; saved: number; target: number; icon: string; color: string }) {
  const pct = Math.round((saved / target) * 100)
  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-500",
    violet: "bg-violet-500",
    amber: "bg-amber-500",
  }
  return (
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-xl ${colorMap[color]}/10 flex items-center justify-center shrink-0`}>
        <Icon name={icon as "Plane"} size={18} className={`text-${color}-400`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-zinc-300 text-sm font-medium truncate">{title}</span>
          <span className="text-zinc-500 text-xs shrink-0 ml-2">{pct}%</span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-1.5">
          <div className={`${colorMap[color]} h-1.5 rounded-full`} style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  )
}
