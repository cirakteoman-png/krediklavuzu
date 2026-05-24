'use client';

import { useState } from 'react';
import BankLogo from '@/components/BankLogo';
import { IHTIYAC_TEKLIFLER, getBankById, formatCurrency, calcTaksit } from '@/lib/data';

export default function IhtiyacTab() {
  const [tutar, setTutar]   = useState(100000);
  const [vade, setVade]     = useState(24);
  const [faiz, setFaiz]     = useState(3.89);
  const [result, setResult] = useState<{ taksit: number; toplam: number; faizTotal: number } | null>(null);

  function hesapla() {
    const taksit    = calcTaksit(tutar, faiz, vade);
    const toplam    = taksit * vade;
    const faizTotal = toplam - tutar;
    setResult({ taksit, toplam, faizTotal });
  }

  const top4 = IHTIYAC_TEKLIFLER.slice(0, 4);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Calculator */}
      <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-5">İhtiyaç Kredisi Hesaplama</h3>
        <div className="space-y-4">
          <label className="block">
            <span className="text-xs font-semibold text-gray-700 mb-1.5 block">Kredi Tutarı</span>
            <div className="relative">
              <input type="number" value={tutar} onChange={e => setTutar(+e.target.value)} min={1000} step={1000}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-green-500 pr-8" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-semibold">₺</span>
            </div>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-gray-700 mb-1.5 block">Vade</span>
            <select value={vade} onChange={e => setVade(+e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-green-500">
              {[12, 24, 36, 48, 60].map(v => <option key={v} value={v}>{v} Ay</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-gray-700 mb-1.5 block">Aylık Faiz Oranı</span>
            <div className="relative">
              <input type="number" value={faiz} onChange={e => setFaiz(+e.target.value)} step={0.01}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-green-500 pr-8" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-semibold">%</span>
            </div>
          </label>
          <button onClick={hesapla}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors">
            Hesapla
          </button>
        </div>

        {result && (
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Aylık Taksit</span>
              <span className="text-xl font-extrabold text-green-700">{formatCurrency(result.taksit)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Toplam Geri Ödeme</span>
              <span className="font-bold text-green-800">{formatCurrency(result.toplam)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Toplam Faiz</span>
              <span className="font-bold text-green-800">{formatCurrency(result.faizTotal)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Top offers */}
      <div className="bg-green-50 rounded-xl p-7 border border-green-200">
        <h3 className="font-bold text-gray-900 mb-4">En Düşük Faizli Teklifler</h3>
        <div className="space-y-3">
          {top4.map(t => {
            const bank = getBankById(t.bankId)!;
            return (
              <div key={t.bankId} className="bg-white rounded-lg p-3.5 flex items-center justify-between border border-gray-200">
                <div className="flex items-center gap-3">
                  <BankLogo bankId={t.bankId} size="sm" />
                  <div>
                    <div className="font-semibold text-sm">{bank.name}</div>
                    <div className="text-xs text-gray-400">{vade} ay • {formatCurrency(tutar)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-700">%{t.aylikFaiz.toFixed(2)}</div>
                  <div className="text-xs text-gray-400">aylık</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
