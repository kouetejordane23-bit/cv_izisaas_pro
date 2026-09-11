import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Linkedin, Github, Download, ChevronRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const container = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2
      });

      // About Animation
      gsap.from('.about-element', {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Experience Cards
      gsap.utils.toArray('.exp-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      });

      // Skills Animation (Weighted Tags)
      gsap.from('.skill-tag', {
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 80%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

      // Contact Animation
      gsap.from('.contact-icon', {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative w-full min-h-screen overflow-x-hidden selection:bg-accent selection:text-white">
      
      {/* NAVBAR */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-[3rem] px-6 py-3 flex items-center gap-8 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border border-white/10 shadow-lg' : 'bg-transparent'
      }`}>
        <span className="font-bold text-lg tracking-wider">AF.</span>
        <div className="hidden md:flex items-center gap-6 text-sm font-mono text-text/80">
          <a href="#about" className="hover:text-accent hover-lift transition-colors">A propos</a>
          <a href="#experience" className="hover:text-accent hover-lift transition-colors">Expérience</a>
          <a href="#skills" className="hover:text-accent hover-lift transition-colors">Compétences</a>
        </div>
        <a href="#contact" className="btn-magnetic px-5 py-2 bg-accent text-white rounded-full text-sm font-semibold flex items-center gap-2">
          Contact <ChevronRight size={16} />
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/20 to-gold/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="hero-element mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-accent/30 bg-dark flex items-center justify-center overflow-hidden mx-auto">
            <span className="text-4xl text-accent font-serif italic">AF</span>
          </div>
        </div>

        <h1 className="hero-element text-6xl md:text-8xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent via-gold to-white tracking-tight" style={{ textShadow: '0 0 40px rgba(249, 115, 22, 0.4)' }}>
          Amadou Fall
        </h1>
        
        <h2 className="hero-element text-2xl md:text-4xl font-serif italic text-text/80 text-center mb-10">
          Créateur de contenu et motivateur
        </h2>

        <div className="hero-element flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-mono text-accent/90 mb-12">
          <span>[5] ans d'expérience</span>
          <span className="hidden md:inline text-text/30">|</span>
          <span>[20+] projets</span>
          <span className="hidden md:inline text-text/30">|</span>
          <span>[Dakar]</span>
        </div>

        <div className="hero-element flex gap-4">
          <a href="#" download className="btn-magnetic px-8 py-4 bg-accent text-white rounded-[2rem] font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(123,97,255,0.4)] hover:shadow-[0_0_30px_rgba(123,97,255,0.6)] transition-shadow">
            <Download size={20} /> Télécharger CV
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section py-32 px-4 md:px-20 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-[1fr_2px_2fr] gap-12 md:gap-20 items-start">
          <h2 className="about-element text-5xl md:text-7xl font-serif italic text-accent">À propos</h2>
          <div className="hidden md:block w-[2px] h-full bg-gradient-to-b from-accent to-transparent"></div>
          <div className="about-element text-lg md:text-xl leading-relaxed text-text/90 font-light">
            <p className="mb-6">
              Passionné par l'innovation web, je conçois des interfaces modernes.
            </p>
            <p>
              En tant qu'entrepreneur et créateur de contenu, mon approche fusionne esthétique digitale et performance technique, chaque pixel étant pensé pour engager l'utilisateur.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 px-4 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif italic text-center mb-24">Expérience</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-accent/30 -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {/* Experience 1 */}
            <div className="exp-card experience-card relative flex flex-col md:flex-row items-center justify-between w-full bg-background rounded-[2rem] p-6 border border-white/5">
              <div className="md:w-1/2 pr-0 md:pr-12 w-full pl-8 md:pl-0 text-left md:text-right mb-4 md:mb-0">
                <span className="font-mono text-accent text-sm bg-accent/10 px-3 py-1 rounded-full">2020 - 2023</span>
                <h3 className="text-2xl font-bold mt-3 mb-1">Lead Dev</h3>
                <h4 className="text-text/60 font-serif italic text-xl">Tech Solutions</h4>
                <p className="text-text/80 mt-3 text-sm leading-relaxed">Direction d'équipe et architecture technique des solutions web.</p>
              </div>
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2 border-4 border-background shadow-[0_0_15px_rgba(123,97,255,0.8)] z-10"></div>
              <div className="md:w-1/2 pl-8 md:pl-12 w-full hidden md:block"></div>
            </div>

            {/* Experience 2 */}
            <div className="exp-card experience-card relative flex flex-col md:flex-row items-center justify-between w-full bg-background rounded-[2rem] p-6 border border-white/5">
              <div className="md:w-1/2 pr-12 hidden md:block text-right"></div>
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2 border-4 border-background shadow-[0_0_15px_rgba(123,97,255,0.8)] z-10"></div>
              <div className="md:w-1/2 pl-8 md:pl-12 w-full text-left">
                <span className="font-mono text-accent text-sm bg-accent/10 px-3 py-1 rounded-full">2018 - 2020</span>
                <h3 className="text-2xl font-bold mt-3 mb-1">Dev Fullstack</h3>
                <h4 className="text-text/60 font-serif italic text-xl">Digital Agency</h4>
                <p className="text-text/80 mt-3 text-sm leading-relaxed">Développement complet d'applications SaaS de bout en bout.</p>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="exp-card experience-card relative flex flex-col md:flex-row items-center justify-between w-full bg-background rounded-[2rem] p-6 border border-white/5">
              <div className="md:w-1/2 pr-0 md:pr-12 w-full pl-8 md:pl-0 text-left md:text-right mb-4 md:mb-0">
                <span className="font-mono text-accent text-sm bg-accent/10 px-3 py-1 rounded-full">2017</span>
                <h3 className="text-2xl font-bold mt-3 mb-1">Stagiaire</h3>
                <h4 className="text-text/60 font-serif italic text-xl">Startup Studio</h4>
                <p className="text-text/80 mt-3 text-sm leading-relaxed">Création de prototypes interactifs et intégration web.</p>
              </div>
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2 border-4 border-background shadow-[0_0_15px_rgba(123,97,255,0.8)] z-10"></div>
              <div className="md:w-1/2 pl-8 md:pl-12 w-full hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills-section py-32 px-4 md:px-20 bg-dark/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif italic mb-16">Compétences</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="skill-tag px-8 py-4 rounded-[2rem] bg-accent text-white font-bold text-xl md:text-2xl shadow-[0_0_20px_rgba(123,97,255,0.3)]">React</div>
            <div className="skill-tag px-8 py-4 rounded-[2rem] bg-accent text-white font-bold text-xl md:text-2xl shadow-[0_0_20px_rgba(123,97,255,0.3)]">Node.js</div>
            <div className="skill-tag px-6 py-3 rounded-[2rem] border border-accent/50 text-text font-semibold text-lg hover:bg-accent/10 transition-colors">TypeScript</div>
            <div className="skill-tag px-6 py-3 rounded-[2rem] border border-accent/50 text-text font-semibold text-lg hover:bg-accent/10 transition-colors">Figma</div>
            <div className="skill-tag px-5 py-2 rounded-[2rem] border border-white/20 text-text/70 text-base">AWS</div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section py-32 px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Travaillons ensemble</h2>
        
        <div className="flex justify-center gap-6 mb-16">
          <a href="#" className="contact-icon hover-lift w-14 h-14 rounded-full bg-dark border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
            <Mail size={24} />
          </a>
          <a href="#" className="contact-icon hover-lift w-14 h-14 rounded-full bg-dark border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
            <Linkedin size={24} />
          </a>
          <a href="#" className="contact-icon hover-lift w-14 h-14 rounded-full bg-dark border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
            <Github size={24} />
          </a>
          <a href="#" className="contact-icon hover-lift w-14 h-14 rounded-full bg-dark border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
            <Phone size={24} />
          </a>
        </div>

        <button onClick={() => setIsModalOpen(true)} className="btn-magnetic inline-block px-10 py-5 bg-text text-background rounded-[2rem] font-bold text-lg hover:bg-gradient-to-r hover:from-accent hover:to-gold hover:text-white transition-colors">
          Envoyer un message
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark pt-16 pb-8 px-4 rounded-t-[4rem] text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-medium">Amadou Fall</p>
          <div className="flex items-center gap-2 text-sm font-mono text-text/60">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            En ligne & disponible
          </div>
          <p className="text-text/40 text-sm">© {new Date().getFullYear()} — Fait avec le vibe coding</p>
        </div>
      </footer>

      {/* MODAL CONTACT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-dark border border-white/10 rounded-[2rem] p-8 w-full max-w-lg relative"
               onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-text/60 hover:text-accent transition-colors">
              <X size={24} />
            </button>
            <h3 className="text-3xl font-serif italic mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent to-gold">Parlons de votre projet</h3>
            <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div>
                <label className="block text-sm font-mono text-text/60 mb-1">Nom de la personne</label>
                <input type="text" required className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" placeholder="Jean Dupont" />
              </div>
              <div>
                <label className="block text-sm font-mono text-text/60 mb-1">Nom de l'entreprise</label>
                <input type="text" required className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" placeholder="Acme Corp" />
              </div>
              <div>
                <label className="block text-sm font-mono text-text/60 mb-1">Service souhaité</label>
                <select required className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors">
                  <option value="">Sélectionnez un service</option>
                  <option value="web">Création de site web</option>
                  <option value="app">Développement d'application</option>
                  <option value="design">UI/UX Design</option>
                  <option value="consulting">Consulting Tech</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-mono text-text/60 mb-1">Message (optionnel)</label>
                <textarea rows="3" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" placeholder="Détails du projet..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-accent to-gold text-white font-bold rounded-xl hover:opacity-90 transition-opacity mt-4 btn-magnetic">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
