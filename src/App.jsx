import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-textPrimary">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Freelance />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
