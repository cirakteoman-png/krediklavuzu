import Hero from '@/components/Hero';
import HomeTabSection from '@/components/HomeTabSection';
import KpiStrip from '@/components/KpiStrip';
import HowItWorks from '@/components/HowItWorks';
import HomeNews from '@/components/HomeNews';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeTabSection />
      <KpiStrip />
      <HomeNews />
      <HowItWorks />
    </>
  );
}
