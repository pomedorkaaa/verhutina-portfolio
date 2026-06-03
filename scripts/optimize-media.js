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

    const isTrail = dirName.split(path.sep).includes('trail');

    // 1. Обработка изображений в папке trail (включая уже существующие .webp)
    if (isTrail && ['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
      const destPath = path.join(dirName, `${fileNameWithoutExt}.webp`);
      
      try {
        let shouldProcess = false;
        
        if (ext !== '.webp') {
          shouldProcess = true;
        } else {
          const metadata = await sharp(filePath).metadata();
          if (metadata.width !== 360) {
            shouldProcess = true;
          }
        }
        
        if (shouldProcess) {
          console.log(`\n[Шлейф (trail)] Оптимизация изображения: ${path.relative(TARGET_DIR, filePath)}`);
          const tempPath = path.join(dirName, `temp_${fileNameWithoutExt}.webp`);
          
          await sharp(filePath)
            .resize({ width: 360 })
            .webp({ quality: 85 })
            .toFile(tempPath);
            
          if (fs.existsSync(destPath) && ext !== '.webp') {
            fs.unlinkSync(destPath);
          }
          if (ext === '.webp') {
            fs.unlinkSync(filePath);
          }
          fs.renameSync(tempPath, destPath);
          
          if (ext !== '.webp') {
            fs.unlinkSync(filePath);
            console.log(`Исходный файл ${ext} удален.`);
          }
          console.log(`Успешно оптимизировано в WebP (360px): ${path.relative(TARGET_DIR, destPath)}`);
          imageCount++;
        }
      } catch (error) {
        console.error(`Ошибка при обработке изображения trail ${filePath}:`, error.message);
      }
      continue;
    }

    // 2. Обработка обычных изображений (png, jpg, jpeg) -> webp
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

    // 3. Обработка видео (mov) -> mp4
    if (ext === '.mov') {
      const destPath = path.join(dirName, `${fileNameWithoutExt}.mp4`);
      
      console.log(`\n[Видео] Обнаружен новый файл: ${path.relative(TARGET_DIR, filePath)}`);
      
      // Проверяем наличие HandBrakeCLI в системе
      let hasHandbrake = false;
      try {
        execSync('which HandBrakeCLI', { stdio: 'ignore' });
        hasHandbrake = true;
      } catch (e) {}

      try {
        if (hasHandbrake) {
          console.log(`Сжатие видео через HandBrakeCLI (1080p, Web Optimized)...`);
          const tempMp4 = path.join(dirName, `${fileNameWithoutExt}_temp.mp4`);
          const cmd = `HandBrakeCLI -i "${filePath}" -o "${tempMp4}" -Z "General/Fast 1080p30" --optimize`;
          execSync(cmd, { stdio: 'inherit' });
          
          if (fs.existsSync(destPath)) {
            fs.unlinkSync(destPath);
          }
          fs.renameSync(tempMp4, destPath);
        } else {
          console.log(`HandBrakeCLI не найден. Сжатие видео через avconvert (720p)...`);
          const tempM4v = path.join(dirName, `${fileNameWithoutExt}_temp.m4v`);
          const cmd = `avconvert --preset PresetAppleM4V720pHD --source "${filePath}" --output "${tempM4v}"`;
          execSync(cmd, { stdio: 'inherit' });
          
          if (fs.existsSync(destPath)) {
            fs.unlinkSync(destPath);
          }
          fs.renameSync(tempM4v, destPath);
        }
        
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
