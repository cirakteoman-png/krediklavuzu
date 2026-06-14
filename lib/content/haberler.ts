import type { ContentBlock } from '@/components/ContentBody';

// Haber içeriği. /haber/[slug] altında statik üretilir, /haberler'de listelenir.
// ÖNEMLİ: Bu haberler TEMSİLÎDİR (örnek/stok içerik). Gerçek piyasa verisi veya
// gerçek bir haber kaynağı değildir. Yayına almadan önce gerçek içerikle değiştirilmelidir.

export interface NewsItem {
  slug: string;
  title: string;
  summary: string;
  category: 'Faiz' | 'Kredi' | 'Mevduat' | 'Döviz & Altın' | 'Ekonomi' | 'Kredi Kartı';
  date: string; // ISO
  blocks: ContentBlock[];
}

export const NEWS: NewsItem[] = [
  {
    slug: 'merkez-bankasi-faiz-karari-haziran-2026',
    title: 'Merkez Bankası faiz kararını açıkladı',
    summary: 'TCMB, Para Politikası Kurulu toplantısının ardından politika faizine ilişkin kararını duyurdu. Piyasalar yön arıyor.',
    category: 'Faiz',
    date: '2026-06-14',
    blocks: [
      { type: 'p', text: 'Türkiye Cumhuriyet Merkez Bankası (TCMB) Para Politikası Kurulu, aylık olağan toplantısının ardından politika faizine ilişkin kararını kamuoyuyla paylaştı. Karar, kredi ve mevduat faizleri üzerinde belirleyici olacak.' },
      { type: 'p', text: 'Analistler, kararın özellikle konut ve ihtiyaç kredisi oranlarına kısa vadede yansıyabileceğini belirtiyor. Mevduat faizlerinde de bankaların kampanya iştahını etkilemesi bekleniyor.' },
      { type: 'h2', text: 'Tüketiciye etkisi' },
      { type: 'p', text: 'Kredi kullanmayı planlayan tüketicilerin, oranların güncellendiği dönemde bankaları karşılaştırması önem taşıyor. Güncel teklifleri karşılaştırma araçlarıyla takip edebilirsiniz.' },
    ],
  },
  {
    slug: 'enflasyon-verisi-aciklandi-haziran-2026',
    title: 'Aylık enflasyon verisi açıklandı',
    summary: 'TÜİK aylık tüketici fiyat endeksini yayımladı. Veri, faiz beklentileri açısından yakından izleniyor.',
    category: 'Ekonomi',
    date: '2026-06-13',
    blocks: [
      { type: 'p', text: 'Türkiye İstatistik Kurumu (TÜİK) aylık Tüketici Fiyat Endeksi (TÜFE) verilerini açıkladı. Enflasyon görünümü, hem para politikası hem de hane halkı bütçeleri açısından kritik öneme sahip.' },
      { type: 'p', text: 'Enflasyonun seyri, mevduat faizlerinin reel getirisini ve kredi maliyetlerini doğrudan etkiliyor. Birikimini koruma derdinde olan yatırımcılar, vadeli mevduatın net getirisini stopaj sonrası hesaplamaya dikkat ediyor.' },
      { type: 'h2', text: 'Ne yapmalı?' },
      { type: 'p', text: 'Enflasyon dönemlerinde farklı bankaların mevduat oranlarını ve kredi koşullarını düzenli karşılaştırmak, bütçeyi korumanın en pratik yollarından biri.' },
    ],
  },
  {
    slug: 'konut-kredisi-oranlari-guncellendi',
    title: 'Bankalar konut kredisi oranlarını güncelledi',
    summary: 'Birden fazla banka konut kredisi faiz oranlarında değişikliğe gitti. Ev almak isteyenler için tablo değişiyor.',
    category: 'Kredi',
    date: '2026-06-12',
    blocks: [
      { type: 'p', text: 'Konut kredisi pazarında bankalar oranlarını yeniledi. Faizlerdeki küçük farklar bile uzun vadede ödenen toplam tutarda önemli değişiklik yaratabiliyor.' },
      { type: 'p', text: 'Uzun vadeli konut kredilerinde, vade ve faiz kombinasyonu aylık taksiti ve toplam maliyeti belirler. Başvuru öncesi farklı senaryoları hesaplamak büyük fark yaratır.' },
      { type: 'h2', text: 'Karşılaştırmadan başvurmayın' },
      { type: 'p', text: 'Tek bankaya bağlı kalmadan, güncel konut kredisi tekliflerini yan yana incelemek en avantajlı koşulu yakalamanın anahtarı.' },
    ],
  },
  {
    slug: 'mevduat-faizlerinde-rekabet-kizisti',
    title: 'Mevduat faizlerinde bankalar arası rekabet kızıştı',
    summary: 'Bankalar birikimleri çekmek için kısa vadeli mevduatta cazip oranlar sunmaya başladı.',
    category: 'Mevduat',
    date: '2026-06-11',
    blocks: [
      { type: 'p', text: 'Tasarruf sahiplerini çekmek isteyen bankalar, özellikle 32 günlük ve 3 aylık vadelerde dikkat çeken brüt faiz oranları ilan etti. Ancak ilan edilen oranların brüt olduğu, net getirinin stopaj sonrası belirlendiği unutulmamalı.' },
      { type: 'h2', text: 'Brüt mü net mi?' },
      { type: 'p', text: 'Yatırımcıların elindeki gerçek getiriyi görebilmesi için 100.000 ₺ gibi sabit bir tutar üzerinden net getiriyi karşılaştırması öneriliyor.' },
      { type: 'p', text: 'Farklı bankaların net getirilerini mevduat karşılaştırma aracıyla tek ekranda görebilirsiniz.' },
    ],
  },
  {
    slug: 'dolar-euro-piyasalarda-son-durum',
    title: 'Döviz piyasalarında son durum',
    summary: 'Dolar ve euro, küresel gelişmeler ve yurt içi verilerle birlikte gün içinde dalgalı seyrediyor.',
    category: 'Döviz & Altın',
    date: '2026-06-14',
    blocks: [
      { type: 'p', text: 'Döviz kurları, küresel merkez bankalarının adımları ve yurt içi ekonomik veri akışıyla şekilleniyor. Kur hareketleri, ithalata bağlı fiyatlar ve dolayısıyla enflasyon üzerinde etkili.' },
      { type: 'p', text: 'Döviz veya altın gibi araçlara yönelmeden önce, vadeli mevduatın stopaj sonrası net getirisiyle karşılaştırma yapmak sağlıklı bir alışkanlık.' },
      { type: 'p', text: 'Not: Bu içerik temsilîdir; anlık kur verisi içermez.' },
    ],
  },
  {
    slug: 'altin-fiyatlari-gundemde',
    title: 'Altın fiyatları yeniden gündemde',
    summary: 'Gram altın, küresel belirsizlik ortamında güvenli liman talebiyle yatırımcının radarında.',
    category: 'Döviz & Altın',
    date: '2026-06-10',
    blocks: [
      { type: 'p', text: 'Küresel belirsizlik dönemlerinde güvenli liman olarak görülen altına ilgi artıyor. Gram altın, hem küresel ons fiyatından hem de kur tarafından etkileniyor.' },
      { type: 'h2', text: 'Altın mı mevduat mı?' },
      { type: 'p', text: 'Altın getiri potansiyeli sunsa da dalgalıdır. Sabit getiri arayanlar için vadeli mevduatın net getirisi alternatif olarak değerlendirilebilir. İki seçeneği de bütçenize göre tartmanız önerilir.' },
    ],
  },
  {
    slug: 'ihtiyac-kredisinde-kampanya-donemi',
    title: 'İhtiyaç kredisinde kampanya dönemi başladı',
    summary: 'Bazı bankalar belirli tutar ve vadelerde indirimli faizli ihtiyaç kredisi kampanyaları duyurdu.',
    category: 'Kredi',
    date: '2026-06-09',
    blocks: [
      { type: 'p', text: 'Bankalar, dönemsel olarak belirli tutar ve vade aralıklarında indirimli faizli ihtiyaç kredisi kampanyaları açıyor. Bu kampanyalar genellikle sınırlı süreli oluyor.' },
      { type: 'p', text: 'Kampanya faizleri cazip görünse de dosya masrafı ve sigorta gibi kalemlerle birlikte toplam maliyeti değerlendirmek gerekiyor.' },
      { type: 'h2', text: 'İpucu' },
      { type: 'p', text: 'Kampanyalı ve standart teklifleri aylık taksit ve toplam geri ödeme üzerinden karşılaştırarak gerçek avantajı görebilirsiniz.' },
    ],
  },
  {
    slug: 'kredi-karti-azami-faiz-oranlari',
    title: 'Kredi kartı azami faiz oranlarına ilişkin düzenleme',
    summary: 'Kredi kartı faiz oranlarına dair güncel düzenlemeler, kart kullanıcılarını yakından ilgilendiriyor.',
    category: 'Kredi Kartı',
    date: '2026-06-08',
    blocks: [
      { type: 'p', text: 'Kredi kartı faiz oranlarına ilişkin düzenlemeler, ekstresini tam ödeyemeyen kullanıcılar açısından önem taşıyor. Asgari ödeme yapıldığında kalan borca faiz işliyor.' },
      { type: 'h2', text: 'Faizden korunmanın yolu' },
      { type: 'p', text: 'Ekstrenin son ödeme tarihinde tamamını ödemek, faizsiz dönemden en iyi şekilde yararlanmanın yolu. Düşük faizli ve aidatsız kartları karşılaştırarak maliyetinizi azaltabilirsiniz.' },
    ],
  },
  {
    slug: 'bddk-tuketici-kredilerine-iliskin-aciklama',
    title: 'BDDK’dan tüketici kredilerine ilişkin açıklama',
    summary: 'Düzenleyici kurumun tüketici kredilerine yönelik açıklamaları, bankaların kredi politikalarını etkileyebilir.',
    category: 'Kredi',
    date: '2026-06-07',
    blocks: [
      { type: 'p', text: 'Bankacılık Düzenleme ve Denetleme Kurumu’nun (BDDK) tüketici kredilerine yönelik açıklamaları, bankaların kredi tahsis koşullarını ve limitlerini şekillendirebiliyor.' },
      { type: 'p', text: 'Bu tür düzenlemeler, kredi onay süreçlerini ve sunulan vade/tutar aralıklarını etkileyebilir. Tüketicilerin güncel koşulları başvuru anında teyit etmesi önemli.' },
    ],
  },
  {
    slug: 'konut-piyasasinda-talep-hareketliligi',
    title: 'Konut piyasasında talep hareketliliği',
    summary: 'Konut kredisi oranlarındaki değişim, alıcı ve satıcı tarafındaki beklentileri yeniden şekillendiriyor.',
    category: 'Ekonomi',
    date: '2026-06-06',
    blocks: [
      { type: 'p', text: 'Konut kredisi faizlerindeki hareket, konut talebini doğrudan etkiliyor. Faizlerin gerilediği dönemlerde ev alma planları öne çekilebiliyor.' },
      { type: 'p', text: 'Ev almayı düşünenler için peşinat oranı, ekspertiz değeri ve kredi vadesi gibi unsurlar toplam maliyeti belirleyen ana faktörler.' },
      { type: 'h2', text: 'Plan yaparken' },
      { type: 'p', text: 'Konut kredisi hesaplama aracıyla farklı vade ve tutar senaryolarını test ederek bütçenize uygun planı oluşturabilirsiniz.' },
    ],
  },
  {
    slug: 'vadeli-mevduatta-stopaj-hatirlatmasi',
    title: 'Vadeli mevduatta stopaj hatırlatması',
    summary: 'Mevduat faiz gelirinden kesilen stopaj, net getiriyi belirleyen en önemli kalemlerden biri.',
    category: 'Mevduat',
    date: '2026-06-05',
    blocks: [
      { type: 'p', text: 'Vadeli mevduatta bankaların ilan ettiği oran brüttür. Faiz gelirinden kaynakta kesilen stopaj (gelir vergisi) düşüldükten sonra elinize geçen net tutar belli olur.' },
      { type: 'p', text: 'Stopaj oranı vadeye göre değişebildiği için, farklı vadelerin net getirisini ayrı ayrı hesaplamak gerekir.' },
      { type: 'h2', text: 'Net getiriyi görün' },
      { type: 'p', text: 'Mevduat karşılaştırma aracı, 100.000 ₺ için stopaj sonrası net getiriyi doğrudan göstererek karşılaştırmayı kolaylaştırır.' },
    ],
  },
  {
    slug: 'dijital-bankacilikta-yeni-donem',
    title: 'Dijital bankacılıkta kredi başvuruları hızlanıyor',
    summary: 'Dijital kanallar üzerinden yapılan kredi başvurularında onay süreleri giderek kısalıyor.',
    category: 'Kredi',
    date: '2026-06-04',
    blocks: [
      { type: 'p', text: 'Bankaların dijital altyapı yatırımları, kredi başvuru süreçlerini hızlandırıyor. Birçok bankada ihtiyaç kredisi onayı dakikalar içinde sonuçlanabiliyor.' },
      { type: 'p', text: 'Hız önemli olsa da, başvuru öncesi farklı bankaların oranlarını karşılaştırmak en avantajlı teklifi bulmanın temel koşulu olmayı sürdürüyor.' },
      { type: 'h2', text: 'Önce karşılaştır' },
      { type: 'p', text: 'Dijital başvuru kolaylığını, tarafsız bir karşılaştırmayla birleştirmek en sağlıklı yaklaşım.' },
    ],
  },
];

export function getNews(slug: string): NewsItem | undefined {
  return NEWS.find((n) => n.slug === slug);
}

// En yeni haberler (tarihe göre azalan)
export function latestNews(limit?: number): NewsItem[] {
  const sorted = [...NEWS].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return limit ? sorted.slice(0, limit) : sorted;
}
