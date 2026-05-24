'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/ihtiyac-kredisi', label: 'İhtiyaç Kredisi' },
  { href: '/konut-kredisi',   label: 'Konut Kredisi'   },
  { href: '/kredi-karti',     label: 'Kredi Kartı'      },
  { href: '/mevduat',         label: 'Mevduat'          },
  { href: '/hesaplama',       label: 'Hesaplama'        },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-xl text-green-700 shrink-0">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
            </svg>
          </div>
          KrediKlavuzu
        </Link>

        <nav className="flex gap-1 flex-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap
                ${pathname === href
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-700'}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2 ml-auto shrink-0">
          <button className="px-4 py-2 rounded-md text-sm font-semibold border border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-700 transition-colors">
            Giriş Yap
          </button>
          <button className="px-4 py-2 rounded-md text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors">
            Ücretsiz Kaydol
          </button>
        </div>
      </div>
    </header>
  );
}
