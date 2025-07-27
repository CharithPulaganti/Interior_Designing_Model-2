import React from 'react';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, onClick }) => {
  return (
    <div 
      className="group cursor-pointer relative overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="text-center text-white">
          <Eye className="w-8 h-8 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;