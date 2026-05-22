import MediaItem from "../MediaItem";

/**
 * Секция медиа-контента кейса (два ряда: row1 с пропорциональными колонками и row2 на всю ширину).
 *
 * @param {Object} props
 * @param {Object} props.mediaBlocks - Объект с медиа-блоками
 * @param {Array} [props.mediaBlocks.row1] - Первый ряд (массив медиа-элементов с aspectRatio)
 * @param {Object} [props.mediaBlocks.row2] - Второй ряд (один медиа-элемент на всю ширину)
 */
export default function CaseMedia({ mediaBlocks }) {
  if (!mediaBlocks) return null;

  return (
    <section className="px-5 md:px-10 pb-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Первый ряд: два блока с адаптивным выравниванием Flexbox */}
        {mediaBlocks.row1 && mediaBlocks.row1.length > 0 && (
          <div className="flex flex-col md:flex-row gap-5 md:gap-[26px] mb-5 md:mb-[26px] items-stretch">
            {mediaBlocks.row1.map((item, idx) => {
              const ratio = item.aspectRatio || 1;
              return (
                <div
                  key={idx}
                  className="overflow-hidden bg-neutral-900/50 case-media-row-item relative"
                  style={{ '--aspect-ratio': ratio }}
                  data-reveal-up
                >
                  <MediaItem item={item} />
                </div>
              );
            })}
          </div>
        )}

        {/* Второй ряд: один широкий блок */}
        {mediaBlocks.row2 && mediaBlocks.row2.src && (
          <div className="overflow-hidden w-full bg-neutral-900/50" data-reveal-up>
            <MediaItem item={mediaBlocks.row2} />
          </div>
        )}
      </div>
    </section>
  );
}
