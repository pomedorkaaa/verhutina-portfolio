import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout title="Кейсы" pageName="works">
      
        {/* WORKS PAGE */}
    <section className="min-h-screen pt-28 pb-20 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-12"
          data-split-text>All works</h1>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-12" data-reveal-up>
          <button
            className="filter-btn active text-[15px] font-normal tracking-tight-custom uppercase text-primary/80 border-b border-primary/30 pb-1 hover:border-primary transition-colors"
            data-filter="all">All works</button>
          <button
            className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
            data-filter="art-direction">Art Direction</button>
          <button
            className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
            data-filter="brand-strategy">Brand Strategy</button>
          <button
            className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
            data-filter="digital">Digital</button>
          <button
            className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
            data-filter="marketing-materials">Marketing Materials</button>
          <button
            className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
            data-filter="packaging">Packaging</button>
          <button
            className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
            data-filter="visual-identity">Visual Identity</button>
        </div>

        {/* CASES GRID */}
        <div className="cases-grid grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[26px]" id="cases-grid">

          <a href="/cases/futurist" className="case-card group block relative" data-case-card data-reveal-up>
            <div className="overflow-hidden">
              <img src="/assets/images/cases/1.%20futurist.webp" alt="FUTURIST"
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
              <img src="/assets/images/cases/2.%20maison.webp" alt="MAISON ROUGE"
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
              <img src="/assets/images/cases/3.%20mouse.webp" alt="Mouse House"
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
              <img src="/assets/images/cases/4.%20zavod.webp" alt="ZAVOD COFFEE"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">ZAVOD COFFEE</h3>
              <p className="text-muted text-[14px] mt-1">Обжарщик кофе</p>
            </div>
          </a>

          <a href="/cases/play-cafe" className="case-card group block relative" data-case-card data-reveal-up>
            <div className="overflow-hidden">
              <img src="/assets/images/cases/5.%20play-cafe.webp" alt="ДЕТСТВО Play Café"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">ДЕТСТВО Play Café</h3>
              <p className="text-muted text-[14px] mt-1">Семейное кафе с детским театром</p>
            </div>
          </a>
        </div>
        </div>
      </section>

    {/* FOOTER */}
    
      
    </Layout>
  );
}
