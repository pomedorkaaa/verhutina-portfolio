export default function Footer() {
  return (
    <footer className="bg-bg py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <a href="/contact"
          className="inline-block text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase hover:opacity-60 transition-opacity mb-10"
          data-reveal-up>
          Get in touch
        </a>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="flex flex-col gap-2" data-reveal-up>
            <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase text-muted mb-2">Office</h3>
            <p className="text-[15px] font-normal tracking-tight-custom text-primary">Saint Petersburg</p>
            <p className="text-[15px] font-normal tracking-tight-custom text-primary">Russia</p>
          </div>

          <div className="flex gap-6" data-reveal-up>
            <a href="https://instagram.com/ludoviclosco" target="_blank" rel="noopener"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">Instagram</a>
            <a href="https://threads.net/@ludoviclosco" target="_blank" rel="noopener"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">Threads</a>
            <a href="https://x.com/ludoviclosco" target="_blank" rel="noopener"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-muted hover:text-primary transition-colors">X
              (Twitter)</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
