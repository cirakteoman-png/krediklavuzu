import { getMevduat } from '@/lib/queries';
import MevduatTableDB from '@/components/MevduatTableDB';
import MevduatCalc from '@/components/calcs/MevduatCalc';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

export const metadata = { title: 'Mevduat Faiz Karşılaştırma | KrediKlavuzu' };
export const dynamic = 'force-dynamic';

export default async function MevduatPage() {
  const tumMevduat = await getMevduat();

  return (
    <div>
      <PageHeader
        eyebrow="Mevduat Karşılaştırma"
        title="Vadeli Mevduat"
        desc="Birikimleriniz için en yüksek faizi veren bankayı bulun."
      />

      <section className="px-4 sm:px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">Getiri Hesaplama</h2>
          </Reveal>
          <Reveal delay={1}>
            <MevduatCalc mevduat={tumMevduat} />
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">Tüm Mevduat Faizleri</h2>
          </Reveal>
          <Reveal delay={1}>
            <MevduatTableDB mevduat={tumMevduat} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
