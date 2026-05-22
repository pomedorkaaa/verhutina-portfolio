
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
              <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-3">Кто я</p>
              <p className="text-[16px] font-medium tracking-tight-custom leading-[1.2]">
                Я SMM-менеджер и креативный менеджер с опытом работы преимущественно в HoReCa: рестораны и кафе,
                семейные
                форматы, доставка, кофейные бренды, товары для дома.
              </p>
            </div>

            <div data-reveal-up>
              <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-3">МОЯ ЗАДАЧА</p>
              <p className="text-[16px] font-medium tracking-tight-custom leading-[1.2]">
                Превращать идеи и контент в измеримые результаты, которые помогают бизнесу расти и усиливать позиции на
                рынке.
              </p>
            </div>

            <div data-reveal-up>
              <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-3">ДЕЯТЕЛЬНОСТЬ</p>
              <p className="text-[16px] font-medium tracking-tight-custom leading-[1.2]">
                6 лет в SMM.<br />
                Имею опыт ведения 4–8 проектов параллельно.<br />
                Работаю по полному циклу:<br />
                стратегия → контент / продакшн → influence → KPI.
              </p>
            </div>

            <div data-reveal-up>
              <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-3">ОПЫТ РАБОТЫ</p>
              <ul className="text-[16px] font-medium tracking-tight-custom leading-[1.2] space-y-2">
                <li><span className="text-muted">(2020 - 2022)</span> SMM Manager в IMdepot</li>
                <li><span className="text-muted">(2021 - 2022)</span> Influence & Internet marketing EnjoyBox</li>
                <li><span className="text-muted">(2023 – 2026)</span> Social Media & Content Manager в MCorporation</li>
                <li><span className="text-muted">(2026 - now)</span> Head of Social Media в MCorporation</li>
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
