
import React from 'react';
import { ClipboardEdit, FileText, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Path = () => {
  return (
    <section id="path" className="section bg-purple-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Child's Journey in <span className="text-purple-600">3 Easy Steps</span></h2>
          <p className="text-gray-600 text-lg">We make it simple to find the perfect courses for your child's unique interests and talents.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="card p-8 flex flex-col items-center text-center transition-all hover:translate-y-[-8px]">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <ClipboardEdit size={28} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Register</h3>
            <p className="text-gray-600">Create an account to begin your child's personalized learning journey with KnowMe.</p>
          </div>

          {/* Step 2 */}
          <div className="card p-8 flex flex-col items-center text-center transition-all hover:translate-y-[-8px]">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <FileText size={28} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Complete the Form</h3>
            <p className="text-gray-600">Tell us about your child's interests and strengths so we can personalize their experience.</p>
          </div>

          {/* Step 3 */}
          <div className="card p-8 flex flex-col items-center text-center transition-all hover:translate-y-[-8px]">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <ListChecks size={28} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Discover Offerings</h3>
            <p className="text-gray-600">Explore courses in arts, sports, technology, science and more - tailored to your child's profile.</p>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 h-auto">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Path;
