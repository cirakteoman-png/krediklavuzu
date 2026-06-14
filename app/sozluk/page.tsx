import type { Metadata } from 'next';
import { TERIMLER } from '@/lib/content/sozluk';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Finans Sözlüğü — Bankacılık Terimleri',
  description:
    'Anapara, stopaj, ekspertiz, anüite, ipotek ve daha fazlası. Kredi ve mevduat dünyasının terimlerini sade tanımlarla açıklıyoruz.',
  alternates: { canonical: '/sozluk' },
};

export default function SozlukPage() {
  // Türkçe sıralama ve ilk harfe göre gruplama
  const sorted = [...TERIMLER].sort((a, b) => a.term.localeCompare(b.term, 'tr'));
  const groups = new Map<string, typeof TERIMLER>();
  for (const t of sorted) {
    const letter = t.term.charAt(0).toLocaleUpperCase('tr');
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(t);
  }
  const letters = Array.from(groups.keys());

  return (
    <div>
      <PageHeader
        eyebrow="Finans Sözlüğü"
        title="Bankacılık Terimleri"
        desc="Kredi ve mevduat dünyasının sık geçen terimlerini sade tanımlarla açıkladık."
      />

      <section className="px-4 sm:px-6 py-14 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Harf navigasyonu */}
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {letters.map((l) => (
                <a
                  key={l}
                  href={`#harf-${l}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface border border-line text-sm font-semibold font-display text-ink hover:bg-ink hover:text-cream transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </Reveal>

          <div className="space-y-12">
            {letters.map((letter) => (
              <Reveal key={letter}>
                <div id={`harf-${letter}`} className="scroll-mt-24">
                  <h2 className="text-3xl font-bold text-brand mb-5">{letter}</h2>
                  <dl className="space-y-4">
                    {groups.get(letter)!.map((t) => (
                      <div key={t.term} className="rounded-2xl bg-surface border border-line px-5 py-4">
                        <dt className="font-bold font-display text-ink">{t.term}</dt>
                        <dd className="mt-1.5 text-ink-soft leading-relaxed">{t.definition}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
