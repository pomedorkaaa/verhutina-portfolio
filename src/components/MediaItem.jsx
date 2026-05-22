import VideoPlayer from "./VideoPlayer";

/**
 * Рендерит изображение или видео в зависимости от типа медиа-объекта.
 *
 * @param {Object} props
 * @param {Object} props.item - Объект медиа (src, type)
 * @param {string} [props.className] - Дополнительные CSS классы
 */
export default function MediaItem({ item, className = "" }) {
  if (!item || !item.src) return null;

  if (item.type === "video") {
    return <VideoPlayer src={item.src} className={className} />;
  }

  return (
    <img
      src={item.src}
      alt="Case media"
      className={`w-full h-full object-cover ${className}`}
      loading="lazy"
    />
  );
}
