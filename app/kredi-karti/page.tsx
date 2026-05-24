import KartTab from '@/components/tabs/KartTab';
import { KREDI_KARTLARI } from '@/lib/data';

export const metadata = { title: 'Kredi Kartı Karşılaştırma | KrediKlavuzu' };

export default function KrediKartiPage() {
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
          <div className="flex flex-wrap gap-2 mb-6">
            {['Tümü', 'Mil & Puan', 'Geri Ödeme', 'Öğrenci', 'Aidat Yok'].map((f, i) => (
              <button key={f}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors
                  ${i === 0
                    ? 'bg-green-600 border-green-600 text-white'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700'}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-500 mb-4">{KREDI_KARTLARI.length} kart listeleniyor</div>
          <KartTab />
        </div>
      </section>
    </div>
  );
}
