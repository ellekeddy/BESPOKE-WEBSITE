import React from 'react';
import { ART_PIECES } from '../constants';

const EditionOne: React.FC = () => {
  const collection = ART_PIECES.filter(p => p.edition === 'Edition I');

  return (
    <div className="min-h-screen pt-48 px-6 md:px-12 pb-48 fade-in">
      <div className="max-w-7xl mx-auto">
        <header className="mb-40">
          <div className="flex items-center space-x-6 mb-10">
            <span className="mono text-mint font-semibold">Current Release</span>
            <span className="w-16 h-[1px] bg-charcoal/20"></span>
            <span className="mono text-charcoal/60">Collection 26.1</span>
          </div>
          <h2 className="text-9xl md:text-[13rem] serif italic leading-[0.7] mb-14 -ml-2 text-charcoal">Edition I</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40 pt-14 border-t border-charcoal/10">
            <p className="text-2xl serif italic text-charcoal leading-snug">
              A collection of ten unique explorations into the physical weight of shadow and the deliberate impact of textural plaster.
            </p>
            <p className="text-[12px] mono text-charcoal/60 leading-relaxed uppercase tracking-widest font-medium">
              Every piece is a unique somatic record, signed and verified by the studio.
            </p>
          </div>
        </header>

        {/* 10 Piece Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-56 md:gap-x-12">
          {collection.map((piece, index) => {
            const isLarge = [0, 4, 5, 9].includes(index);
            const gridSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4';
            const offset = (index % 2 !== 0 && !isLarge) ? 'md:mt-40' : '';
            
            return (
              <div 
                key={piece.id} 
                className={`group cursor-pointer opacity-0 fade-in ${gridSpan} ${offset}`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="aspect-[3/4] overflow-hidden bg-sand mb-10 relative border border-charcoal/10 shadow-sm">
                  <img 
                    src={piece.imageUrl} 
                    alt={piece.title} 
                    className="w-full h-full object-cover grayscale brightness-[1.03] contrast-[1.02] transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                  />
                  {!piece.isAvailable && (
                    <div className="absolute inset-0 bg-bone/85 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <span className="mono text-charcoal font-medium text-[10px]">Acquired</span>
                    </div>
                  )}
                  {piece.isAvailable && (
                    <div className="absolute top-8 right-8 flex items-center space-x-4 bg-white px-6 py-3 border border-mint shadow-xl">
                      <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
                      <span className="mono text-[9px] text-charcoal font-semibold">Available</span>
                    </div>
                  )}
                </div>
                <div className="space-y-6 px-1">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-5xl serif italic text-charcoal group-hover:text-mint transition-colors duration-500">{piece.title}</h4>
                    <div className="mono text-charcoal font-medium">{piece.price}</div>
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t border-charcoal/10">
                    <span className="mono text-[9px] text-charcoal/50 font-medium">{piece.dimensions}</span>
                    <button className="mono text-[9px] text-charcoal font-bold border-b-2 border-mint hover:border-charcoal transition-all pb-1">Acquire Piece</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EditionOne;