/* ============================================================
   SCROLL REVEAL — Анимации появления элементов при скролле
   ============================================================ */

window.ScrollReveal = {
  /**
   * Инициализирует scroll-reveal анимации для элементов ниже fold.
   * Элементы с data-reveal-up появляются при скролле.
   * Элементы с data-split-text, не попавшие в initPageEnter, анимируются по scroll.
   */
  init() {
    const revealElements = document.querySelectorAll('[data-reveal-up]:not(.revealed):not([data-reveal-animated])');

    revealElements.forEach(el => {
      // Помечаем, чтобы не анимировать повторно
      el.dataset.revealAnimated = 'true';
      gsap.fromTo(el,
        { y: 30, opacity: 0, filter: 'blur(4px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          onComplete: function () {
            el.classList.add('revealed');
          }
        }
      );
    });

    // Split-text элементы ниже fold — анимируются по scroll
    document.querySelectorAll('[data-split-text]').forEach(el => {
      // Пропускаем уже проанимированные элементы
      if (el.dataset.splitAnimated) return;

      const words = el.querySelectorAll('.word');
      if (words.length === 0) return;

      // Помечаем как запланированный для анимации
      el.dataset.splitAnimated = 'true';

      gsap.fromTo(words,
        { y: '110%' },
        {
          y: '0%',
          duration: 0.85,
          stagger: 0.04,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }
};
