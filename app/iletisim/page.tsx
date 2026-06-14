import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { CONTACT_EMAIL } from '@/lib/content/legal';

export const metadata: Metadata = {
  title: 'İletişim',
  description: `KrediKlavuzu ile iletişime geçin. Soru, görüş ve önerileriniz için ${CONTACT_EMAIL} adresinden bize ulaşabilirsiniz.`,
  alternates: { canonical: '/iletisim' },
};

export default function IletisimPage() {
  return (
    <div>
      <PageHeader
        eyebrow="İletişim"
        title="Bize ulaş"
        desc="Soru, görüş ve önerilerini duymak isteriz. Aşağıdaki kanallardan bize yazabilirsin."
      />

      <section className="px-4 sm:px-6 py-14 pb-20">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-3xl bg-surface border border-line p-7">
              <h2 className="text-lg font-bold text-ink mb-2">E-posta</h2>
              <p className="text-sm text-ink-soft mb-4">En hızlı ulaşım yöntemi. Genellikle 1-2 iş günü içinde yanıtlarız.</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-ink px-6 py-3 text-sm font-semibold font-display text-cream transition-transform hover:-translate-y-0.5"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="h-full rounded-3xl bg-surface border border-line p-7">
              <h2 className="text-lg font-bold text-ink mb-2">Adres</h2>
              <p className="text-sm text-ink-soft leading-relaxed">[DOLDURULACAK — şirket unvanı ve açık adres]</p>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                MERSİS No: [DOLDURULACAK]
              </p>
            </div>
          </Reveal>

          <Reveal delay={1} className="sm:col-span-2">
            <div className="rounded-3xl bg-brand/5 border border-brand/20 p-7">
              <h2 className="text-lg font-bold text-ink mb-2">Önemli not</h2>
              <p className="text-sm text-ink-soft leading-relaxed">
                KrediKlavuzu bağımsız bir karşılaştırma platformudur; banka değildir ve kredi/mevduat
                başvurusu almaz. Başvurular ilgili kurumun resmî kanalları üzerinden yapılır. Kişisel
                verilerinin işlenmesi hakkında bilgi için{' '}
                <Link href="/yasal/kvkk" className="font-semibold text-brand-dark underline underline-offset-2">
                  KVKK Aydınlatma Metni
                </Link>{' '}
                sayfamızı inceleyebilirsin.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
