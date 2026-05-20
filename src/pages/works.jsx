import Layout from "../components/Layout";
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
          <div className="flex flex-wrap gap-3 mb-12" data-reveal-up>
            <button
              className="filter-btn active text-[15px] font-normal tracking-tight-custom uppercase text-primary/80 border-b border-primary/30 pb-1 hover:border-primary transition-colors"
              data-filter="all">All works</button>
            <button
              className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
              data-filter="art-direction">Art Direction</button>
            <button
              className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
              data-filter="brand-strategy">Brand Strategy</button>
            <button
              className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
              data-filter="digital">Digital</button>
            <button
              className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
              data-filter="marketing-materials">Marketing Materials</button>
            <button
              className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
              data-filter="packaging">Packaging</button>
            <button
              className="filter-btn text-[15px] font-normal tracking-tight-custom uppercase text-muted border-b border-transparent pb-1 hover:border-primary/30 transition-colors"
              data-filter="visual-identity">Visual Identity</button>
          </div>

          <div className="cases-grid grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[26px]" id="cases-grid">
            {casesData.map((project) => (
              <a
                key={project.slug}
                href={`/cases/${project.slug}`}
                className="case-card group block relative"
                data-case-card
                data-tags={project.tags ? project.tags.join(",") : ""}
                data-reveal-up
              >
                <div className="overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">
                    {project.title}
                  </h3>
                  <p className="text-muted text-[14px] mt-1">{project.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}


    </Layout>
  );
}
