import type { Metadata } from 'next';
import { SSS } from '@/lib/content/sss';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular (SSS)',
  description:
    'KrediKlavuzu, kredi, mevduat ve kredi kartı hakkında en çok merak edilen soruların yanıtları. Başvuru, faiz, stopaj ve daha fazlası.',
  alternates: { canonical: '/sss' },
};

export default function SSSPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Yardım Merkezi"
        title="Sık Sorulan Sorular"
        desc="Aklına takılanları derledik. Aradığını bulamazsan İletişim sayfasından bize yazabilirsin."
      />

      <section className="px-4 sm:px-6 py-14 pb-20">
        <div className="max-w-3xl mx-auto space-y-12">
          {SSS.map((group) => (
            <Reveal key={group.category}>
              <div>
                <h2 className="text-2xl font-bold text-ink mb-5">{group.category}</h2>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-2xl bg-surface border border-line px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold font-display text-ink list-none">
                        {item.q}
                        <span className="shrink-0 text-brand text-xl leading-none transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-ink-soft leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
