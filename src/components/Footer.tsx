import Icon from "@/components/ui/icon"

export function Footer() {
  const footerLinks = {
    "Возможности": ["Учёт расходов", "Планирование бюджета", "Аналитика", "Умные подсказки", "Цели накопления", "Семейный доступ", "Виджеты iOS"],
    "Продукт": ["Тарифы", "Скачать приложение", "Обновления", "Документация", "Безопасность данных"],
    "Компания": ["О нас", "Блог", "Карьера", "Пресса", "Контакты"],
    "Поддержка": ["Центр помощи", "Сообщество", "Обратная связь", "Конфиденциальность", "Условия использования"],
  }

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Wallet" size={20} className="text-emerald-400" />
              <span className="text-white font-semibold">Finflow</span>
            </div>
            <p className="text-zinc-500 text-sm">Финансовый трекер для осознанных решений.</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">© 2026 Finflow. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <Icon name="Twitter" size={18} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <Icon name="Instagram" size={18} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <Icon name="Send" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
