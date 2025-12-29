import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const navItems: Page[] = ['Home', 'Edition I', 'Studio', 'Archived'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-16 py-10 flex justify-between items-center pointer-events-none">
      <div 
        className="cursor-pointer group flex items-baseline space-x-3 pointer-events-auto"
        onClick={() => setCurrentPage('Home')}
      >
        <h1 className="text-2xl md:text-3xl tracking-tighter serif leading-none font-medium text-charcoal">BESPOKE ART</h1>
        <div className="w-1.5 h-1.5 bg-mint rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="flex space-x-8 md:space-x-12 items-center pointer-events-auto">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            className={`mono text-[10px] uppercase tracking-[0.4em] transition-all duration-500 nav-link text-charcoal ${
              currentPage === item ? 'active opacity-100 font-medium' : 'opacity-60 hover:opacity-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;