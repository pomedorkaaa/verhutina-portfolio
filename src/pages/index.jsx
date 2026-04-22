import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout title="" pageName="home">
      
        {/* HERO */}
    <section className="hero !sticky top-0 -z-40 min-h-screen px-5 flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-4" data-reveal-up>SMM Manager
        </p>
        <h1
          className="text-[56px] md:text-[110px] lg:text-[128px] font-medium tracking-tighter-custom uppercase leading-none"
          data-split-text>
          ВЕРХУТИНА МАРИЯ
        </h1>
      </div>
    </section>

    {/* DIVIDER */}
    <div className="w-full h-px bg-bg-alt"></div>

    {/* ABOUT */}
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
            <img src="/assets/images/verhutina.webp" alt="Верхутина Мария"
              className="w-full h-full object-cover photo-parallax" />
          </div>
        </div>
      </div>
    </section>

    {/* WORKS */}
    <section id="works" className="py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase"
            data-reveal-up>КЕЙСЫ</h2>
          <a href="pages/works/index.html"
            className="text-[15px] font-normal tracking-tight-custom uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors backdrop-blur-sm"
            data-reveal-up>
            ВСЕ КЕЙСЫ
          </a>
        </div>

        <div className="cases-grid grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[26px]" id="cases-grid">
          <a href="pages/cases/futurist/index.html" className="case-card group block relative" data-case-card
            data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="/assets/images/futurist.webp" alt="FUTURIST"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">FUTURIST</h3>
              <p className="text-muted text-[14px] mt-1">Авторский ресторан</p>
            </div>
          </a>

          <a href="pages/cases/tierra-viva/index.html" className="case-card group block relative" data-case-card
            data-reveal-up>
            <div className="overflow-hidden aspect-video">
              <img src="/assets/images/tierra-viva.webp" alt="Tierra Viva"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Tierra Viva</h3>
              <p className="text-muted text-[14px] mt-1">Breathing new life into an organic market</p>
            </div>
          </a>

          <a href="pages/cases/casa-nomad/index.html" className="case-card group block relative" data-case-card
            data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="/assets/images/casa-nomad.webp" alt="Casa Nomad"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Casa Nomad</h3>
              <p className="text-muted text-[14px] mt-1">Weaving artisan stories into a global brand</p>
            </div>
          </a>

          <a href="pages/cases/alba/index.html" className="case-card group block relative" data-case-card data-reveal-up>
            <div className="overflow-hidden aspect-[4/5]">
              <img src="/assets/images/alba.webp" alt="Alba"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Alba</h3>
              <p className="text-muted text-[14px] mt-1">Crafting a sanctuary of minimalism and nature</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    
      
    </Layout>
  );
}
