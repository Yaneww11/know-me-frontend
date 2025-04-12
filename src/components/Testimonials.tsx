
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "My daughter has always struggled with math, but after taking the Fun with Mathematics course, she not only improved her grades but actually started enjoying the subject. The teaching approach makes complex concepts accessible and fun!",
    author: "Sarah Johnson",
    role: "Parent of Anna, 12",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    content: "The programming course sparked my son's interest in technology. He's now creating his own games and has developed problem-solving skills that help him in other subjects too. Absolutely worth the investment!",
    author: "Michael Chen",
    role: "Parent of Ryan, 14",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 3,
    content: "KnowMe provides such a supportive environment. My twins were hesitant at first, but the engaging content and encouraging teachers made them look forward to each session. They've gained so much confidence!",
    author: "Lisa Rodriguez",
    role: "Parent of Emily & Jacob, 11",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-purple-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories from Parents</h2>
          <p className="text-lg text-gray-600">
            Hear what other parents say about their children's experience with our courses.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Quote size={40} className="absolute -top-3 -left-3 text-purple-200" />
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-purple-100"
                />
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                "{testimonials[activeIndex].content}"
              </p>
              <div>
                <h4 className="font-bold text-lg">{testimonials[activeIndex].author}</h4>
                <p className="text-purple-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white hover:bg-purple-50 text-purple-600 p-3 rounded-full shadow-md transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-purple-600' : 'bg-purple-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="bg-white hover:bg-purple-50 text-purple-600 p-3 rounded-full shadow-md transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
