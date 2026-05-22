import { NAV_LINKS, isLinkActive } from "./navLinks";

/**
 * Десктопная навигация (скрыта на мобильных устройствах).
 *
 * @param {Object} props
 * @param {string} props.pageName - Имя текущей страницы для подсветки активного пункта
 */
export default function DesktopNav({ pageName }) {
  return (
    <ul className="hidden md:flex items-center flex-grow justify-center gap-6">
      {NAV_LINKS.map((link) => {
        const active = isLinkActive(link, pageName);
        return (
          <li key={link.key}>
            <a
              href={link.href}
              className={`nav-link text-[15px] font-normal tracking-tight-custom uppercase transition-colors ${
                active ? "text-primary" : "text-primary/50 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
