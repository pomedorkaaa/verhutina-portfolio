
/**
 * Набор фильтров по умолчанию для страницы кейсов.
 */
const DEFAULT_FILTERS = [
  { key: "all", label: "All works" },
  { key: "art-direction", label: "Art Direction" },
  { key: "brand-strategy", label: "Brand Strategy" },
  { key: "digital", label: "Digital" },
  { key: "marketing-materials", label: "Marketing Materials" },
  { key: "packaging", label: "Packaging" },
  { key: "visual-identity", label: "Visual Identity" },
];

/**
 * Компонент кнопок фильтрации кейсов.
 * Логика фильтрации (toggle active, show/hide карточек) обрабатывается в main.js (initFilters).
 *
 * @param {Object} props
 * @param {Array<{key: string, label: string}>} [props.filters] - Список фильтров (по умолчанию — стандартный набор)
 */
export default function CaseFilters({ filters = DEFAULT_FILTERS }) {
  return (
    <div className="flex flex-wrap gap-3 mb-12" data-reveal-up>
      {filters.map((filter, idx) => {
        const isFirst = idx === 0;
        return (
          <button
            key={filter.key}
            className={`filter-btn ${isFirst ? "active" : ""} text-[15px] font-normal tracking-tight-custom uppercase ${
              isFirst
                ? "text-primary/80 border-b border-primary/30"
                : "text-muted border-b border-transparent"
            } pb-1 hover:border-primary/30 transition-colors`}
            data-filter={filter.key}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
