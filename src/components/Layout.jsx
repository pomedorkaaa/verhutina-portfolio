import { Head } from "minista";
import Header from "./Header";
import Footer from "./Footer";
import "@/assets/css/global.css";

export default function Layout({ title, pageName = "home", children }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "ru", className: "overflow-x-hidden" }} bodyAttributes={{ className: "bg-bg text-primary font-sans antialiased", "data-page": pageName }}>
        <title>{title ? `${title} — ВЕРХУТИНА МАРИЯ` : 'ВЕРХУТИНА МАРИЯ — SMM Manager'}</title>
        <meta name="description" content="SMM-менеджер и креативный менеджер с опытом работы в HoReCa." />
        <meta name="color-scheme" content="dark" />
        <link rel="stylesheet" href="/assets/fonts/Inter/font-Inter.css" />
        
        {/* Вендорные библиотеки */}
        <script defer src="/assets/js/vendor/gsap.min.js?v=2"></script>
        <script defer src="/assets/js/vendor/ScrollTrigger.min.js?v=2"></script>
        <script defer src="/assets/js/vendor/lenis.min.js?v=2"></script>

        {/* Модули приложения (порядок важен — зависимости загружаются первыми) */}
        <script defer src="/assets/js/modules/smoothScroll.js?v=2"></script>
        <script defer src="/assets/js/modules/splitText.js?v=2"></script>
        <script defer src="/assets/js/modules/scrollReveal.js?v=2"></script>
        <script defer src="/assets/js/modules/pageEnter.js?v=2"></script>
        <script defer src="/assets/js/modules/navigation.js?v=2"></script>
        <script defer src="/assets/js/modules/effects.js?v=2"></script>
        <script defer src="/assets/js/modules/cursorTrail.js?v=2"></script>
        <script defer src="/assets/js/modules/pageTransitions.js?v=2"></script>

        {/* Точка входа */}
        <script defer src="/assets/js/main.js?v=2"></script>
      </Head>
      <Header pageName={pageName} />
      <main id="page-content">
        {children}
        <Footer />
      </main>
    </>
  );
}
