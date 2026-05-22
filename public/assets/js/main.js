/* ============================================================
   MAIN.JS — Система переходов между страницами (Framer-style)
   Включает: blur/scale/opacity page transitions,
   split-text word-by-word reveals, scroll-triggered reveals.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Отключаем автоматическое восстановление скролла браузером
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  gsap.registerPlugin(ScrollTrigger);

  // Инициализация Lenis (Smooth Scroll)
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    window.lenis = lenis;
  }

  const isFromTransition = document.documentElement.classList.contains('page-entering');

  // Инициализируем функционал
  initNavbar();
  initMobileMenu();
  initFilters();
  initParallax();
  initVideoPlayers();

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

function initPageEnter(isFromTransition, container = document) {
  // Для поиска page-content проверяем, есть ли метод querySelector у переданного контейнера
  const pageContent = container.getElementById ? container.getElementById('page-content') : container.querySelector('#page-content');
  const navbar = document.getElementById('navbar');

  if (!pageContent && container === document) return;

  // Подготовка: разбиваем тексты на слова в рамках контейнера
  splitAllTexts(container);

  const tl = gsap.timeline({
    onComplete: () => {
      if (container === document) {
        document.documentElement.classList.add('page-ready');
        document.documentElement.classList.remove('page-entering');
        
        // Запускаем scroll-reveal для элементов ниже fold
        initScrollReveals();
      }
    }
  });

  if (isFromTransition && container !== document) {
    // Если анимируем элементы внутри временного контейнера наезда,
    // сам контейнер pageContent не анимируем здесь (он анимируется в loadPage)
    // Но мы сбрасываем его начальные стили для готовности
    gsap.set(pageContent, { opacity: 1, scale: 1, y: 0 });
  } else if (isFromTransition) {
    if (pageContent) gsap.set(pageContent, { opacity: 1, scale: 1, y: 0 });
  } else {
    // Обычная загрузка (первый визит) — просто плавный вход контента
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

    // Во временном контейнере анимируем все текстовые элементы над сгибом
    // Если это временный контейнер, проверяем позицию относительно его верха (offsetTop)
    // Если основной документ — через getBoundingClientRect().top
    const isAboveFold = container !== document 
      ? el.offsetTop < window.innerHeight 
      : el.getBoundingClientRect().top < window.innerHeight;

    if (isAboveFold) {
      // Помечаем элемент как уже запустивший анимацию
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
    // Сразу помечаем их как анимированные, чтобы предотвратить повторный запуск в initScrollReveals
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


/* ============================================================
   SPLIT TEXT — РАЗБИВКА ТЕКСТА НА СЛОВА
   ============================================================ */

function splitAllTexts(container = document) {
  container.querySelectorAll('[data-split-text]').forEach(el => {
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
      // Пробелы между словами реализуются через CSS margin-right у .word-wrapper
    });
  });
}


/* ============================================================
   АНИМАЦИЯ ПЕРЕХОДОВ МЕЖДУ СТРАНИЦАМИ (AJAX-наезжание в стиле Framer)
   ============================================================ */

function initPageTransitions() {
  // Обработка перехода по истории браузера (кнопки Назад/Вперед)
  window.addEventListener('popstate', () => {
    loadPage(window.location.pathname, false);
  });

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

    // Загружаем страницу через AJAX
    loadPage(href, true);
  });
}

async function loadPage(href, pushState = true) {
  document.documentElement.classList.add('is-transitioning');
  document.documentElement.classList.remove('page-ready');

  // Останавливаем плавный скроллинг во время перехода
  if (window.lenis) {
    window.lenis.stop();
  }

  // Убиваем все активные GSAP-анимации на элементах, которые участвуют в переходе,
  // чтобы незавершённые tweens от initPageEnter не блокировали таймлайн наезда
  const oldPageContent = document.getElementById('page-content');
  const oldNavbarEl = document.getElementById('navbar');
  if (oldPageContent) gsap.killTweensOf(oldPageContent);
  if (oldNavbarEl) gsap.killTweensOf(oldNavbarEl);
  // Убиваем все анимации на элементах внутри page-content (split-text слова, reveal-up и т.д.)
  document.querySelectorAll('#page-content *').forEach(el => gsap.killTweensOf(el));
  ScrollTrigger.getAll().forEach(t => t.kill());

  try {
    // 1. Асинхронно запрашиваем новую страницу
    const response = await fetch(href);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const html = await response.text();

    // Очищаем HTML от тегов link и script, чтобы избежать повторного запроса/проверки шрифтов и стилей в браузере при парсинге
    const cleanHtml = html
      .replace(/<link\b[^>]*>/gi, '')
      .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, '');

    // 2. Парсим полученный HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(cleanHtml, 'text/html');

    const newContent = doc.getElementById('page-content');
    if (!newContent) {
      // Если на странице нет #page-content, делаем обычный переход
      window.location.href = href;
      return;
    }

    const oldContent = document.getElementById('page-content');
    const oldNavbar = document.getElementById('navbar');
    const newNavbar = doc.getElementById('navbar');

    // Переименовываем старый навбар перед анимацией наезда, чтобы к новому навбару во временном контейнере
    // применились все стили #navbar
    if (oldNavbar) {
      oldNavbar.id = 'navbar-old';
    }

    // 3. Создаем временный контейнер для наезжания новой страницы
    const transitionContainer = document.createElement('div');
    transitionContainer.className = 'page-transition-container';

    // Внедряем новый хедер во временный контейнер, чтобы он наезжал вместе со страницей
    if (newNavbar) {
      const navbarClone = newNavbar.cloneNode(true);
      // Принудительно делаем клон видимым (в CSS #navbar начинает с opacity: 0)
      navbarClone.style.opacity = '1';
      navbarClone.style.transform = 'translateY(0)';
      transitionContainer.appendChild(navbarClone);
    }

    // Внедряем контент новой страницы во временный контейнер под ID page-content, 
    // чтобы его элементы без проблем искались в initPageEnter
    const pageContentWrapper = document.createElement('div');
    pageContentWrapper.id = 'page-content';
    pageContentWrapper.innerHTML = newContent.innerHTML;
    transitionContainer.appendChild(pageContentWrapper);

    document.body.appendChild(transitionContainer);

    // Запускаем анимацию появления внутренних элементов НОВОЙ страницы во временном контейнере
    initPageEnter(true, transitionContainer);

    // 4. Настраиваем GSAP-таймлайн для перехода
    const tl = gsap.timeline({
      onComplete: () => {
        // Мгновенно скроллим основное окно наверх, пока оно скрыто наезжающей страницей
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);

        // Очищаем память скролла ScrollTrigger, чтобы он не пытался восстановить позиции
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.clearScrollMemory();
        }
        if (oldContent) {
          // Фиксируем высоту, чтобы избежать мгновенного исчезновения скроллбара и прыжка контента
          const currentHeight = oldContent.offsetHeight;
          oldContent.style.height = `${currentHeight}px`;

          // Берём контент из pageContentWrapper — он уже прошёл splitAllTexts и анимации
          oldContent.innerHTML = '';
          while (pageContentWrapper.firstChild) {
            oldContent.appendChild(pageContentWrapper.firstChild);
          }
          
          // Сбрасываем стили старого контента
          oldContent.style.height = '';
          gsap.set(oldContent, { opacity: 1, scale: 1, y: 0 });
        }

        // Заменяем старый навбар на новый на его постоянное место
        const currentOldNavbar = document.getElementById('navbar-old');
        const finalNavbar = newNavbar ? newNavbar.cloneNode(true) : null;
        if (finalNavbar) {
          // Принудительно устанавливаем видимость нового навбара
          finalNavbar.style.opacity = '1';
          finalNavbar.style.transform = 'translateY(0)';
        }
        if (currentOldNavbar && finalNavbar) {
          currentOldNavbar.replaceWith(finalNavbar);
        } else if (finalNavbar) {
          document.body.insertBefore(finalNavbar, oldContent);
        }

        // Обновляем метаданные и заголовок
        document.title = doc.title;
        if (doc.body.dataset.page) {
          document.body.dataset.page = doc.body.dataset.page;
        } else {
          delete document.body.dataset.page;
        }

        // Обновляем URL в строке адреса
        if (pushState) {
          history.pushState(null, '', href);
        }

        // Подсвечиваем активные элементы меню
        updateActiveHeaderLinks(window.location.pathname);

        // Ре-инициализируем все JS скрипты через requestAnimationFrame,
        // чтобы дать браузеру один кадр на отрисовку нового DOM-дерева
        requestAnimationFrame(() => {
          reinitScripts();

          // Перед удалением сбрасываем скролл контейнера
          transitionContainer.scrollTop = 0;
          // Удаляем временный контейнер только после того, как основной контент готов и анимирован
          transitionContainer.remove();

          // Убираем класс перехода и добавляем готовность
          document.documentElement.classList.remove('is-transitioning');
          document.documentElement.classList.add('page-ready');

          // Повторно принудительно сбрасываем скролл окна, гася инерцию скролла в браузере
          window.scrollTo(0, 0);

          // Возобновляем скроллинг
          if (window.lenis) {
            window.lenis.resize();
            window.lenis.scrollTo(0, { immediate: true });
            window.lenis.start();
          }
        });
      }
    });

    // Анимация: временный контейнер наезжает снизу вверх
    tl.fromTo(transitionContainer,
      { y: '100vh' },
      { y: '0vh', duration: 1.1, ease: 'power4.inOut' },
      0
    );

    // Старый контент плавно уходит вверх, уменьшается и блекнет под новой страницей
    if (oldContent) {
      tl.fromTo(oldContent,
        { scale: 1, opacity: 1, y: 0 },
        { scale: 0.95, opacity: 0.2, y: -50, duration: 1.1, ease: 'power4.inOut' },
        0
      );
    }

    // Старый навбар плавно затухает, уступая место новому наезжающему навбару
    if (oldNavbar) {
      tl.fromTo(oldNavbar,
        { opacity: 1 },
        { opacity: 0, duration: 0.4, ease: 'power2.inOut' },
        0
      );
    }

  } catch (error) {
    console.error('Ошибка перехода страницы:', error);
    // Восстанавливаем ID старого навбара в случае ошибки
    const currentOldNavbar = document.getElementById('navbar-old');
    if (currentOldNavbar) {
      currentOldNavbar.id = 'navbar';
    }
    // В случае ошибки с переходом, просто загружаем страницу стандартно
    window.location.href = href;
  }
}

function updateActiveHeaderLinks(pathname) {
  // Обрабатываем только nav-link элементы, исключая лого (nav-logo)
  const navLinks = document.querySelectorAll('#navbar .nav-link, #mobile-menu a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    let isActive = false;
    if (href === '/') {
      isActive = pathname === '/' || pathname === '/index.html';
    } else {
      isActive = pathname.startsWith(href);
    }
    
    if (isActive) {
      link.classList.remove('text-primary/50', 'hover:text-primary', 'hover:text-primary/70');
      link.classList.add('text-primary');
    } else {
      link.classList.remove('text-primary');
      link.classList.add('text-primary/50', 'hover:text-primary');
    }
  });
}

function reinitScripts() {
  // Убиваем оставшиеся ScrollTrigger инстансы
  ScrollTrigger.getAll().forEach(t => t.kill());

  // Сбрасываем overflow body, на случай если переход был из открытого мобильного меню
  document.body.style.overflow = '';

  // Заново привязываем листенеры и триггеры
  initNavbar();
  initMobileMenu(); 
  initFilters();
  initParallax();
  initVideoPlayers();

  // Запускаем scroll-reveal для элементов ниже fold
  initScrollReveals();

  // Инициализация скриптов главной страницы
  if (document.body.dataset.page === 'home') {
    initCursorTrail();
    initHeroScrollBlur();
  }

  // Обновляем размеры Lenis и ScrollTrigger под новую страницу
  if (window.lenis) {
    window.lenis.resize();
  }
  
  // Принудительное обновление всех триггеров после реинициализации
  ScrollTrigger.refresh();
}


/* ============================================================
   SCROLL-REVEAL АНИМАЦИИ
   ============================================================ */

function initScrollReveals() {
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
      // Если ссылка внешняя или якорь на текущей странице, закрываем меню сразу
      if (!href || href.startsWith('#') || href.startsWith('http') || link.getAttribute('target') === '_blank') {
        closeMenu();
      } else {
        // Для внутренних AJAX-переходов не закрываем меню мгновенно, чтобы избежать моргания.
        // Оно перекроется новой страницей, а состояние сбросится при замене навбара.
        isOpen = false;
        document.body.style.overflow = '';
      }
    });
  });
}


/* ============================================================
   ПАРАЛЛАКС
   ============================================================ */

function initParallax() {
  const aboutPhoto = document.querySelector('.photo-parallax');
  if (aboutPhoto) {
    // Для фото в секции "Обо мне" оставляем старт при появлении снизу
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
    // ВАЖНО: Для героя кейса ставим y: 0 в начале, чтобы не было прыжка после перехода.
    // Параллакс начнется, когда пользователь начнет скроллить вниз от 0.
    gsap.set(caseHero, { y: '0%' });
    gsap.fromTo(caseHero,
      { y: '0%' },
      {
        y: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: caseHero.closest('section'),
          start: 'top top', // Начинаем от самого верха
          end: 'bottom top',
          scrub: 1.5,
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

  // Массив изображений для шлейфа (.webp из папки trail)
  const trailImages = [
    'assets/images/trail/IMG_0933.webp',
    'assets/images/trail/IMG_0938.webp',
    'assets/images/trail/IMG_0941.webp',
    'assets/images/trail/IMG_2989.webp',
    'assets/images/trail/IMG_7781.webp',
    'assets/images/trail/IMG_7782.webp',
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


/* ============================================================
   VIDEO PLAYERS (Интерактивные видеоплееры с управлением звуком)
   ============================================================ */

function initVideoPlayers() {
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

    // При клике на кнопку или на само видео переключаем звук
    muteBtn.addEventListener('click', toggleMute);
    video.addEventListener('click', toggleMute);
  });
}
