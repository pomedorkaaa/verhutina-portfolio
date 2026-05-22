/* ============================================================
   PAGE TRANSITIONS — AJAX-переходы между страницами (Framer-style)
   ============================================================ */

window.PageTransitions = {
  /**
   * Перехватывает клики по внутренним ссылкам и навигацию по истории браузера
   * для AJAX-переходов с анимацией наезжания.
   */
  init() {
    // Обработка перехода по истории браузера (кнопки Назад/Вперед)
    window.addEventListener('popstate', () => {
      this.loadPage(window.location.pathname, false);
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
      this.loadPage(href, true);
    });
  },

  /**
   * Загружает новую страницу через AJAX с анимацией наезжания.
   *
   * @param {string} href - URL страницы
   * @param {boolean} pushState - Нужно ли обновлять историю браузера
   */
  async loadPage(href, pushState) {
    document.documentElement.classList.add('is-transitioning');
    document.documentElement.classList.remove('page-ready');

    document.body.style.overflow = '';

    // Останавливаем плавный скроллинг
    if (window.lenis) {
      window.lenis.stop();
    }

    // Убиваем все активные GSAP-анимации
    const oldPageContent = document.getElementById('page-content');
    const oldNavbarEl = document.getElementById('navbar');
    if (oldPageContent) gsap.killTweensOf(oldPageContent);
    if (oldNavbarEl) gsap.killTweensOf(oldNavbarEl);
    document.querySelectorAll('#page-content *').forEach(el => gsap.killTweensOf(el));
    ScrollTrigger.getAll().forEach(t => t.kill());

    try {
      // 1. Запрашиваем новую страницу
      const response = await fetch(href);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const html = await response.text();

      // Очищаем HTML от тегов link и script
      const cleanHtml = html
        .replace(/<link\b[^>]*>/gi, '')
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

      // 2. Парсим полученный HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(cleanHtml, 'text/html');

      const newContent = doc.getElementById('page-content');
      if (!newContent) {
        window.location.href = href;
        return;
      }

      const oldContent = document.getElementById('page-content');
      const oldNavbar = document.getElementById('navbar');
      const newNavbar = doc.getElementById('navbar');

      // Переименовываем старый навбар
      if (oldNavbar) {
        oldNavbar.id = 'navbar-old';
      }

      // 3. Создаем временный контейнер для наезжания
      const transitionContainer = document.createElement('div');
      transitionContainer.className = 'page-transition-container';

      if (newNavbar) {
        const navbarClone = newNavbar.cloneNode(true);
        navbarClone.style.opacity = '1';
        navbarClone.style.transform = 'translateY(0)';
        transitionContainer.appendChild(navbarClone);
      }

      const pageContentWrapper = document.createElement('div');
      pageContentWrapper.id = 'page-content';
      pageContentWrapper.innerHTML = newContent.innerHTML;
      transitionContainer.appendChild(pageContentWrapper);

      document.body.appendChild(transitionContainer);

      // Запускаем анимацию появления элементов НОВОЙ страницы
      window.PageEnter.init(true, transitionContainer);

      // 4. GSAP-таймлайн для перехода
      const tl = gsap.timeline({
        onComplete: () => {
          // Скроллим наверх
          if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
          }
          window.scrollTo(0, 0);

          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.clearScrollMemory();
          }

          if (oldContent) {
            const currentHeight = oldContent.offsetHeight;
            oldContent.style.height = `${currentHeight}px`;

            oldContent.innerHTML = '';
            while (pageContentWrapper.firstChild) {
              oldContent.appendChild(pageContentWrapper.firstChild);
            }

            oldContent.style.height = '';
            gsap.set(oldContent, { opacity: 1, scale: 1, y: 0 });
          }

          // Заменяем навбар
          const currentOldNavbar = document.getElementById('navbar-old');
          const finalNavbar = newNavbar ? newNavbar.cloneNode(true) : null;
          if (finalNavbar) {
            finalNavbar.style.opacity = '1';
            finalNavbar.style.transform = 'translateY(0)';
          }
          if (currentOldNavbar && finalNavbar) {
            currentOldNavbar.replaceWith(finalNavbar);
          } else if (finalNavbar) {
            document.body.insertBefore(finalNavbar, oldContent);
          }

          // Заменяем мобильное меню
          const currentOldMobileMenu = document.getElementById('mobile-menu');
          const newMobileMenu = doc.getElementById('mobile-menu');
          const finalMobileMenu = newMobileMenu ? newMobileMenu.cloneNode(true) : null;

          if (currentOldMobileMenu) {
            currentOldMobileMenu.style.transition = 'none';
            currentOldMobileMenu.classList.add('opacity-0', 'pointer-events-none');
            currentOldMobileMenu.classList.remove('opacity-100');
            void currentOldMobileMenu.offsetHeight;
          }

          if (finalMobileMenu) {
            finalMobileMenu.style.transition = 'none';
            finalMobileMenu.classList.add('opacity-0', 'pointer-events-none');
            finalMobileMenu.classList.remove('opacity-100');
            void finalMobileMenu.offsetHeight;
            finalMobileMenu.style.transition = '';
          }

          if (currentOldMobileMenu && finalMobileMenu) {
            currentOldMobileMenu.replaceWith(finalMobileMenu);
          } else if (finalMobileMenu) {
            document.body.insertBefore(finalMobileMenu, oldContent);
          }

          // Обновляем метаданные
          document.title = doc.title;
          if (doc.body.dataset.page) {
            document.body.dataset.page = doc.body.dataset.page;
          } else {
            delete document.body.dataset.page;
          }

          if (pushState) {
            history.pushState(null, '', href);
          }

          this._updateActiveLinks(window.location.pathname);

          // Ре-инициализация скриптов
          requestAnimationFrame(() => {
            this._reinitScripts();

            transitionContainer.scrollTop = 0;
            transitionContainer.remove();

            document.documentElement.classList.remove('is-transitioning');
            document.documentElement.classList.add('page-ready');

            window.scrollTo(0, 0);

            if (window.lenis) {
              window.lenis.resize();
              window.lenis.scrollTo(0, { immediate: true });
              window.lenis.start();
            }
          });
        }
      });

      // Анимация: контейнер наезжает снизу вверх
      tl.fromTo(transitionContainer,
        { y: '100vh' },
        { y: '0vh', duration: 1.1, ease: 'power4.inOut' },
        0
      );

      // Старый контент уходит
      if (oldContent) {
        tl.fromTo(oldContent,
          { scale: 1, opacity: 1, y: 0 },
          { scale: 0.95, opacity: 0.2, y: -50, duration: 1.1, ease: 'power4.inOut' },
          0
        );
      }

      // Старый навбар затухает
      if (oldNavbar) {
        tl.fromTo(oldNavbar,
          { opacity: 1 },
          { opacity: 0, duration: 0.4, ease: 'power2.inOut' },
          0
        );
      }

    } catch (error) {
      console.error('Ошибка перехода страницы:', error);
      const currentOldNavbar = document.getElementById('navbar-old');
      if (currentOldNavbar) {
        currentOldNavbar.id = 'navbar';
      }
      window.location.href = href;
    }
  },

  /**
   * Обновляет подсветку активных ссылок навигации.
   */
  _updateActiveLinks(pathname) {
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
  },

  /**
   * Ре-инициализация всех JS-скриптов после AJAX-перехода.
   */
  _reinitScripts() {
    ScrollTrigger.getAll().forEach(t => t.kill());

    document.body.style.overflow = '';

    // Заново инициализируем все модули
    window.Navigation.initNavbar();
    window.Navigation.initMobileMenu();
    window.Effects.initFilters();
    window.Effects.initParallax();
    window.Effects.initVideoPlayers();
    window.ScrollReveal.init();

    // Главная страница
    if (document.body.dataset.page === 'home') {
      window.CursorTrail.init();
      window.CursorTrail.initHeroScrollBlur();
    }

    if (window.lenis) {
      window.lenis.resize();
    }

    ScrollTrigger.refresh();
  }
};
