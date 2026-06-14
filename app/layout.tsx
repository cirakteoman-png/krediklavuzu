import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdTopBanner from '@/components/AdTopBanner';
import AdSidebars from '@/components/AdSidebars';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: { default: 'KrediKlavuzu — Bankacılık Ürünlerini Karşılaştır', template: '%s | KrediKlavuzu' },
  description: 'KrediKlavuzu ile 50+ bankanın kredi, mevduat ve kredi kartı tekliflerini ücretsiz karşılaştırın. Türkiye\'nin en kapsamlı finansal karşılaştırma platformu.',
  keywords: ['kredi karşılaştırma', 'mevduat faiz', 'konut kredisi', 'kredi kartı', 'ihtiyaç kredisi', 'banka faiz oranları'],
  authors: [{ name: 'KrediKlavuzu' }],
  creator: 'KrediKlavuzu',
  metadataBase: new URL('https://kredikilavuzu.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://kredikilavuzu.com',
    siteName: 'KrediKlavuzu',
    title: 'KrediKlavuzu — Bankacılık Ürünlerini Karşılaştır',
    description: '50+ bankanın kredi, mevduat ve kredi kartı tekliflerini ücretsiz karşılaştırın.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KrediKlavuzu — Bankacılık Ürünlerini Karşılaştır',
    description: '50+ bankanın faiz oranlarını karşılaştır, en iyi teklifi bul.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  // Doğrulama kodları — arama motorlarına kayıt sonrası doldurulacak
  verification: {
    google: '6nUVM-HddpbTArB4h357uFn64bb63lYih3k6rQuUi8I',
    yandex: '9a79ffcdff1d98e2',
    other: { 'msvalidate.01': '5DD8409597E79D4386EC00B850C29990' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`h-full ${jakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5873246208638372"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <AdTopBanner />
        <AdSidebars />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
