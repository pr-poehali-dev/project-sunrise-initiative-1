import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const stats = [
  { value: "50 000+", label: "активных пользователей", icon: "Users" },
  { value: "₽2.1 млрд", label: "расходов отслежено", icon: "TrendingDown" },
  { value: "4.9★", label: "рейтинг в App Store", icon: "Star" },
  { value: "83%", label: "экономят больше за месяц", icon: "PiggyBank" },
]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2"
          >
            Тысячи людей уже контролируют свои финансы.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
          >
            От студентов до семейных бюджетов и самозанятых.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
                  <Icon name={stat.icon as "Users"} size={22} className="text-emerald-400 mb-1" />
                  <span className="text-white font-bold text-2xl">{stat.value}</span>
                  <span className="text-zinc-500 text-sm text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}