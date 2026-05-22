import Layout from "../components/Layout";
import ArchiveItem from "../components/ArchiveItem";

/**
 * Данные элементов галереи.
 */
const ARCHIVE_ITEMS = [
  { src: "/assets/images/futurist.webp", alt: "001" },
  { src: "/assets/images/tierra-viva.webp", alt: "002" },
  { src: "/assets/images/casa-nomad.webp", alt: "003" },
  { src: "/assets/images/alba.webp", alt: "004" },
  { src: "/assets/images/verhutina.webp", alt: "005" },
  { src: "/assets/images/tierra-viva.webp", alt: "006" },
  { src: "/assets/images/futurist.webp", alt: "007" },
  { src: "/assets/images/casa-nomad.webp", alt: "008" },
];

export default function Page() {
  return (
    <Layout title="Галерея" pageName="archives">

      {/* ARCHIVES PAGE */}
      <section className="min-h-screen pt-28 pb-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-16"
            data-split-text>The archives</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[26px]">
            {ARCHIVE_ITEMS.map((item) => (
              <ArchiveItem key={item.alt} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
