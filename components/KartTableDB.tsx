import BankLogo from './BankLogo';
import Badge from './Badge';
import StarRating from './StarRating';

type Kart = {
  id: string;
  bank_id: string;
  name: string;
  puan_tipi: string;
  puan_orani: string;
  aidat: number | null;
  max_limit: number;
  rating: number;
  badge: 'best' | 'low' | 'new' | null;
  banks: { name: string } | null;
};

export default function KartTableDB({ kartlar }: { kartlar: Kart[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-separate border-spacing-0 border border-gray-100">
        <thead>
          <tr className="bg-gray-50">
            {['Kredi Kartı', 'Puan / Mil', 'Aidat', 'Limit', 'Puan', ''].map(h => (
              <th key={h} className="px-5 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-200">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {kartlar.map((k, i) => (
            <tr key={k.id} className={`hover:bg-green-50 transition-colors ${i !== kartlar.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <BankLogo bankId={k.bank_id} size="sm" />
                  <div>
                    <div className="font-semibold text-sm">
                      {k.name}
                      {k.badge && <Badge type={k.badge} />}
                    </div>
                    <div className="text-xs text-gray-400">{k.banks?.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-5 py-4">
                <div className="font-semibold text-sm">{k.puan_orani}</div>
                <div className="text-xs text-gray-400">{k.puan_tipi}</div>
              </td>
              <td className="px-5 py-4">
                {k.aidat === null
                  ? <span className="font-bold text-green-700 text-sm">Yok</span>
                  : <span className="font-semibold text-sm">{k.aidat} ₺/yıl</span>}
              </td>
              <td className="px-5 py-4 font-semibold text-sm">
                {k.max_limit.toLocaleString('tr-TR')} ₺
              </td>
              <td className="px-5 py-4"><StarRating rating={k.rating} /></td>
              <td className="px-5 py-4">
                <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  Başvur
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
