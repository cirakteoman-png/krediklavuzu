import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'KrediKlavuzu; 50+ bankanın kredi, mevduat ve kredi kartı tekliflerini ücretsiz ve tarafsız karşılaştırmanızı sağlayan bağımsız bir finansal karşılaştırma platformudur.',
  alternates: { canonical: '/hakkinda' },
};

const VALUES = [
  { title: 'Tarafsızlık', desc: 'Hiçbir bankanın reklamını öne çıkarmayız. Sıralama, sana en uygun koşula göre yapılır.' },
  { title: 'Ücretsizlik', desc: 'Karşılaştırma ve hesaplama araçlarının tamamı kullanıcılar için tamamen ücretsizdir.' },
  { title: 'Şeffaflık', desc: 'Faiz oranlarını, masrafları ve toplam maliyeti açıkça gösteririz; gizli kalem yoktur.' },
  { title: 'Güncellik', desc: 'Oranlar ve teklifler düzenli olarak güncellenir; kararını en taze veriyle verirsin.' },
];

const STATS = [
  { num: '50+', label: 'Banka & finansal kurum' },
  { num: '2M+', label: 'Aylık kullanıcı' },
  { num: '4', label: 'Ürün kategorisi' },
];

export default function HakkindaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Hakkımızda"
        title="Doğru finansal kararı herkes için kolaylaştırıyoruz"
        desc="KrediKlavuzu, bankacılık ürünlerini tarafsız biçimde karşılaştırmanı sağlayan bağımsız bir platformdur."
      />

      <section className="px-4 sm:px-6 py-14">
        <div className="max-w-3xl mx-auto space-y-5">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft">
              Finansal ürünler karmaşıktır: onlarca banka, farklı faiz oranları, gizli masraflar ve
              anlaşılması zor koşullar. KrediKlavuzu’nu, bu karmaşayı herkesin anlayabileceği sade bir
              karşılaştırmaya dönüştürmek için kurduk.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-lg leading-relaxed text-ink-soft">
              Amacımız basit: ihtiyaç kredisinden konut kredisine, mevduattan kredi kartına kadar
              tüm seçenekleri tek ekranda, tarafsız ve ücretsiz şekilde önüne koymak. Böylece
              dakikalar içinde sana en uygun teklifi bulabilirsin.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-6">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-ink px-6 py-12 sm:px-12">
          <div className="grid grid-cols-3 gap-6">
            {STATS.map(({ num, label }, i) => (
              <Reveal key={label} delay={(i + 1) as 1 | 2 | 3} className="text-center">
                <div className="text-3xl sm:text-5xl font-bold font-display text-cream">{num}</div>
                <div className="mt-2 text-xs sm:text-sm text-cream/55">{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-14 pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">Değerlerimiz</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map(({ title, desc }, i) => (
              <Reveal key={title} delay={((i % 2) + 1) as 1 | 2}>
                <div className="h-full rounded-3xl bg-surface border border-line p-7">
                  <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 rounded-3xl bg-surface border border-line px-7 py-8 text-center">
              <h2 className="text-xl font-bold text-ink">Sorun mu var, önerin mi?</h2>
              <p className="mt-2 text-sm text-ink-soft">Her türlü görüş için bize ulaşabilirsin.</p>
              <Link
                href="/iletisim"
                className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-3.5 text-base font-semibold font-display text-cream transition-transform hover:-translate-y-0.5"
              >
                İletişime geç →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
