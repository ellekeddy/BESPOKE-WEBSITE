import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EditionOne from './pages/EditionOne';
import Studio from './pages/Studio';
import Archived from './pages/Archived';
import { Page } from './types';
import { STUDIO_CONFIG } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home onExplore={() => setCurrentPage('Edition I')} />;
      case 'Edition I': return <EditionOne />;
      case 'Studio': return <Studio />;
      case 'Archived': return <Archived />;
      default: return <Home onExplore={() => setCurrentPage('Edition I')} />;
    }
  };

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-[#F9F7F2] flex flex-col justify-center items-center z-[100]">
        <div className="relative text-center">
          <h1 className="text-3xl md:text-5xl tracking-tighter serif font-medium text-[#1A1A1A] animate-pulse italic">
            BESPOKE ART
          </h1>
          <div className="absolute -bottom-6 left-0 w-full h-[3px] bg-[#1A1A1A]/5 overflow-hidden">
             <div className="w-full h-full bg-[#B8D5CB] origin-left animate-[loading_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
        <style>{`
          @keyframes loading {
            0% { transform: scaleX(0); }
            50% { transform: scaleX(1); }
            100% { transform: scaleX(0); transform-origin: right; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-[#B8D5CB] selection:text-[#1A1A1A]">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="transition-opacity duration-1000">
        {renderPage()}
      </main>

      <footer className="px-8 md:px-20 py-32 bg-sand/30 border-t-2 border-charcoal/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-12">
          <div className="md:col-span-3 space-y-10">
            <h4 className="serif text-5xl italic text-charcoal">{STUDIO_CONFIG.artistName}</h4>
            <p className="text-[14px] mono text-charcoal/70 leading-relaxed max-w-md font-bold uppercase tracking-[0.1em]">
              {STUDIO_CONFIG.footerText}
            </p>
          </div>
          
          <div className="space-y-8">
            <span className="mono text-[11px] text-charcoal font-black block uppercase tracking-[0.4em]">Inquire</span>
            <ul className="space-y-6 mono text-[10px] text-charcoal font-bold">
              <li><a href={STUDIO_CONFIG.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors border-b-2 border-charcoal pb-1 uppercase">Instagram</a></li>
              <li><a href={`mailto:${STUDIO_CONFIG.inquiryEmail}`} className="hover:text-mint transition-colors border-b-2 border-charcoal pb-1 uppercase">Email Studio</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-48 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border-t border-charcoal/10 pt-16">
          <div className="mono text-[9px] uppercase tracking-[0.6em] text-charcoal/40 font-black">
            All rights reserved © 2026 — Bespoke Art | {STUDIO_CONFIG.studioLocation}
          </div>
          <div className="mono text-[9px] uppercase tracking-[0.6em] flex items-center space-x-6 text-charcoal font-black">
            <div className="w-2 h-2 rounded-full bg-mint"></div>
            <span>Minimal by design</span>
          </div>
        </div>
      </footer>
      
      <button className="fixed bottom-12 right-12 px-10 py-5 bg-charcoal text-bone mono text-[10px] tracking-[0.5em] flex items-center space-x-4 group z-40 shadow-2xl hover:scale-105 transition-all">
        <span className="w-2 h-2 bg-mint rounded-full"></span>
        <span className="font-black uppercase tracking-[0.4em]">Inquire</span>
      </button>
    </div>
  );
};

export default App;