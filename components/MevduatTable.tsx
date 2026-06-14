'use client';

import { useState } from 'react';
import BankLogo from './BankLogo';
import Badge from './Badge';
import { MEVDUAT_TEKLIFLER, getBankById, formatCurrency } from '@/lib/data';

export default function MevduatTable() {
  const [vade, setVade] = useState<1 | 3 | 6 | 12>(3);
  const filtered = MEVDUAT_TEKLIFLER.filter(t => t.vade === vade);

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {([1, 3, 6, 12] as const).map(v => (
          <button key={v} onClick={() => setVade(v)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors
              ${vade === v ? 'bg-ink border-ink text-cream' : 'bg-surface border-line text-ink-soft hover:border-brand hover:text-brand'}`}>
            {v} Ay
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-surface rounded-xl shadow-sm overflow-hidden border-separate border-spacing-0 border border-line">
          <thead>
            <tr className="bg-cream">
              {['Banka', 'Yıllık Faiz ↓', 'Min. Tutar', '100.000 ₺ Net Getiri', ''].map(h => (
                <th key={h} className="px-5 py-3 text-left text-xs font-bold text-ink-soft uppercase tracking-wider border-b border-line">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((t, i) => {
              const bank      = getBankById(t.bankId)!;
              const brutGetiri = 100000 * (t.yillikFaiz / 100) * (t.vade / 12);
              const netGetiri  = brutGetiri * 0.85;
              return (
                <tr key={`${t.bankId}-${t.vade}`}
                  className={`hover:bg-brand/5 transition-colors ${i !== filtered.length - 1 ? 'border-b border-line' : ''}`}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <BankLogo bankId={t.bankId} />
                      <div>
                        <div className="font-semibold text-sm">
                          {bank.name}
                          {t.badge && <Badge type={t.badge} />}
                        </div>
                        <div className="text-xs text-ink-soft">{bank.type === 'devlet' ? 'Devlet' : 'Özel'} banka</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-bold text-brand text-lg">%{t.yillikFaiz.toFixed(2)}</div>
                  </td>
                  <td className="px-5 py-4 font-semibold text-sm">{formatCurrency(t.minTutar)}</td>
                  <td className="px-5 py-4">
                    <div className="font-bold text-brand-dark">{formatCurrency(netGetiri)}</div>
                    <div className="text-xs text-ink-soft">stopaj sonrası net</div>
                  </td>
                  <td className="px-5 py-4">
                    <button className="bg-ink hover:opacity-90 text-cream text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
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
