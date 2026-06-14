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
    summary: 'Para Politikası Kurulu toplantısının ardından politika faizine ilişkin karar belli oldu. Gözler kredi ve mevduat oranlarına çevrildi.',
    category: 'Faiz',
    date: '2026-06-14',
    blocks: [
      { type: 'p', text: 'Merkez Bankası Para Politikası Kurulu, aylık toplantısının ardından politika faizine ilişkin kararını açıkladı. Karar, bankaların kredi ve mevduat fiyatlamasını doğrudan etkileyecek.' },
      { type: 'p', text: 'Kararın ilk yansıması genelde konut ve ihtiyaç kredisi oranlarında görülüyor. Mevduat tarafında ise bankaların kampanya iştahı belirleyici olacak.' },
      { type: 'h2', text: 'Tüketici ne yapmalı?' },
      { type: 'p', text: 'Oranların güncellendiği bu tür dönemlerde kredi çekecek olanlar için bankaları karşılaştırmak fark yaratıyor. Güncel teklifleri karşılaştırma araçlarından takip edebilirsiniz.' },
    ],
  },
  {
    slug: 'enflasyon-verisi-aciklandi-haziran-2026',
    title: 'Aylık enflasyon verisi açıklandı',
    summary: 'TÜİK aylık tüketici fiyat endeksini yayımladı. Veri, faiz beklentileri açısından kritik.',
    category: 'Ekonomi',
    date: '2026-06-13',
    blocks: [
      { type: 'p', text: 'TÜİK, aylık Tüketici Fiyat Endeksi (TÜFE) verilerini açıkladı. Enflasyon görünümü hem para politikasını hem hane bütçelerini yakından ilgilendiriyor.' },
      { type: 'p', text: 'Enflasyonun yönü, mevduatın reel getirisini ve kredi maliyetini belirliyor. Birikimini korumaya çalışanlar vadeli mevduatta stopaj sonrası net getiriye bakıyor.' },
      { type: 'h2', text: 'Bütçeye etkisi' },
      { type: 'p', text: 'Enflasyonun yüksek seyrettiği dönemlerde mevduat oranlarını ve kredi koşullarını düzenli karşılaştırmak, bütçeyi korumanın pratik yollarından biri.' },
    ],
  },
  {
    slug: 'konut-kredisi-oranlari-guncellendi',
    title: 'Bankalar konut kredisi oranlarını güncelledi',
    summary: 'Birçok banka konut kredisi faizinde değişikliğe gitti. Ev almak isteyenler için tablo yeniden şekillendi.',
    category: 'Kredi',
    date: '2026-06-12',
    blocks: [
      { type: 'p', text: 'Konut kredisinde bankalar oranlarını yeniledi. Faizdeki küçük bir fark bile uzun vadede ödenen toplam tutarda büyük değişiklik yaratıyor.' },
      { type: 'p', text: 'Uzun vadeli kredilerde vade ve faiz birlikte hem aylık taksiti hem toplam maliyeti belirliyor. Başvurudan önce birkaç senaryoyu hesaplamak ciddi fark açıyor.' },
      { type: 'h2', text: 'Karşılaştırmadan başvurmayın' },
      { type: 'p', text: 'Tek bankaya bağlı kalmadan güncel konut kredisi tekliflerini yan yana incelemek, en uygun koşulu bulmanın en kısa yolu.' },
    ],
  },
  {
    slug: 'mevduat-faizlerinde-rekabet-kizisti',
    title: 'Mevduat faizlerinde bankalar arası rekabet kızıştı',
    summary: 'Bankalar birikimleri çekmek için kısa vadeli mevduatta dikkat çeken oranlar açıkladı. Ama ilan edilen oran brüt.',
    category: 'Mevduat',
    date: '2026-06-11',
    blocks: [
      { type: 'p', text: 'Tasarruf sahibini çekmek isteyen bankalar, özellikle 32 günlük ve 3 aylık vadelerde yüksek brüt faizler ilan etti. İlan edilen oranın brüt olduğunu, net getirinin stopaj sonrası belli olduğunu hatırlatmakta fayda var.' },
      { type: 'h2', text: 'Brüt mü, net mi?' },
      { type: 'p', text: 'Elinize geçecek gerçek getiriyi görmek için 100.000 TL gibi sabit bir tutar üzerinden net getiriyi kıyaslayın.' },
      { type: 'p', text: 'Bankaların net getirilerini mevduat karşılaştırmasında tek ekranda görebilirsiniz.' },
    ],
  },
  {
    slug: 'dolar-euro-piyasalarda-son-durum',
    title: 'Döviz piyasalarında son durum',
    summary: 'Dolar ve euro, küresel gelişmeler ve yurt içi verilerle gün içinde dalgalı seyrediyor.',
    category: 'Döviz & Altın',
    date: '2026-06-14',
    blocks: [
      { type: 'p', text: 'Kurlar, küresel merkez bankalarının adımları ve yurt içi veri akışıyla şekilleniyor. Kur hareketi ithalata bağlı fiyatları, dolayısıyla enflasyonu da etkiliyor.' },
      { type: 'p', text: 'Dövize ya da altına yönelmeden önce vadeli mevduatın stopaj sonrası net getirisiyle karşılaştırmak sağlıklı bir alışkanlık.' },
    ],
  },
  {
    slug: 'altin-fiyatlari-gundemde',
    title: 'Altın fiyatları yeniden gündemde',
    summary: 'Gram altın, küresel belirsizlik ortamında güvenli liman talebiyle yatırımcının radarında.',
    category: 'Döviz & Altın',
    date: '2026-06-10',
    blocks: [
      { type: 'p', text: 'Belirsizliğin arttığı dönemlerde güvenli liman sayılan altına ilgi yükseliyor. Gram altın hem küresel ons fiyatından hem kurdan etkileniyor.' },
      { type: 'h2', text: 'Altın mı, mevduat mı?' },
      { type: 'p', text: 'Altın getiri sunsa da dalgalı. Sabit getiri arayan biri için vadeli mevduatın net getirisi bir alternatif. İkisini de bütçenize göre tartmakta fayda var.' },
    ],
  },
  {
    slug: 'ihtiyac-kredisinde-kampanya-donemi',
    title: 'İhtiyaç kredisinde kampanya dönemi başladı',
    summary: 'Bazı bankalar belirli tutar ve vadelerde indirimli faizli ihtiyaç kredisi kampanyaları açtı.',
    category: 'Kredi',
    date: '2026-06-09',
    blocks: [
      { type: 'p', text: 'Bankalar dönemsel olarak belirli tutar ve vade aralıklarında indirimli faizli ihtiyaç kredisi açıyor. Bu kampanyalar çoğu zaman sınırlı süreli oluyor.' },
      { type: 'p', text: 'Kampanya faizi cazip görünse de dosya masrafı ve sigortayla birlikte toplam maliyete bakmak gerekiyor.' },
      { type: 'h2', text: 'Gerçek avantajı görmek için' },
      { type: 'p', text: 'Kampanyalı ve standart teklifi aylık taksit ve toplam geri ödeme üzerinden karşılaştırınca avantajın gerçek olup olmadığı ortaya çıkıyor.' },
    ],
  },
  {
    slug: 'kredi-karti-azami-faiz-oranlari',
    title: 'Kredi kartı azami faiz oranlarında düzenleme',
    summary: 'Kredi kartı faizine dair güncel düzenleme, ekstresini tam ödeyemeyen kullanıcıları yakından ilgilendiriyor.',
    category: 'Kredi Kartı',
    date: '2026-06-08',
    blocks: [
      { type: 'p', text: 'Kredi kartı faizine ilişkin düzenleme, ekstresini tam kapatamayan kullanıcılar için önem taşıyor. Asgari ödeme yapıldığında kalan borca faiz işliyor.' },
      { type: 'h2', text: 'Faizden korunmanın yolu' },
      { type: 'p', text: 'Ekstreyi son ödeme günü tam kapatmak, faizsiz dönemi sonuna kadar kullanmanın yolu. Düşük faizli ve aidatsız kartları karşılaştırarak maliyeti aşağı çekebilirsiniz.' },
    ],
  },
  {
    slug: 'bddk-tuketici-kredilerine-iliskin-aciklama',
    title: 'BDDK’dan tüketici kredilerine ilişkin açıklama',
    summary: 'Düzenleyici kurumun açıklamaları, bankaların kredi politikalarını ve limitlerini etkileyebilir.',
    category: 'Kredi',
    date: '2026-06-07',
    blocks: [
      { type: 'p', text: 'BDDK’nın tüketici kredilerine yönelik açıklamaları, bankaların kredi tahsis koşullarını ve limitlerini şekillendirebiliyor.' },
      { type: 'p', text: 'Bu tür düzenlemeler onay süreçlerini ve sunulan vade-tutar aralıklarını değiştirebiliyor. Tüketicinin güncel koşulları başvuru anında teyit etmesinde fayda var.' },
    ],
  },
  {
    slug: 'konut-piyasasinda-talep-hareketliligi',
    title: 'Konut piyasasında talep hareketlendi',
    summary: 'Konut kredisi oranlarındaki değişim, alıcı ve satıcı tarafındaki beklentileri yeniden şekillendiriyor.',
    category: 'Ekonomi',
    date: '2026-06-06',
    blocks: [
      { type: 'p', text: 'Konut kredisi faizindeki hareket talebi doğrudan etkiliyor. Faizin gerilediği dönemlerde ev alma planları öne çekilebiliyor.' },
      { type: 'p', text: 'Ev almayı düşünenler için peşinat oranı, ekspertiz değeri ve vade toplam maliyeti belirleyen ana başlıklar.' },
      { type: 'h2', text: 'Plan yaparken' },
      { type: 'p', text: 'Konut kredisi hesaplamasında farklı vade ve tutarları deneyerek bütçenize uygun planı çıkarabilirsiniz.' },
    ],
  },
  {
    slug: 'vadeli-mevduatta-stopaj-hatirlatmasi',
    title: 'Vadeli mevduatta stopaj hatırlatması',
    summary: 'Faiz gelirinden kesilen stopaj, net getiriyi belirleyen en önemli kalemlerden biri.',
    category: 'Mevduat',
    date: '2026-06-05',
    blocks: [
      { type: 'p', text: 'Vadeli mevduatta bankanın ilan ettiği oran brüt. Faiz gelirinden kaynakta kesilen stopaj düşünce elinize geçen net tutar belli oluyor.' },
      { type: 'p', text: 'Stopaj oranı vadeye göre değişebildiği için farklı vadelerin net getirisini ayrı ayrı hesaplamak gerekiyor.' },
      { type: 'h2', text: 'Net getiriyi görün' },
      { type: 'p', text: 'Mevduat karşılaştırması 100.000 TL için stopaj sonrası net getiriyi doğrudan gösteriyor.' },
    ],
  },
  {
    slug: 'dijital-bankacilikta-yeni-donem',
    title: 'Dijital bankacılıkta kredi onayı hızlanıyor',
    summary: 'Dijital kanallardan yapılan kredi başvurularında onay süreleri giderek kısalıyor.',
    category: 'Kredi',
    date: '2026-06-04',
    blocks: [
      { type: 'p', text: 'Bankaların dijital altyapı yatırımı başvuru süreçlerini hızlandırıyor. Birçok bankada ihtiyaç kredisi onayı dakikalar içinde sonuçlanıyor.' },
      { type: 'p', text: 'Hız önemli ama başvurudan önce bankaları karşılaştırmak hâlâ en uygun teklifi bulmanın temel koşulu.' },
      { type: 'h2', text: 'Önce karşılaştırın' },
      { type: 'p', text: 'Dijital başvurunun kolaylığını tarafsız bir karşılaştırmayla birleştirmek en sağlıklı yaklaşım.' },
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
