
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Дъщеря ми винаги е имала затруднения с математиката, но след като изкара курса „Забавление с математика“, не само че подобри оценките си, но дори започна да се наслаждава на предмета. Начинът на преподаване прави сложните концепции достъпни и забавни!",
    author: "Сара Джонсън",
    role: "Родител на Анна, 12 г.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    content: "Курсът по програмиране събуди интереса на сина ми към технологиите. Вече създава свои игри и е развил умения за решаване на проблеми, които му помагат и в други предмети. Абсолютно си заслужава инвестицията!",
    author: "Майкъл Чен",
    role: "Родител на Райън, 14 г.",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 3,
    content: "KnowMe предоставя толкова подкрепяща среда. Близнаците ми бяха колебливи в началото, но увлекателното съдържание и окуражаващите преподаватели ги накараха да очакват с нетърпение всяка сесия. Придобиха толкова много увереност!",
    author: "Лиса Родригес",
    role: "Родител на Емили и Джейкъб, 11 г.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Истории на успеха от родители</h2>
          <p className="text-lg text-gray-600">
            Чуйте какво споделят други родители за преживяванията на техните деца с нашите курсове.
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
