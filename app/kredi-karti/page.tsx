import { getKrediKartlari } from '@/lib/queries';
import KartTableDB from '@/components/KartTableDB';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

export const metadata = { title: 'Kredi Kartı Karşılaştırma | KrediKlavuzu' };
export const dynamic = 'force-dynamic';

export default async function KrediKartiPage() {
  const kartlar = await getKrediKartlari();

  return (
    <div>
      <PageHeader
        eyebrow="Kart Karşılaştırma"
        title="Kredi Kartı"
        desc="Puan, mil, nakit iade — size en uygun kartı bulun."
      />

      <section className="px-4 sm:px-6 py-14 pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-sm text-ink-soft mb-6">{kartlar.length} kart listeleniyor</div>
          </Reveal>
          <Reveal delay={1}>
            <KartTableDB kartlar={kartlar} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
