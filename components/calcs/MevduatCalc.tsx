'use client';

import { useState } from 'react';
import BankLogo from '@/components/BankLogo';
import { formatCurrency } from '@/lib/data';

type MevduatRow = { bank_id: string; vade: number; yillik_faiz: number; banks: { name: string } | null };

export default function MevduatCalc({ mevduat }: { mevduat: MevduatRow[] }) {
  const [tutar, setTutar] = useState(500000);
  const [vade, setVade]   = useState(3);
  const [faiz, setFaiz]   = useState(52);
  const [result, setResult] = useState<{ brut: number; stopaj: number; net: number; toplam: number } | null>(null);

  function hesapla() {
    const brut   = tutar * (faiz / 100) * (vade / 12);
    const stopaj = brut * 0.15;
    const net    = brut - stopaj;
    setResult({ brut, stopaj, net, toplam: tutar + net });
  }

  const filtered = mevduat.filter(m => m.vade === vade).slice(0, 4);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-5">Mevduat Getiri Hesaplama</h3>
        <div className="space-y-4">
          <label className="block">
            <span className="text-xs font-semibold text-gray-700 mb-1.5 block">Birikim Tutarı</span>
            <div className="relative">
              <input type="number" value={tutar} onChange={e => setTutar(+e.target.value)} step={10000}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500 pr-8" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-semibold">₺</span>
            </div>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-gray-700 mb-1.5 block">Vade</span>
            <select value={vade} onChange={e => setVade(+e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500">
              <option value={1}>1 Ay</option>
              <option value={3}>3 Ay</option>
              <option value={6}>6 Ay</option>
              <option value={12}>12 Ay</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-gray-700 mb-1.5 block">Yıllık Faiz Oranı</span>
            <div className="relative">
              <input type="number" value={faiz} onChange={e => setFaiz(+e.target.value)} step={0.5}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-green-500 pr-8" />
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
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Brüt Getiri</span>
              <span className="text-xl font-extrabold text-green-700">{formatCurrency(result.brut)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Stopaj (%15)</span>
              <span className="font-bold text-red-600">-{formatCurrency(result.stopaj)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Net Getiri</span>
              <span className="font-bold text-green-800">{formatCurrency(result.net)}</span>
            </div>
            <div className="flex justify-between border-t border-green-200 pt-2 mt-1">
              <span className="text-gray-700 text-sm font-semibold">Toplam (Net)</span>
              <span className="font-extrabold text-green-800">{formatCurrency(result.toplam)}</span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-green-50 rounded-xl p-7 border border-green-200">
        <h3 className="font-bold text-gray-900 mb-4">En Yüksek Mevduat — {vade} Ay</h3>
        <div className="space-y-3">
          {filtered.map((m, i) => (
            <div key={`${m.bank_id}-${i}`} className="bg-white rounded-lg p-3.5 flex items-center justify-between border border-gray-200">
              <div className="flex items-center gap-3">
                <BankLogo bankId={m.bank_id} size="sm" />
                <div>
                  <div className="font-semibold text-sm">{m.banks?.name}</div>
                  <div className="text-xs text-gray-400">{vade} ay • min. {formatCurrency(m.yillik_faiz)}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-700">%{m.yillik_faiz.toFixed(2)}</div>
                <div className="text-xs text-gray-400">yıllık</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
