export default function Header() {
  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 ">
      <a href="/" className="text-[15px] font-semibold tracking-tight-custom uppercase absolute">Мария©</a>

      <ul className="hidden md:flex items-center flex-grow justify-center gap-6">
        <li><a href="/"
            className="nav-link text-[15px] font-normal tracking-tight-custom uppercase text-primary">ГЛАВНАЯ</a></li>
        <li><a href="/works"
            className="nav-link text-[15px] font-normal tracking-tight-custom uppercase text-primary/50 hover:text-primary transition-colors">КЕЙСЫ</a>
        </li>
        <li><a href="/archives"
            className="nav-link text-[15px] font-normal tracking-tight-custom uppercase text-primary/50 hover:text-primary transition-colors">ГАЛЕРЕЯ</a>
        </li>
        <li><a href="/contact"
            className="nav-link text-[15px] font-normal tracking-tight-custom uppercase text-primary/50 hover:text-primary transition-colors">КОНТАКТЫ</a>
        </li>
      </ul>

      <div className="absolute right-5 md:right-10 flex items-center gap-4">
        <button id="menu-toggle" className="md:hidden text-[15px] font-medium tracking-tighter-custom uppercase z-50">
          Меню
        </button>
      </div>

      <div id="mobile-menu"
        className="fixed inset-0 bg-bg z-40 flex flex-col justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300">
        <ul className="flex flex-col items-center gap-8">
          <li><a href="/"
              className="text-4xl font-medium tracking-tighter-custom uppercase hover:text-primary/70 transition-colors">Главная</a>
          </li>
          <li><a href="/works"
              className="text-4xl font-medium tracking-tighter-custom uppercase hover:text-primary/70 transition-colors">Кейсы</a>
          </li>
          <li><a href="/archives"
              className="text-4xl font-medium tracking-tighter-custom uppercase hover:text-primary/70 transition-colors">Галерея</a>
          </li>
          <li><a href="/contact"
              className="text-4xl font-medium tracking-tighter-custom uppercase hover:text-primary/70 transition-colors">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
