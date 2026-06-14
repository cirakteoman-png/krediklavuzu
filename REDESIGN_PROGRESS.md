# KrediKlavuzu — Görsel Yenileme (legowerk-ilhamlı) İlerleme

> Kopma riskine karşı kurtarma dosyası. Her büyük adımdan sonra güncellenir.

## Onaylanan tasarım yönü
- **Stil:** Bol boşluk + minimalizm + hareket/animasyon. Tam görsel yenileme (içerik/fonksiyon AYNI).
- **Palet (Seçenek A — Krem + Yeşil):**
  - Zemin/krem: `#F6F4EE`
  - Metin/ink: `#111111`
  - Vurgu yeşil: `#16a34a`
  - Lime pop: `#C8F230`
  - Yumuşak yüzey/kart: `#FFFFFF` + ince sınır `#E7E3D9`
- **Tipografi:** Başlık = **Space Grotesk** (next/font/google), Gövde = **Plus Jakarta Sans** (mevcut).
- **Hareket:** Ek kütüphane YOK. `useReveal` (IntersectionObserver) + CSS ile scroll-reveal "yükselme", hover mikro-etkileşim, KPI sayma animasyonu.

## Teknik
- Next.js 16.2.6, React 19.2.4, Tailwind v4. AGENTS.md: Next.js 16 standart değil — kod yazmadan önce `node_modules/next/dist/docs/` kontrol et.

## Yapılacaklar / Durum
- [x] globals.css: tema değişkenleri + krem zemin + Space Grotesk (Tailwind v4 @theme: bg-cream, text-ink, text-brand, bg-lime, border-line, font-display)
- [x] layout.tsx: Space Grotesk + Jakarta CSS değişkenleri, body bg-cream
- [x] Reveal bileşeni (components/Reveal.tsx) — IntersectionObserver scroll-reveal. Kullanım: `<Reveal delay={1}>...`
- [x] Hero (components/Hero.tsx) — krem kart, dev başlık, lime vurgu, Reveal stagger, CTA → #karsilastir / #nasil-calisir
- [x] Header (sticky cream/blur, ink pill nav) + Footer (ink bg, lime logo)
- [x] KpiStrip (ink bant), HowItWorks (id #nasil-calisir), HomeTabSection (id #karsilastir, pill tabs)
- [x] CompareTable / MevduatTable / *TableDB / KartTableDB — sed ile palet haritalama
- [x] calcs (Ihtiyac/Konut/Mevduat) + tabs (Ihtiyac/Konut/Kart/Mevduat) — sed ile palet haritalama
- [x] Badge (best=sarı, new=mor korundu), StarRating, AdTopBanner
- [x] Alt sayfalar: ihtiyac-kredisi, konut-kredisi, kredi-karti, mevduat — ortak PageHeader + Reveal
- [x] PageHeader bileşeni (components/PageHeader.tsx)
- [x] `npm run build` BAŞARILI (Next 16, TS geçti, tüm rotalar OK)

## DURUM: Tamamlandı ✅ (görsel yenileme bitti, build geçti)

## Sonradan çıkan sorun + çözüm
- Alt sayfalar 500 veriyordu: Supabase projesi `npduligeimkvzhebqzga.supabase.co` artık YOK (DNS "non-existent domain"). İnternet sağlam, proje silinmiş/kapanmış ya da .env.local'daki URL yanlış. (Eski sorun, tasarımla ilgisiz.)
- ÇÖZÜM: `lib/queries.ts` artık `withFallback` ile sarılı — Supabase erişilemezse `lib/data.ts` örnek verisine düşer (DB şekline eşlenerek). DB canlıyken gerçek veri kullanılır. Tüm alt sayfalar artık 200.
- KALICI DÜZELTME (kullanıcıya ait): yeni/aktif bir Supabase projesi açıp `.env.local` içindeki NEXT_PUBLIC_SUPABASE_URL + KEY'i güncellemek.

## Sayfalar
- Görüntülenebilir 5 sayfa: / , /ihtiyac-kredisi , /konut-kredisi , /kredi-karti , /mevduat
- Header'daki "Hesaplama" linki (/hesaplama) henüz YOK → 404 (bu redesign kapsamı dışı).
- robots.txt + sitemap.xml üretiliyor (gerçek sayfa değil).

### sed palet haritalaması (tablo/calc/tab dosyalarında uygulandı)
bg-white→bg-surface · bg-gray-50→bg-cream · bg-gray-100→bg-cream-deep · border-gray-100/200→border-line · text-gray-900/700→text-ink · text-gray-400/500/600→text-ink-soft · bg-green-600→bg-ink · text-green-700→text-brand · text-green-800→text-brand-dark · bg-green-50→bg-brand/5 · border-green-200→border-brand/20 · focus:border-green-500→focus:border-brand · text-white→text-cream
- [ ] build doğrulama

## SONRAKİ OTURUM PLANI (yarın)
1. **Supabase** — yeni proje aç + `.env.local` güncelle (URL + anahtar). Fallback'i SİLME, sadece gerçek DB'yi geri bağla.
2. **Daha fazla sayfa** (kullanıcı önceliği — "sen daha fazla sayfaya odaklan"):
   - AdSense/yasal ZORUNLU: Gizlilik Politikası, Çerez Politikası, KVKK Aydınlatma, Kullanım Şartları
   - Güven: Hakkında, İletişim
   - Mevcut 404 düzelt: Header'daki `/hesaplama` linkinin sayfası yok → hesaplama merkezi sayfası
   - SEO içerik: SSS, Rehber/Blog (hub + makaleler), sözlük
   - Yeni ürünler: Taşıt Kredisi, Faizsiz/Katılım (veri gerekir; lib/data.ts genişlet)
   - Her yeni sayfa: PageHeader + Reveal + tema token'ları. `app/sitemap.ts` ve footer linklerini güncelle.

## SEO İÇERİK PAKETİ — TAMAMLANDI ✅ (2026-06-14)
Eklenen sayfalar (hepsi statik üretildi, build geçti, 200):
- `/rehber` (hub) + `/rehber/[slug]` — 5 gerçek makale (generateStaticParams + generateMetadata + notFound)
- `/sss` — kategorili SSS (native `<details>`, JS'siz, SEO dostu)
- `/sozluk` — alfabetik finans sözlüğü (~22 terim) + harf navigasyonu
- İçerik verisi: `lib/content/rehber.ts`, `lib/content/sss.ts`, `lib/content/sozluk.ts`
- `app/sitemap.ts` makaleler dahil güncellendi
- Header: "Hesaplama" (404'tü) → "Rehber" linkiyle değiştirildi
- Footer: Ürünler + yeni "Kaynaklar" sütunu gerçek linklere bağlandı; "Kurumsal" sütunu (Hakkımızda/İletişim/KVKK/Gizlilik) henüz sayfa yok → "Yakında" (link değil, 404 yok)

**Toplam görüntülenebilir sayfa: 13** (5 ürün/ana + /rehber + /sss + /sozluk + 5 makale)

## TEMEL PAKET — TAMAMLANDI ✅ (2026-06-14)
- `/hakkinda` (misyon, değerler, istatistik, İletişim CTA)
- `/iletisim` — e-posta **info@kredikilavuzu.com** (kullanıcı verdi); adres/MERSİS [DOLDURULACAK]
- `/yasal/[slug]` — Gizlilik Politikası, Çerez Politikası, KVKK Aydınlatma, Kullanım Şartları (genel şablonlar, lib/content/legal.ts; hukukçuya gözden geçirtilmeli, [DOLDURULACAK] alanları var)
- Ortak `components/ContentBody.tsx` (p/h2/ul render) — rehber makaleleri + yasal sayfalar kullanıyor
- Footer "Kurumsal" sütunu gerçek linklere bağlandı; sitemap güncellendi (hakkinda, iletisim, 4 yasal)

**Toplam görüntülenebilir sayfa: 19**

## HABER SİSTEMİ — TAMAMLANDI ✅ (2026-06-14)
- `lib/content/haberler.ts` — **12 temsilî (stok) haber**, güncel tarihli (2026-06-04…06-14). NOT: temsilî içerik, gerçek kaynak değil; her sayfada "temsilî" uyarısı var. Gerçek kaynağa (Bloomberg HT) ATFEDİLMEDİ (uydurma haberi gerçek kaynağa bağlamak yanıltıcı olur).
- `/haberler` hub + `/haber/[slug]` (12 sayfa, generateStaticParams + generateMetadata + **NewsArticle JSON-LD** SEO)
- `components/NewsBox.tsx` — sağ taraf "Güncel Haberler" kutusu (latest 6). Haber detayda sağ rail'de (sticky), ana sayfada `HomeNews` bölümünde sağda.
- `components/HomeNews.tsx` — ana sayfada "Piyasadan haberler" bölümü (sol: 3 öne çıkan, sağ: NewsBox). page.tsx'e eklendi.
- Header'a "Haberler" eklendi (nav md→lg görünür yapıldı, 6 öğe taşmasın diye). Footer "Kaynaklar"a + sitemap'e eklendi.

**TOPLAM GÖRÜNTÜLENEBİLİR SAYFA: 32** (hedef 40+ — yaklaşıldı)

## KALAN (40+ için ve genel)
- 40+'a ulaşmak için: daha fazla haber/makale, ürün sayfaları (Taşıt Kredisi, Faizsiz/Katılım), her banka için sayfa, /hesaplama özel sayfası
- Supabase: kullanıcı yeni proje açıp .env.local güncelleyecek
- Yasal metinleri hukukçuya gözden geçirtmek + [DOLDURULACAK] (şirket unvanı, adres, MERSİS)
- Haberleri gerçek içerikle değiştirmek (şu an temsilî)

## Notlar
- Tüm değişiklikler henüz COMMIT EDİLMEDİ.
- Çalışan örnek-veri yedeği sayesinde Supabase olmadan da tüm sayfalar 200.
- Supabase hâlâ ölü (kullanıcı yeni proje açıp .env.local güncelleyecek).
