import React from 'react';
import { STUDIO_CONFIG } from '../constants';

const Studio: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 md:pt-48 px-4 md:px-12 pb-32 fade-in">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between border-b-2 md:border-b-4 border-charcoal pb-12 md:pb-16">
          <div className="space-y-4 md:space-y-6">
            <span className="mono text-mint font-black tracking-[0.3em] md:tracking-[0.5em] block uppercase">Bespoke Art Studio</span>
            <h2 className="text-6xl md:text-[12rem] serif italic leading-[0.8] -ml-1 text-charcoal">The Vision.</h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm">
            <p className="text-[12px] md:text-[14px] mono text-charcoal font-black uppercase tracking-[0.2em] md:tracking-[0.3em] leading-relaxed">
              Based in {STUDIO_CONFIG.studioLocation}. High-end textural canvas for modern collectors.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-32 md:mb-64 items-center">
          <div className="md:col-span-6">
            <div className="relative group overflow-hidden shadow-2xl border-2 md:border-4 border-charcoal aspect-[4/5] md:aspect-auto">
               <img 
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200" 
                alt="Studio Interior" 
                className="w-full h-full object-cover grayscale contrast-[1.2] group-hover:scale-105 transition-transform duration-[2.5s]"
              />
            </div>
          </div>
          <div className="md:col-span-6 space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <span className="mono text-mint font-black block">— THE DISCIPLINE</span>
              <h3 className="text-4xl md:text-6xl serif italic leading-tight text-charcoal">Ottawa Roots.</h3>
              <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-charcoal/80">
                Operating out of Ottawa, Ontario, Bespoke Art is a disciplined exploration of raw materiality. We strip away the unnecessary to focus on what creates physical weight in a space. Every piece is a strategic choice in texture, light, and shadow.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-charcoal/10 pt-8 md:pt-12">
              <div className="space-y-2">
                <span className="mono text-[9px] md:text-[10px] text-charcoal/40 font-black uppercase">Studio Origin</span>
                <p className="text-base md:text-lg font-bold">Ottawa, ON</p>
              </div>
              <div className="space-y-2">
                <span className="mono text-[9px] md:text-[10px] text-charcoal/40 font-black uppercase">Core Method</span>
                <p className="text-base md:text-lg font-bold">Strategic Texture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;