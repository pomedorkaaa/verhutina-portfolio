/* ============================================================
   CHECK UPDATES
   ============================================================ */
async function checkLibraryUpdates() {
  const currentVersion = '3.12.5';
  
  try {
    const response = await fetch('https://api.cdnjs.com/libraries/gsap?fields=version');
    const data = await response.json();
    
    if (data.version && data.version !== currentVersion) {
      console.warn(`🚀 Доступно обновление GSAP & ScrollTrigger! Текущая версия: ${currentVersion}, Новая версия: ${data.version}`);
    } else {
      console.log(`✅ GSAP & ScrollTrigger актуальны (версия ${currentVersion})`);
    }
  } catch (err) {
    console.error('Не удалось проверить обновления библиотек:', err);
  }
}

// Запускаем асинхронно, чтобы не блокировать загрузку страницы
setTimeout(checkLibraryUpdates, 2000);
