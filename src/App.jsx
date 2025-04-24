// === Update App.jsx with Enhanced 3D-Like Moving Particles ===
// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import SocialLinks from './components/SocialLinks';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="font-sans relative min-h-screen">
      {/* Preloader */}
      {loading && (
        <div className="fixed inset-0 bg-[#0f172a] flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-400"></div>
        </div>
      )}

      {/* Full Background Particles Layer */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: '#0f172a' } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'grab' },
                resize: true
              },
              modes: {
                grab: { distance: 180, links: { opacity: 0.4 } },
                repulse: { distance: 100, duration: 0.4 }
              }
            },
            particles: {
              color: { value: '#00BFFF' },
              links: {
                color: '#00BFFF',
                distance: 160,
                enable: true,
                opacity: 0.3,
                width: 1.2
              },
              collisions: { enable: false },
              move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: true,
                speed: 2,
                straight: false
              },
              number: { density: { enable: true, area: 600 }, value: 80 },
              opacity: { value: 0.7 },
              shape: { type: 'circle' },
              size: { value: { min: 2, max: 8 } }
            },
            detectRetina: true
          }}
        />
      </div>

      {!loading && (
        <>
            <SocialLinks />
          <Navbar />
          <div className="space-y-16 mt-4">
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;