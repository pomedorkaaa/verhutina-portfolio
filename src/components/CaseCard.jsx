
/**
 * Компонент карточки кейса.
 * Используется на главной странице, странице всех работ и в секции "More projects".
 *
 * @param {Object} props
 * @param {Object} props.project - Данные проекта (slug, cover, title, subtitle, tags)
 * @param {string} [props.className] - Дополнительные CSS классы
 */
export default function CaseCard({ project, className = "" }) {
  if (!project) return null;

  const tagsString = project.tags ? project.tags.join(",") : "";

  return (
    <a
      href={`/cases/${project.slug}`}
      className={`case-card group block relative ${className}`}
      data-case-card
      data-tags={tagsString}
      data-reveal-up
    >
      <div className="overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">
          {project.title}
        </h3>
        <p className="text-muted text-[14px] mt-1">
          {project.subtitle}
        </p>
      </div>
    </a>
  );
}
