import CaseCard from "./CaseCard";

/**
 * Секция «More projects» — сетка карточек проектов со ссылкой «See all works».
 * Переиспользуется на страницах кейсов и главной странице.
 *
 * @param {Object} props
 * @param {Array} props.projects - Массив проектов для отображения
 * @param {string} [props.title="More projects"] - Заголовок секции
 * @param {string} [props.linkText="See all works"] - Текст ссылки
 * @param {string} [props.linkHref="/works"] - URL ссылки
 * @param {number} [props.columns=3] - Количество колонок (2 или 3)
 */
export default function MoreProjects({
  projects,
  title = "More projects",
  linkText = "See all works",
  linkHref = "/works",
  columns = 3,
}) {
  if (!projects || projects.length === 0) return null;

  const gridCols = columns === 2
    ? "grid-cols-1 md:grid-cols-2"
    : "grid-cols-1 md:grid-cols-3";

  return (
    <section className="py-20 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2
            className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase"
            data-reveal-up
          >
            {title}
          </h2>
          <a
            href={linkHref}
            className="text-[15px] font-normal tracking-tight-custom uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
            data-reveal-up
          >
            {linkText}
          </a>
        </div>

        <div className={`grid ${gridCols} gap-5 md:gap-[26px]`}>
          {projects.map((project) => (
            <CaseCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
