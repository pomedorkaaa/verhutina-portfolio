/* ============================================================
   MAIN.JS — Система переходов между страницами (Framer-style)
   Включает: blur/scale/opacity page transitions,
   split-text word-by-word reveals, scroll-triggered reveals.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const isFromTransition = document.documentElement.classList.contains('page-entering');

  // Инициализируем функционал
  initNavbar();
  initMobileMenu();
  initFilters();
  initParallax();

  // Запускаем анимацию входа на страницу
  initPageEnter(isFromTransition);

  // Перехват ссылок для анимации выхода
  initPageTransitions();

  // Эффекты только на главной странице
  if (document.body.dataset.page === 'home') {
    initCursorTrail();
    initHeroScrollBlur();
  }
});


/* ============================================================
   АНИМАЦИЯ ВХОДА НА СТРАНИЦУ
   ============================================================ */

function initPageEnter(isFromTransition) {
  const pageContent = document.getElementById('page-content');
  const navbar = document.getElementById('navbar');

  if (!pageContent) return;

  // Подготовка: разбиваем тексты на слова
  splitAllTexts();

  const tl = gsap.timeline({
    onComplete: () => {
      document.documentElement.classList.add('page-ready');
      document.documentElement.classList.remove('page-entering');
      // Запускаем scroll-reveal для элементов ниже fold
      initScrollReveals();
    }
  });

  // Навбар появляется первым
  tl.fromTo(navbar,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
    0
  );

  // Основной контент — deblur + scale + fade in
  tl.fromTo(pageContent,
    { opacity: 0, scale: 1.02, filter: 'blur(8px)' },
    {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: 'power3.out',
    },
    isFromTransition ? 0.05 : 0.1
  );

  // Текстовые split-анимации (пословные) для элементов в зоне видимости
  const splitElements = document.querySelectorAll('[data-split-text]');
  splitElements.forEach((el, i) => {
    const words = el.querySelectorAll('.word');
    if (words.length === 0) return;

    // Проверяем, видим ли элемент в верхней части экрана (hero/первый экран)
    const rect = el.getBoundingClientRect();
    const isAboveFold = rect.top < window.innerHeight;

    if (isAboveFold) {
      tl.fromTo(words,
        { y: '110%' },
        {
          y: '0%',
          duration: 0.7,
          stagger: 0.04,
          ease: 'power3.out',
        },
        isFromTransition ? 0.3 : 0.4
      );
    }
  });

  // Reveal-анимации для элементов на первом экране (data-reveal-up)
  const heroReveals = [];
  document.querySelectorAll('[data-reveal-up]').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      heroReveals.push(el);
    }
  });

  if (heroReveals.length) {
    tl.fromTo(heroReveals,
      { y: 30, opacity: 0, filter: 'blur(4px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.7,
        stagger: 0.06,
        ease: 'power3.out',
        onComplete: function () {
          heroReveals.forEach(el => el.classList.add('revealed'));
        }
      },
      isFromTransition ? 0.25 : 0.35
    );
  }
}


/* ============================================================
   SPLIT TEXT — РАЗБИВКА ТЕКСТА НА СЛОВА
   ============================================================ */

function splitAllTexts() {
  document.querySelectorAll('[data-split-text]').forEach(el => {
    if (el.dataset.splitDone) return;

    const text = el.textContent.trim();
    const words = text.split(/\s+/);

    el.innerHTML = '';
    el.dataset.splitDone = 'true';

    words.forEach((word, i) => {
      const wrapper = document.createElement('span');
      wrapper.className = 'word-wrapper';

      const inner = document.createElement('span');
      inner.className = 'word';
      inner.textContent = word;

      wrapper.appendChild(inner);
      el.appendChild(wrapper);

      // Добавляем пробел после каждого слова, кроме последнего
      if (i < words.length - 1) {
        el.appendChild(document.createTextNode(' '));
      }
    });
  });
}


/* ============================================================
   АНИМАЦИЯ ПЕРЕХОДОВ МЕЖДУ СТРАНИЦАМИ (Exit)
   ============================================================ */

function initPageTransitions() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    const target = link.getAttribute('target');

    // Пропускаем внешние ссылки, якоря, mailto, tel
    if (!href ||
      href.startsWith('#') ||
      target === '_blank' ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('http') ||
      href.startsWith('//')) {
      return;
    }

    e.preventDefault();

    // Предотвращаем двойной клик
    if (document.documentElement.classList.contains('is-transitioning')) return;
    document.documentElement.classList.add('is-transitioning');

    const pageContent = document.getElementById('page-content');
    const navbar = document.getElementById('navbar');

    // Помечаем, что идёт переход
    sessionStorage.setItem('page-transitioning', 'true');

    const exitTl = gsap.timeline({
      onComplete: () => {
        window.location.href = href;
      }
    });

    // Контент уходит — blur, scale down, fade
    if (pageContent) {
      exitTl.to(pageContent, {
        opacity: 0,
        scale: 0.97,
        filter: 'blur(8px)',
        duration: 0.6,
        ease: 'power3.inOut',
      }, 0);
    }

    // Навбар плавно исчезает
    if (navbar) {
      exitTl.to(navbar, {
        opacity: 0,
        y: -15,
        duration: 0.4,
        ease: 'power3.inOut',
      }, 0);
    }
  });
}


/* ============================================================
   SCROLL-REVEAL АНИМАЦИИ
   ============================================================ */

function initScrollReveals() {
  const revealElements = document.querySelectorAll('[data-reveal-up]:not(.revealed)');

  revealElements.forEach(el => {
    gsap.fromTo(el,
      { y: 30, opacity: 0, filter: 'blur(4px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.7,
        ease: 'power3.out',
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
    const words = el.querySelectorAll('.word');
    if (words.length === 0) return;

    const rect = el.getBoundingClientRect();
    const isBelowFold = rect.top >= window.innerHeight;

    if (isBelowFold) {
      // Проверяем, что ещё не анимировано
      const firstWord = words[0];
      if (firstWord && firstWord.style.transform === 'translate(0px, 0%)') return;

      gsap.fromTo(words,
        { y: '110%' },
        {
          y: '0%',
          duration: 0.7,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
  });
}




/* ============================================================
   НАВИГАЦИЯ
   ============================================================ */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  ScrollTrigger.create({
    start: 'top -80',
    onEnter: () => navbar.classList.add('scrolled'),
    onLeaveBack: () => navbar.classList.remove('scrolled'),
  });
}


/* ============================================================
   МОБИЛЬНОЕ МЕНЮ
   ============================================================ */

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const close = document.getElementById('menu-close');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
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
    link.addEventListener('click', closeMenu);
  });
}


/* ============================================================
   ПАРАЛЛАКС
   ============================================================ */

function initParallax() {
  const aboutPhoto = document.querySelector('.photo-parallax');
  if (aboutPhoto) {
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
    gsap.fromTo(caseHero,
      { y: '-10%' },
      {
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: caseHero.closest('section'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      }
    );
  }
}


/* ============================================================
   ФИЛЬТРЫ КЕЙСОВ
   ============================================================ */

function initFilters() {
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
}


/* ============================================================
   CURSOR IMAGE TRAIL (Шлейф изображений за курсором в hero)
   ============================================================ */

function initCursorTrail() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Создаём контейнер для trail-изображений
  const container = document.createElement('div');
  container.id = 'cursor-trail-container';
  hero.appendChild(container);

  // Массив изображений для шлейфа (используем те же портфолио-изображения)
  const trailImages = [
    'assets/images/futurist.webp',
    'assets/images/tierra-viva.webp',
    'assets/images/casa-nomad.webp',
    'assets/images/alba.webp',
    'assets/images/verhutina.webp',
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
    spawnTrailImage(container, trailImages[imageIndex], x, y, dx);
    imageIndex = (imageIndex + 1) % trailImages.length;
  });

  hero.addEventListener('mouseleave', () => {
    isFirstMove = true;
  });
}

function spawnTrailImage(container, src, x, y, dx) {
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
  const rotation = (Math.random() - 0.5) * 16; // от -8 до +8 градусов

  container.appendChild(img);

  // Анимация появления
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
    // Задержка видимости
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
}


/* ============================================================
   HERO SCROLL BLUR (Размытие текста hero при скролле)
   ============================================================ */

function initHeroScrollBlur() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const heroText = hero.querySelector('.text-center');
  if (!heroText) return;

  // При скролле текст плавно размывается, исчезает и увеличивает паддинги
  gsap.to(heroText, {
    filter: 'blur(12px)',
    opacity: 0.0,
    scale: 0.6,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: '10% top',      // Начинаем когда hero наверху экрана
      end: 'bottom top',     // Заканчиваем когда hero полностью ушёл вверх
      scrub: 0.5,            // Плавная привязка к скроллу
    },
  });
}
