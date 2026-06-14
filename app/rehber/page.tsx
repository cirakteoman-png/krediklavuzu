import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES } from '@/lib/content/rehber';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Finans Rehberi — Kredi, Mevduat ve Kart Rehberleri',
  description:
    'Kredi, mevduat ve kredi kartı hakkında bilmeniz gereken her şey. Adım adım rehberler ve pratik ipuçlarıyla doğru finansal kararı verin.',
  alternates: { canonical: '/rehber' },
};

export default function RehberPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Finans Rehberi"
        title="Rehberler"
        desc="Kredi, mevduat ve kredi kartında işinize yarayacak, sade anlatımlı rehberler."
      />

      <section className="px-4 sm:px-6 py-14 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <Link
                href={`/rehber/${a.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-surface border border-line p-7 transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold font-display text-brand-dark">
                  {a.category}
                </span>
                <h2 className="mt-4 text-xl font-bold text-ink leading-snug group-hover:text-brand-dark transition-colors">
                  {a.title}
                </h2>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">{a.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold font-display text-ink">
                  Devamını oku → <span className="text-ink-soft font-normal">{a.readMin} dk</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
