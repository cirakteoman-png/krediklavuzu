// Rehber/blog içeriği. Her makale ayrı bir indekslenebilir sayfaya (/rehber/[slug]) dönüşür.
// İçerik bilgilendirme amaçlıdır; yatırım/finans tavsiyesi değildir.

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: 'İhtiyaç Kredisi' | 'Konut Kredisi' | 'Kredi Kartı' | 'Mevduat' | 'Kredi Notu';
  updatedAt: string; // ISO tarih
  readMin: number;
  blocks: ArticleBlock[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'ihtiyac-kredisi-nasil-alinir',
    title: 'İhtiyaç Kredisi Nasıl Alınır? Adım Adım Rehber',
    description:
      'İhtiyaç kredisi başvurusu öncesi bilmeniz gereken her şey: gerekli belgeler, faiz oranları, onay süreci ve en uygun teklifi bulma yöntemleri.',
    category: 'İhtiyaç Kredisi',
    updatedAt: '2026-06-14',
    readMin: 6,
    blocks: [
      { type: 'p', text: 'İhtiyaç kredisi, belirli bir teminat göstermeden, kişisel harcamalarınız için kullanabileceğiniz en yaygın tüketici kredisi türüdür. Tadilat, eğitim, sağlık veya beklenmedik masraflar için bankalar tarafından sunulur. Doğru bankayı ve vadeyi seçmek, geri ödeme yükünüzü doğrudan etkiler.' },
      { type: 'h2', text: 'Başvuru için gerekli belgeler' },
      { type: 'p', text: 'Çoğu banka dijital başvuruda kimlik dışında belge istemez; ancak yüksek tutarlarda gelir belgesi talep edilebilir. Genel olarak hazır bulundurmanız gerekenler:' },
      { type: 'ul', items: [
        'T.C. kimlik kartı veya nüfus cüzdanı',
        'Gelir belgesi (maaş bordrosu, SGK hizmet dökümü veya vergi levhası)',
        'İkametgah bilgisi (çoğu bankada e-Devlet üzerinden otomatik doğrulanır)',
      ] },
      { type: 'h2', text: 'Faiz oranı ve toplam maliyet' },
      { type: 'p', text: 'Krediyi değerlendirirken yalnızca aylık faiz oranına değil, dosya masrafı ve sigorta gibi kalemleri de içeren toplam maliyete bakın. İki bankanın aylık faizi aynı olsa bile, masraflar nedeniyle toplam geri ödeme tutarı farklılaşabilir. Aylık taksiti ve toplam faizi önceden görmek için kredi hesaplama aracını kullanın.' },
      { type: 'h2', text: 'Vade seçimi neden önemli?' },
      { type: 'p', text: 'Uzun vade aylık taksiti düşürür ama toplam ödenen faizi artırır. Kısa vade ise tam tersidir: taksit yüksek, toplam maliyet düşüktür. Bütçenizi zorlamayacak en kısa vadeyi seçmek genellikle en mantıklısıdır.' },
      { type: 'h2', text: 'En uygun teklifi bulma' },
      { type: 'p', text: 'Tek bir bankaya başvurmadan önce birden fazla bankanın güncel oranlarını karşılaştırın. KrediKlavuzu üzerinden 50+ bankanın tekliflerini tek ekranda görüp, tutar ve vadeye göre sıralayarak size en uygun olanı saniyeler içinde bulabilirsiniz.' },
      { type: 'p', text: 'Not: Bu içerik bilgilendirme amaçlıdır. Kredi kullanımı kişinin geri ödeme gücüne bağlıdır; başvuru öncesi banka koşullarını teyit ediniz.' },
    ],
  },
  {
    slug: 'konut-kredisi-hesaplama-rehberi',
    title: 'Konut Kredisi Hesaplama ve Başvuru Rehberi',
    description:
      'Konut kredisinde peşinat, ekspertiz, faiz oranı ve vade nasıl çalışır? Aylık taksitinizi doğru hesaplamanın yolları ve başvuru ipuçları.',
    category: 'Konut Kredisi',
    updatedAt: '2026-06-14',
    readMin: 7,
    blocks: [
      { type: 'p', text: 'Konut kredisi, ev sahibi olmanın en yaygın yoludur. İhtiyaç kredisinden farklı olarak satın alınan konut teminat (ipotek) gösterildiği için faiz oranları genellikle daha düşüktür, vadeler ise çok daha uzundur (120 aya kadar veya üzeri).' },
      { type: 'h2', text: 'Peşinat ve kredi tutarı' },
      { type: 'p', text: 'Bankalar konutun ekspertiz değerinin tamamını değil, belirli bir oranını kredilendirir. Bu nedenle konut bedelinin bir kısmını peşinat olarak ödemeniz gerekir. Peşinat oranı yükseldikçe çekeceğiniz kredi ve dolayısıyla ödeyeceğiniz toplam faiz azalır.' },
      { type: 'h2', text: 'Ekspertiz (değerleme) ücreti' },
      { type: 'p', text: 'Banka, krediye konu konutun gerçek piyasa değerini bağımsız bir ekspertiz firmasına tespit ettirir. Bu işlemin bir ücreti vardır ve kredi tutarı ekspertiz değerine göre belirlenir. Satış fiyatı ekspertiz değerinin üzerindeyse aradaki farkı kendiniz karşılarsınız.' },
      { type: 'h2', text: 'Aylık taksit nasıl hesaplanır?' },
      { type: 'p', text: 'Aylık taksit; kredi tutarı, aylık faiz oranı ve vade kullanılarak anüite (eşit taksit) formülüyle hesaplanır. Vade uzadıkça taksit düşer fakat toplam faiz ciddi şekilde artar. Farklı senaryoları konut kredisi hesaplama aracıyla deneyerek bütçenize uygun dengeyi bulun.' },
      { type: 'ul', items: [
        'Kredi tutarını ve peşinatınızı netleştirin',
        'Birkaç farklı vade için aylık taksiti karşılaştırın',
        'Toplam geri ödeme ve toplam faiz farkını mutlaka inceleyin',
      ] },
      { type: 'h2', text: 'Başvuru öncesi ipuçları' },
      { type: 'p', text: 'Kredi notunuzun yüksek olması hem onay şansını hem de size sunulan faiz oranını olumlu etkiler. Başvurudan önce mevcut borçlarınızı düzenli ödeyerek notunuzu güçlendirebilirsiniz. Tüm bankaların güncel konut kredisi oranlarını karşılaştırarak işe başlayın.' },
    ],
  },
  {
    slug: 'kredi-karti-secerken-dikkat',
    title: 'Kredi Kartı Seçerken Dikkat Edilmesi Gereken 7 Şey',
    description:
      'Aidat, puan/mil sistemi, ek kart, faizsiz dönem ve limit... Size en uygun kredi kartını seçmek için bilmeniz gereken kriterler.',
    category: 'Kredi Kartı',
    updatedAt: '2026-06-14',
    readMin: 5,
    blocks: [
      { type: 'p', text: 'Doğru kredi kartı, harcama alışkanlıklarınıza göre size avantaj sağlar; yanlış kart ise gereksiz maliyet yaratır. Karar vermeden önce şu yedi kriteri değerlendirin.' },
      { type: 'h2', text: '1. Yıllık aidat' },
      { type: 'p', text: 'Bazı kartlar aidatsızken, bazıları yıllık ücret alır. Aidatlı kartların sunduğu ek avantajların (mil, lounge, sigorta) bu ücreti karşılayıp karşılamadığını hesaplayın.' },
      { type: 'h2', text: '2. Puan, mil veya nakit iade' },
      { type: 'p', text: 'Sık uçuyorsanız mil kazandıran kartlar, market ve akaryakıt harcaması yoğunsa nakit iade veya puan veren kartlar daha mantıklıdır. Kazanım oranını ve nerede kullanılabildiğini kontrol edin.' },
      { type: 'h2', text: '3. Faizsiz dönem ve faiz oranı' },
      { type: 'p', text: 'Ekstrenizi son ödeme tarihinde tam ödüyorsanız faiz oranı sizi az ilgilendirir. Asgari ödeme yapma ihtimaliniz varsa düşük faizli bir kart tercih edin; kredi kartı faizleri yüksektir.' },
      { type: 'h2', text: '4. Limit, ek kart ve diğer koşullar' },
      { type: 'ul', items: [
        'Size sunulan başlangıç limiti harcama ihtiyacınıza uygun mu?',
        'Aile bireyleri için ücretsiz ek kart veriliyor mu?',
        'Taksit imkânı ve kampanya ağı ne kadar geniş?',
      ] },
      { type: 'p', text: 'Tüm bu kriterleri kartları yan yana koyarak değerlendirmek en sağlıklısıdır. Kredi kartı karşılaştırma sayfamızdan puan tipi, aidat ve limiti birlikte inceleyebilirsiniz.' },
    ],
  },
  {
    slug: 'mevduat-faizi-nasil-hesaplanir',
    title: 'Vadeli Mevduat Faizi Nasıl Hesaplanır? (Stopaj Dahil)',
    description:
      'Brüt ve net faiz arasındaki fark, stopaj oranı ve vadeli hesap getirinizi doğru hesaplama yöntemi adım adım anlatılıyor.',
    category: 'Mevduat',
    updatedAt: '2026-06-14',
    readMin: 5,
    blocks: [
      { type: 'p', text: 'Vadeli mevduat, birikiminizi belirli bir süre bankada tutarak faiz getirisi elde etmenizi sağlar. Ancak bankanın ilan ettiği faiz brüt orandır; elinize geçecek net tutar stopaj kesintisinden sonra belli olur.' },
      { type: 'h2', text: 'Brüt faiz ve vade' },
      { type: 'p', text: 'Bankalar genellikle yıllık brüt faiz oranı ilan eder. 32 günlük, 3 aylık veya 6 aylık gibi farklı vadelerde oran değişir. Faiz, paranın vadede kaldığı gün sayısına orantılı olarak işler.' },
      { type: 'h2', text: 'Stopaj (gelir vergisi kesintisi)' },
      { type: 'p', text: 'Mevduat faiz gelirinden kaynakta gelir vergisi (stopaj) kesilir. Stopaj oranı vadeye göre değişebilir ve dönem dönem güncellenir. Net getiriniz, brüt faizden stopaj düşülerek bulunur.' },
      { type: 'h2', text: 'Örnek hesap' },
      { type: 'p', text: 'Diyelim 100.000 ₺’yi yıllık %50 brüt faizle 3 ay (yaklaşık çeyrek yıl) vadeli açtınız. Brüt faiz kabaca 100.000 × %50 × (3/12) = 12.500 ₺ olur. Buradan stopaj düşüldüğünde elinize geçen net getiri daha düşük olacaktır.' },
      { type: 'ul', items: [
        'İlan edilen oran brüttür, net değildir',
        'Net getiri = brüt faiz − stopaj',
        'Kısa vadelerde oranlar daha sık değişir',
      ] },
      { type: 'p', text: 'Farklı bankaların net getirilerini elle hesaplamak yerine mevduat karşılaştırma aracıyla 100.000 ₺ için stopaj sonrası net getiriyi doğrudan görebilirsiniz.' },
    ],
  },
  {
    slug: 'kredi-notu-nedir-nasil-yukseltilir',
    title: 'Kredi Notu (Findeks) Nedir, Nasıl Yükseltilir?',
    description:
      'Kredi notunuzu hangi faktörler belirler ve nasıl yükseltebilirsiniz? Onay şansınızı ve faiz oranınızı doğrudan etkileyen kredi notu rehberi.',
    category: 'Kredi Notu',
    updatedAt: '2026-06-14',
    readMin: 6,
    blocks: [
      { type: 'p', text: 'Kredi notu, finansal geçmişinize bakarak borç ödeme alışkanlığınızı sayısallaştıran bir puandır. Bankalar kredi ve kredi kartı başvurularınızı değerlendirirken bu nota bakar. Yüksek not, hem onay şansınızı hem de size sunulan faiz oranını iyileştirir.' },
      { type: 'h2', text: 'Kredi notunu belirleyen faktörler' },
      { type: 'ul', items: [
        'Ödemelerin zamanında yapılması (en etkili faktör)',
        'Mevcut borç ve kredi kartı limit kullanım oranı',
        'Kredi geçmişinin uzunluğu',
        'Yeni başvuru sayısı ve sıklığı',
        'Sahip olunan ürün çeşitliliği',
      ] },
      { type: 'h2', text: 'Notu yükseltmenin yolları' },
      { type: 'p', text: 'Kredi notu kısa sürede değil, düzenli davranışla yükselir. En önemlisi tüm ödemeleri zamanında yapmaktır. Kredi kartı limitinizin tamamını sürekli kullanmak notu olumsuz etkiler; harcamayı limitin altında tutmak faydalıdır.' },
      { type: 'ul', items: [
        'Fatura, kredi ve kart ödemelerini geciktirmeyin',
        'Kart limitinizin tamamını kullanmaktan kaçının',
        'Kısa sürede çok sayıda kredi başvurusu yapmayın',
        'Eski ve düzenli ödenen hesaplarınızı kapatmadan tutun',
      ] },
      { type: 'h2', text: 'Düşük notla kredi alınır mı?' },
      { type: 'p', text: 'Mümkündür, ancak genellikle daha yüksek faiz veya daha düşük limitle. Notunuzu birkaç ay düzenli ödeme ile güçlendirdikten sonra başvurmak, daha avantajlı koşullar sağlayabilir.' },
      { type: 'p', text: 'Notunuz hazır olduğunda, güncel kredi tekliflerini karşılaştırarak en uygun oranı yakalayın.' },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
