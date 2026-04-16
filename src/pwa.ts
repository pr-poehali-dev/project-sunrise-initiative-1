export function registerServiceWorker() {
  if (typeof window === 'undefined') return;
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .catch(() => {});
  });
}

export function setupInstallPrompt(onAvailable: (prompt: () => Promise<void>) => void) {
  if (typeof window === 'undefined') return;

  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    const evt = e as Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };
    onAvailable(async () => {
      await evt.prompt();
      await evt.userChoice;
    });
  });
}
