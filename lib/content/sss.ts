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
        a: 'Hayır. Banka ürünlerini karşılaştırmak tamamen ücretsiz. Sizden hiçbir ücret alınmaz.',
      },
      {
        q: 'Sonuçlar ne kadar güncel?',
        a: 'Faiz oranları ve teklifler düzenli güncelleniyor. Yine de başvurudan önce ilgili bankanın koşullarını teyit edin.',
      },
      {
        q: 'Başvuruyu KrediKlavuzu üzerinden mi yapıyorum?',
        a: 'Hayır. KrediKlavuzu bağımsız bir karşılaştırma platformu. Size uygun teklifi bulmanıza yardımcı oluyor; başvuru ilgili bankanın kendi kanallarından tamamlanıyor.',
      },
      {
        q: 'Verilerim güvende mi?',
        a: 'Kişisel verileriniz KVKK kapsamında işleniyor. Ayrıntılar Gizlilik Politikası ve KVKK Aydınlatma Metni sayfalarında.',
      },
    ],
  },
  {
    category: 'İhtiyaç Kredisi',
    items: [
      {
        q: 'Hangi belgeler gerekiyor?',
        a: 'Çoğu zaman kimlik yetiyor. Yüksek tutarlarda gelir belgesi (maaş bordrosu ya da SGK hizmet dökümü) istenebiliyor.',
      },
      {
        q: 'Onay ne kadar sürer?',
        a: 'Dijital başvuruda birçok bankada onay anında ya da birkaç dakikada çıkıyor. Bazı durumlarda 1 iş gününü buluyor.',
      },
      {
        q: 'Aylık taksitimi nasıl hesaplarım?',
        a: 'Hesaplama aracına kredi tutarını, vadeyi ve faizi girin; aylık taksit ve toplam maliyet anında çıkıyor.',
      },
    ],
  },
  {
    category: 'Konut Kredisi',
    items: [
      {
        q: 'Evin tamamına kredi alabilir miyim?',
        a: 'Hayır. Banka ekspertiz değerinin bir kısmını kredilendiriyor, kalanını peşinat olarak siz koyuyorsunuz.',
      },
      {
        q: 'Ekspertiz ücreti ne?',
        a: 'Evin piyasa değerinin bağımsız bir firmaya tespit ettirilmesi için alınan ücret. Kredi tutarı bu değere göre belirleniyor.',
      },
      {
        q: 'Vade en fazla kaç ay olur?',
        a: 'Bankaya ve mevzuata göre değişiyor; konut kredisinde 120 ay ve üzeri vadeler görülebiliyor. Uzun vade taksiti düşürür ama toplam faizi artırır.',
      },
    ],
  },
  {
    category: 'Kredi Kartı',
    items: [
      {
        q: 'Aidatsız kart var mı?',
        a: 'Var. Birçok banka aidatsız kart sunuyor. Karşılaştırma sayfasında kartların aidat bilgisini görebilirsiniz.',
      },
      {
        q: 'Faizsiz dönem ne demek?',
        a: 'Ekstre kesim tarihiyle son ödeme tarihi arasındaki süre. Borcu son ödeme günü tam kapatırsanız alışverişe faiz işlemez.',
      },
      {
        q: 'Puan, mil ve nakit iade farkı ne?',
        a: 'Puan ve nakit iade harcamadan kazanım sağlar; mil özellikle uçuşta avantajlı. Harcama alışkanlığınıza uyanı seçin.',
      },
    ],
  },
  {
    category: 'Mevduat',
    items: [
      {
        q: 'İlan edilen faiz net mi, brüt mü?',
        a: 'Brüt. Elinize geçecek net tutar, stopaj kesildikten sonra belli oluyor.',
      },
      {
        q: 'Stopaj nedir?',
        a: 'Faiz gelirinden kaynakta kesilen gelir vergisi. Oranı vadeye göre değişebiliyor.',
      },
      {
        q: 'Hangi vade daha avantajlı?',
        a: 'Genelde uzun vadede brüt oran daha yüksek, ama paranız o süre bağlı kalıyor. Net getirileri mevduat karşılaştırmasında kıyaslayabilirsiniz.',
      },
    ],
  },
];
