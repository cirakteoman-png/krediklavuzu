'use client';

import { useState } from 'react';
import BankLogo from '@/components/BankLogo';
import { KONUT_TEKLIFLER, getBankById, formatCurrency, calcTaksit } from '@/lib/data';

export default function KonutTab() {
  const [deger, setDeger]     = useState(5000000);
  const [pesinat, setPesinat] = useState(1000000);
  const [vade, setVade]       = useState(120);
  const [faiz, setFaiz]       = useState(2.89);
  const [result, setResult]   = useState<{ taksit: number; kredi: number; toplam: number } | null>(null);

  function hesapla() {
    const kredi  = deger - pesinat;
    const taksit = calcTaksit(kredi, faiz, vade);
    setResult({ taksit, kredi, toplam: taksit * vade });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-5">Konut Kredisi Hesaplama</h3>
        <div className="space-y-4">
          <label className="block">
            <span className="text-xs font-semibold text-gray-700 mb-1.5 block">Konut Değeri</span>
            <div className="relative">
              <input type="number" value={deger} onChange={e => setDeger(+e.target.value)} step={100000}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-green-500 pr-8" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-semibold">₺</span>
            </div>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-gray-700 mb-1.5 block">Peşinat (%20 min.)</span>
            <div className="relative">
              <input type="number" value={pesinat} onChange={e => setPesinat(+e.target.value)} step={100000}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-green-500 pr-8" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-semibold">₺</span>
            </div>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-gray-700 mb-1.5 block">Vade</span>
            <select value={vade} onChange={e => setVade(+e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-green-500">
              <option value={60}>5 Yıl (60 ay)</option>
              <option value={120}>10 Yıl (120 ay)</option>
              <option value={180}>15 Yıl (180 ay)</option>
              <option value={240}>20 Yıl (240 ay)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-gray-700 mb-1.5 block">Aylık Faiz</span>
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
              <span className="text-gray-500 text-sm">Kredi Tutarı</span>
              <span className="font-bold text-green-800">{formatCurrency(result.kredi)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Toplam Geri Ödeme</span>
              <span className="font-bold text-green-800">{formatCurrency(result.toplam)}</span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-green-50 rounded-xl p-7 border border-green-200">
        <h3 className="font-bold text-gray-900 mb-4">Konut Kredisi — En İyi Teklifler</h3>
        <div className="space-y-3">
          {KONUT_TEKLIFLER.slice(0, 4).map(t => {
            const bank = getBankById(t.bankId)!;
            return (
              <div key={t.bankId} className="bg-white rounded-lg p-3.5 flex items-center justify-between border border-gray-200">
                <div className="flex items-center gap-3">
                  <BankLogo bankId={t.bankId} size="sm" />
                  <div>
                    <div className="font-semibold text-sm">{bank.name}</div>
                    <div className="text-xs text-gray-400">{vade} ay • %20 peşinat</div>
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
