import Layout from "../../components/Layout";

export default function Page() {
  return (
    <Layout title="FUTURIST" pageName="case-futurist">
      <main className="page-content pt-24 md:pt-32 pb-16 min-h-screen">
        {/* CASE HERO */}
    <section className="min-h-screen pt-28 pb-12 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-2"
          data-split-text>FUTURIST</h1>
        <p className="text-[16px] font-medium tracking-tight-custom text-muted mb-12" data-reveal-up>Авторский ресторан</p>

        <div className="overflow-hidden aspect-[4/3]" data-reveal-up>
          <img src="../../../assets/images/futurist.webp" alt="FUTURIST"
            className="w-full h-full object-cover case-hero-parallax" />
        </div>

        {/* CASE INFO */}
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
                <p className="text-[16px] font-medium tracking-tight-custom">FUTURIST</p>
              </div>
              <div>
                <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-2">Location</p>
                <p className="text-[16px] font-medium tracking-tight-custom">CDMX, Mexico</p>
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

        {/* CASE DESCRIPTION */}
        <div className="mt-12 max-w-2xl" data-reveal-up>
          <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-4">Info</p>
          <p className="text-[16px] font-medium tracking-tight-custom leading-[1.2]">
            Продвижение бренда через Instagram: повышение узнаваемости, рост подписчиков и вовлеченности (ER/охваты), а
            также отражение концепции ресторана в едином стиле и регулярное попадание в рекомендации (посты/Reels).
          </p>
        </div>

        <a href="https://framer.link/ludoviclosco" target="_blank" rel="noopener"
          className="inline-block mt-8 text-[15px] font-normal tracking-tight-custom uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
          data-reveal-up>
          See live project
        </a>
      </div>
    </section>

    {/* MORE PROJECTS */}
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
          <a href="../tierra-viva/index.html" className="case-card group block relative" data-case-card data-reveal-up>
            <div className="overflow-hidden aspect-video">
              <img src="../../../assets/images/tierra-viva.webp" alt="Tierra Viva"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Tierra Viva</h3>
              <p className="text-muted text-[14px] mt-1">Visual Identity, Brand Strategy</p>
            </div>
          </a>
          <a href="../casa-nomad/index.html" className="case-card group block relative" data-case-card data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="../../../assets/images/casa-nomad.webp" alt="Casa Nomad"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Casa Nomad</h3>
              <p className="text-muted text-[14px] mt-1">Art Direction, Digital</p>
            </div>
          </a>
          <a href="../alba/index.html" className="case-card group block relative" data-case-card data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="../../../assets/images/alba.webp" alt="Alba"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Alba</h3>
              <p className="text-muted text-[14px] mt-1">Brand Strategy, Visual Identity</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="bg-bg py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <a href="../../contact/index.html"
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
