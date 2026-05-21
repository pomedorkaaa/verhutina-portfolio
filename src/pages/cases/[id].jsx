import Layout from "../../components/Layout";
import casesData from "../../../data/cases.json";

function VideoPlayer({ src, className = "" }) {
  return (
    <div className="relative w-full h-full group video-player-container">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover cursor-pointer ${className}`}
      />
      <button
        className="video-mute-btn absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
        aria-label="Включить звук"
        title="Включить звук"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 mute-icon"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sound-icon hidden"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      </button>
    </div>
  );
}

function MediaItem({ item, className = "" }) {
  if (!item || !item.src) return null;

  if (item.type === "video") {
    return <VideoPlayer src={item.src} className={className} />;
  }

  return (
    <img
      src={item.src}
      alt="Case media"
      className={`w-full h-full object-cover ${className}`}
      loading="lazy"
    />
  );
}

export async function getStaticData() {
  const fs = await import('fs');
  const path = await import('path');
  const { exec } = await import('child_process');
  const { promisify } = await import('util');
  const execAsync = promisify(exec);

  const getAspectRatio = async (relativeSrc) => {
    const filePath = path.join(process.cwd(), 'public', relativeSrc);
    if (!fs.existsSync(filePath)) {
      return 1;
    }
    
    // 1. Через mdls (macOS)
    try {
      const { stdout } = await execAsync(`mdls -name kMDItemPixelWidth -name kMDItemPixelHeight "${filePath}"`);
      const widthMatch = stdout.match(/kMDItemPixelWidth\s*=\s*(\d+)/);
      const heightMatch = stdout.match(/kMDItemPixelHeight\s*=\s*(\d+)/);
      if (widthMatch && heightMatch) {
        const width = parseInt(widthMatch[1], 10);
        const height = parseInt(heightMatch[1], 10);
        if (width > 0 && height > 0) {
          return width / height;
        }
      }
    } catch (e) {
      // Игнорируем
    }

    // 2. Фолбек для картинок через sharp
    const ext = path.extname(filePath).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
      try {
        const { default: sharp } = await import('sharp');
        const metadata = await sharp(filePath).metadata();
        if (metadata.width && metadata.height) {
          return metadata.width / metadata.height;
        }
      } catch (e) {
        // Игнорируем
      }
    }

    return 1;
  };

  const processedCases = await Promise.all(
    casesData.map(async (c) => {
      const mediaBlocks = { ...c.mediaBlocks };
      
      if (mediaBlocks.row1) {
        mediaBlocks.row1 = await Promise.all(
          mediaBlocks.row1.map(async (item) => {
            const ratio = await getAspectRatio(item.src);
            return { ...item, aspectRatio: ratio };
          })
        );
      }
      
      if (mediaBlocks.row2) {
        const ratio = await getAspectRatio(mediaBlocks.row2.src);
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
  
  // Максимально простой рендеринг текста: чистим пробелы и сохраняем переносы
  const renderSimpleText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => (
      <span key={i} className="block mb-1 last:mb-0">
        {line.trim()}
      </span>
    ));
  };

  // Вычисляем блок "More projects": первые 3 проекта, отличные от текущего
  const moreProjects = allCases
    .filter((c) => c.slug !== currentCase.slug)
    .slice(0, 3);

  return (
    <Layout title={currentCase.title} pageName={`case-${currentCase.slug}`}>
      <section className="min-h-screen pt-28 pb-12 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h1
            className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-2"
            data-split-text
          >
            {currentCase.title}
          </h1>
          <p
            className="text-[16px] font-medium tracking-tight-custom text-muted mb-12"
            data-reveal-up
          >
            {currentCase.subtitle}
          </p>

          <div className="overflow-hidden" data-reveal-up>
            <img
              src={currentCase.cover_section}
              alt={currentCase.title}
              className="w-full h-full object-cover case-hero-parallax"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mt-12 lg:mt-24">
            <div
              className={`${
                hasStats ? "lg:col-span-8" : "lg:col-span-12"
              } space-y-12`}
              data-reveal-up
            >
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">
                  Задача
                </h3>
                <div className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4]">
                  {renderSimpleText(currentCase.task)}
                </div>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">
                  Роль
                </h3>
                <div className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4]">
                  {renderSimpleText(currentCase.role)}
                </div>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">
                  Результат
                </h3>
                <div className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4]">
                  {renderSimpleText(currentCase.result)}
                </div>
                {currentCase.disclaimer && (
                  <p className="text-[13px] font-normal tracking-tight-custom text-muted/40 mt-8">
                    {currentCase.disclaimer}
                  </p>
                )}
              </div>
            </div>

            {hasStats && (
              <div className="lg:col-span-4 space-y-6 lg:pl-10" data-reveal-up>
                {currentCase.statsTitle && (
                  <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-6 text-primary">
                    {currentCase.statsTitle}
                  </h3>
                )}
                {currentCase.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-[32px] md:text-[40px] font-medium tracking-tighter-custom leading-[1.1] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[14px] font-normal tracking-tight-custom text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {currentCase.mediaBlocks && (
        <section className="px-5 md:px-10 pb-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Первый ряд: два блока с адаптивным выравниванием Flexbox */}
            {currentCase.mediaBlocks.row1 && currentCase.mediaBlocks.row1.length > 0 && (
              <div className="flex flex-col md:flex-row gap-5 md:gap-[26px] mb-5 md:mb-[26px] items-stretch">
                {currentCase.mediaBlocks.row1.map((item, idx) => {
                  const ratio = item.aspectRatio || 1;
                  return (
                    <div
                      key={idx}
                      className="overflow-hidden bg-neutral-900/50 case-media-row-item relative"
                      style={{ '--aspect-ratio': ratio }}
                      data-reveal-up
                    >
                      <MediaItem item={item} />
                    </div>
                  );
                })}
              </div>
            )}
            
            {/* Второй ряд: один широкий блок */}
            {currentCase.mediaBlocks.row2 && currentCase.mediaBlocks.row2.src && (
              <div className="overflow-hidden w-full bg-neutral-900/50" data-reveal-up>
                <MediaItem item={currentCase.mediaBlocks.row2} />
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase"
              data-reveal-up
            >
              More projects
            </h2>
            <a
              href="/works"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
              data-reveal-up
            >
              See all works
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[26px]">
            {moreProjects.map((project) => (
              <a
                key={project.slug}
                href={`/cases/${project.slug}`}
                className="case-card group block relative"
                data-case-card
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
                  <p className="text-muted text-[14px] mt-1">
                    {project.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
