
import React from 'react';
import CourseCard from './CourseCard';

const featuredCourses = [
  {
    id: 1,
    title: 'Introduction to Programming for Kids',
    category: 'Coding',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    rating: 4.9,
    students: 1245,
    duration: '8 weeks',
    color: 'purple' as const
  },
  {
    id: 2,
    title: 'Creative Writing Adventures',
    category: 'Language Arts',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    rating: 4.8,
    students: 987,
    duration: '6 weeks',
    color: 'green' as const
  },
  {
    id: 3,
    title: 'Fun with Mathematics',
    category: 'Mathematics',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    rating: 4.7,
    students: 1102,
    duration: '10 weeks',
    color: 'blue' as const
  },
  {
    id: 4,
    title: 'Science Experiments at Home',
    category: 'Science',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    rating: 4.9,
    students: 876,
    duration: '7 weeks',
    color: 'pink' as const
  }
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Featured Courses</h2>
          <p className="text-lg text-gray-600">
            Designed by expert educators to inspire creativity and foster intellectual growth
            in children aged 10-14 years.
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
              students={course.students}
              duration={course.duration}
              color={course.color}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#all-courses" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
            View All Courses
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
