import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdTopBanner from '@/components/AdTopBanner';
import AdSidebars from '@/components/AdSidebars';

const font = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'KrediKlavuzu — Bankacılık Ürünlerini Karşılaştır',
  description: 'KrediKlavuzu ile 50+ bankanın kredi, mevduat ve kredi kartı tekliflerini ücretsiz karşılaştırın.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="h-full">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5873246208638372"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${font.className} min-h-full flex flex-col bg-gray-50`}>
        <Header />
        <AdTopBanner />
        <AdSidebars />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
