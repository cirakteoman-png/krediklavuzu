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
    title: 'İhtiyaç Kredisi Nasıl Alınır?',
    description:
      'Belge, faiz, vade, onay süresi. İhtiyaç kredisi başvurusunda kafa karıştıran noktaları ve toplam maliyeti nasıl okuyacağınızı anlattık.',
    category: 'İhtiyaç Kredisi',
    updatedAt: '2026-06-14',
    readMin: 5,
    blocks: [
      { type: 'p', text: 'İhtiyaç kredisi, teminat göstermeden çekebildiğiniz tüketici kredisidir. Tadilat, eğitim, sağlık ya da beklenmedik bir masraf için kullanılır. İşin püf noktası krediyi almakta değil, doğru bankayı ve vadeyi seçmekte.' },
      { type: 'h2', text: 'Hangi belgeler isteniyor?' },
      { type: 'p', text: 'Dijital başvuruda çoğu banka kimlik dışında belge istemiyor. Yüksek tutarlarda iş değişiyor; gelir belgesi devreye giriyor.' },
      { type: 'ul', items: [
        'Kimlik',
        'Gelir belgesi (maaş bordrosu ya da SGK hizmet dökümü)',
        'İkamet bilgisi, ki bunu bankalar genelde e-Devlet’ten kendisi çekiyor',
      ] },
      { type: 'h2', text: 'Faize değil, toplam maliyete bakın' },
      { type: 'p', text: 'İki bankanın aylık faizi aynı olabilir ama dosya masrafı ve sigorta yüzünden geri ödeyeceğiniz tutar tutmaz. Onun için reklamdaki orana değil, başvuru ekranında çıkan toplam geri ödemeye bakın.' },
      { type: 'p', text: 'Örnek: 100.000 TL’yi aylık %3,89’dan 24 ay vadeyle çektiğinizde aylık taksit de toplam faiz de hesaplama aracında anında görünür. Vadeyi 36 aya çıkarınca taksit düşer, ama toplamda ödediğiniz faiz belirgin biçimde artar.' },
      { type: 'h2', text: 'Vade: taksit mi, toplam maliyet mi?' },
      { type: 'p', text: 'Uzun vade taksiti rahatlatır, faturayı büyütür. Kısa vade tam tersi. Bütçenizi sıkıştırmayacak en kısa vadeyi seçmek çoğu durumda en akıllıcası.' },
      { type: 'h2', text: 'Önce karşılaştırın' },
      { type: 'p', text: 'Aklınızdaki bankaya başvurmadan birkaç bankanın güncel oranını yan yana koyun. KrediKlavuzu’nda 50’den fazla bankanın teklifini tutara ve vadeye göre sıralayıp size uyanı bulabilirsiniz.' },
    ],
  },
  {
    slug: 'konut-kredisi-hesaplama-rehberi',
    title: 'Konut Kredisinde Peşinat, Ekspertiz ve Taksit',
    description:
      'Ev alırken kredi tutarını belirleyen peşinat ve ekspertiz nasıl işliyor, aylık taksit neye göre değişiyor? Başvuru öncesi bilmeniz gerekenler.',
    category: 'Konut Kredisi',
    updatedAt: '2026-06-14',
    readMin: 6,
    blocks: [
      { type: 'p', text: 'Konut kredisinde satın aldığınız ev teminat olarak ipotek ediliyor. Bu yüzden faizler ihtiyaç kredisine göre düşük, vadeler ise çok daha uzun; 120 ayı, kimi zaman fazlasını görüyor.' },
      { type: 'h2', text: 'Peşinat ne kadar olmalı?' },
      { type: 'p', text: 'Banka evin tamamını kredilendirmiyor, ekspertiz değerinin bir kısmını veriyor. Kalanı peşinat olarak siz koyuyorsunuz. Peşinatı ne kadar yükseltirseniz, çektiğiniz kredi ve ödediğiniz toplam faiz o kadar azalıyor.' },
      { type: 'h2', text: 'Ekspertiz değeri neyi belirler?' },
      { type: 'p', text: 'Banka evin gerçek piyasa değerini bağımsız bir ekspertiz firmasına tespit ettiriyor. Kredi tutarı bu değere göre hesaplanıyor. Satış fiyatı ekspertizin üzerindeyse aradaki farkı cebinizden eklersiniz.' },
      { type: 'h2', text: 'Taksiti vade belirliyor' },
      { type: 'p', text: 'Aylık taksit; kredi tutarı, faiz ve vadeyle eşit taksit (anüite) mantığıyla çıkıyor. 4.000.000 TL’lik bir krediyi 120 ay yerine 180 aya yayınca taksit gözle görülür düşer, ama toplam faiz ciddi şekilde şişer.' },
      { type: 'ul', items: [
        'Önce peşinatınızı ve çekeceğiniz net tutarı belirleyin',
        'Aynı tutarı birkaç farklı vadede hesaplayın',
        'Taksit kadar toplam geri ödemeye de bakın',
      ] },
      { type: 'h2', text: 'Kredi notunuz pazarlık gücünüz' },
      { type: 'p', text: 'Notu yüksek olan başvuru hem daha kolay onaylanıyor hem de daha düşük faiz alıyor. Başvurudan önce borçlarınızı düzenli ödeyip notu toparlamak işe yarıyor. Sonrasında konut kredisi oranlarını karşılaştırarak başlayın.' },
    ],
  },
  {
    slug: 'kredi-karti-secerken-dikkat',
    title: 'Kredi Kartı Seçerken Nelere Bakmalı?',
    description:
      'Aidat, puan, mil, faizsiz dönem, limit. Harcama alışkanlığınıza göre doğru kredi kartını seçmenin pratik yolu.',
    category: 'Kredi Kartı',
    updatedAt: '2026-06-14',
    readMin: 4,
    blocks: [
      { type: 'p', text: 'Doğru kart harcama alışkanlığınıza göre değişir. Sık uçan biri için iyi olan kart, market alışverişi yoğun biri için ortalama kalabilir. Karar verirken şu başlıklara bakın.' },
      { type: 'h2', text: 'Aidat var mı, varsa değiyor mu?' },
      { type: 'p', text: 'Bir kısım kart aidatsız, bir kısmı yıllık ücret alıyor. Aidatlı bir kart alıyorsanız sunduğu mil, lounge ya da sigorta gibi avantajların bu ücreti çıkarıp çıkarmadığını kabaca hesaplayın.' },
      { type: 'h2', text: 'Puan mı, mil mi, nakit iade mi?' },
      { type: 'p', text: 'Çok uçuyorsanız mil; market ve akaryakıta para veriyorsanız nakit iade ya da puan daha mantıklı. Kazanım oranına ve bu kazanımı nerede harcayabildiğinize bakın.' },
      { type: 'h2', text: 'Faizsiz dönemi kullanıyor musunuz?' },
      { type: 'p', text: 'Ekstreyi son ödeme gününde tam kapatıyorsanız faiz oranı sizi pek ilgilendirmez. Ama asgariyi ödeme ihtimaliniz varsa düşük faizli kart seçin; kredi kartı faizi yüksek bir kalemdir.' },
      { type: 'h2', text: 'Limit ve ek kart' },
      { type: 'ul', items: [
        'Başlangıç limiti harcamanıza yetiyor mu?',
        'Aileye ücretsiz ek kart çıkıyor mu?',
        'Taksit ve kampanya ağı geniş mi?',
      ] },
      { type: 'p', text: 'Bu başlıkları kartları yan yana koyup karşılaştırınca görmek en kolayı. Kredi kartı listesinde aidatı, puan tipini ve limiti birlikte görebilirsiniz.' },
    ],
  },
  {
    slug: 'mevduat-faizi-nasil-hesaplanir',
    title: 'Mevduat Faizinde Brüt ile Net Neden Tutmuyor?',
    description:
      'Bankanın söylediği faiz brüt, elinize geçen net. Stopajın getiriyi nasıl düşürdüğünü bir örnekle gösterdik.',
    category: 'Mevduat',
    updatedAt: '2026-06-14',
    readMin: 4,
    blocks: [
      { type: 'p', text: 'Vadeli mevduatta parayı belirli bir süre bankada tutup faiz kazanırsınız. Ama bankanın ilan ettiği oran brüttür. Elinize geçecek tutar, stopaj kesildikten sonra ortaya çıkar.' },
      { type: 'h2', text: 'Brüt faiz ve vade' },
      { type: 'p', text: 'Bankalar yıllık brüt oran açıklar. 32 günlük, 3 aylık, 6 aylık vadelerde oran değişir. Faiz, paranın vadede kaldığı gün sayısı kadar işler.' },
      { type: 'h2', text: 'Stopaj getiriyi nasıl düşürür?' },
      { type: 'p', text: 'Faiz gelirinden kaynakta gelir vergisi, yani stopaj kesilir. Oran vadeye göre değişebiliyor ve zaman zaman güncelleniyor. Net getiriniz, brüt faizden bu kesinti düşülünce kalan kısımdır.' },
      { type: 'h2', text: 'Bir örnek' },
      { type: 'p', text: '100.000 TL’yi yıllık %50 brüt faizle 3 ay vadeyle açtınız diyelim. Brüt faiz kabaca 100.000 × %50 × (3/12) = 12.500 TL eder. Stopaj düşünce cebinize giren rakam bunun altında kalır. İki bankayı kıyaslarken bu net rakama bakın, ilan edilen orana değil.' },
      { type: 'ul', items: [
        'İlan edilen oran brüttür',
        'Net getiri = brüt faiz eksi stopaj',
        'Kısa vadede oranlar daha sık değişir',
      ] },
      { type: 'p', text: 'Tek tek hesap yapmak yerine mevduat karşılaştırmasında 100.000 TL için stopaj sonrası net getiriyi doğrudan görebilirsiniz.' },
    ],
  },
  {
    slug: 'kredi-notu-nedir-nasil-yukseltilir',
    title: 'Kredi Notu Nedir, Nasıl Yükselir?',
    description:
      'Kredi notunuz onay şansınızı ve aldığınız faizi doğrudan etkiler. Notu belirleyen faktörler ve toparlamanın yolları.',
    category: 'Kredi Notu',
    updatedAt: '2026-06-14',
    readMin: 5,
    blocks: [
      { type: 'p', text: 'Kredi notu, geçmiş ödeme alışkanlığınızı sayıya döken bir puandır. Bankalar başvurunuzu değerlendirirken önce buna bakar. Notu yüksek olan hem daha kolay onay alır hem de daha düşük faizle kredi çeker.' },
      { type: 'h2', text: 'Notu ne belirliyor?' },
      { type: 'ul', items: [
        'Ödemeleri zamanında yapmak, ki en belirleyici kalem budur',
        'Kredi kartı limitinizin ne kadarını kullandığınız',
        'Kredi geçmişinizin uzunluğu',
        'Kısa sürede yaptığınız başvuru sayısı',
        'Sahip olduğunuz ürün çeşitliliği',
      ] },
      { type: 'h2', text: 'Nasıl yükselir?' },
      { type: 'p', text: 'Not bir gecede değil, düzenli davranışla yükselir. En etkilisi ödemeleri aksatmamak. Kart limitinizin tamamını sürekli kullanmak notu aşağı çeker; harcamayı limitin altında tutmak iyi gelir.' },
      { type: 'ul', items: [
        'Fatura, kredi ve kart ödemelerini geciktirmeyin',
        'Kart limitini sonuna kadar kullanmayın',
        'Kısa sürede üst üste kredi başvurusu yapmayın',
        'Düzenli ödediğiniz eski hesapları kapatmadan tutun',
      ] },
      { type: 'h2', text: 'Düşük notla kredi çıkar mı?' },
      { type: 'p', text: 'Çıkar, ama genelde daha yüksek faiz ya da daha düşük limitle. Birkaç ay düzenli ödeyip notu toparladıktan sonra başvurmak çoğu zaman daha iyi koşul getirir. Notunuz hazır olduğunda güncel teklifleri karşılaştırıp en düşük oranı yakalayın.' },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
