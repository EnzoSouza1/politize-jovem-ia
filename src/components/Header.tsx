
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="border-b border-border/50 backdrop-blur-sm bg-background/90 sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-1">
            <span className="text-white font-bold text-xl">JP</span>
          </div>
          <span className="font-bold text-xl">JovemPolítica</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Início</Link>
          <Link to="/" className="font-medium hover:text-primary transition-colors">Como Funciona</Link>
          <Link to="/" className="font-medium hover:text-primary transition-colors">Sobre</Link>
        </nav>
        
        <div className="flex md:hidden">
          <button 
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
