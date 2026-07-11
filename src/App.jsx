import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { QuickStatsSection } from './components/sections/QuickStatsSection';
import { IntroductionSection } from './components/sections/IntroductionSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <QuickStatsSection />
        <IntroductionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

