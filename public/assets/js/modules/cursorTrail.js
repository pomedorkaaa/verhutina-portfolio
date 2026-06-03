/* ============================================================
   CURSOR TRAIL — Шлейф изображений за курсором + Hero Scroll Blur
   ============================================================ */

window.CursorTrail = {
  /**
   * Инициализация шлейфа изображений за курсором в hero-секции.
   * Только для главной страницы.
   */
  init() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Создаём контейнер для trail-изображений
    const container = document.createElement('div');
    container.id = 'cursor-trail-container';
    hero.appendChild(container);

    // Массив изображений для шлейфа
    const trailImages = [
      'assets/images/trail/IMG_0933.webp',
      'assets/images/trail/IMG_0937.webp',
      'assets/images/trail/IMG_0941.webp',
      'assets/images/trail/IMG_2989.webp',
      'assets/images/trail/IMG_7781.webp',
      'assets/images/trail/IMG_0942.webp',
      'assets/images/trail/IMG_9079.webp',
      'assets/images/trail/IMG_9370.webp',
    ];

    // Предзагрузка изображений
    trailImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    let imageIndex = 0;
    let lastX = 0;
    let lastY = 0;
    const minDistance = 160; // Минимальное расстояние между изображениями (в пикселях)
    let isFirstMove = true;

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Первое движение — запоминаем позицию
      if (isFirstMove) {
        lastX = x;
        lastY = y;
        isFirstMove = false;
        return;
      }

      // Считаем расстояние от последнего изображения
      const dx = x - lastX;
      const dy = y - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < minDistance) return;

      lastX = x;
      lastY = y;

      // Создаём изображение
      this._spawnImage(container, trailImages[imageIndex], x, y, dx);
      imageIndex = (imageIndex + 1) % trailImages.length;
    });

    hero.addEventListener('mouseleave', () => {
      isFirstMove = true;
    });
  },

  /**
   * Создаёт и анимирует одно trail-изображение.
   */
  _spawnImage(container, src, x, y, dx) {
    const img = document.createElement('img');
    img.className = 'cursor-trail-image';
    img.src = src;
    img.alt = '';

    // Центрируем изображение на курсоре
    const width = 180;
    const height = 240;
    img.style.left = (x - width / 2) + 'px';
    img.style.top = (y - height / 2) + 'px';

    // Небольшой случайный поворот для естественности
    const rotation = (Math.random() - 0.5) * 16;

    container.appendChild(img);

    // Анимация появления и исчезновения
    gsap.timeline()
      .fromTo(img,
        {
          opacity: 0,
          scale: 0.5,
          rotation: rotation - 5,
        },
        {
          opacity: 0.9,
          scale: 1,
          rotation: rotation,
          duration: 0.35,
          ease: 'power2.out',
        }
      )
      .to(img, {
        opacity: 0,
        scale: 0.85,
        rotation: rotation + 3,
        duration: 0.6,
        ease: 'power2.in',
        delay: 0.3,
        onComplete: () => {
          img.remove();
        }
      });
  },

  /**
   * Инициализация размытия текста hero при скролле.
   * Только для главной страницы.
   */
  initHeroScrollBlur() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const heroText = hero.querySelector('.text-center');
    if (!heroText) return;

    gsap.to(heroText, {
      filter: 'blur(12px)',
      opacity: 0.0,
      scale: 0.6,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: '10% top',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  }
};
