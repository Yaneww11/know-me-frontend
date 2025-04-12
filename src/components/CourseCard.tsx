
import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  category: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  color: 'purple' | 'green' | 'blue' | 'pink';
}

const colorVariants = {
  purple: 'from-purple-500 to-purple-600',
  green: 'from-green-500 to-green-600',
  blue: 'from-blue-500 to-blue-600', 
  pink: 'from-pink-500 to-pink-600'
};

const CourseCard = ({
  title,
  category,
  image,
  rating,
  students,
  duration,
  color = 'purple'
}: CourseCardProps) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <div className={`absolute top-0 left-0 mt-4 ml-4 px-3 py-1 rounded-full bg-gradient-to-r ${colorVariants[color]} text-white text-xs font-medium z-10`}>
          {category}
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors">{title}</h3>
        <div className="flex items-center mb-4 text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <Clock size={14} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            <span>{students} students</span>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
        <div className="mt-auto pt-4">
          <Button className="w-full bg-white hover:bg-purple-50 text-purple-600 border border-purple-200 hover:border-purple-300">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
