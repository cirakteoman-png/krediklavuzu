import BankLogo from '@/components/BankLogo';
import Badge from '@/components/Badge';
import StarRating from '@/components/StarRating';
import { KREDI_KARTLARI, getBankById } from '@/lib/data';

export default function KartTab() {
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
          {KREDI_KARTLARI.map((kart, i) => {
            const bank = getBankById(kart.bankId)!;
            return (
              <tr key={kart.id} className={`hover:bg-green-50 transition-colors ${i !== KREDI_KARTLARI.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <BankLogo bankId={kart.bankId} size="sm" />
                    <div>
                      <div className="font-semibold text-sm">
                        {kart.name}
                        {kart.badge && <Badge type={kart.badge} />}
                      </div>
                      <div className="text-xs text-gray-400">{bank.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="font-semibold text-sm">{kart.puanOrani}</div>
                  <div className="text-xs text-gray-400">{kart.puanTipi}</div>
                </td>
                <td className="px-5 py-4">
                  {kart.aidat === null
                    ? <span className="font-bold text-green-700 text-sm">Yok</span>
                    : <span className="font-semibold text-sm">{kart.aidat} ₺/yıl</span>}
                </td>
                <td className="px-5 py-4 font-semibold text-sm">
                  {kart.maxLimit.toLocaleString('tr-TR')} ₺
                </td>
                <td className="px-5 py-4"><StarRating rating={kart.rating} /></td>
                <td className="px-5 py-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                    Başvur
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
