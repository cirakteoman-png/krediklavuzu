import { getKrediKartlari } from '@/lib/queries';
import KartTableDB from '@/components/KartTableDB';

export const metadata = { title: 'Kredi Kartı Karşılaştırma | KrediKlavuzu' };
export const dynamic = 'force-dynamic';

export default async function KrediKartiPage() {
  const kartlar = await getKrediKartlari();

  return (
    <div>
      <div className="bg-gradient-to-r from-green-800 to-green-600 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-green-300 text-sm font-semibold mb-1">Kart Karşılaştırma</p>
          <h1 className="text-3xl font-extrabold text-white mb-2">Kredi Kartı</h1>
          <p className="text-white/75">Puan, mil, nakit iade — size en uygun kartı bulun.</p>
        </div>
      </div>

      <section className="bg-gray-50 py-10 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-gray-500 mb-6">{kartlar.length} kart listeleniyor</div>
          <KartTableDB kartlar={kartlar} />
        </div>
      </section>
    </div>
  );
}
