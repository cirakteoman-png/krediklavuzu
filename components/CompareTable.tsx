import BankLogo from './BankLogo';
import Badge from './Badge';
import StarRating from './StarRating';
import { getBankById, formatCurrency, calcTaksit } from '@/lib/data';
import type { KrediTeklif } from '@/lib/types';

interface Props {
  teklifler: KrediTeklif[];
  tutar?: number;
  vade?: number;
  label: string;
}

export default function CompareTable({ teklifler, tutar = 100000, vade = 24, label }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-surface rounded-xl shadow-sm overflow-hidden border-separate border-spacing-0 border border-line">
        <thead>
          <tr className="bg-cream">
            {['Banka', `Aylık Faiz ↑`, 'Aylık Taksit', 'Toplam Ödeme', 'Onay Süresi', 'Puan', ''].map(h => (
              <th key={h} className="px-5 py-3 text-left text-xs font-bold text-ink-soft uppercase tracking-wider border-b border-line">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teklifler.map((t, i) => {
            const bank   = getBankById(t.bankId)!;
            const taksit = calcTaksit(tutar, t.aylikFaiz, vade);
            const toplam = taksit * vade;
            return (
              <tr key={t.bankId} className={`hover:bg-brand/5 transition-colors ${i !== teklifler.length - 1 ? 'border-b border-line' : ''}`}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <BankLogo bankId={t.bankId} />
                    <div>
                      <div className="font-semibold text-sm">
                        {bank.name}
                        {t.badge && <Badge type={t.badge} />}
                      </div>
                      <div className="text-xs text-ink-soft capitalize">{bank.type} banka</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="font-bold text-brand text-base">%{t.aylikFaiz.toFixed(2)}</div>
                  <div className="text-xs text-ink-soft">Yıllık %{t.yillikFaiz.toFixed(2)}</div>
                </td>
                <td className="px-5 py-4 font-semibold">{formatCurrency(taksit)}</td>
                <td className="px-5 py-4 font-semibold">{formatCurrency(toplam)}</td>
                <td className="px-5 py-4">
                  <span className={`text-sm font-semibold ${t.onayIcons === 'Anında' || t.onayIcons.includes('dk') ? 'text-brand' : 'text-ink'}`}>
                    {t.onayIcons}
                  </span>
                </td>
                <td className="px-5 py-4"><StarRating rating={t.rating} /></td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <button className="border border-brand/30 text-brand hover:bg-brand/5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors mr-2">
                    + Karşılaştır
                  </button>
                  <button className="bg-ink hover:opacity-90 text-cream text-xs font-bold px-4 py-1.5 rounded-lg transition-colors">
                    Başvur
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="text-xs text-ink-soft mt-3">* {label} varsayılan olarak hesaplanmıştır. Gerçek taksit tutarları bankaya ve kredi notunuza göre değişebilir.</p>
    </div>
  );
}
