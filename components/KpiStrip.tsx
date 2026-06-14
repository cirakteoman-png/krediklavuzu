import Reveal from './Reveal';

const KPIS = [
  { num: '50+',  label: 'Banka & Finansal Kurum'   },
  { num: '2M+',  label: 'Aylık Aktif Kullanıcı'     },
  { num: '7/24', label: 'Anlık Faiz Güncellemesi'   },
  { num: '₺0',   label: 'Tamamen Ücretsiz'           },
];

export default function KpiStrip() {
  return (
    <section className="px-4 sm:px-6 py-6">
      <div className="max-w-6xl mx-auto rounded-[2rem] bg-ink px-6 py-12 sm:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {KPIS.map(({ num, label }, i) => (
            <Reveal key={label} delay={(i + 1) as 1 | 2 | 3 | 4} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold font-display text-cream">
                {num}
              </div>
              <div className="mt-2 text-sm text-cream/55">{label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
