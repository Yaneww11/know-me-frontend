import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-22"> {/* Increased height */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/public/logo_with_text.png" alt="KnowMe Лого" className="h-24" /> {/* Increased logo size */}
            </a>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-16"> {/* Increased spacing */}
            <a href="#courses" className="text-xl font-medium text-gray-700 hover:text-purple-600 transition-colors">Курсове</a> {/* Increased font size */}
            <a href="#path" className="text-xl font-medium text-gray-700 hover:text-purple-600 transition-colors">Стъпки</a>
            <a href="#benefits" className="text-xl font-medium text-gray-700 hover:text-purple-600 transition-colors">Ползи</a>
            <a href="#testimonials" className="text-xl font-medium text-gray-700 hover:text-purple-600 transition-colors">Отзиви</a>
            <a href="/chat" className="text-xl font-medium text-gray-700 hover:text-purple-600 transition-colors">Чат за Родители</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-8"> {/* Increased spacing */}
         <Button variant="ghost" className="text-xl font-medium" onClick={() => window.open('https://www.figma.com/proto/JM7m0zKb4Q7vbVNQQGMhNe/Know-me?page-id=0%3A1&node-id=5-6&viewport=438%2C311%2C0.18&t=0jXdbqRmhGquL3r0-1&scaling=scale-down&content-scaling=fixed', '_blank')}>Вход</Button> {/* Increased font size */}{/* Increased font size */}
            <Button className="text-xl bg-purple-600 hover:bg-purple-700 px-8 py-4">Започнете</Button> {/* Increased button size */}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="text-gray-700 hover:text-purple-600 focus:outline-none" onClick={toggleMenu}>
              {isMenuOpen ? <X size={48} /> : <Menu size={48} />} {/* Increased icon size */}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden bg-white py-8 px-4"> {/* Increased padding */}
            <nav className="flex flex-col space-y-8"> {/* Increased spacing */}
              <a href="#courses" className="px-6 py-4 text-xl font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">Курсове</a> {/* Increased font size and padding */}
              <a href="#path" className="px-6 py-4 text-xl font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">Стъпки</a>
              <a href="#benefits" className="px-6 py-4 text-xl font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">Ползи</a>
              <a href="#testimonials" className="px-6 py-4 text-xl font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">Отзиви</a>
              <a href="/chat" className="px-6 py-4 text-xl font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">ЧЗВ</a>
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100"> {/* Increased spacing */}
                <Button variant="ghost" className="w-full justify-center text-xl">Вход</Button> {/* Increased font size */}
                <Button className="w-full justify-center text-xl bg-purple-600 hover:bg-purple-700 px-8 py-4">Започнете</Button> {/* Increased button size */}
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Navbar;

