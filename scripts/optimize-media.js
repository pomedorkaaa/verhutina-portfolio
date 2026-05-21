import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import sharp from 'sharp';

// Директория для сканирования
const TARGET_DIR = path.resolve('public/assets/images');

// Рекурсивный поиск всех файлов в папке
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, files);
    } else {
      files.push(filePath);
    }
  }
  return files;
}

async function optimizeMedia() {
  console.log('=== Запуск оптимизации медиафайлов ===');
  console.log(`Сканирование директории: ${TARGET_DIR}`);
  
  const allFiles = getFiles(TARGET_DIR);
  let imageCount = 0;
  let videoCount = 0;

  for (const filePath of allFiles) {
    const ext = path.extname(filePath).toLowerCase();
    const dirName = path.dirname(filePath);
    const fileNameWithoutExt = path.basename(filePath, ext);

    // 1. Обработка изображений (png, jpg, jpeg) -> webp
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const destPath = path.join(dirName, `${fileNameWithoutExt}.webp`);
      
      // Конвертируем только если файл webp еще не существует
      if (!fs.existsSync(destPath)) {
        console.log(`\n[Изображение] Обнаружен новый файл: ${path.relative(TARGET_DIR, filePath)}`);
        console.log(`Конвертация в WebP...`);
        try {
          await sharp(filePath)
            .webp({ quality: 85 })
            .toFile(destPath);
          
          console.log(`Успешно создано: ${path.relative(TARGET_DIR, destPath)}`);
          
          // Удаляем исходный тяжелый файл
          fs.unlinkSync(filePath);
          console.log(`Исходный файл удален.`);
          imageCount++;
        } catch (error) {
          console.error(`Ошибка при конвертации изображения ${filePath}:`, error.message);
        }
      }
    }

    // 2. Обработка видео (mov) -> mp4
    if (ext === '.mov') {
      const destPath = path.join(dirName, `${fileNameWithoutExt}.mp4`);
      
      console.log(`\n[Видео] Обнаружен новый файл: ${path.relative(TARGET_DIR, filePath)}`);
      console.log(`Сжатие видео через avconvert...`);
      try {
        const tempM4v = path.join(dirName, `${fileNameWithoutExt}_temp.m4v`);
        
        // Запуск встроенного в macOS конвертера с пресетом 720p HD
        const cmd = `avconvert --preset PresetAppleM4V720pHD --source "${filePath}" --output "${tempM4v}"`;
        execSync(cmd, { stdio: 'inherit' });
        
        // Переименовываем полученный m4v в mp4
        if (fs.existsSync(destPath)) {
          fs.unlinkSync(destPath); // Удаляем старый mp4, если он был
        }
        fs.renameSync(tempM4v, destPath);
        console.log(`Успешно создано и сжато: ${path.relative(TARGET_DIR, destPath)}`);
        
        // Удаляем исходный mov-файл
        fs.unlinkSync(filePath);
        console.log(`Исходный файл .mov удален.`);
        videoCount++;
      } catch (error) {
        console.error(`Ошибка при сжатии видео ${filePath}:`, error.message);
      }
    }
  }

  console.log('\n=== Оптимизация завершена ===');
  console.log(`Обработано изображений: ${imageCount}`);
  console.log(`Обработано видео: ${videoCount}`);
}

optimizeMedia().catch(err => {
  console.error('Критическая ошибка при оптимизации:', err);
  process.exit(1);
});
