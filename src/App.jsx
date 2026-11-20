import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Projects from './components/Projects';
import Contact from './components/Contact'
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <BackToTop />

      <h1>Nexora Business</h1>
    </div>
  );
}

export default App;