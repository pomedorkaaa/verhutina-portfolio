import Layout from "../../components/Layout";

export default function Page() {
  return (
    <Layout title="ДЕТСТВО Play Café" pageName="case-play-cafe">

      <section className="min-h-screen pt-28 pb-12 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-2"
            data-split-text>ДЕТСТВО Play Café</h1>
          <p className="text-[16px] font-medium tracking-tight-custom text-muted mb-12" data-reveal-up>Семейное кафе с детским театром</p>

          <div className="overflow-hidden" data-reveal-up>
            <img src="/assets/images/cases/section/5.webp" alt="ДЕТСТВО Play Café"
              className="w-full h-full object-cover case-hero-parallax" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mt-12 lg:mt-24">
            <div className="lg:col-span-8 space-y-12" data-reveal-up>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">Задача</h3>
                <p className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4] whitespace-pre-wrap">Сформировать позитивный образ бренда и повысить узнаваемость; привлечь релевантную ЦА в Telegram и ВКонтакте; повысить лояльность и вовлеченность за счет регулярных касаний и актуального контента.</p>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">Роль</h3>
                <p className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4] whitespace-pre-wrap">Разработка SMM-стратегии совместно с дизайнером и копирайтером; оформление аккаунтов, подготовка контент-плана и графика публикаций; съемка/монтаж клипов под соцсети; адаптация форматов под площадки; работа с родительскими сообществами и ЖК/районными группами (локальный influence), запуск UGC-механик.</p>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">Результат</h3>
                <p className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4] whitespace-pre-wrap">Прирост ЦА, рост узнаваемости и вовлеченности за счет транслируемого контента, сотрудничество с блогерами и запуск таргета. В Telegram основной источник трафика — URL и кросс-промо (~65%) — за счет influence и рекламы у партнеров.</p>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6 lg:pl-10" data-reveal-up>

              <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-6 text-primary">Telegramm</h3>              <div>
                <p className="text-[32px] md:text-[40px] font-medium tracking-tighter-custom leading-[1.1] mb-1">+782</p>
                <p className="text-[14px] font-normal tracking-tight-custom text-muted">подписчика за 2 месяца с нуля</p>
              </div>
              <div>
                <p className="text-[32px] md:text-[40px] font-medium tracking-tighter-custom leading-[1.1] mb-1">~1000 пик ~3000</p>
                <p className="text-[14px] font-normal tracking-tight-custom text-muted">Просмотры постов в день</p>
              </div>
              <div>
                <p className="text-[32px] md:text-[40px] font-medium tracking-tighter-custom leading-[1.1] mb-1">3,7% за месяц</p>
                <p className="text-[14px] font-normal tracking-tight-custom text-muted">ER канала</p>
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
            <a href="/cases/maison" className="case-card group block relative" data-case-card data-reveal-up>
              <div className="overflow-hidden">
                <img src="/assets/images/cases/2-maison.webp" alt="MAISON ROUGE"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy" />
              </div>
              <div className="mt-4">
                <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">MAISON ROUGE</h3>
                <p className="text-muted text-[14px] mt-1">Премиальный рестоклуб</p>
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
          </div>
        </div>
      </section>
    </Layout>
  );
}