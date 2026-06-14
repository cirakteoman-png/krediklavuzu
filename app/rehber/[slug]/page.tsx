import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES, getArticle } from '@/lib/content/rehber';
import Reveal from '@/components/Reveal';
import ContentBody from '@/components/ContentBody';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: 'Yazı bulunamadı' };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/rehber/${article.slug}` },
    openGraph: { title: article.title, description: article.description, type: 'article' },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const formattedDate = new Date(article.updatedAt).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="px-4 sm:px-6 pt-10 pb-20">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <Link href="/rehber" className="text-sm font-semibold font-display text-ink-soft hover:text-ink">
            ← Tüm rehberler
          </Link>
          <span className="mt-6 inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold font-display text-brand-dark">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-ink leading-[1.08]">
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-ink-soft">
            Güncelleme: {formattedDate} · {article.readMin} dk okuma
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10">
            <ContentBody blocks={article.blocks} />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-12 rounded-3xl bg-ink px-7 py-8 text-center">
            <h2 className="text-xl font-bold text-cream">Hazır mısın? Teklifleri karşılaştır.</h2>
            <p className="mt-2 text-sm text-cream/60">
              50+ bankanın güncel oranlarını ücretsiz ve tarafsız karşılaştır.
            </p>
            <Link
              href="/#karsilastir"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-lime px-7 py-3.5 text-base font-semibold font-display text-ink transition-transform hover:-translate-y-0.5"
            >
              Karşılaştırmaya başla →
            </Link>
          </div>
        </Reveal>

        <p className="mt-8 text-xs text-ink-soft">
          Bu içerik bilgilendirme amaçlıdır; yatırım veya finans tavsiyesi niteliği taşımaz.
        </p>
      </div>
    </article>
  );
}
