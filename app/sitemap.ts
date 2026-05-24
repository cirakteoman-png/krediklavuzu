import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://krediklavuzu.com';
  const now = new Date();

  return [
    { url: base,                        lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/ihtiyac-kredisi`,   lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/konut-kredisi`,     lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/kredi-karti`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/mevduat`,           lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/hesaplama`,         lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
