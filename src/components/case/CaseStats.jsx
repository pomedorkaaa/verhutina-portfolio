
/**
 * Блок статистики кейса (числовые показатели результатов).
 *
 * @param {Object} props
 * @param {Array<{value: string, label: string}>} props.stats - Массив статистических показателей
 * @param {string} [props.statsTitle] - Необязательный заголовок блока статистики
 */
export default function CaseStats({ stats, statsTitle }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="lg:col-span-4 space-y-6 lg:pl-10" data-reveal-up>
      {statsTitle && (
        <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-6 text-primary">
          {statsTitle}
        </h3>
      )}
      {stats.map((stat, idx) => (
        <div key={idx}>
          <p className="text-[32px] md:text-[40px] font-medium tracking-tighter-custom leading-[1.1] mb-1">
            {stat.value}
          </p>
          <p className="text-[14px] font-normal tracking-tight-custom text-muted whitespace-pre-line">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
