import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ParentCommunityNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-22">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/public/logo_with_text.png" alt="KnowMe Лого" className="h-24" />
            </a>
          </div>
          
          {/* Desktop menu - only shows Chat link */}
          <nav className="hidden md:flex items-center space-x-16">
            <a href="/" className="text-xl font-medium text-gray-700 hover:text-purple-600 transition-colors">Начало</a>
            <a href="/chat" className="text-xl font-medium text-gray-700 hover:text-purple-600 transition-colors">Чат за Родители</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-xl font-medium">Вход</Button>
            <Button className="text-xl bg-purple-600 hover:bg-purple-700 px-8 py-4">Започнете</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="text-gray-700 hover:text-purple-600 focus:outline-none" onClick={toggleMenu}>
              {isMenuOpen ? <X size={48} /> : <Menu size={48} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu - simplified */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-8 px-4">
            <nav className="flex flex-col space-y-8">
              <a href="/" className="px-6 py-4 text-xl font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">Начало</a>
              <a href="/chat" className="px-6 py-4 text-xl font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">Чат за Родители</a>
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
                <Button variant="ghost" className="w-full justify-center text-xl">Вход</Button>
                <Button className="w-full justify-center text-xl bg-purple-600 hover:bg-purple-700 px-8 py-4">Започнете</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default ParentCommunityNavbar;

