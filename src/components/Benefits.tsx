import React from 'react';
import { Lightbulb, Brain, Heart, Users, Clock, Award } from 'lucide-react';

const benefits = [
  {
    icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
    title: 'Разпалва любопитството',
    description: 'Завладяващо съдържание, което кара децата да задават въпроси и да изследват нови теми с ентусиазъм.'
  },
  {
    icon: <Brain className="h-6 w-6 text-green-500" />,
    title: 'Развива критично мислене',
    description: 'Предизвикателства, които насърчават уменията за решаване на проблеми и аналитично мислене.'
  },
  {
    icon: <Heart className="h-6 w-6 text-purple-500" />,
    title: 'Изгражда увереност',
    description: 'Подкрепяща среда, в която децата могат да поемат рискове и да развиват самоувереност.'
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: 'Насърчава сътрудничеството',
    description: 'Интерактивни сесии, които учат на работа в екип и комуникационни умения.'
  },
  {
    icon: <Clock className="h-6 w-6 text-purple-500" />,
    title: 'Гъвкаво обучение',
    description: 'Учете със собствено темпо с уроци при поискване и персонализирана обратна връзка.'
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: 'Нашата общност',
    description: 'Създаваме среда от подкрепящи родители и щастливи деца, готови за нови предизвикателства.'
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Защо родителите избират нас</h2>
          <p className="text-lg text-gray-600">
            Нашата образователна платформа е специално разработена да подкрепи растежа и развитието на вашето дете 
            през формиращите му години.
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
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Готови ли сте да дадете на детето си дара на ученето?</h3>
              <p className="text-purple-100 mb-6">
                Присъединете се към хилядите родители, които са видели как децата им процъфтяват с нашите курсове.
              </p>
              <div>
                <a href="#courses" className="inline-block bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Започнете още днес
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://www.rootsofaction.com/wp-content/uploads/2017/03/Resourcefulness.png"
                alt="Щастливи деца, които учат" 
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
