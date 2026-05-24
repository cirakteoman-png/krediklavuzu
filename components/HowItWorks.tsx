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
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-2">Nasıl Çalışır</p>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-12">3 adımda en iyi teklifi bul</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="px-6 py-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-lg font-extrabold text-green-700">{num}</span>
              </div>
              <h3 className="text-lg font-bold mb-3">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
