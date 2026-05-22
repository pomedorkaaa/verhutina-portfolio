/* ============================================================
   PAGE ENTER — Анимация входа на страницу
   ============================================================ */

window.PageEnter = {
  /**
   * Запускает анимацию входа на страницу: плавное появление контента,
   * навбара, split-text слов и reveal-up элементов.
   *
   * @param {boolean} isFromTransition - Был ли переход с другой страницы (AJAX)
   * @param {Document|HTMLElement} container - Контейнер для поиска элементов
   */
  init(isFromTransition, container) {
    if (!container) container = document;

    // Для поиска page-content проверяем, есть ли метод getElementById у контейнера
    const pageContent = container.getElementById
      ? container.getElementById('page-content')
      : container.querySelector('#page-content');
    const navbar = document.getElementById('navbar');

    if (!pageContent && container === document) return;

    // Подготовка: разбиваем тексты на слова
    window.SplitText.splitAll(container);

    const tl = gsap.timeline({
      onComplete: () => {
        if (container === document) {
          document.documentElement.classList.add('page-ready');
          document.documentElement.classList.remove('page-entering');

          // Запускаем scroll-reveal для элементов ниже fold
          window.ScrollReveal.init();
        }
      }
    });

    if (isFromTransition && container !== document) {
      gsap.set(pageContent, { opacity: 1, scale: 1, y: 0 });
    } else if (isFromTransition) {
      if (pageContent) gsap.set(pageContent, { opacity: 1, scale: 1, y: 0 });
    } else {
      // Обычная загрузка (первый визит) — плавный вход контента
      if (pageContent) {
        tl.fromTo(pageContent,
          { opacity: 0, y: 40, scale: 0.99 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out'
          },
          0.1
        );
      }
    }

    // Навбар плавно появляется сверху
    if (navbar && container === document) {
      tl.fromTo(navbar,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        isFromTransition ? 0.15 : 0
      );
    }

    // Текстовые split-анимации (пословные) для элементов в зоне видимости
    const splitElements = container.querySelectorAll('[data-split-text]');
    splitElements.forEach((el) => {
      const words = el.querySelectorAll('.word');
      if (words.length === 0) return;

      const isAboveFold = container !== document
        ? el.offsetTop < window.innerHeight
        : el.getBoundingClientRect().top < window.innerHeight;

      if (isAboveFold) {
        el.dataset.splitAnimated = 'true';
        tl.fromTo(words,
          { y: '110%' },
          {
            y: '0%',
            duration: 0.85,
            stagger: 0.04,
            ease: 'power4.out',
          },
          isFromTransition ? 0.15 : 0.3
        );
      }
    });

    // Reveal-анимации для элементов на первом экране (data-reveal-up)
    const heroReveals = [];
    container.querySelectorAll('[data-reveal-up]').forEach(el => {
      const isAboveFold = container !== document
        ? el.offsetTop < window.innerHeight
        : el.getBoundingClientRect().top < window.innerHeight;

      if (isAboveFold) {
        heroReveals.push(el);
      }
    });

    if (heroReveals.length) {
      heroReveals.forEach(el => {
        el.dataset.revealAnimated = 'true';
      });
      tl.fromTo(heroReveals,
        { y: 30, opacity: 0, filter: 'blur(4px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.85,
          stagger: 0.06,
          ease: 'power4.out',
          onComplete: function () {
            heroReveals.forEach(el => el.classList.add('revealed'));
          }
        },
        isFromTransition ? 0.15 : 0.25
      );
    }
  }
};
