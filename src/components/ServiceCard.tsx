import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover transition-transform group-hover:scale-105" />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;