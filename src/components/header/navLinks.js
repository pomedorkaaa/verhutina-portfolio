/**
 * Общие данные навигации, переиспользуемые в DesktopNav и MobileMenu.
 */
export const NAV_LINKS = [
  { href: "/", label: "ГЛАВНАЯ", mobileLabel: "Главная", key: "home" },
  { href: "/works", label: "КЕЙСЫ", mobileLabel: "Кейсы", key: "works", matchPrefix: true },
  { href: "/archives", label: "ГАЛЕРЕЯ", mobileLabel: "Галерея", key: "archives" },
  { href: "/contact", label: "КОНТАКТЫ", mobileLabel: "Контакты", key: "contact" },
];

/**
 * Определяет, активна ли ссылка навигации на текущей странице.
 *
 * @param {Object} link - Объект ссылки из NAV_LINKS
 * @param {string} pageName - Имя текущей страницы (data-page)
 * @returns {boolean}
 */
export function isLinkActive(link, pageName) {
  if (link.matchPrefix) {
    return pageName === link.key || pageName?.startsWith('cases/');
  }
  return pageName === link.key;
}
