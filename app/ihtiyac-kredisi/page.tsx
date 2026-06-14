import { getIhtiyacKredisi } from '@/lib/queries';
import CompareTableDB from '@/components/CompareTableDB';
import IhtiyacCalc from '@/components/calcs/IhtiyacCalc';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

export const metadata = { title: 'İhtiyaç Kredisi Karşılaştırma | KrediKlavuzu' };
export const dynamic = 'force-dynamic';

export default async function IhtiyacKredisiPage() {
  const teklifler = await getIhtiyacKredisi();

  return (
    <div>
      <PageHeader
        eyebrow="Kredi Karşılaştırma"
        title="İhtiyaç Kredisi"
        desc={`${teklifler.length}+ bankanın en güncel faiz oranlarını karşılaştırın, en iyi teklifi bulun.`}
      />

      <section className="px-4 sm:px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">Hızlı Hesaplama</h2>
          </Reveal>
          <Reveal delay={1}>
            <IhtiyacCalc teklifler={teklifler} />
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">
              Tüm İhtiyaç Kredisi Teklifleri
              <span className="ml-2 text-base font-normal text-ink-soft">({teklifler.length} teklif)</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <CompareTableDB teklifler={teklifler} tutar={100000} vade={24} label="100.000 ₺ / 24 ay" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
