import Layout from "../../components/Layout";

export default function Page() {
  return (
    <Layout title="MAISON ROUGE" pageName="case-maison">

      <section className="min-h-screen pt-28 pb-12 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-2"
            data-split-text>MAISON ROUGE</h1>
          <p className="text-[16px] font-medium tracking-tight-custom text-muted mb-12" data-reveal-up>Премиальный рестоклуб</p>

          <div className="overflow-hidden" data-reveal-up>
            <img src="/assets/images/cases/section/2.webp" alt="MAISON ROUGE"
              className="w-full h-full object-cover case-hero-parallax" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mt-12 lg:mt-24">
            <div className="lg:col-span-12 space-y-12" data-reveal-up>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">Задача</h3>
                <p className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4] whitespace-pre-wrap">Сформировать SMM-стратегию, выделить бренд среди премиум-конкурентов, задать узнаваемый визуальный код и предложить шаги по масштабированию узнаваемости и посещений.</p>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">Роль</h3>
                <p className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4] whitespace-pre-wrap">- Разработка SMM-стратегии, включая анализ конкурентов и составление портрета аудитории в соцсетях.
                  - Совместная разработка с дизайнером айдентики бренда и графики.
                  - Формирование Tone of Voice и примеры текстов с копирайтером.
                  - Рекомендации по influence и таргету.
                  - Постановка KPI и шаблон отчетности.</p>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">Результат</h3>
                <p className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4] whitespace-pre-wrap">Полный стратегический пакет: исследование, позиционирование, контент-система, визуальная айдентика, influence-маркетинг, рекомендации по таргету, медиаплан и KPI.
                  Контент-матрица: мудборд ленты, 9 контентных рубрик, 15 сценариев Reels, сюжеты stories, концепция афиш и коллабораций.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase"
              data-reveal-up>More projects</h2>
            <a href="/works"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
              data-reveal-up>See all works</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[26px]">

            <a href="/cases/futurist" className="case-card group block relative" data-case-card data-reveal-up>
              <div className="overflow-hidden">
                <img src="/assets/images/cases/1-futurist.webp" alt="FUTURIST"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy" />
              </div>
              <div className="mt-4">
                <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">FUTURIST</h3>
                <p className="text-muted text-[14px] mt-1">Авторский ресторан</p>
              </div>
            </a>
            <a href="/cases/mouse" className="case-card group block relative" data-case-card data-reveal-up>
              <div className="overflow-hidden">
                <img src="/assets/images/cases/3-mouse.webp" alt="Mouse House"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy" />
              </div>
              <div className="mt-4">
                <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Mouse House</h3>
                <p className="text-muted text-[14px] mt-1">Семейный ресторан и клуб</p>
              </div>
            </a>
            <a href="/cases/zavod" className="case-card group block relative" data-case-card data-reveal-up>
              <div className="overflow-hidden">
                <img src="/assets/images/cases/4-zavod.webp" alt="ZAVOD COFFEE"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy" />
              </div>
              <div className="mt-4">
                <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">ZAVOD COFFEE</h3>
                <p className="text-muted text-[14px] mt-1">Обжарщик кофе</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}