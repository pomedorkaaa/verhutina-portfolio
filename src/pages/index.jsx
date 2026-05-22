import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MoreProjects from "@/components/MoreProjects";
import casesData from "@data/cases.json";

export default function Page() {
  return (
    <Layout title="" pageName="home">

      {/* HERO */}
      <HeroSection />

      {/* DIVIDER */}
      <div className="w-full h-px bg-bg-alt"></div>

      {/* ABOUT */}
      <AboutSection />

      {/* WORKS */}
      <MoreProjects
        projects={casesData}
        title="КЕЙСЫ"
        linkText="ВСЕ КЕЙСЫ"
        linkHref="/works"
        columns={2}
      />

    </Layout>
  );
}
