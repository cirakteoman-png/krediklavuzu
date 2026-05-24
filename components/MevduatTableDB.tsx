'use client';

import { useState } from 'react';
import BankLogo from './BankLogo';
import Badge from './Badge';
import { formatCurrency } from '@/lib/data';

type MevduatRow = {
  bank_id: string;
  vade: number;
  yillik_faiz: number;
  min_tutar: number;
  badge: 'best' | 'low' | 'new' | null;
  banks: { name: string; type: string } | null;
};

export default function MevduatTableDB({ mevduat }: { mevduat: MevduatRow[] }) {
  const [vade, setVade] = useState(3);
  const filtered = mevduat.filter(m => m.vade === vade);

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {[1, 3, 6, 12].map(v => (
          <button key={v} onClick={() => setVade(v)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors
              ${vade === v ? 'bg-green-600 border-green-600 text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700'}`}>
            {v} Ay
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-separate border-spacing-0 border border-gray-100">
          <thead>
            <tr className="bg-gray-50">
              {['Banka', 'Yıllık Faiz ↓', 'Min. Tutar', '100.000 ₺ Net Getiri', ''].map(h => (
                <th key={h} className="px-5 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-200">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((m, i) => {
              const netGetiri = 100000 * (m.yillik_faiz / 100) * (m.vade / 12) * 0.85;
              return (
                <tr key={`${m.bank_id}-${m.vade}-${i}`}
                  className={`hover:bg-green-50 transition-colors ${i !== filtered.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <BankLogo bankId={m.bank_id} />
                      <div>
                        <div className="font-semibold text-sm">
                          {m.banks?.name}
                          {m.badge && <Badge type={m.badge} />}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">{m.banks?.type} banka</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-bold text-green-700 text-lg">%{m.yillik_faiz.toFixed(2)}</div>
                  </td>
                  <td className="px-5 py-4 font-semibold text-sm">{formatCurrency(m.min_tutar)}</td>
                  <td className="px-5 py-4">
                    <div className="font-bold text-green-800">{formatCurrency(netGetiri)}</div>
                    <div className="text-xs text-gray-400">stopaj sonrası net</div>
                  </td>
                  <td className="px-5 py-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                      Hesap Aç
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
