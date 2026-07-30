import { HeroSection } from '../components/sections/HeroSection';
import { QuickStatsSection } from '../components/sections/QuickStatsSection';
import { IntroductionSection } from '../components/sections/IntroductionSection';
import { ContactSection } from '../components/sections/ContactSection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <QuickStatsSection />
      <IntroductionSection />
      <ContactSection />
    </div>
  );
}
