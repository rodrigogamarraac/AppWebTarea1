const $ = (sel, parent = document) => parent.querySelector(sel);
const $$ = (sel, parent = document) => [...parent.querySelectorAll(sel)];

(function initTheme() {
  const saved = localStorage.getItem("theme"); // "dark" | "light" | null
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initial = saved ?? (prefersDark ? "dark" : "light");
  document.documentElement.dataset.theme = initial;

  const btn = $("#themeToggle");
  if (!btn) return;

  const syncBtn = () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.textContent = isDark ? "Modo claro" : "Modo oscuro";
  };

  syncBtn();

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = isDark ? "light" : "dark";
    localStorage.setItem("theme", document.documentElement.dataset.theme);
    syncBtn();
  });
})();