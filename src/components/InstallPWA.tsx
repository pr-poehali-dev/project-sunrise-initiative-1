import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

type BIPEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function InstallPWA() {
  const [deferred, setDeferred] = useState<BIPEvent | null>(null)
  const [visible, setVisible] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem("pwa-install-dismissed")
    if (dismissed) return

    const ua = window.navigator.userAgent.toLowerCase()
    const iOS = /iphone|ipad|ipod/.test(ua) && !(window.navigator as unknown as { standalone?: boolean }).standalone
    setIsIOS(iOS)

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BIPEvent)
      setVisible(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    if (iOS) {
      setTimeout(() => setVisible(true), 3000)
    }

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferred) return
    await deferred.prompt()
    const res = await deferred.userChoice
    if (res.outcome === "accepted") {
      setVisible(false)
    }
    setDeferred(null)
  }

  const handleDismiss = () => {
    setVisible(false)
    localStorage.setItem("pwa-install-dismissed", "1")
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-[360px] z-50 bg-zinc-900/95 backdrop-blur border border-emerald-800/50 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
          <Icon name="Wallet" size={20} className="text-emerald-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-sm font-semibold mb-1">Установить Finflow</h3>
          {isIOS ? (
            <p className="text-zinc-400 text-xs leading-relaxed">
              Нажмите <Icon name="Share" size={12} className="inline" /> «Поделиться» → «На экран Домой»
            </p>
          ) : (
            <p className="text-zinc-400 text-xs leading-relaxed">
              Добавьте приложение на главный экран для быстрого доступа
            </p>
          )}
          {!isIOS && (
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleInstall}
                className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-medium rounded-md transition-colors"
              >
                Установить
              </button>
              <button
                onClick={handleDismiss}
                className="px-3 py-1.5 text-zinc-400 hover:text-zinc-200 text-xs transition-colors"
              >
                Позже
              </button>
            </div>
          )}
        </div>
        <button onClick={handleDismiss} className="text-zinc-500 hover:text-zinc-300 shrink-0">
          <Icon name="X" size={16} />
        </button>
      </div>
    </div>
  )
}
