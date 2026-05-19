import Layout from "../../components/Layout";

export default function Page() {
  return (
    <Layout title="FUTURIST" pageName="case-futurist">

      <section className="min-h-screen pt-28 pb-12 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase mb-2"
            data-split-text>FUTURIST</h1>
          <p className="text-[16px] font-medium tracking-tight-custom text-muted mb-12" data-reveal-up>Авторский ресторан</p>

          <div className="overflow-hidden" data-reveal-up>
            <img src="/assets/images/cases/section/1.webp" alt="FUTURIST"
              className="w-full h-full object-cover case-hero-parallax" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mt-12 lg:mt-24">
            <div className="lg:col-span-8 space-y-12" data-reveal-up>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">Задача</h3>
                <p className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4] whitespace-pre-wrap">Продвижение бренда через Instagram*: повышение узнаваемости, рост подписчиков и вовлеченности (ER/охваты), а также отражение концепции ресторана в едином стиле и регулярное попадание в рекомендации (посты/Reels).</p>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">Роль</h3>
                <p className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4] whitespace-pre-wrap">SMM & продакшн: организация и курирование фото/видео-съемок с фотографом и видеографом, генерация и адаптация трендовых идей под бренд.

                  Influence: подбор и работа с лидерами мнений для расширения охвата и привлечения новой аудитории.</p>
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom mb-4 text-primary">Результат</h3>
                <p className="text-[16px] font-medium tracking-tight-custom text-muted leading-[1.4] whitespace-pre-wrap">Сформирован гармоничный визуальный стиль аккаунта, подчеркивающий концепцию ресторана.
                  Налажено сотрудничество с лидерами мнений: от 4 блогеров в месяц.</p>
                <p className="text-[13px] font-normal tracking-tight-custom text-muted/40 mt-8">*деятельность Meta признана экстремистской в РФ — работа велась с учётом локальных требований.</p>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6 lg:pl-10" data-reveal-up>
              <div>
                <p className="text-[32px] md:text-[40px] font-medium tracking-tighter-custom leading-[1.1] mb-1">+150–200</p>
                <p className="text-[14px] font-normal tracking-tight-custom text-muted">Стабильный рост подписчиков в месяц</p>
              </div>
              <div>
                <p className="text-[32px] md:text-[40px] font-medium tracking-tighter-custom leading-[1.1] mb-1">~17,8k, пик 129k.</p>
                <p className="text-[14px] font-normal tracking-tight-custom text-muted">Охват Reels и публикаций в среднем</p>
              </div>
              <div>
                <p className="text-[32px] md:text-[40px] font-medium tracking-tighter-custom leading-[1.1] mb-1">~1,8%</p>
                <p className="text-[14px] font-normal tracking-tight-custom text-muted">ER Reels на ключевых постах (до 2 014 сохранений, до 1 513 репостов)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-tighter-custom uppercase"
              data-reveal-up>More projects</h2>
            <a href="/works"
              className="text-[15px] font-normal tracking-tight-custom uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
              data-reveal-up>See all works</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[26px]">

            <a href="/cases/maison" className="case-card group block relative" data-case-card data-reveal-up>
              <div className="overflow-hidden">
                <img src="/assets/images/cases/2-maison.webp" alt="MAISON ROUGE"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy" />
              </div>
              <div className="mt-4">
                <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">MAISON ROUGE</h3>
                <p className="text-muted text-[14px] mt-1">Премиальный рестоклуб</p>
              </div>
            </a>
            <a href="/cases/mouse" className="case-card group block relative" data-case-card data-reveal-up>
              <div className="overflow-hidden">
                <img src="/assets/images/cases/3-mouse.webp" alt="Mouse House"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy" />
              </div>
              <div className="mt-4">
                <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">Mouse House</h3>
                <p className="text-muted text-[14px] mt-1">Семейный ресторан и клуб</p>
              </div>
            </a>
            <a href="/cases/zavod" className="case-card group block relative" data-case-card data-reveal-up>
              <div className="overflow-hidden">
                <img src="/assets/images/cases/4-zavod.webp" alt="ZAVOD COFFEE"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy" />
              </div>
              <div className="mt-4">
                <h3 className="text-[15px] font-medium tracking-tighter-custom uppercase">ZAVOD COFFEE</h3>
                <p className="text-muted text-[14px] mt-1">Обжарщик кофе</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}