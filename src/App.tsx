import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Coroas from './components/Coroas';
import Plans from './components/Plans';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  return (
    <div style={{ background: '#080C14', position: 'relative' }}>
      <Particles />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Header />
        <Hero />
        <HowItWorks />
        <Services />
        <Coroas />
        <Plans />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
