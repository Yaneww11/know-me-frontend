
import React from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-white">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 md:py-24 gap-12">
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <Sparkles size={16} className="mr-2" />
              <span>For children aged 10-14 years</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Help Your Child <span className="text-purple-600">Discover</span> Their Potential
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Engaging courses designed to spark creativity, critical thinking, and passion for learning in your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2" size="lg">
                Explore Courses
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                <BookOpen size={18} className="mr-2" />
                How It Works
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs">
                    {item}
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm font-medium text-gray-600">
                Trusted by <span className="text-purple-700 font-bold">2,000+</span> parents
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                alt="Children learning together" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-800">New courses added weekly</h4>
              </div>
              <p className="text-sm text-gray-600">
                Continuous learning journey with fresh, exciting content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
