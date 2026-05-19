import Layout from "../../components/Layout";

export default function Page() {
  return (
    <Layout title="ZAVOD COFFEE" pageName="case-zavod">
      
        <section className="min-h-screen pt-28 pb-12 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-2"
          data-split-text>ZAVOD COFFEE</h1>
        <p className="text-[16px] font-medium tracking-tight-custom text-muted mb-12" data-reveal-up>Обжарщик кофе</p>

        <div className="overflow-hidden aspect-[4/3]" data-reveal-up>
          <img src="/assets/images/cases/4.%20zavod.webp" alt="ZAVOD COFFEE"
            className="w-full h-full object-cover case-hero-parallax" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div data-reveal-up>
            <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-4">Services</p>
            <p className="text-[16px] font-medium tracking-tight-custom leading-[1.2]">
              Полное SMM-сопровождение, продакшн: организация и курирование фото/видео-съемок с фотографом и
              видеографом, генерация и адаптация трендовых идей под бренд. Influence: подбор и работа с лидерами мнений
              для расширения охвата и привлечения новой аудитории.
            </p>
          </div>
          <div data-reveal-up>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-2">Client</p>
                <p className="text-[16px] font-medium tracking-tight-custom">ZAVOD COFFEE</p>
              </div>
              <div>
                <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-2">Location</p>
                <p className="text-[16px] font-medium tracking-tight-custom">Russia</p>
              </div>
              <div>
                <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-2">Year</p>
                <p className="text-[16px] font-medium tracking-tight-custom">2025</p>
              </div>
              <div>
                <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-2">Credits</p>
                <p className="text-[16px] font-medium tracking-tight-custom">—</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-2xl" data-reveal-up>
          <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-4">Info</p>
          <p className="text-[16px] font-medium tracking-tight-custom leading-[1.2]">
            Продвижение бренда через социальные сети: повышение узнаваемости, рост подписчиков и вовлеченности (ER/охваты).
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase"
            data-reveal-up>More projects</h2>
          <a href="../../works/index.html"
            className="text-[15px] font-normal tracking-tight-custom uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
            data-reveal-up>See all works</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[26px]">

          <a href="../futurist/index.html" className="case-card group block relative" data-case-card data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="/assets/images/cases/1.%20futurist.webp" alt="FUTURIST"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">FUTURIST</h3>
              <p className="text-muted text-[14px] mt-1">Авторский ресторан</p>
            </div>
          </a>
          <a href="../maison/index.html" className="case-card group block relative" data-case-card data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="/assets/images/cases/2.%20maison.webp" alt="MAISON ROUGE"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">MAISON ROUGE</h3>
              <p className="text-muted text-[14px] mt-1">Премиальный рестоклуб</p>
            </div>
          </a>
          <a href="../mouse/index.html" className="case-card group block relative" data-case-card data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="/assets/images/cases/3.%20mouse.webp" alt="Mouse House"
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