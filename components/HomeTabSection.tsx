'use client';

import { useState } from 'react';
import Link from 'next/link';
import IhtiyacTab from './tabs/IhtiyacTab';
import KonutTab from './tabs/KonutTab';
import KartTab from './tabs/KartTab';
import MevduatTab from './tabs/MevduatTab';
import type { TabKey } from '@/lib/types';

const TABS: { key: TabKey; label: string; href: string }[] = [
  { key: 'ihtiyac', label: 'İhtiyaç Kredisi', href: '/ihtiyac-kredisi' },
  { key: 'konut',   label: 'Konut Kredisi',   href: '/konut-kredisi'   },
  { key: 'kart',    label: 'Kredi Kartı',      href: '/kredi-karti'     },
  { key: 'mevduat', label: 'Mevduat',          href: '/mevduat'         },
];

export default function HomeTabSection() {
  const [active, setActive] = useState<TabKey>('ihtiyac');

  const currentTab = TABS.find(t => t.key === active)!;

  return (
    <section id="karsilastir" className="px-4 sm:px-6 py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold font-display text-brand uppercase tracking-[0.2em] mb-3">Hızlı Hesaplama</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-ink leading-tight">Aylık ödemenizi hesaplayın</h2>
        <p className="text-ink-soft mt-4 mb-10 text-lg max-w-xl">Kredi tutarı, vade ve faiz oranı girin — anında hesaplama yapın.</p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold font-display transition-colors whitespace-nowrap
                ${active === tab.key
                  ? 'bg-ink text-cream'
                  : 'bg-surface border border-line text-ink-soft hover:bg-cream-deep hover:text-ink'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab panels */}
        {active === 'ihtiyac' && <IhtiyacTab />}
        {active === 'konut'   && <KonutTab />}
        {active === 'kart'    && <KartTab />}
        {active === 'mevduat' && <MevduatTab />}

        <div className="mt-8">
          <Link
            href={currentTab.href}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold font-display text-ink hover:bg-cream-deep transition-colors"
          >
            Tüm teklifleri gör →
          </Link>
        </div>
      </div>
    </section>
  );
}
