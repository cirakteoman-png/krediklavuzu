import MevduatTab from '@/components/tabs/MevduatTab';
import MevduatTable from '@/components/MevduatTable';

export const metadata = { title: 'Mevduat Faiz Karşılaştırma | KrediKlavuzu' };

export default function MevduatPage() {
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
          <MevduatTab />
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tüm Mevduat Faizleri</h2>
          <MevduatTable />
        </div>
      </section>
    </div>
  );
}
