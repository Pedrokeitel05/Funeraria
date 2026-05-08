import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Plans from './components/Plans';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  return (
    <div style={{ background: '#05070B', position: 'relative' }}>
      <Particles />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Header />
        <Hero />
        <HowItWorks />
        <Services />
        <Plans />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
