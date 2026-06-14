'use client';

import { useState } from 'react';
import BankLogo from '@/components/BankLogo';
import { formatCurrency, calcTaksit } from '@/lib/data';

type Teklif = { bank_id: string; aylik_faiz: number; banks: { name: string } | null };

export default function IhtiyacCalc({ teklifler }: { teklifler: Teklif[] }) {
  const [tutar, setTutar] = useState(100000);
  const [vade, setVade]   = useState(24);
  const [faiz, setFaiz]   = useState(3.89);
  const [result, setResult] = useState<{ taksit: number; toplam: number; faizTotal: number } | null>(null);

  function hesapla() {
    const taksit    = calcTaksit(tutar, faiz, vade);
    const toplam    = taksit * vade;
    setResult({ taksit, toplam, faizTotal: toplam - tutar });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-surface rounded-xl p-7 shadow-sm border border-line">
        <h3 className="font-bold text-ink mb-5">İhtiyaç Kredisi Hesaplama</h3>
        <div className="space-y-4">
          <label className="block">
            <span className="text-xs font-semibold text-ink mb-1.5 block">Kredi Tutarı</span>
            <div className="relative">
              <input type="number" value={tutar} onChange={e => setTutar(+e.target.value)} min={1000} step={1000}
                className="w-full border border-line rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-brand pr-8" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-soft font-semibold">₺</span>
            </div>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-ink mb-1.5 block">Vade</span>
            <select value={vade} onChange={e => setVade(+e.target.value)}
              className="w-full border border-line rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-brand">
              {[12, 24, 36, 48, 60].map(v => <option key={v} value={v}>{v} Ay</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-ink mb-1.5 block">Aylık Faiz Oranı</span>
            <div className="relative">
              <input type="number" value={faiz} onChange={e => setFaiz(+e.target.value)} step={0.01}
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
              <span className="text-ink-soft text-sm">Aylık Taksit</span>
              <span className="text-xl font-extrabold text-brand">{formatCurrency(result.taksit)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-ink-soft text-sm">Toplam Geri Ödeme</span>
              <span className="font-bold text-brand-dark">{formatCurrency(result.toplam)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-ink-soft text-sm">Toplam Faiz</span>
              <span className="font-bold text-brand-dark">{formatCurrency(result.faizTotal)}</span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-brand/5 rounded-xl p-7 border border-brand/20">
        <h3 className="font-bold text-ink mb-4">En Düşük Faizli Teklifler</h3>
        <div className="space-y-3">
          {teklifler.slice(0, 4).map(t => (
            <div key={t.bank_id} className="bg-surface rounded-lg p-3.5 flex items-center justify-between border border-line">
              <div className="flex items-center gap-3">
                <BankLogo bankId={t.bank_id} size="sm" />
                <div>
                  <div className="font-semibold text-sm">{t.banks?.name}</div>
                  <div className="text-xs text-ink-soft">{vade} ay • {formatCurrency(tutar)}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-brand">%{t.aylik_faiz.toFixed(2)}</div>
                <div className="text-xs text-ink-soft">aylık</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
