
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">Logo<span className="text-green-400">Ipsum</span></span>
            </a>
            <p className="text-gray-400 mb-6">
              Inspiring the next generation of thinkers, creators, and innovators through engaging educational content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#teachers" className="text-gray-400 hover:text-white transition-colors">Our Teachers</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-3">
              <li><a href="#coding" className="text-gray-400 hover:text-white transition-colors">Coding & Technology</a></li>
              <li><a href="#science" className="text-gray-400 hover:text-white transition-colors">Science & Experiments</a></li>
              <li><a href="#math" className="text-gray-400 hover:text-white transition-colors">Mathematics</a></li>
              <li><a href="#arts" className="text-gray-400 hover:text-white transition-colors">Language Arts</a></li>
              <li><a href="#creative" className="text-gray-400 hover:text-white transition-colors">Creative Skills</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Education Lane, Learning City, LC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-purple-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@logoipsum.com" className="text-gray-400 hover:text-white transition-colors">info@logoipsum.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LogoIpsum. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
