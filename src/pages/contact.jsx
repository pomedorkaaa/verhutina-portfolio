import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout title="Контакты" pageName="contact">
      <main className="page-content pt-24 md:pt-32 pb-16 min-h-screen">
        {/* CONTACT PAGE */}
    <section className="min-h-screen pt-28 pb-20 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-8"
          data-split-text>Contact</h1>
        <p className="text-[16px] font-medium tracking-tight-custom leading-[1.2] text-muted max-w-xl mb-16" data-reveal-up>
          Let's create something meaningful together. I'd love to hear about your project, big or small.
        </p>

        <div data-reveal-up>
          <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-6">Email & Phone</p>
          <div className="space-y-3">
            <a href="mailto:hi@jorge.com"
              className="block text-[16px] font-medium tracking-tight-custom text-primary hover:opacity-60 transition-opacity">hi@jorge.com</a>
            <a href="tel:+525573912486"
              className="block text-[16px] font-medium tracking-tight-custom text-primary hover:opacity-60 transition-opacity">+52
              55 7391 2486</a>
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="bg-bg py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <a href="index.html"
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
