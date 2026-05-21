const SLIDE_MS = 300;

export function showToast(id: string, duration = 5000) {
  const el = document.getElementById(id);
  if (!el) return;

  clearTimeout(Number(el.dataset.timer));
  el.classList.remove("hidden");

  requestAnimationFrame(() => {
    el.classList.remove("translate-x-full");
    el.classList.add("translate-x-0");
  });

  const bar = el.querySelector<HTMLElement>("[data-bar]");
  if (bar) {
    bar.style.transition = "none";
    bar.style.width = "100%";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = `width ${duration}ms linear`;
        bar.style.width = "0%";
      });
    });
  }

  el.dataset.timer = String(window.setTimeout(() => hideToast(id), duration));
}

export function hideToast(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  clearTimeout(Number(el.dataset.timer));
  el.classList.remove("translate-x-0");
  el.classList.add("translate-x-full");

  setTimeout(() => el.classList.add("hidden"), SLIDE_MS);
}
