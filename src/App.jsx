import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { QuickStatsSection } from './components/sections/QuickStatsSection';
import { LifeStorySection } from './components/sections/LifeStorySection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { KukCleanSection } from './components/sections/KukCleanSection';
import { NotPausedSection } from './components/sections/NotPausedSection';
import { InfluencerSection } from './components/sections/InfluencerSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <QuickStatsSection />
        <LifeStorySection />
        <AchievementsSection />
        <KukCleanSection />
        <NotPausedSection />
        <InfluencerSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
