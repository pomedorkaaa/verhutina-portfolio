import Layout from "@/components/Layout";
import BloggersTable from "@/components/BloggersTable";
import CaseHero from "@/components/case/CaseHero";
import CaseDetails from "@/components/case/CaseDetails";
import CaseStats from "@/components/case/CaseStats";
import CaseMedia from "@/components/case/CaseMedia";
import MoreProjects from "@/components/MoreProjects";
import { getAspectRatio } from "@/utils/getAspectRatio";
import casesData from "@data/cases.json";

export async function getStaticData() {
  const processedCases = await Promise.all(
    casesData.map(async (c) => {
      const mediaBlocks = { ...c.mediaBlocks };

      if (mediaBlocks.row1) {
        mediaBlocks.row1 = await Promise.all(
          mediaBlocks.row1.map(async (item) => {
            const ratio = item.aspectRatio || await getAspectRatio(item.src);
            return { ...item, aspectRatio: ratio };
          })
        );
      }

      if (mediaBlocks.row2) {
        const ratio = mediaBlocks.row2.aspectRatio || await getAspectRatio(mediaBlocks.row2.src);
        mediaBlocks.row2 = { ...mediaBlocks.row2, aspectRatio: ratio };
      }

      return { ...c, mediaBlocks };
    })
  );

  return processedCases.map((item) => ({
    props: {
      currentCase: item,
      allCases: processedCases,
    },
    paths: { id: item.slug },
  }));
}

export default function Page({ currentCase, allCases }) {
  const hasStats = currentCase.stats && currentCase.stats.length > 0;

  // Первые 3 проекта, отличные от текущего
  const moreProjects = allCases
    .filter((c) => c.slug !== currentCase.slug)
    .slice(0, 3);

  return (
    <Layout title={currentCase.title} pageName={`case-${currentCase.slug}`}>
      <section className="min-h-screen pt-28 pb-12 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <CaseHero
            title={currentCase.title}
            subtitle={currentCase.subtitle}
            coverSection={currentCase.cover_section}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mt-12 lg:mt-24">
            <CaseDetails
              task={currentCase.task}
              role={currentCase.role}
              result={currentCase.result}
              disclaimer={currentCase.disclaimer}
              hasStats={hasStats}
            />
            <CaseStats
              stats={currentCase.stats}
              statsTitle={currentCase.statsTitle}
            />
          </div>

          {/* Таблица блогеров */}
          <BloggersTable bloggers={currentCase.bloggers} />
        </div>
      </section>

      <CaseMedia mediaBlocks={currentCase.mediaBlocks} />

      <MoreProjects projects={moreProjects} />
    </Layout>
  );
}
