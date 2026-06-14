import { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/content/rehber';
import { LEGAL_DOCS } from '@/lib/content/legal';
import { NEWS } from '@/lib/content/haberler';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kredikilavuzu.com';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                      lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/ihtiyac-kredisi`, lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/konut-kredisi`,   lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/kredi-karti`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/mevduat`,         lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/haberler`,        lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${base}/rehber`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/sss`,             lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sozluk`,          lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/hakkinda`,        lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/iletisim`,        lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${base}/rehber/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const legalRoutes: MetadataRoute.Sitemap = LEGAL_DOCS.map((d) => ({
    url: `${base}/yasal/${d.slug}`,
    lastModified: new Date(d.updatedAt),
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  const newsRoutes: MetadataRoute.Sitemap = NEWS.map((n) => ({
    url: `${base}/haber/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes, ...legalRoutes, ...newsRoutes];
}
