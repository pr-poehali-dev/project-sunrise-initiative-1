import { motion } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"
import Icon from "@/components/ui/icon"

const categories = [
  { name: "🍔 Еда и кафе", amount: "−12 400 ₽", selected: true, icon: "◇" },
  { name: "🏠 Жильё и ЖКХ", amount: "−28 000 ₽", selected: false, icon: "◉" },
  { name: "🚗 Транспорт", amount: "−5 600 ₽", selected: false, icon: "◈" },
  { name: "🎮 Развлечения", amount: "−3 200 ₽", selected: false, icon: "○" },
  { name: "🛒 Продукты", amount: "−18 900 ₽", selected: false, icon: "◎" },
  { name: "💊 Здоровье", amount: "−2 100 ₽", selected: false, icon: "○" },
]

export function AISection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-zinc-400 text-sm">Умная категоризация</span>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            ИИ знает, куда ушли деньги
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-medium">Автоматическая категоризация.</span> ИИ анализирует ваши траты
            и распределяет их по категориям — никакого ручного ввода.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors text-sm flex items-center gap-2 mb-16"
          >
            Как это работает
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    border: "1px solid rgba(66, 66, 66, 0.5)",
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 40%, rgba(8, 9, 10, 0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    boxShadow:
                      "inset 0 1.503px 5.261px rgba(255, 255, 255, 0.04), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                <div
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #09090B 100%)",
                    height: "80%",
                    position: "absolute",
                    bottom: "-2px",
                    left: "-180px",
                    right: "-180px",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />

                <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4">
                  <span className="text-zinc-500 italic">Выберите категорию расхода...</span>
                </div>

                <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl py-1">
                  {categories.map((cat, index) => (
                    <div
                      key={cat.name}
                      style={
                        cat.selected
                          ? {
                              transform: "scale(1.04) rotateX(17deg)",
                              background: "linear-gradient(#1a3a2a 0%, #162d22 100%)",
                              borderRadius: "6px",
                              height: "48px",
                              position: "relative",
                              boxShadow:
                                "inset 0 -2.75px 4.75px rgba(16, 185, 129, 0.14), inset 0 -0.752px 0.752px rgba(16, 185, 129, 0.1), 0 54px 73px 3px rgba(0, 0, 0, 0.5)",
                              zIndex: 20,
                              marginLeft: "-12px",
                              marginRight: "-12px",
                            }
                          : {
                              opacity: 1 - index * 0.15,
                              height: "42px",
                            }
                      }
                    >
                      <div
                        className="flex items-center justify-between h-full"
                        style={{
                          paddingLeft: "24px",
                          paddingRight: "24px",
                          gap: "12px",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className={cat.selected ? "text-white font-medium" : "text-zinc-300"}>
                            {cat.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={cat.selected ? "text-emerald-400 text-sm font-medium" : "text-zinc-500 text-sm"}>
                            {cat.amount}
                          </span>
                          {cat.selected && <Check className="w-4 h-4 text-emerald-400" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-t border-r border-b border-zinc-800/60 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Умные подсказки</h3>
                <p className="text-zinc-500 text-base mb-8">
                  ИИ подмечает аномалии в тратах и подсказывает, где можно сэкономить — в среднем до 15% бюджета в месяц.
                </p>

                <div className="bg-zinc-900/60 rounded-xl border border-zinc-800/50 p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="Lightbulb" size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-zinc-300 text-sm font-medium mb-1">Совет от Finflow</p>
                      <p className="text-zinc-500 text-sm">Вы тратите на подписки на 40% больше, чем в прошлом месяце. Возможно, стоит пересмотреть неиспользуемые сервисы.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-b border-zinc-800/60 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Прогноз расходов</h3>
                <p className="text-zinc-500 text-base mb-8">
                  На основе ваших привычек ИИ прогнозирует расходы до конца месяца и предупреждает о превышении бюджета.
                </p>

                <div className="bg-zinc-900/60 rounded-xl border border-zinc-800/50 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-zinc-400 text-sm">Прогноз на апрель</span>
                    <span className="text-emerald-400 text-sm font-medium">В пределах бюджета</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2.5 mb-2">
                    <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: "68%" }} />
                  </div>
                  <div className="flex justify-between text-xs text-zinc-600">
                    <span>Потрачено: 54 200 ₽</span>
                    <span>Лимит: 80 000 ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
