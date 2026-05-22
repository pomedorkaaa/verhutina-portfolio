/* ============================================================
   MAIN.JS — Точка входа.
   Подключает все модули и запускает инициализацию.
   
   Порядок подключения модулей (в Layout.jsx):
   1. gsap.min.js, ScrollTrigger.min.js, lenis.min.js (вендоры)
   2. smoothScroll.js    — Lenis
   3. splitText.js       — Разбивка текста на слова
   4. scrollReveal.js    — Scroll-triggered анимации
   5. pageEnter.js       — Анимация входа (зависит от splitText, scrollReveal)
   6. navigation.js      — Навбар + мобильное меню
   7. effects.js         — Параллакс, фильтры, видеоплееры
   8. cursorTrail.js     — Шлейф за курсором + hero blur
   9. pageTransitions.js — AJAX-переходы (зависит от всех)
   10. main.js           — Точка входа (этот файл)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Отключаем автоматическое восстановление скролла браузером
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  gsap.registerPlugin(ScrollTrigger);

  // Инициализация Lenis (Smooth Scroll)
  window.SmoothScroll.init();

  const isFromTransition = document.documentElement.classList.contains('page-entering');

  // Инициализируем функционал
  window.Navigation.initNavbar();
  window.Navigation.initMobileMenu();
  window.Effects.initFilters();
  window.Effects.initParallax();
  window.Effects.initVideoPlayers();

  // Запускаем анимацию входа на страницу
  window.PageEnter.init(isFromTransition);

  // Перехват ссылок для анимации выхода
  window.PageTransitions.init();

  // Эффекты только на главной странице
  if (document.body.dataset.page === 'home') {
    window.CursorTrail.init();
    window.CursorTrail.initHeroScrollBlur();
  }
});
