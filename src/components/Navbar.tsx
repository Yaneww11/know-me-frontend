
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-700">Logo<span className="text-green-500">Ipsum</span></span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Courses</a>
            <a href="#benefits" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Benefits</a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Success Stories</a>
            <a href="#faq" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium">Sign in</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-2">
            <nav className="flex flex-col space-y-4">
              <a href="#courses" className="px-3 py-2 font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">Courses</a>
              <a href="#benefits" className="px-3 py-2 font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">Benefits</a>
              <a href="#testimonials" className="px-3 py-2 font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">Success Stories</a>
              <a href="#faq" className="px-3 py-2 font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">FAQ</a>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
                <Button variant="ghost" className="w-full justify-center">Sign in</Button>
                <Button className="w-full justify-center bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
