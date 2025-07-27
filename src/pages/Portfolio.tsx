import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Minimalist Living',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=800',
      description: 'A contemporary living space that embraces minimalism and functionality.'
    },
    {
      id: 2,
      title: 'Luxury Office Suite',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      description: 'High-end office design promoting productivity and sophistication.'
    },
    {
      id: 3,
      title: 'Gourmet Kitchen Design',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800',
      description: 'A chef s dream kitchen combining functionality with elegant design.'
    },
    {
      id: 4,
      title: 'Urban Loft Renovation',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      description: 'Complete transformation of an urban loft into a modern living space.'
    },
    {
      id: 5,
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
      description: 'Luxurious hotel lobby design focusing on guest experience.'
    },
    {
      id: 6,
      title: 'Spa-Like Bathroom',
      category: 'bathroom',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
      description: 'Transforming an ordinary bathroom into a luxurious spa retreat.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'bathroom', name: 'Bathroom' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-16">
      <PageHeader
        title="Our Portfolio"
        description="Explore our collection of thoughtfully designed spaces"
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="flex items-center">
                <span className="text-sm font-medium text-indigo-600">
                  {categories.find(c => c.id === selectedProject.category)?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;