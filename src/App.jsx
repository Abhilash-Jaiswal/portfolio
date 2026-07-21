import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from './components/utils/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
