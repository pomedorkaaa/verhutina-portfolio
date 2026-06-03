
/**
 * Секция «О себе» главной страницы.
 * Содержит описание опыта, деятельности и фото с параллакс-эффектом.
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-5 md:px-10 bg-bg">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        <div className="about-text">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-12"
            data-reveal-up>О себе</h2>

          <div className="space-y-8">
            <div data-reveal-up>
              <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-3">КТО Я</p>
              <p className="text-[16px] font-medium tracking-tight-custom leading-[1.2]">
                SMM и креативный менеджер с опытом работы в HoReCa и FMCG: рестораны и кафе, семейные форматы, доставка питания, кофейный бренд, товары для дома.
              </p>
            </div>

            <div data-reveal-up>
              <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-3">МОЯ ЗАДАЧА</p>
              <p className="text-[16px] font-medium tracking-tight-custom leading-[1.2]">
                Превращать идеи в контент с измеримыми результатами, чтобы помогать бизнесу расти и усиливать позиции на рынке.
              </p>
            </div>

            <div data-reveal-up>
              <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-3">ДЕЯТЕЛЬНОСТЬ</p>
              <p className="text-[16px] font-medium tracking-tight-custom leading-[1.2]">
                6+ лет в SMM.<br />
                Имею опыт ведения 4–8 проектов параллельно.<br />
                Осуществляю полный цикл работ:<br />
                стратегия → контент / продакшн → influence → KPI.
              </p>
            </div>

            <div data-reveal-up>
              <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-3">ОПЫТ РАБОТЫ</p>
              <ul className="text-[16px] font-medium tracking-tight-custom leading-[1.2] space-y-3">
                <li>
                  <span className="text-muted">(2020 - 2022)</span> SMM-менеджер в IMdepot <span className="text-muted text-[14px] font-normal">(товары для дома)</span>
                </li>
                <li>
                  <span className="text-muted">(2021 - 2022)</span> Influence-менеджер & Интернет-маркетолог в EnjoyBox <span className="text-muted text-[14px] font-normal">(доставка питания)</span>
                </li>
                <li>
                  <span className="text-muted">(2023 – 2025)</span> SMM-менеджер & Контент-менеджер в digital-агентстве MCorporation
                </li>
                <li>
                  <span className="text-muted">(2026 - now)</span> Head of SMM в агентстве
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-photo" data-reveal-up>
          <div className="overflow-hidden aspect-[3/4]">
            <img src="/assets/images/IMG_0933.webp" alt="Верхутина Мария"
              className="w-full h-full object-cover photo-parallax" />
          </div>
        </div>
      </div>
    </section>
  );
}
