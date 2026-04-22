import { Head } from "minista";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/css/global.css";

export default function Layout({ title, pageName = "home", children }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }} bodyAttributes={{ className: "bg-bg text-primary font-sans antialiased overflow-x-hidden", "data-page": pageName }}>
        <title>{title ? `${title} — ВЕРХУТИНА МАРИЯ` : 'ВЕРХУТИНА МАРИЯ — SMM Manager'}</title>
        <meta name="description" content="SMM-менеджер и креативный менеджер с опытом работы в HoReCa." />
        <meta name="color-scheme" content="dark" />
        <link rel="stylesheet" href="/assets/fonts/Inter/font-Inter.css" />
        
        {/* Scripts for GSAP and animations */}
        <script defer src="/assets/js/vendor/gsap.min.js"></script>
        <script defer src="/assets/js/vendor/ScrollTrigger.min.js"></script>
        <script defer src="/assets/js/main.js"></script>
        <script defer src="/assets/js/vendor/checkVendorUpdates.js"></script>
      </Head>
      <Header pageName={pageName} />
      <main id="page-content">
        {children}
        <Footer />
      </main>
    </>
  );
}
