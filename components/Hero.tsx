import Link from 'next/link';
import Reveal from './Reveal';

const STATS = [
  { num: '50+', label: 'Banka & kurum' },
  { num: '2M+', label: 'Kullanıcı' },
  { num: '%100', label: 'Ücretsiz & tarafsız' },
];

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 pt-10 pb-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] bg-surface border border-line px-6 py-16 sm:px-14 sm:py-24">
          {/* Dekoratif yeşil-lime ışıma */}
          <div
            aria-hidden
            className="glow-brand pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-20 blur-md"
          />

          <div className="relative">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-semibold font-display">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                Faiz oranları her gün güncelleniyor
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="mt-7 max-w-3xl text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-ink">
                Sana{' '}
                <span className="rounded-lg bg-lime px-2 box-decoration-clone">en uygun</span>{' '}
                krediyi 50 bankada birden ara.
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 max-w-lg text-lg text-ink-soft">
                Kredi, mevduat ve kredi kartı tekliflerini yan yana koy. 50’den fazla banka,
                tek ekran. Tarafsız ve ücretsiz.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#karsilastir"
                  className="inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-4 text-base font-semibold font-display text-cream transition-transform hover:-translate-y-0.5"
                >
                  Karşılaştırmaya başla →
                </Link>
                <Link
                  href="#nasil-calisir"
                  className="inline-flex items-center gap-2 rounded-2xl border border-ink/20 px-7 py-4 text-base font-semibold font-display text-ink transition-colors hover:bg-cream-deep"
                >
                  Nasıl çalışır?
                </Link>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-12 flex flex-wrap gap-10 border-t border-line pt-8">
                {STATS.map(({ num, label }) => (
                  <div key={label}>
                    <div className="text-3xl font-bold font-display text-ink">{num}</div>
                    <div className="mt-1 text-sm text-ink-soft">{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
