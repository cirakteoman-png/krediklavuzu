import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: string;
  desc: string;
};

export default function PageHeader({ eyebrow, title, desc }: Props) {
  return (
    <section className="px-4 sm:px-6 pt-10 pb-2">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2rem] bg-surface border border-line px-6 py-14 sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="glow-brand pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-15 blur-md"
        />
        <div className="relative">
          <Reveal>
            <p className="text-xs font-bold font-display text-brand uppercase tracking-[0.2em] mb-3">
              {eyebrow}
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold text-ink leading-[1.04] max-w-2xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-5 text-lg text-ink-soft max-w-xl">{desc}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
