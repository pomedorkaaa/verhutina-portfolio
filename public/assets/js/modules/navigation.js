/* ============================================================
   NAVIGATION — Навбар и мобильное меню
   ============================================================ */

window.Navigation = {
  /**
   * Инициализация автоскрытия/показа навбара при скролле.
   */
  initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    ScrollTrigger.create({
      start: 'top -80',
      onEnter: () => navbar.classList.add('scrolled'),
      onLeaveBack: () => navbar.classList.remove('scrolled'),
    });
  },

  /**
   * Инициализация мобильного меню: открытие/закрытие по кнопке,
   * закрытие при клике на ссылку.
   */
  initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const close = document.getElementById('menu-close');
    const menu = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;

    let isOpen = false;

    function openMenu() {
      isOpen = true;
      toggle.textContent = 'Закрыть';
      menu.classList.remove('opacity-0', 'pointer-events-none');
      menu.classList.add('opacity-100');
      document.body.style.overflow = 'hidden';
      gsap.fromTo('#mobile-menu a',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, delay: 0.1, ease: 'power3.out' }
      );
    }

    function closeMenu() {
      isOpen = false;
      toggle.textContent = 'Меню';
      menu.classList.add('opacity-0', 'pointer-events-none');
      menu.classList.remove('opacity-100');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
      if (isOpen) closeMenu();
      else openMenu();
    });

    if (close) close.addEventListener('click', closeMenu);

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('http') || link.getAttribute('target') === '_blank') {
          closeMenu();
        } else {
          // Для внутренних AJAX-переходов не закрываем меню мгновенно
          isOpen = false;
          document.body.style.overflow = '';
        }
      });
    });
  }
};
