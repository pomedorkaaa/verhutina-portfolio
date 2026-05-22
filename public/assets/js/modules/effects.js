/* ============================================================
   EFFECTS — Параллакс, фильтры кейсов, видеоплееры
   ============================================================ */

window.Effects = {
  /**
   * Инициализация параллакс-эффектов для фото и героя кейса.
   */
  initParallax() {
    const aboutPhoto = document.querySelector('.photo-parallax');
    if (aboutPhoto) {
      gsap.set(aboutPhoto, { y: '-8%' });
      gsap.fromTo(aboutPhoto,
        { y: '-8%' },
        {
          y: '8%',
          ease: 'none',
          scrollTrigger: {
            trigger: aboutPhoto.closest('.about-photo'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    }

    const caseHero = document.querySelector('.case-hero-parallax');
    if (caseHero) {
      gsap.set(caseHero, { y: '0%' });
      gsap.fromTo(caseHero,
        { y: '0%' },
        {
          y: '15%',
          ease: 'none',
          scrollTrigger: {
            trigger: caseHero.closest('section'),
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    }
  },

  /**
   * Инициализация фильтрации карточек кейсов с GSAP-анимацией.
   */
  initFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = () => document.querySelectorAll('[data-case-card][data-tags]');
    if (!btns.length) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => {
          b.classList.remove('active');
          b.style.color = '#a6a6a6';
          b.style.borderBottomColor = 'transparent';
        });
        btn.classList.add('active');
        btn.style.color = 'rgba(255,255,255,0.8)';
        btn.style.borderBottomColor = 'rgba(255,255,255,0.3)';

        const filter = btn.dataset.filter;

        cards().forEach(card => {
          const tags = (card.dataset.tags || '').split(',');
          const show = filter === 'all' || tags.includes(filter);

          gsap.to(card, {
            opacity: show ? 1 : 0.15,
            scale: show ? 1 : 0.97,
            duration: 0.4,
            ease: 'power2.out',
            pointerEvents: show ? 'auto' : 'none',
          });
        });
      });
    });
  },

  /**
   * Инициализация интерактивных видеоплееров с управлением звуком.
   */
  initVideoPlayers() {
    const containers = document.querySelectorAll('.video-player-container');
    containers.forEach(container => {
      const video = container.querySelector('video');
      const muteBtn = container.querySelector('.video-mute-btn');
      if (!video || !muteBtn) return;

      const muteIcon = muteBtn.querySelector('.mute-icon');
      const soundIcon = muteBtn.querySelector('.sound-icon');

      // Настраиваем начальное состояние
      if (video.muted) {
        muteIcon.classList.remove('hidden');
        soundIcon.classList.add('hidden');
      } else {
        muteIcon.classList.add('hidden');
        soundIcon.classList.remove('hidden');
      }

      const toggleMute = (e) => {
        e.preventDefault();
        e.stopPropagation();

        video.muted = !video.muted;

        if (video.muted) {
          muteIcon.classList.remove('hidden');
          soundIcon.classList.add('hidden');
          muteBtn.setAttribute('aria-label', 'Включить звук');
          muteBtn.setAttribute('title', 'Включить звук');
        } else {
          muteIcon.classList.add('hidden');
          soundIcon.classList.remove('hidden');
          muteBtn.setAttribute('aria-label', 'Выключить звук');
          muteBtn.setAttribute('title', 'Выключить звук');
        }
      };

      muteBtn.addEventListener('click', toggleMute);
      video.addEventListener('click', toggleMute);
    });
  }
};
