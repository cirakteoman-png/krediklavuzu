export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-800 to-green-600 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 text-xs text-white mb-5">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          Canlı faiz verileri — anlık güncelleme
        </div>

        <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 max-w-xl">
          Türkiye&apos;nin <span className="text-green-300">en avantajlı</span><br />bankacılık ürününü bul
        </h1>

        <p className="text-lg text-white/80 mb-10 max-w-lg">
          50+ banka ve finansal kurumun faiz oranlarını karşılaştır, en iyi teklifi saniyeler içinde bul.
        </p>

        <div className="flex flex-wrap gap-8">
          {[
            { icon: '🛡️', text: 'Ücretsiz & Tarafsız' },
            { icon: '✅', text: 'BDDK onaylı' },
            { icon: '👥', text: '2 Milyon+ Kullanıcı' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <span>{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
