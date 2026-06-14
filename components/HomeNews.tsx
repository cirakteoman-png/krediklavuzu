import Link from 'next/link';
import { latestNews } from '@/lib/content/haberler';
import Reveal from './Reveal';
import NewsBox from './NewsBox';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });
}

export default function HomeNews() {
  const featured = latestNews(3);

  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs font-bold font-display text-brand uppercase tracking-[0.2em] mb-3">Gündem</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink leading-tight mb-10">Piyasadan haberler</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Öne çıkan haberler */}
          <div className="lg:col-span-2 space-y-4">
            {featured.map((n, i) => (
              <Reveal key={n.slug} delay={(i + 1) as 1 | 2 | 3}>
                <Link
                  href={`/haber/${n.slug}`}
                  className="group flex flex-col rounded-3xl bg-surface border border-line p-6 transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold font-display text-brand-dark">
                      {n.category}
                    </span>
                    <span className="text-xs text-ink-soft">{formatDate(n.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ink leading-snug group-hover:text-brand-dark transition-colors">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{n.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Sağ kutu */}
          <div className="lg:col-span-1">
            <Reveal delay={1}>
              <NewsBox limit={6} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
