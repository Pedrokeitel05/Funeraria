import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact'; // Using Contact as secondary CTA maybe?
import Plans from './components/Plans';
import About from './components/About';
import Footer from './components/Footer';
import Particles from './components/Particles';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div style={{ background: '#05070B', position: 'relative' }}>
      <Particles />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Header />
        <Hero />
        <Services />
        <HowItWorks />
        <Contact />
        <Plans />
        <About />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}

export default App;
