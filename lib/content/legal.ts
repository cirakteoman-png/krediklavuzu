import type { ContentBlock } from '@/components/ContentBody';

// Yasal belgeler. /yasal/[slug] altında statik üretilir.
// NOT: Bu metinler genel şablonlardır. Yayına almadan önce bir hukuk danışmanına
// gözden geçirtilmeli ve [DOLDURULACAK] alanları gerçek şirket bilgileriyle doldurulmalıdır.

export const CONTACT_EMAIL = 'info@kredikilavuzu.com';

export interface LegalDoc {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  blocks: ContentBlock[];
}

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: 'gizlilik',
    title: 'Gizlilik Politikası',
    description:
      'KrediKlavuzu olarak kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuza dair gizlilik politikamız.',
    updatedAt: '2026-06-14',
    blocks: [
      { type: 'p', text: 'KrediKlavuzu ("Platform") olarak gizliliğinize önem veriyoruz. Bu Gizlilik Politikası, Platform’u ziyaret ettiğinizde hangi verilerin toplandığını, bu verilerin nasıl kullanıldığını ve haklarınızı açıklar.' },
      { type: 'h2', text: 'Topladığımız veriler' },
      { type: 'ul', items: [
        'Otomatik veriler: IP adresi, tarayıcı ve cihaz bilgisi, ziyaret edilen sayfalar ve tarih/saat.',
        'Çerezler aracılığıyla toplanan kullanım ve tercih verileri.',
        'İletişim formu veya e-posta yoluyla bize ilettiğiniz bilgiler (ad, e-posta, mesaj içeriği).',
      ] },
      { type: 'h2', text: 'Verileri kullanma amaçlarımız' },
      { type: 'ul', items: [
        'Platform’un çalışmasını sağlamak ve hizmet kalitesini artırmak.',
        'Kullanım istatistiklerini analiz etmek.',
        'Talep ve sorularınıza yanıt vermek.',
        'Yasal yükümlülükleri yerine getirmek.',
      ] },
      { type: 'h2', text: 'Çerezler ve üçüncü taraf hizmetler' },
      { type: 'p', text: 'Platform, deneyiminizi iyileştirmek ve reklam sunmak için çerezler kullanır. Reklamlar Google AdSense aracılığıyla gösterilebilir; Google ve iş ortakları, ilgi alanına dayalı reklam sunmak için çerez kullanabilir. Çerezleri tarayıcı ayarlarınızdan yönetebilir veya reddedebilirsiniz. Ayrıntılar için Çerez Politikası sayfamıza bakınız.' },
      { type: 'h2', text: 'Veri güvenliği ve saklama' },
      { type: 'p', text: 'Verileriniz, amaçları için gerekli süre boyunca ve makul teknik/idari güvenlik önlemleriyle saklanır. İşleme süresi sona erdiğinde veriler silinir, yok edilir veya anonim hâle getirilir.' },
      { type: 'h2', text: 'Haklarınız ve iletişim' },
      { type: 'p', text: `KVKK kapsamındaki haklarınız (verilerinize erişim, düzeltme, silme vb.) için bizimle ${CONTACT_EMAIL} adresinden iletişime geçebilirsiniz. Veri sorumlusu bilgileri: [DOLDURULACAK — şirket unvanı, adres, MERSİS no].` },
    ],
  },
  {
    slug: 'cerez-politikasi',
    title: 'Çerez (Cookie) Politikası',
    description:
      'KrediKlavuzu’nun kullandığı çerez türleri, amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz.',
    updatedAt: '2026-06-14',
    blocks: [
      { type: 'p', text: 'Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Platform’un düzgün çalışması, tercihlerinizin hatırlanması ve kullanım analizinin yapılması için çerezlerden yararlanırız.' },
      { type: 'h2', text: 'Kullandığımız çerez türleri' },
      { type: 'ul', items: [
        'Zorunlu çerezler: Sitenin temel işlevleri için gereklidir, devre dışı bırakılamaz.',
        'Performans/analiz çerezleri: Ziyaretçilerin siteyi nasıl kullandığını anlamamızı sağlar.',
        'İşlevsellik çerezleri: Dil ve tercih gibi seçimlerinizi hatırlar.',
        'Reklam çerezleri: Google AdSense ve iş ortakları tarafından ilgi alanına dayalı reklam sunmak için kullanılır.',
      ] },
      { type: 'h2', text: 'Google AdSense çerezleri' },
      { type: 'p', text: 'Platform’da reklamlar Google AdSense ile gösterilebilir. Google, reklamları kişiselleştirmek için çerez kullanır. Google’ın reklam çerezlerini ve kişiselleştirme tercihlerinizi Google Reklam Ayarları üzerinden yönetebilirsiniz.' },
      { type: 'h2', text: 'Çerezleri nasıl yönetirim?' },
      { type: 'p', text: 'Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Ancak bazı çerezleri devre dışı bırakmak Platform’un bazı bölümlerinin düzgün çalışmamasına yol açabilir.' },
      { type: 'p', text: `Çerez kullanımıyla ilgili sorularınız için ${CONTACT_EMAIL} adresinden bize ulaşabilirsiniz.` },
    ],
  },
  {
    slug: 'kvkk',
    title: 'KVKK Aydınlatma Metni',
    description:
      '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma metni.',
    updatedAt: '2026-06-14',
    blocks: [
      { type: 'p', text: 'İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla kişisel verilerinizin işlenmesine ilişkin olarak sizi bilgilendirmek amacıyla hazırlanmıştır.' },
      { type: 'h2', text: 'Veri sorumlusu' },
      { type: 'p', text: 'Veri sorumlusu: [DOLDURULACAK — şirket unvanı]. Adres: [DOLDURULACAK]. MERSİS No: [DOLDURULACAK].' },
      { type: 'h2', text: 'İşlenen kişisel veriler ve amaçları' },
      { type: 'ul', items: [
        'Kimlik ve iletişim verileri (iletişim formu doldurduğunuzda): taleplerinizi yanıtlamak amacıyla.',
        'İşlem güvenliği verileri (IP, log kayıtları): güvenlik ve yasal yükümlülükler amacıyla.',
        'Pazarlama/kullanım verileri (çerezler): hizmeti geliştirmek ve analiz amacıyla.',
      ] },
      { type: 'h2', text: 'Hukuki sebep ve aktarım' },
      { type: 'p', text: 'Kişisel verileriniz; bir hakkın tesisi, meşru menfaat, kanunlarda öngörülme ve açık rızanız gibi KVKK m.5/6’da yer alan hukuki sebeplere dayanılarak işlenir. Veriler, yalnızca gerekli olduğu ölçüde yetkili kamu kurumlarına ve hizmet aldığımız tedarikçilere (ör. barındırma, analiz, reklam) aktarılabilir.' },
      { type: 'h2', text: 'KVKK m.11 kapsamındaki haklarınız' },
      { type: 'ul', items: [
        'Kişisel verilerinizin işlenip işlenmediğini öğrenme ve buna ilişkin bilgi talep etme.',
        'İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme.',
        'Eksik veya yanlış işlenmişse düzeltilmesini isteme.',
        'Şartları oluştuğunda silinmesini/yok edilmesini isteme.',
        'İşlenen verilerin üçüncü kişilere aktarıldığı hâlde bunları bilme.',
      ] },
      { type: 'p', text: `Haklarınıza ilişkin taleplerinizi ${CONTACT_EMAIL} adresine iletebilirsiniz. Talebiniz en kısa sürede ve en geç 30 gün içinde sonuçlandırılır.` },
    ],
  },
  {
    slug: 'kullanim-sartlari',
    title: 'Kullanım Şartları',
    description:
      'KrediKlavuzu Platform’unu kullanmanıza ilişkin şartlar, sorumluluk reddi ve fikri mülkiyet hükümleri.',
    updatedAt: '2026-06-14',
    blocks: [
      { type: 'p', text: 'KrediKlavuzu Platform’unu kullanarak işbu Kullanım Şartları’nı kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız lütfen Platform’u kullanmayınız.' },
      { type: 'h2', text: 'Hizmetin tanımı' },
      { type: 'p', text: 'KrediKlavuzu, bankaların ve finansal kuruluşların kredi, mevduat ve kredi kartı ürünlerini karşılaştırmanıza yardımcı olan bağımsız bir bilgilendirme platformudur. Başvuru ve sözleşme süreçleri ilgili kurumun kanalları üzerinden yürütülür.' },
      { type: 'h2', text: 'Sorumluluk reddi' },
      { type: 'p', text: 'Platform’da yer alan faiz oranları, koşullar ve hesaplama sonuçları bilgilendirme amaçlıdır ve yatırım veya finans tavsiyesi niteliği taşımaz. Veriler düzenli güncellense de değişebilir; nihai ve bağlayıcı bilgi ilgili kurumun kendisidir. Verilen kararlardan doğan sonuçlardan kullanıcı sorumludur.' },
      { type: 'h2', text: 'Fikri mülkiyet' },
      { type: 'p', text: 'Platform’daki tasarım, metin, logo ve içerikler ilgili hak sahiplerine aittir ve izinsiz kullanılamaz, kopyalanamaz veya çoğaltılamaz.' },
      { type: 'h2', text: 'Üçüncü taraf bağlantıları' },
      { type: 'p', text: 'Platform, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriğinden veya gizlilik uygulamalarından KrediKlavuzu sorumlu değildir.' },
      { type: 'h2', text: 'Değişiklikler ve iletişim' },
      { type: 'p', text: `İşbu şartlar zaman zaman güncellenebilir; güncel sürüm bu sayfada yayımlanır. Sorularınız için ${CONTACT_EMAIL} adresinden bize ulaşabilirsiniz.` },
    ],
  },
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((d) => d.slug === slug);
}
