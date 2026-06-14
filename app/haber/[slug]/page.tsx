import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { NEWS, getNews } from '@/lib/content/haberler';
import Reveal from '@/components/Reveal';
import ContentBody from '@/components/ContentBody';
import NewsBox from '@/components/NewsBox';

type Params = { slug: string };

const SITE = 'https://kredikilavuzu.com';

export function generateStaticParams(): Params[] {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = getNews(slug);
  if (!news) return { title: 'Haber bulunamadı' };
  return {
    title: news.title,
    description: news.summary,
    alternates: { canonical: `/haber/${news.slug}` },
    openGraph: {
      title: news.title,
      description: news.summary,
      type: 'article',
      publishedTime: news.date,
    },
  };
}

export default async function HaberPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const news = getNews(slug);
  if (!news) notFound();

  const formattedDate = new Date(news.date).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // SEO: NewsArticle yapılandırılmış veri (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: news.title,
    description: news.summary,
    datePublished: news.date,
    dateModified: news.date,
    articleSection: news.category,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/haber/${news.slug}` },
    publisher: { '@type': 'Organization', name: 'KrediKlavuzu' },
  };

  return (
    <div className="px-4 sm:px-6 pt-10 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Haber içeriği */}
        <article className="lg:col-span-2">
          <Reveal>
            <Link href="/haberler" className="text-sm font-semibold font-display text-ink-soft hover:text-ink">
              ← Tüm haberler
            </Link>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold font-display text-brand-dark">
                {news.category}
              </span>
              <span className="text-sm text-ink-soft">{formattedDate}</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-ink leading-[1.08]">{news.title}</h1>
            <p className="mt-4 text-lg text-ink-soft leading-relaxed">{news.summary}</p>
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-8">
              <ContentBody blocks={news.blocks} />
            </div>
          </Reveal>

          <p className="mt-8 rounded-2xl bg-cream-deep border border-line px-4 py-3 text-xs text-ink-soft">
            Bu haber temsilî (örnek) içeriktir; gerçek piyasa verisi veya haber kaynağı değildir.
            Bilgilendirme amaçlıdır, yatırım tavsiyesi niteliği taşımaz.
          </p>
        </article>

        {/* Sağ rail */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <NewsBox limit={6} exclude={news.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
