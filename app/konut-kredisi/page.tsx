import { getKonutKredisi } from '@/lib/queries';
import CompareTableDB from '@/components/CompareTableDB';
import KonutCalc from '@/components/calcs/KonutCalc';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

export const metadata = { title: 'Konut Kredisi Karşılaştırma | KrediKlavuzu' };
export const dynamic = 'force-dynamic';

export default async function KonutKredisiPage() {
  const teklifler = await getKonutKredisi();

  return (
    <div>
      <PageHeader
        eyebrow="Kredi Karşılaştırma"
        title="Konut Kredisi"
        desc="Ev almak için en uygun konut kredisi faiz oranlarını karşılaştırın."
      />

      <section className="px-4 sm:px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">Hızlı Hesaplama</h2>
          </Reveal>
          <Reveal delay={1}>
            <KonutCalc teklifler={teklifler} />
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">
              Tüm Konut Kredisi Teklifleri
              <span className="ml-2 text-base font-normal text-ink-soft">({teklifler.length} teklif)</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <CompareTableDB teklifler={teklifler} tutar={4000000} vade={120} label="4.000.000 ₺ / 120 ay" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
