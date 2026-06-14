import Reveal from './Reveal';

const STEPS = [
  {
    num: '1',
    title: 'Ürünü Seç',
    desc: 'İhtiyaç kredisi, konut kredisi, kredi kartı veya mevduat — karşılaştırmak istediğiniz ürünü seçin.',
  },
  {
    num: '2',
    title: 'Karşılaştır',
    desc: '50+ bankanın güncel faiz oranlarını, koşullarını ve avantajlarını tek ekranda görün, filtreleyin.',
  },
  {
    num: '3',
    title: 'Hemen Başvur',
    desc: 'Seçtiğiniz bankaya platformumuz üzerinden saniyeler içinde dijital başvuru yapın.',
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="px-4 sm:px-6 py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs font-bold font-display text-brand uppercase tracking-[0.2em] mb-3">
            Nasıl Çalışır
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink max-w-2xl leading-tight">
            3 adımda en iyi teklifi bul
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map(({ num, title, desc }, i) => (
            <Reveal key={num} delay={(i + 1) as 1 | 2 | 3}>
              <div className="h-full rounded-3xl bg-surface border border-line p-8 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-ink rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-lg font-extrabold font-display text-lime">{num}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-ink">{title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
