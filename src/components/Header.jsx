import DesktopNav from "./header/DesktopNav";
import MobileMenu from "./header/MobileMenu";

/**
 * Компонент шапки сайта: навбар + мобильное меню.
 *
 * @param {Object} props
 * @param {string} props.pageName - Имя текущей страницы для подсветки активного пункта
 */
export default function Header({ pageName }) {
  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-5 md:py-4 ">
        <a href="/" className="nav-logo text-[15px] font-semibold tracking-tight-custom uppercase absolute text-primary">Мария©</a>

        <DesktopNav pageName={pageName} />

        <div className="absolute right-5 md:right-10 flex items-center gap-4">
          <button id="menu-toggle" className="md:hidden text-[15px] font-medium tracking-tighter-custom uppercase z-50">
            Меню
          </button>
        </div>
      </nav>

      <MobileMenu pageName={pageName} />
    </>
  )
}
