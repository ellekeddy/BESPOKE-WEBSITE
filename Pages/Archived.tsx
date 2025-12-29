import React from 'react';
import { ART_PIECES } from '../constants';

const Archived: React.FC = () => {
  const archived = ART_PIECES.filter(p => p.edition === 'Archived');

  return (
    <div className="min-h-screen pt-48 px-6 md:px-12 pb-32 fade-in">
      <div className="max-w-7xl mx-auto">
        <header className="mb-40 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-charcoal/10 pb-20">
          <div className="space-y-8">
            <span className="mono text-charcoal/50 tracking-[0.6em] font-semibold block uppercase">The Historical Index</span>
            <h2 className="text-8xl md:text-[11rem] serif italic leading-[0.8] -ml-2 text-charcoal">Archived.</h2>
          </div>
          <div className="mt-12 md:mt-0 max-w-sm text-right">
            <p className="text-[11px] mono text-charcoal/70 uppercase tracking-[0.3em] leading-relaxed font-medium">
              Foundation studies exploring raw minerals and organic form. Held exclusively in private residency.
            </p>
          </div>
        </header>

        {/* 20 Piece Dense Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-40">
          {archived.map((piece, index) => (
            <div 
              key={piece.id} 
              className="group opacity-0 fade-in"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
            >
              <div className="aspect-square overflow-hidden bg-sand mb-8 relative border border-charcoal/10">
                <img 
                  src={piece.imageUrl} 
                  alt={piece.title} 
                  className="w-full h-full object-cover grayscale opacity-55 transition-all duration-[1.5s] ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-bone/5 pointer-events-none"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <h4 className="text-xl serif italic text-charcoal/60 group-hover:text-charcoal transition-colors duration-500">{piece.title}</h4>
                   <span className="mono text-[8px] text-charcoal/30 font-bold">A.26—{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-charcoal/10">
                  <p className="mono text-[8px] uppercase tracking-[0.25em] text-charcoal/40 font-medium">Private Collection</p>
                  <span className="w-1.5 h-1.5 bg-charcoal/20 rounded-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-72 text-center py-56 border-t-2 border-charcoal/10 relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-mint"></div>
           <p className="mono text-[11px] uppercase tracking-[1.2em] text-charcoal font-semibold pt-20">End of Current Index</p>
        </div>
      </div>
    </div>
  );
};

export default Archived;