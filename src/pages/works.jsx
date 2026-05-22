import Layout from "../components/Layout";
import CaseCard from "../components/CaseCard";
import CaseFilters from "../components/CaseFilters";
import casesData from "../../data/cases.json";

export default function Page() {
  return (
    <Layout title="Кейсы" pageName="works">

      {/* WORKS PAGE */}
      <section className="min-h-screen pt-28 pb-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-12"
            data-split-text>All works</h1>

          {/* FILTERS */}
          <CaseFilters />

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
