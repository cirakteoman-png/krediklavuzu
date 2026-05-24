import { getIhtiyacKredisi } from '@/lib/queries';
import CompareTableDB from '@/components/CompareTableDB';
import IhtiyacCalc from '@/components/calcs/IhtiyacCalc';

export const metadata = { title: 'İhtiyaç Kredisi Karşılaştırma | KrediKlavuzu' };
export const dynamic = 'force-dynamic';

export default async function IhtiyacKredisiPage() {
  const teklifler = await getIhtiyacKredisi();

  return (
    <div>
      <div className="bg-gradient-to-r from-green-800 to-green-600 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-green-300 text-sm font-semibold mb-1">Kredi Karşılaştırma</p>
          <h1 className="text-3xl font-extrabold text-white mb-2">İhtiyaç Kredisi</h1>
          <p className="text-white/75">
            {teklifler.length}+ bankanın en güncel faiz oranlarını karşılaştırın, en iyi teklifi bulun.
          </p>
        </div>
      </div>

      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Hızlı Hesaplama</h2>
          <IhtiyacCalc teklifler={teklifler} />
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Tüm İhtiyaç Kredisi Teklifleri
              <span className="ml-2 text-sm font-normal text-gray-400">({teklifler.length} teklif)</span>
            </h2>
          </div>
          <CompareTableDB teklifler={teklifler} tutar={100000} vade={24} label="100.000 ₺ / 24 ay" />
        </div>
      </section>
    </div>
  );
}
