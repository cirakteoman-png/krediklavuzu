// Finans sözlüğü. /sozluk sayfasında alfabetik gruplanarak listelenir.

export interface Term {
  term: string;
  definition: string;
}

export const TERIMLER: Term[] = [
  { term: 'Anapara', definition: 'Kredide faiz hariç çekilen asıl tutar; mevduatta ise yatırılan asıl para.' },
  { term: 'Anüite (Eşit Taksit)', definition: 'Kredi geri ödemesinin vade boyunca eşit aylık taksitler hâlinde yapıldığı ödeme yöntemi.' },
  { term: 'BDDK', definition: 'Bankacılık Düzenleme ve Denetleme Kurumu. Türkiye’de bankaların ve finansal kuruluşların denetiminden sorumlu kurum.' },
  { term: 'Brüt Faiz', definition: 'Vergi ve kesintiler düşülmeden önce ilan edilen faiz oranı.' },
  { term: 'Dosya Masrafı', definition: 'Kredi tahsisi sırasında bankanın talep edebildiği işlem ücreti. Toplam maliyeti etkiler.' },
  { term: 'Ekspertiz', definition: 'Konut kredisinde, krediye konu gayrimenkulün piyasa değerinin bağımsız bir firma tarafından belirlenmesi.' },
  { term: 'Faizsiz Dönem', definition: 'Kredi kartında ekstre kesim tarihi ile son ödeme tarihi arasındaki, borcun tamamı ödenirse faiz işlemeyen süre.' },
  { term: 'Findeks / Kredi Notu', definition: 'Bireyin finansal geçmişine göre hesaplanan, borç ödeme alışkanlığını sayısallaştıran puan.' },
  { term: 'İpotek', definition: 'Bir borcun teminatı olarak gayrimenkul üzerine konan hukuki kısıtlama. Konut kredilerinde yaygındır.' },
  { term: 'KKDF', definition: 'Kaynak Kullanımını Destekleme Fonu. Bazı kredi türlerinde uygulanan yasal kesinti.' },
  { term: 'KMH (Kredili Mevduat Hesabı)', definition: 'Vadesiz hesabınızın bakiyesi bittiğinde tanımlı limit kadar kullanabildiğiniz, faizi yüksek kredi türü.' },
  { term: 'Kredi Limiti', definition: 'Bir kredi kartı veya kredi ürününde kullanabileceğiniz azami tutar.' },
  { term: 'KVKK', definition: 'Kişisel Verilerin Korunması Kanunu. Kişisel verilerin işlenmesine ilişkin kuralları belirler.' },
  { term: 'Mevduat', definition: 'Bankaya belirli veya belirsiz süreyle yatırılan, faiz getirisi sağlayabilen para.' },
  { term: 'Net Faiz', definition: 'Stopaj ve diğer kesintiler düşüldükten sonra yatırımcının eline geçen gerçek getiri.' },
  { term: 'Peşinat', definition: 'Konut veya taşıt alımında kredi dışında alıcının kendi karşıladığı ön ödeme tutarı.' },
  { term: 'Stopaj', definition: 'Mevduat faiz gelirinden kaynakta kesilen gelir vergisi.' },
  { term: 'Taksitlendirme', definition: 'Bir harcamanın veya borcun birden fazla aya bölünerek ödenmesi.' },
  { term: 'Teminat', definition: 'Kredinin geri ödenmemesi riskine karşı bankaya gösterilen güvence (ipotek, kefil vb.).' },
  { term: 'Tüketici Kredisi', definition: 'Bireylerin kişisel ihtiyaçları için kullandığı, ticari olmayan kredi türü.' },
  { term: 'Vade', definition: 'Kredinin geri ödeneceği veya mevduatın bağlı kalacağı süre (genellikle ay cinsinden).' },
  { term: 'Yıllık Maliyet Oranı', definition: 'Faiz ve tüm masrafları içeren, kredinin gerçek yıllık maliyetini gösteren oran.' },
];
