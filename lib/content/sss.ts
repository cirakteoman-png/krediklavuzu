// Sık Sorulan Sorular içeriği. /sss sayfasında kategori bazlı açılır-kapanır listelenir.

export interface SSSItem {
  q: string;
  a: string;
}

export interface SSSCategory {
  category: string;
  items: SSSItem[];
}

export const SSS: SSSCategory[] = [
  {
    category: 'Genel',
    items: [
      {
        q: 'KrediKlavuzu ücretli mi?',
        a: 'Hayır. KrediKlavuzu üzerinden banka ürünlerini karşılaştırmak tamamen ücretsizdir. Sizden herhangi bir ücret talep edilmez.',
      },
      {
        q: 'Karşılaştırma sonuçları ne kadar güncel?',
        a: 'Faiz oranları ve teklifler düzenli olarak güncellenir. Yine de başvuru öncesinde ilgili bankanın resmî koşullarını teyit etmenizi öneririz.',
      },
      {
        q: 'Başvurumu doğrudan KrediKlavuzu üzerinden mi yapıyorum?',
        a: 'KrediKlavuzu bağımsız bir karşılaştırma platformudur. Size en uygun teklifi bulmanıza yardımcı olur; başvuru süreci ilgili bankanın kanalları üzerinden tamamlanır.',
      },
      {
        q: 'Verilerim güvende mi?',
        a: 'Kişisel verileriniz KVKK kapsamında işlenir. Detaylar için Gizlilik Politikası ve KVKK Aydınlatma Metni sayfalarımızı inceleyebilirsiniz.',
      },
    ],
  },
  {
    category: 'İhtiyaç Kredisi',
    items: [
      {
        q: 'İhtiyaç kredisi için hangi belgeler gerekir?',
        a: 'Genellikle kimlik yeterlidir; yüksek tutarlarda gelir belgesi (maaş bordrosu veya SGK hizmet dökümü) istenebilir.',
      },
      {
        q: 'Kredi onayı ne kadar sürede çıkar?',
        a: 'Birçok bankada dijital başvurularda onay anında veya birkaç dakika içinde sonuçlanır. Bazı durumlarda 1 iş günü sürebilir.',
      },
      {
        q: 'Aylık taksitimi nasıl hesaplayabilirim?',
        a: 'Ana sayfadaki veya ilgili ürün sayfasındaki kredi hesaplama aracına kredi tutarı, vade ve faiz oranını girerek aylık taksiti ve toplam maliyeti anında görebilirsiniz.',
      },
    ],
  },
  {
    category: 'Konut Kredisi',
    items: [
      {
        q: 'Konut bedelinin tamamına kredi alabilir miyim?',
        a: 'Hayır. Bankalar konutun ekspertiz değerinin belirli bir oranını kredilendirir; kalan kısmı peşinat olarak ödemeniz gerekir.',
      },
      {
        q: 'Ekspertiz ücreti nedir?',
        a: 'Krediye konu konutun gerçek piyasa değerinin bağımsız bir firma tarafından tespit edilmesi için alınan ücrettir. Kredi tutarı ekspertiz değerine göre belirlenir.',
      },
      {
        q: 'Konut kredisinde vade en fazla kaç ay olur?',
        a: 'Vade bankaya ve mevzuata göre değişmekle birlikte konut kredilerinde uzun vadeler (120 ay ve üzeri) sunulabilir. Uzun vade taksiti düşürür ama toplam faizi artırır.',
      },
    ],
  },
  {
    category: 'Kredi Kartı',
    items: [
      {
        q: 'Aidatsız kredi kartı var mı?',
        a: 'Evet, birçok banka aidatsız kart seçenekleri sunar. Karşılaştırma sayfamızda kartların aidat bilgisini görebilirsiniz.',
      },
      {
        q: 'Faizsiz dönem ne demek?',
        a: 'Ekstre kesim ile son ödeme tarihi arasındaki süredir. Borcunuzu son ödeme tarihinde tam öderseniz alışverişlerinize faiz işlemez.',
      },
      {
        q: 'Puan, mil ve nakit iade arasındaki fark nedir?',
        a: 'Puan ve nakit iade harcamalarınızdan kazanım sağlar; mil ise özellikle uçuş harcamalarında avantajlıdır. Harcama alışkanlığınıza uygun olanı seçmelisiniz.',
      },
    ],
  },
  {
    category: 'Mevduat',
    items: [
      {
        q: 'İlan edilen faiz net mi brüt mü?',
        a: 'Bankaların ilan ettiği oran brüttür. Elinize geçecek net getiri, stopaj (gelir vergisi) kesintisinden sonra belli olur.',
      },
      {
        q: 'Stopaj nedir?',
        a: 'Mevduat faiz gelirinden kaynakta kesilen gelir vergisidir. Oranı vadeye göre değişebilir ve dönemsel olarak güncellenir.',
      },
      {
        q: 'Hangi vade daha avantajlı?',
        a: 'Genellikle daha uzun vadelerde brüt oran daha yüksektir, ancak paranızın o süre boyunca bağlı kalacağını göz önünde bulundurun. Net getirileri mevduat karşılaştırma aracıyla kıyaslayabilirsiniz.',
      },
    ],
  },
];
