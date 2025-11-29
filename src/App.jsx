import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Offers from './components/Offers';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Offers />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
