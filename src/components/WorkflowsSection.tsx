import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const carouselCards = [
  {
    id: 1,
    category: "Быстрый ввод",
    title: "Добавляйте расход за 3 секунды",
    icon: ArrowRight,
    mockup: "quick-add",
  },
  {
    id: 2,
    category: "Банковский импорт",
    title: "Синхронизация с банком автоматически",
    icon: ArrowRight,
    mockup: "bank",
  },
  {
    id: 3,
    category: "Finflow Mobile",
    title: "Всегда под рукой на iPhone",
    icon: ArrowRight,
    mockup: "mobile",
  },
  {
    id: 4,
    category: "Уведомления",
    title: "Напоминания о лимитах бюджета",
    icon: ArrowRight,
    mockup: "notifications",
  },
  {
    id: 5,
    category: "Экспорт данных",
    title: "Скачивайте отчёты в PDF и Excel",
    icon: ArrowRight,
    mockup: "export",
  },
  {
    id: 6,
    category: "Семейный доступ",
    title: "Общий бюджет для всей семьи",
    icon: ArrowRight,
    mockup: "family",
  },
  {
    id: 7,
    category: "Виджеты iOS",
    title: "Баланс на домашнем экране",
    icon: ArrowRight,
    mockup: "widgets",
  },
]

function QuickAddMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <Icon name="Plus" size={14} />
        <span>Новый расход</span>
      </div>
      <div className="mt-2 flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2">
        <span className="text-lg">🍔</span>
        <span className="text-sm text-zinc-300">Бургер Кинг</span>
        <span className="text-sm text-emerald-400 ml-auto">−459 ₽</span>
      </div>
      <div className="mt-1 flex items-center gap-2 bg-zinc-800/30 rounded-lg px-3 py-2">
        <span className="text-lg">☕</span>
        <span className="text-sm text-zinc-400">Кофе</span>
        <span className="text-sm text-zinc-500 ml-auto">−280 ₽</span>
      </div>
      <div className="mt-1 flex items-center gap-2 px-3 py-2">
        <span className="text-lg">🚕</span>
        <span className="text-sm text-zinc-500">Такси</span>
        <span className="text-sm text-zinc-600 ml-auto">−520 ₽</span>
      </div>
    </div>
  )
}

function BankMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2 text-xs">
        <Icon name="Building2" size={14} className="text-zinc-500" />
        <span className="text-zinc-400">Тинькофф</span>
        <span className="text-emerald-400/70 ml-auto text-[10px]">Синхронизировано</span>
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-400">14 новых транзакций</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-400">Автокатегоризация завершена</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-600">↗</span>
          <span className="text-zinc-400">Баланс: 145 320 ₽</span>
        </div>
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-56 bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-800 rounded-full" />
        <div className="mt-6 px-3">
          <div className="text-[10px] text-emerald-400 mb-2">Сегодня</div>
          <div className="space-y-1.5">
            {["−459 ₽", "−280 ₽", "+45 000 ₽", "−1 200 ₽"].map((a, i) => (
              <div key={i} className={`h-6 rounded flex items-center px-2 text-[9px] ${a.startsWith("+") ? "bg-emerald-900/30 text-emerald-400" : "bg-zinc-800/50 text-zinc-400"}`}>
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function NotificationsMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/50 w-40">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="Bell" size={14} className="text-amber-400" />
          <span className="text-[10px] text-zinc-300">Внимание</span>
        </div>
        <p className="text-[9px] text-zinc-500">Лимит «Еда» — осталось 2 600 ₽ до конца месяца</p>
      </div>
    </div>
  )
}

function ExportMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex gap-3">
        <div className="w-12 h-14 rounded-lg bg-red-900/30 border border-red-800/30 flex flex-col items-center justify-center">
          <Icon name="FileText" size={16} className="text-red-400" />
          <span className="text-[8px] text-red-400 mt-1">PDF</span>
        </div>
        <div className="w-12 h-14 rounded-lg bg-emerald-900/30 border border-emerald-800/30 flex flex-col items-center justify-center">
          <Icon name="Table" size={16} className="text-emerald-400" />
          <span className="text-[8px] text-emerald-400 mt-1">XLSX</span>
        </div>
      </div>
    </div>
  )
}

function FamilyMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex -space-x-3">
        {["👨", "👩", "👦"].map((emoji, i) => (
          <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-lg">
            {emoji}
          </div>
        ))}
      </div>
    </div>
  )
}

function WidgetsMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-zinc-800/50 rounded-2xl p-3 border border-zinc-700/50 w-36">
        <div className="text-[10px] text-zinc-500 mb-1">Баланс</div>
        <div className="text-sm text-white font-bold">145 320 ₽</div>
        <div className="text-[9px] text-emerald-400 mt-1">+2 300 ₽ сегодня</div>
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "quick-add":
      return <QuickAddMockup />
    case "bank":
      return <BankMockup />
    case "mobile":
      return <MobileMockup />
    case "notifications":
      return <NotificationsMockup />
    case "export":
      return <ExportMockup />
    case "family":
      return <FamilyMockup />
    case "widgets":
      return <WidgetsMockup />
    default:
      return null
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1))
  }

  const scrollRight = () => {
    setScrollPosition(Math.min(carouselCards.length - 4, scrollPosition + 1))
  }

  return (
    <section className="relative py-24" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-zinc-400">Возможности и удобства</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Всё для удобного
              <br />
              управления деньгами
            </h2>
          </div>

          <div className="lg:max-w-sm lg:pt-12">
            <p className="text-zinc-400 text-base">
              Быстрый ввод расходов, синхронизация с банком, семейный доступ и виджеты для iOS —
              всё, чтобы финансы были под контролем.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${scrollPosition * 260}px)` }}
            >
              {carouselCards.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 w-[240px] bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors group cursor-pointer"
                >
                  <div className="h-[180px] relative overflow-hidden bg-zinc-900/80">
                    <CardMockup type={card.mockup} />
                  </div>

                  <div className="p-4">
                    <div className="text-xs text-emerald-400/70 mb-1.5">{card.category}</div>
                    <h3 className="text-sm text-zinc-200 font-medium leading-snug">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-8">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-zinc-500 hover:text-zinc-300 transition-colors disabled:opacity-30"
              disabled={scrollPosition === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-zinc-500 hover:text-zinc-300 transition-colors disabled:opacity-30"
              disabled={scrollPosition >= carouselCards.length - 4}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
