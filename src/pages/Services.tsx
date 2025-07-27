import React from 'react';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Residential Design',
      description: 'Transform your home into a personalized sanctuary with our comprehensive residential interior design services.',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=800',
      link: '/services/residential'
    },
    {
      title: 'Commercial Spaces',
      description: 'Create inspiring workplaces that boost productivity and reflect your brand identity.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      link: '/services/commercial'
    },
    {
      title: 'Kitchen & Bath',
      description: 'Specialized designs for the most important spaces in your home, combining functionality with luxury.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800',
      link: '/services/kitchen-bath'
    },
    {
      title: 'Space Planning',
      description: 'Optimize your space utilization with our expert planning and layout design services.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      link: '/services/space-planning'
    },
    {
      title: 'Furniture Selection',
      description: 'Curated furniture and decor selections that perfectly match your style and space.',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800',
      link: '/services/furniture'
    },
    {
      title: 'Color Consultation',
      description: 'Expert color schemes that create the perfect atmosphere for your space.',
      image: 'https://th.bing.com/th/id/OIP.zpRt_L8KSUsqe2CQ_OrTQgHaE5?rs=1&pid=ImgDetMain',
      link: '/services/color'
    }
  ];

  return (
    <div className="pt-16">
      <PageHeader
        title="Our Services"
        description="Comprehensive interior design solutions tailored to your unique style and needs"
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
      />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting to understand your vision and requirements' },
              { step: '02', title: 'Concept Development', description: 'Creating detailed design concepts and mood boards' },
              { step: '03', title: 'Design Implementation', description: 'Executing the approved design plan' },
              { step: '04', title: 'Final Reveal', description: 'Presenting your beautifully transformed space' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;