import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-10 mb-10">
          <div className="col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-extrabold text-xl text-white mb-4">
              <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              KrediKlavuzu
            </Link>
            <p className="text-sm leading-relaxed">
              Türkiye&apos;nin en kapsamlı finansal ürün karşılaştırma platformu. BDDK denetiminde faaliyet gösteren bankalar ile çalışıyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Ürünler</h4>
            <ul className="space-y-2.5 text-sm">
              {['İhtiyaç Kredisi', 'Konut Kredisi', 'Taşıt Kredisi', 'Kredi Kartı', 'Mevduat'].map(item => (
                <li key={item}><Link href="#" className="hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Hesaplama</h4>
            <ul className="space-y-2.5 text-sm">
              {['Kredi Hesaplama', 'Mevduat Hesaplama', 'Enflasyon Etkisi', 'Kur Çevirici'].map(item => (
                <li key={item}><Link href="#" className="hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Kurumsal</h4>
            <ul className="space-y-2.5 text-sm">
              {['Hakkımızda', 'Basın', 'Kariyer', 'İletişim', 'KVKK'].map(item => (
                <li key={item}><Link href="#" className="hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex justify-between items-center text-xs">
          <p>© 2025 KrediKlavuzu. Tüm hakları saklıdır.</p>
          <p>BDDK Lisans No: XXXX • Reklam değildir, bağımsız karşılaştırmadır.</p>
        </div>
      </div>
    </footer>
  );
}
