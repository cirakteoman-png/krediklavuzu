import Link from 'next/link';
import { latestNews } from '@/lib/content/haberler';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
}

/** Sağ tarafta gösterilen güncel haberler kutusu. */
export default function NewsBox({ limit = 6, exclude }: { limit?: number; exclude?: string }) {
  const items = latestNews().filter((n) => n.slug !== exclude).slice(0, limit);

  return (
    <aside className="rounded-3xl bg-surface border border-line p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold font-display text-ink flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
          Güncel Haberler
        </h2>
        <Link href="/haberler" className="text-xs font-semibold font-display text-ink-soft hover:text-ink">
          Tümü →
        </Link>
      </div>

      <ul className="divide-y divide-line">
        {items.map((n) => (
          <li key={n.slug} className="py-3 first:pt-0 last:pb-0">
            <Link href={`/haber/${n.slug}`} className="group block">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold font-display text-brand-dark">{n.category}</span>
                <span className="text-[11px] text-ink-soft">· {formatDate(n.date)}</span>
              </div>
              <p className="text-sm font-semibold text-ink leading-snug group-hover:text-brand-dark transition-colors">
                {n.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
