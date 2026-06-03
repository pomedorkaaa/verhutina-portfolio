export default function Footer() {
  return (
    <footer className="bg-bg py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <a href="/contact"
          className="inline-block text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase hover:opacity-60 transition-opacity mb-10">
          Связаться со мной
        </a>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-6">
            <a href="mailto:m.kapitan32@yandex.ru"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">Email</a>
            <a href="https://instagram.com/m_kapitanova_" target="_blank" rel="noopener"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">Instagram</a>
            <a href="https://t.me/masha_ver" target="_blank" rel="noopener"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">Telegram</a>
            <a href="tel:+79803360072"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">Телефон</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
