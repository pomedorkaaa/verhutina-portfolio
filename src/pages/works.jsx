import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout title="Кейсы" pageName="works">
      <main className="page-content pt-24 md:pt-32 pb-16 min-h-screen">
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

          <a href="../cases/futurist/index.html" className="case-card group block relative" data-case-card
            data-tags="digital,marketing-materials" data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="../../assets/images/futurist.webp" alt="FUTURIST"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">FUTURIST</h3>
              <p className="text-muted text-[14px] mt-1">Digital, Marketing Materials</p>
            </div>
          </a>

          <a href="../cases/tierra-viva/index.html" className="case-card group block relative" data-case-card
            data-tags="visual-identity,brand-strategy" data-reveal-up>
            <div className="overflow-hidden aspect-video">
              <img src="../../assets/images/tierra-viva.webp" alt="Tierra Viva"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Tierra Viva</h3>
              <p className="text-muted text-[14px] mt-1">Visual Identity, Brand Strategy</p>
            </div>
          </a>

          <a href="../cases/casa-nomad/index.html" className="case-card group block relative" data-case-card
            data-tags="art-direction,digital" data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="../../assets/images/casa-nomad.webp" alt="Casa Nomad"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Casa Nomad</h3>
              <p className="text-muted text-[14px] mt-1">Art Direction, Digital</p>
            </div>
          </a>

          <a href="../cases/alba/index.html" className="case-card group block relative" data-case-card
            data-tags="brand-strategy,visual-identity" data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="../../assets/images/alba.webp" alt="Alba"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Alba</h3>
              <p className="text-muted text-[14px] mt-1">Brand Strategy, Visual Identity</p>
            </div>
          </a>

          <a href="../cases/luz-de-tierra/index.html" className="case-card group block relative" data-case-card
            data-tags="packaging,brand-strategy" data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="../../assets/images/tierra-viva.webp" alt="Luz de Tierra"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Luz de Tierra</h3>
              <p className="text-muted text-[14px] mt-1">Packaging, Brand Strategy</p>
            </div>
          </a>

          <a href="../cases/la-mesa/index.html" className="case-card group block relative" data-case-card
            data-tags="marketing-materials,packaging" data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="../../assets/images/casa-nomad.webp" alt="La Mesa"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">La Mesa</h3>
              <p className="text-muted text-[14px] mt-1">Marketing Materials, Packaging</p>
            </div>
          </a>

        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="bg-bg py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <a href="../contact/index.html"
          className="inline-block text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase hover:opacity-60 transition-opacity mb-10"
          data-reveal-up>
          Get in touch
        </a>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex gap-6">
            <a href="mailto:johndoe@gmail.com"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">Email</a>
            <a href="https://www.instagram.com/ludoviclosco/" target="_blank" rel="noopener"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">Instagram</a>
            <a href="https://www.threads.com/@ludoviclosco" target="_blank" rel="noopener"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">Threads</a>
            <a href="https://x.com/ludoviclosco" target="_blank" rel="noopener"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">X
              (Twitter)</a>
          </div>

        </div>
      </div>
    </footer>
      </main>
    </Layout>
  );
}
