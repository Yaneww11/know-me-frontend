import React from 'react';
import CourseCard from './CourseCard';

const featuredCourses = [
  {
    id: 1,
    title: 'Въведение в програмирането за деца',
    category: 'Програмиране',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhf3ZIrowJkgU4UbPayyfoYEHcWl4xG_iEw&sФ',
    rating: 4.9,
    audience: 1245,
    duration: '8 седмици',
    location: 'София, ул. Витоша 18',
    color: 'purple' as const
  },
  {
    id: 2,
    title: 'Футболен шампионат "Млади шампиони"',
    category: 'Спорт',
    image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d',
    rating: 4.8,
    audience: 1250,
    duration: '4 седмици',
    location: 'Стадион Васил Левски, София',
    color: 'green' as const
  },
  {
    id: 3,
    title: 'Забавление с математика',
    category: 'Математика',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNW6UcHHlwBkGpAlvZA2MwbARB5b210NN3IA&s',
    rating: 4.7,
    audience: 1102,
    duration: '10 седмици',
    location: 'Онлайн',
    color: 'blue' as const
  },
  {
    id: 4,
    title: 'Научни експерименти у дома',
    category: 'Наука',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    rating: 4.9,
    audience: 876,
    duration: '7 седмици',
    location: 'Онлайн',
    color: 'pink' as const
  }
];


const FeaturedCourses = () => {
  return (
    <section id="courses" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Разгледайте нашите препоръчани курсове</h2>
          <p className="text-lg text-gray-600">
            Създадени от експертни преподаватели, за да вдъхновят креативност и да насърчат интелектуалния растеж
            при деца на възраст 10-14 години.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              image={course.image}
              rating={course.rating}
              audience={course.audience}
              duration={course.duration}
              location={course.location}
              color={course.color}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#all-courses" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
            Вижте всички курсове
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;

