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
      <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-separate border-spacing-0 border border-gray-100">
        <thead>
          <tr className="bg-gray-50">
            {['Banka', `Aylık Faiz ↑`, 'Aylık Taksit', 'Toplam Ödeme', 'Onay Süresi', 'Puan', ''].map(h => (
              <th key={h} className="px-5 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-200">
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
              <tr key={t.bankId} className={`hover:bg-green-50 transition-colors ${i !== teklifler.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <BankLogo bankId={t.bankId} />
                    <div>
                      <div className="font-semibold text-sm">
                        {bank.name}
                        {t.badge && <Badge type={t.badge} />}
                      </div>
                      <div className="text-xs text-gray-400 capitalize">{bank.type} banka</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="font-bold text-green-700 text-base">%{t.aylikFaiz.toFixed(2)}</div>
                  <div className="text-xs text-gray-400">Yıllık %{t.yillikFaiz.toFixed(2)}</div>
                </td>
                <td className="px-5 py-4 font-semibold">{formatCurrency(taksit)}</td>
                <td className="px-5 py-4 font-semibold">{formatCurrency(toplam)}</td>
                <td className="px-5 py-4">
                  <span className={`text-sm font-semibold ${t.onayIcons === 'Anında' || t.onayIcons.includes('dk') ? 'text-green-700' : 'text-gray-700'}`}>
                    {t.onayIcons}
                  </span>
                </td>
                <td className="px-5 py-4"><StarRating rating={t.rating} /></td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <button className="border border-green-300 text-green-700 hover:bg-green-50 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors mr-2">
                    + Karşılaştır
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors">
                    Başvur
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="text-xs text-gray-400 mt-3">* {label} varsayılan olarak hesaplanmıştır. Gerçek taksit tutarları bankaya ve kredi notunuza göre değişebilir.</p>
    </div>
  );
}
