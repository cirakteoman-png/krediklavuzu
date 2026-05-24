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
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-2">Hızlı Hesaplama</p>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Aylık ödemenizi hesaplayın</h2>
        <p className="text-gray-500 mb-8">Kredi tutarı, vade ve faiz oranı girin — anında hesaplama yapın.</p>

        {/* Tabs */}
        <div className="flex border-b-2 border-gray-200 mb-8 gap-1">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-0.5 transition-colors whitespace-nowrap
                ${active === tab.key
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'}`}
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

        <div className="mt-6 text-center">
          <Link
            href={currentTab.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
          >
            Tüm teklifleri gör →
          </Link>
        </div>
      </div>
    </section>
  );
}
