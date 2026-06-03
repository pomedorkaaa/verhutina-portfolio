import Layout from "@/components/Layout";
import ArchiveItem from "@/components/ArchiveItem";

/**
 * Данные элементов рекомендаций.
 */
const ARCHIVE_ITEMS = [
  { src: "/assets/images/recommendations/rec1.webp", alt: "Рекомендация 1" },
  { src: "/assets/images/recommendations/rec2.webp", alt: "Рекомендация 2" },
  { src: "/assets/images/recommendations/rec3.webp", alt: "Рекомендация 3" },
  { src: "/assets/images/recommendations/rec4.webp", alt: "Рекомендация 4" },
];

export default function Page() {
  return (
    <Layout title="Рекомендации" pageName="archives">

      {/* ARCHIVES PAGE */}
      <section className="min-h-screen pt-28 pb-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-16"
            data-split-text>РЕКОМЕНДАЦИИ</h1>

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
