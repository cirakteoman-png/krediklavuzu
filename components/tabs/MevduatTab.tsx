'use client';

import { useState } from 'react';
import BankLogo from '@/components/BankLogo';
import { MEVDUAT_TEKLIFLER, getBankById, formatCurrency } from '@/lib/data';

export default function MevduatTab() {
  const [tutar, setTutar] = useState(500000);
  const [vade, setVade]   = useState<1 | 3 | 6 | 12>(3);
  const [faiz, setFaiz]   = useState(52);
  const [result, setResult] = useState<{ brut: number; stopaj: number; net: number; toplam: number } | null>(null);

  function hesapla() {
    const brut   = tutar * (faiz / 100) * (vade / 12);
    const stopaj = brut * 0.15;
    const net    = brut - stopaj;
    setResult({ brut, stopaj, net, toplam: tutar + net });
  }

  const filtered = MEVDUAT_TEKLIFLER.filter(t => t.vade === vade).slice(0, 4);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-surface rounded-xl p-7 shadow-sm border border-line">
        <h3 className="font-bold text-ink mb-5">Mevduat Getiri Hesaplama</h3>
        <div className="space-y-4">
          <label className="block">
            <span className="text-xs font-semibold text-ink mb-1.5 block">Birikim Tutarı</span>
            <div className="relative">
              <input type="number" value={tutar} onChange={e => setTutar(+e.target.value)} step={10000}
                className="w-full border border-line rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-brand pr-8" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-soft font-semibold">₺</span>
            </div>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-ink mb-1.5 block">Vade</span>
            <select value={vade} onChange={e => setVade(+e.target.value as 1|3|6|12)}
              className="w-full border border-line rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-brand">
              <option value={1}>1 Ay</option>
              <option value={3}>3 Ay</option>
              <option value={6}>6 Ay</option>
              <option value={12}>12 Ay</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-ink mb-1.5 block">Yıllık Faiz Oranı</span>
            <div className="relative">
              <input type="number" value={faiz} onChange={e => setFaiz(+e.target.value)} step={0.5}
                className="w-full border border-line rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-brand pr-8" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-soft font-semibold">%</span>
            </div>
          </label>
          <button onClick={hesapla}
            className="w-full bg-ink hover:opacity-90 text-cream font-bold py-3 rounded-lg transition-colors">
            Hesapla
          </button>
        </div>
        {result && (
          <div className="mt-4 bg-brand/5 border border-brand/20 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-ink-soft text-sm">Brüt Getiri</span>
              <span className="text-xl font-extrabold text-brand">{formatCurrency(result.brut)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-ink-soft text-sm">Stopaj (%15)</span>
              <span className="font-bold text-red-600">-{formatCurrency(result.stopaj)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-ink-soft text-sm">Net Getiri</span>
              <span className="font-bold text-brand-dark">{formatCurrency(result.net)}</span>
            </div>
            <div className="flex justify-between items-center border-t border-brand/20 pt-2 mt-1">
              <span className="text-ink text-sm font-semibold">Toplam (Net)</span>
              <span className="font-extrabold text-brand-dark">{formatCurrency(result.toplam)}</span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-brand/5 rounded-xl p-7 border border-brand/20">
        <h3 className="font-bold text-ink mb-4">En Yüksek Mevduat Faizleri — {vade} Ay</h3>
        <div className="space-y-3">
          {filtered.map(t => {
            const bank = getBankById(t.bankId)!;
            return (
              <div key={`${t.bankId}-${t.vade}`} className="bg-surface rounded-lg p-3.5 flex items-center justify-between border border-line">
                <div className="flex items-center gap-3">
                  <BankLogo bankId={t.bankId} size="sm" />
                  <div>
                    <div className="font-semibold text-sm">{bank.name}</div>
                    <div className="text-xs text-ink-soft">{vade} ay • min. {formatCurrency(t.minTutar)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-brand">%{t.yillikFaiz.toFixed(2)}</div>
                  <div className="text-xs text-ink-soft">yıllık</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
