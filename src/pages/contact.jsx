import Layout from "@/components/Layout";

export default function Page() {
  return (
    <Layout title="Контакты" pageName="contact">
      
        {/* CONTACT PAGE */}
    <section className="min-h-screen pt-28 pb-20 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-8"
          data-split-text>КОНТАКТЫ</h1>
        <p className="text-[16px] font-medium tracking-tight-custom leading-[1.3] text-muted max-w-2xl mb-16" data-reveal-up>
          Буду рада создать крутые проекты вместе!
        </p>

        <div data-reveal-up>
          <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-6">Telegram | Email | Phone</p>
          <div className="space-y-6">
            <div>
              <a href="https://t.me/masha_ver" target="_blank" rel="noopener"
                className="inline-block text-[24px] md:text-[32px] font-medium tracking-tight-custom text-primary hover:opacity-60 transition-opacity">@masha_ver</a>
            </div>
            <div>
              <a href="mailto:m.kapitan32@yandex.ru"
                className="inline-block text-[24px] md:text-[32px] font-medium tracking-tight-custom text-primary hover:opacity-60 transition-opacity">m.kapitan32@yandex.ru</a>
            </div>
            <div>
              <a href="tel:+79803360072"
                className="inline-block text-[24px] md:text-[32px] font-medium tracking-tight-custom text-primary hover:opacity-60 transition-opacity">+7 (980) 336-00-72</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    
      
    </Layout>
  );
}
