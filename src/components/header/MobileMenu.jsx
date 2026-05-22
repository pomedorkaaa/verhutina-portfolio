import { NAV_LINKS, isLinkActive } from "./navLinks";

/**
 * Мобильное полноэкранное меню.
 * Логика открытия/закрытия обрабатывается в main.js (initMobileMenu).
 *
 * @param {Object} props
 * @param {string} props.pageName - Имя текущей страницы для подсветки активного пункта
 */
export default function MobileMenu({ pageName }) {
  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 w-screen h-screen bg-bg z-40 flex flex-col justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300"
    >
      <ul className="flex flex-col items-center gap-8">
        {NAV_LINKS.map((link) => {
          const active = isLinkActive(link, pageName);
          return (
            <li key={link.key}>
              <a
                href={link.href}
                className={`text-4xl font-medium tracking-tighter-custom uppercase transition-colors ${
                  active ? "text-primary" : "text-primary/50 hover:text-primary/70"
                }`}
              >
                {link.mobileLabel}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
