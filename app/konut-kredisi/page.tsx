import { getKonutKredisi } from '@/lib/queries';
import CompareTableDB from '@/components/CompareTableDB';
import KonutCalc from '@/components/calcs/KonutCalc';

export const metadata = { title: 'Konut Kredisi Karşılaştırma | KrediKlavuzu' };
export const dynamic = 'force-dynamic';

export default async function KonutKredisiPage() {
  const teklifler = await getKonutKredisi();

  return (
    <div>
      <div className="bg-gradient-to-r from-green-800 to-green-600 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-green-300 text-sm font-semibold mb-1">Kredi Karşılaştırma</p>
          <h1 className="text-3xl font-extrabold text-white mb-2">Konut Kredisi</h1>
          <p className="text-white/75">Ev almak için en uygun konut kredisi faiz oranlarını karşılaştırın.</p>
        </div>
      </div>

      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Hızlı Hesaplama</h2>
          <KonutCalc teklifler={teklifler} />
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Tüm Konut Kredisi Teklifleri
            <span className="ml-2 text-sm font-normal text-gray-400">({teklifler.length} teklif)</span>
          </h2>
          <CompareTableDB teklifler={teklifler} tutar={4000000} vade={120} label="4.000.000 ₺ / 120 ay" />
        </div>
      </section>
    </div>
  );
}
