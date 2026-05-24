import { getMevduat } from '@/lib/queries';
import MevduatTableDB from '@/components/MevduatTableDB';
import MevduatCalc from '@/components/calcs/MevduatCalc';

export const metadata = { title: 'Mevduat Faiz Karşılaştırma | KrediKlavuzu' };
export const dynamic = 'force-dynamic';

export default async function MevduatPage() {
  const tumMevduat = await getMevduat();

  return (
    <div>
      <div className="bg-gradient-to-r from-green-800 to-green-600 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-green-300 text-sm font-semibold mb-1">Mevduat Karşılaştırma</p>
          <h1 className="text-3xl font-extrabold text-white mb-2">Vadeli Mevduat</h1>
          <p className="text-white/75">Birikimleriniz için en yüksek faizi veren bankayı bulun.</p>
        </div>
      </div>

      <section className="bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Getiri Hesaplama</h2>
          <MevduatCalc mevduat={tumMevduat} />
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tüm Mevduat Faizleri</h2>
          <MevduatTableDB mevduat={tumMevduat} />
        </div>
      </section>
    </div>
  );
}
