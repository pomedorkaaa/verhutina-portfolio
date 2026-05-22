/* ============================================================
   SPLIT TEXT — Разбивка текста на слова для пословной анимации
   ============================================================ */

window.SplitText = {
  /**
   * Разбивает все элементы с атрибутом [data-split-text] на отдельные слова.
   * Каждое слово оборачивается в .word-wrapper > .word для анимации.
   *
   * @param {Document|HTMLElement} container - Контейнер для поиска элементов
   */
  splitAll(container) {
    if (!container) container = document;
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
};
