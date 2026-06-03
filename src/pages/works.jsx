import Layout from "@/components/Layout";
import CaseCard from "@/components/CaseCard";
import casesData from "@data/cases.json";

export default function Page() {
  return (
    <Layout title="Кейсы" pageName="works">

      {/* WORKS PAGE */}
      <section className="min-h-screen pt-28 pb-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-6"
            data-split-text>КЕЙСЫ</h1>
          <p className="text-[15px] font-normal tracking-tight-custom uppercase text-muted mb-12" data-reveal-up>
            Все кейсы
          </p>

          <div className="cases-grid grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[26px]" id="cases-grid">
            {casesData.map((project) => (
              <CaseCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
