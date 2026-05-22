
/**
 * Рендерит текст с сохранением переносов строк.
 * Каждая строка оборачивается в <span className="block">.
 *
 * @param {string} text - Исходный текст с переносами \n
 * @returns {React.ReactNode[]|null}
 */
function renderSimpleText(text) {
  if (!text) return null;
  return text.split('\n').map((line, i) => (
    <span key={i} className="block mb-1 last:mb-0">
      {line.trim()}
    </span>
  ));
}

/**
 * Секция «Задача / Роль / Результат» страницы кейса.
 *
 * @param {Object} props
 * @param {string} props.task - Описание задачи
 * @param {string} props.role - Описание роли
 * @param {string} props.result - Описание результата
 * @param {string} [props.disclaimer] - Необязательный дисклеймер
 * @param {boolean} props.hasStats - Есть ли блок статистики (влияет на ширину колонки)
 */
export default function CaseDetails({ task, role, result, disclaimer, hasStats }) {
  return (
    <div
      className={`${
        hasStats ? "lg:col-span-8" : "lg:col-span-12"
      } space-y-12`}
      data-reveal-up
    >
      <div>
        <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">
          Задача
        </h3>
        <div className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4]">
          {renderSimpleText(task)}
        </div>
      </div>
      <div>
        <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">
          Роль
        </h3>
        <div className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4]">
          {renderSimpleText(role)}
        </div>
      </div>
      <div>
        <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">
          Результат
        </h3>
        <div className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4]">
          {renderSimpleText(result)}
        </div>
        {disclaimer && (
          <p className="text-[13px] font-normal tracking-tight-custom text-muted/40 mt-8">
            {disclaimer}
          </p>
        )}
      </div>
    </div>
  );
}
