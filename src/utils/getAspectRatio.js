/**
 * Определяет соотношение сторон (aspect ratio) медиа-файла.
 * Выполняется ТОЛЬКО на этапе сборки (build time) в Node.js.
 *
 * Стратегия определения:
 * 1. Через mdls (macOS-утилиту для чтения метаданных файлов)
 * 2. Фолбек через sharp (Node.js библиотека обработки изображений)
 * 3. Если ничего не сработало — возвращает 1 (квадрат)
 *
 * @param {string} relativeSrc - Относительный путь к файлу (от папки public/)
 * @returns {Promise<number>} - Соотношение сторон (width / height)
 */
export async function getAspectRatio(relativeSrc) {
  const fs = await import('fs');
  const path = await import('path');
  const { exec } = await import('child_process');
  const { promisify } = await import('util');
  const execAsync = promisify(exec);

  const filePath = path.join(process.cwd(), 'public', relativeSrc);
  if (!fs.existsSync(filePath)) {
    return 1;
  }

  // 1. Через mdls (macOS)
  try {
    const { stdout } = await execAsync(`mdls -name kMDItemPixelWidth -name kMDItemPixelHeight "${filePath}"`);
    const widthMatch = stdout.match(/kMDItemPixelWidth\s*=\s*(\d+)/);
    const heightMatch = stdout.match(/kMDItemPixelHeight\s*=\s*(\d+)/);
    if (widthMatch && heightMatch) {
      const width = parseInt(widthMatch[1], 10);
      const height = parseInt(heightMatch[1], 10);
      if (width > 0 && height > 0) {
        return width / height;
      }
    }
  } catch (e) {
    // Игнорируем — mdls может быть недоступен на не-macOS
  }

  // 2. Фолбек для картинок через sharp
  const ext = path.extname(filePath).toLowerCase();
  if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
    try {
      const { default: sharp } = await import('sharp');
      const metadata = await sharp(filePath).metadata();
      if (metadata.width && metadata.height) {
        return metadata.width / metadata.height;
      }
    } catch (e) {
      // Игнорируем — sharp может быть не установлен
    }
  }

  return 1;
}
