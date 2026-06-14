import BankLogo from './BankLogo';
import Badge from './Badge';
import StarRating from './StarRating';
import { formatCurrency, calcTaksit } from '@/lib/data';

type Teklif = {
  bank_id: string;
  aylik_faiz: number;
  yillik_faiz: number;
  onay_suresi: string;
  rating: number;
  badge: 'best' | 'low' | 'new' | null;
  banks: { name: string; type: string } | null;
};

interface Props {
  teklifler: Teklif[];
  tutar: number;
  vade: number;
  label: string;
}

export default function CompareTableDB({ teklifler, tutar, vade, label }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-surface rounded-xl shadow-sm overflow-hidden border-separate border-spacing-0 border border-line">
        <thead>
          <tr className="bg-cream">
            {['Banka', 'Aylık Faiz ↑', 'Aylık Taksit', 'Toplam Ödeme', 'Onay Süresi', 'Puan', ''].map(h => (
              <th key={h} className="px-5 py-3 text-left text-xs font-bold text-ink-soft uppercase tracking-wider border-b border-line">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teklifler.map((t, i) => {
            const taksit = calcTaksit(tutar, t.aylik_faiz, vade);
            const toplam = taksit * vade;
            const isLast = i === teklifler.length - 1;
            return (
              <tr key={`${t.bank_id}-${i}`} className={`hover:bg-brand/5 transition-colors ${!isLast ? 'border-b border-line' : ''}`}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <BankLogo bankId={t.bank_id} />
                    <div>
                      <div className="font-semibold text-sm">
                        {t.banks?.name}
                        {t.badge && <Badge type={t.badge} />}
                      </div>
                      <div className="text-xs text-ink-soft capitalize">{t.banks?.type} banka</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="font-bold text-brand text-base">%{t.aylik_faiz.toFixed(2)}</div>
                  <div className="text-xs text-ink-soft">Yıllık %{t.yillik_faiz.toFixed(2)}</div>
                </td>
                <td className="px-5 py-4 font-semibold">{formatCurrency(taksit)}</td>
                <td className="px-5 py-4 font-semibold">{formatCurrency(toplam)}</td>
                <td className="px-5 py-4">
                  <span className={`text-sm font-semibold ${t.onay_suresi === 'Anında' || t.onay_suresi.includes('dk') ? 'text-brand' : 'text-ink'}`}>
                    {t.onay_suresi}
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
      <p className="text-xs text-ink-soft mt-3">* {label} varsayılan olarak hesaplanmıştır.</p>
    </div>
  );
}
