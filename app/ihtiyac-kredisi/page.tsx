import CompareTable from '@/components/CompareTable';
import IhtiyacTab from '@/components/tabs/IhtiyacTab';
import { IHTIYAC_TEKLIFLER } from '@/lib/data';

export const metadata = { title: 'İhtiyaç Kredisi Karşılaştırma | KrediKlavuzu' };

export default function IhtiyacKredisiPage() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-green-300 text-sm font-semibold mb-1">Kredi Karşılaştırma</p>
          <h1 className="text-3xl font-extrabold text-white mb-2">İhtiyaç Kredisi</h1>
          <p className="text-white/75">50+ bankanın en güncel faiz oranlarını karşılaştırın, en iyi teklifi bulun.</p>
        </div>
      </div>

      {/* Calculator */}
      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Hızlı Hesaplama</h2>
          <IhtiyacTab />
        </div>
      </section>

      {/* Full comparison */}
      <section className="bg-gray-50 py-10 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Tüm İhtiyaç Kredisi Teklifleri
              <span className="ml-2 text-sm font-normal text-gray-400">({IHTIYAC_TEKLIFLER.length} teklif)</span>
            </h2>
            <div className="flex gap-2">
              {['Devlet Bankası', 'Özel Banka'].map(f => (
                <button key={f} className="text-xs border border-gray-200 bg-white hover:border-green-400 text-gray-600 hover:text-green-700 font-medium px-3 py-1.5 rounded-full transition-colors">
                  {f}
                </button>
              ))}
            </div>
          </div>
          <CompareTable
            teklifler={IHTIYAC_TEKLIFLER}
            tutar={100000}
            vade={24}
            label="100.000 ₺ / 24 ay"
          />
        </div>
      </section>
    </div>
  );
}
