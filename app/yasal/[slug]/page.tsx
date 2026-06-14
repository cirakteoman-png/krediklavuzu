import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LEGAL_DOCS, getLegalDoc } from '@/lib/content/legal';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import ContentBody from '@/components/ContentBody';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return LEGAL_DOCS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return { title: 'Sayfa bulunamadı' };
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/yasal/${doc.slug}` },
  };
}

export default async function LegalPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  const formattedDate = new Date(doc.updatedAt).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div>
      <PageHeader eyebrow="Yasal" title={doc.title} desc={doc.description} />

      <section className="px-4 sm:px-6 py-14 pb-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-sm text-ink-soft mb-8">Son güncelleme: {formattedDate}</p>
          </Reveal>
          <Reveal delay={1}>
            <ContentBody blocks={doc.blocks} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
