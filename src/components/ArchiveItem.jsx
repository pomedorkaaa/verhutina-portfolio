
/**
 * Элемент галереи с hover-эффектом масштабирования.
 *
 * @param {Object} props
 * @param {string} props.src - URL изображения
 * @param {string} props.alt - Alt-текст изображения
 */
export default function ArchiveItem({ src, alt }) {
  return (
    <div className="archive-item group overflow-hidden aspect-square bg-bg-alt" data-reveal-up>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}
