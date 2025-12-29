import React from 'react';
import { STUDIO_CONFIG } from '../constants';

const Home: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-32 fade-in overflow-hidden">
      {/* Editorial Hero */}
      <div className="px-4 md:px-12 mb-32 md:mb-48">
        <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-charcoal shadow-2xl rounded-sm">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale brightness-90"
          >
            <source src={STUDIO_CONFIG.heroVideoUrl} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-24 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent">
            <div className="max-w-7xl relative z-10 w-full">
              <span className="mono text-mint font-bold block mb-6 md:mb-8 tracking-[0.4em] md:tracking-[0.8em]">Collection 2026.1</span>
              <h2 className="text-bone text-[3.8rem] sm:text-[6.5rem] md:text-[9.5rem] lg:text-[13rem] serif leading-[0.75] tracking-tighter mb-8 md:mb-12">
                Luminous<br/><span className="italic ml-4 md:ml-24 lg:ml-40 text-bone/90">Architecture</span>
              </h2>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <p className="text-bone/60 mono text-[10px] md:text-[11px] max-w-xs md:max-w-sm leading-loose uppercase tracking-[0.2em] font-bold">
                  The Physicality of Presence. Designed in Ottawa, Ontario.
                </p>
                <button 
                  onClick={onExplore}
                  className="w-full md:w-auto px-12 md:px-16 py-6 md:py-8 bg-mint text-charcoal font-black mono text-[11px] md:text-[12px] tracking-[0.4em] md:tracking-[0.5em] hover:bg-white transition-all shadow-2xl"
                >
                  VIEW COLLECTION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Storytelling: Defining the Atmosphere */}
      <div className="px-4 md:px-24 mb-48 md:mb-64 grid grid-cols-1 md:grid-cols-12 relative items-center gap-12">
        <div className="md:col-span-6 lg:md:col-span-5 z-20 order-2 md:order-1">
          <div className="bg-sand p-8 md:p-16 lg:p-24 border-l-4 md:border-l-8 border-charcoal shadow-xl">
            <div className="flex items-center space-x-4 md:space-x-6 mb-8 md:mb-12">
              <span className="w-8 md:w-12 h-[1px] bg-mint"></span>
              <span className="mono text-charcoal font-black">Philosophy</span>
            </div>
            <h3 className="text-5xl md:text-7xl lg:text-8xl serif italic leading-[0.85] mb-8 md:mb-12 text-charcoal">
              Defining<br/>The Atmosphere.
            </h3>
            <p className="text-[15px] md:text-[16px] font-medium leading-relaxed text-charcoal/90 mb-8 md:mb-12">
              Bespoke Art explores the intersection of raw materiality and strategic design. Our pieces act as deliberate anchors—sophisticated, physical weight that transforms the atmosphere of a room through a subtle dialogue of light and shadow.
            </p>
            <div className="aspect-video bg-charcoal overflow-hidden shadow-lg border border-charcoal/10">
               <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover grayscale brightness-110"
              >
                <source src={STUDIO_CONFIG.processVideoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 lg:md:col-span-7 order-1 md:order-2">
          <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-[2s] rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1541411438265-4bb4687110f2?auto=format&fit=crop&q=80&w=1200" 
              alt="Art Detail" 
              className="w-full h-full object-cover brightness-105 contrast-[1.05]"
            />
          </div>
        </div>
      </div>

      {/* Motion Grid */}
      <div className="px-4 md:px-12 mb-32 md:mb-64">
        <div className="mb-12 md:mb-20">
          <h4 className="mono text-[10px] md:text-[11px] text-charcoal/40 tracking-[0.6em] md:tracking-[1em] mb-4 uppercase font-bold">Studio Archive</h4>
          <h2 className="text-5xl md:text-7xl serif italic text-charcoal">The Motion.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {[1,2,3].map(i => (
            <div key={i} className={`aspect-[9/16] bg-sand overflow-hidden relative group border-2 md:border-4 border-charcoal/5 rounded-sm ${i === 3 ? 'sm:hidden md:block' : ''}`}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              >
                <source src={STUDIO_CONFIG.processVideoUrl} type="video/mp4" />
              </video>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                <span className="mono text-white text-[9px] md:text-[10px] bg-charcoal px-3 py-1 md:px-4 md:py-2 uppercase font-bold tracking-[0.2em]">Study {i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;