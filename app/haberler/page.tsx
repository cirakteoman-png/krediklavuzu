import type { Metadata } from 'next';
import Link from 'next/link';
import { latestNews } from '@/lib/content/haberler';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Finans Haberleri — Faiz, Kredi, Mevduat ve Döviz',
  description:
    'Faiz, kredi, mevduat, döviz ve altın gündemine dair güncel haberler. Finansal kararlarınızı etkileyen gelişmeleri takip edin.',
  alternates: { canonical: '/haberler' },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function HaberlerPage() {
  const items = latestNews();

  return (
    <div>
      <PageHeader
        eyebrow="Gündem"
        title="Finans Haberleri"
        desc="Faiz, kredi, mevduat ve döviz gündemine dair güncel gelişmeler tek sayfada."
      />

      <section className="px-4 sm:px-6 py-14 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((n, i) => (
            <Reveal key={n.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <Link
                href={`/haber/${n.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-surface border border-line p-7 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold font-display text-brand-dark">
                    {n.category}
                  </span>
                  <span className="text-xs text-ink-soft">{formatDate(n.date)}</span>
                </div>
                <h2 className="text-lg font-bold text-ink leading-snug group-hover:text-brand-dark transition-colors">
                  {n.title}
                </h2>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">{n.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold font-display text-ink">
                  Haberi oku →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="max-w-6xl mx-auto mt-10 text-xs text-ink-soft">
          * Bu sayfadaki haberler temsilî (örnek) içeriktir; gerçek piyasa verisi veya haber kaynağı değildir.
        </p>
      </section>
    </div>
  );
}
