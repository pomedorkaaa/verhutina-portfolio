import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout title="Галерея" pageName="archives">
      
        {/* ARCHIVES PAGE */}
    <section className="min-h-screen pt-28 pb-20 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-16"
          data-split-text>The archives</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[26px]">
          <div className="archive-item group overflow-hidden aspect-square bg-bg-alt" data-reveal-up>
            <img src="/assets/images/futurist.webp" alt="001"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div className="archive-item group overflow-hidden aspect-square bg-bg-alt" data-reveal-up>
            <img src="/assets/images/tierra-viva.webp" alt="002"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div className="archive-item group overflow-hidden aspect-square bg-bg-alt" data-reveal-up>
            <img src="/assets/images/casa-nomad.webp" alt="003"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div className="archive-item group overflow-hidden aspect-square bg-bg-alt" data-reveal-up>
            <img src="/assets/images/alba.webp" alt="004"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div className="archive-item group overflow-hidden aspect-square bg-bg-alt" data-reveal-up>
            <img src="/assets/images/verhutina.webp" alt="005"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div className="archive-item group overflow-hidden aspect-square bg-bg-alt" data-reveal-up>
            <img src="/assets/images/tierra-viva.webp" alt="006"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div className="archive-item group overflow-hidden aspect-square bg-bg-alt" data-reveal-up>
            <img src="/assets/images/futurist.webp" alt="007"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div className="archive-item group overflow-hidden aspect-square bg-bg-alt" data-reveal-up>
            <img src="/assets/images/casa-nomad.webp" alt="008"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    
      
    </Layout>
  );
}
