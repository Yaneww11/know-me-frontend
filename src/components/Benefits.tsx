
import React from 'react';
import { Lightbulb, Brain, Heart, Users, Clock, Award } from 'lucide-react';

const benefits = [
  {
    icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
    title: 'Sparks Curiosity',
    description: 'Engaging content that makes children ask questions and explore new topics with enthusiasm.'
  },
  {
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    title: 'Develops Critical Thinking',
    description: 'Challenges that encourage problem-solving and analytical thinking skills.'
  },
  {
    icon: <Heart className="h-6 w-6 text-green-500" />,
    title: 'Builds Confidence',
    description: 'Supportive environment where children can take risks and develop self-assurance.'
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: 'Fosters Collaboration',
    description: 'Interactive sessions that teach teamwork and communication skills.'
  },
  {
    icon: <Clock className="h-6 w-6 text-purple-500" />,
    title: 'Flexible Learning',
    description: 'Learn at your own pace with on-demand lessons and personalized feedback.'
  },
  {
    icon: <Award className="h-6 w-6 text-green-500" />,
    title: 'Recognized Achievements',
    description: 'Certificates and badges that celebrate progress and motivate continued learning.'
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Parents Choose LogoIpsum</h2>
          <p className="text-lg text-gray-600">
            Our educational platform is specially designed to support your child's growth and development 
            during their formative years.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-4 p-3 rounded-full bg-purple-50 w-14 h-14 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to give your child the gift of learning?</h3>
              <p className="text-purple-100 mb-6">
                Join thousands of parents who have witnessed their children thrive with our courses.
              </p>
              <div>
                <a href="#courses" className="inline-block bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Get Started Today
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                alt="Happy children learning" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
