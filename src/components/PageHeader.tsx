import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, image }) => {
  return (
    <div className="relative h-[60vh] bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl">{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;