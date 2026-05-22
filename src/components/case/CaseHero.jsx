
/**
 * Героическая секция страницы кейса: заголовок, подзаголовок и обложка с параллаксом.
 *
 * @param {Object} props
 * @param {string} props.title - Название кейса
 * @param {string} props.subtitle - Подзаголовок кейса
 * @param {string} props.coverSection - URL изображения обложки
 */
export default function CaseHero({ title, subtitle, coverSection }) {
  return (
    <>
      <h1
        className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-2"
        data-split-text
      >
        {title}
      </h1>
      <p
        className="text-[16px] font-medium tracking-tight-custom text-muted mb-12"
        data-reveal-up
      >
        {subtitle}
      </p>

      <div className="overflow-hidden" data-reveal-up>
        <img
          src={coverSection}
          alt={title}
          className="w-full h-full object-cover case-hero-parallax"
        />
      </div>
    </>
  );
}
