const KPIS = [
  { num: '50+',  label: 'Banka & Finansal Kurum'   },
  { num: '2M+',  label: 'Aylık Aktif Kullanıcı'     },
  { num: '7/24', label: 'Anlık Faiz Güncellemesi'   },
  { num: '₺0',   label: 'Tamamen Ücretsiz'           },
];

export default function KpiStrip() {
  return (
    <section className="bg-green-800 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIS.map(({ num, label }) => (
          <div key={label} className="text-center">
            <div className="text-3xl font-extrabold text-white">{num}</div>
            <div className="text-sm text-white/65 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
