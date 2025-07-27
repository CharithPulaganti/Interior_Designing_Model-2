import React from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '10 Modern Interior Design Trends for 2024',
      excerpt: 'Discover the latest trends shaping modern interior design, from sustainable materials to biophilic elements.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Trends'
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Color Palette',
      excerpt: 'Learn the principles of color theory and how to create harmonious color schemes for your space.',
      image: 'https://www.colortrendsco.com/wp-content/uploads/2017/12/choosing-color-palette.jpg',
      date: '2024-03-10',
      readTime: '7 min read',
      category: 'Tips'
    },
    {
      id: 3,
      title: 'Small Space Solutions: Maximizing Your Home',
      excerpt: 'Creative solutions and design tricks to make the most of limited living spaces.',
      image: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&q=80&w=800',
      date: '2024-03-05',
      readTime: '6 min read',
      category: 'Tips'
    }
  ];

  return (
    <div className="pt-16">
      <PageHeader
        title="Design Blog & Insights"
        description="Stay inspired with our latest articles on interior design trends, tips, and inspiration"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200"
                    alt="Featured post"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="text-indigo-600 font-medium">Featured Article</span>
                  <h2 className="text-3xl font-bold mt-2 mb-4">The Art of Creating Timeless Interiors</h2>
                  <p className="text-gray-600 mb-6">
                    Explore the principles and elements that make interior designs stand the test of time, from classic color schemes to enduring materials.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">March 20, 2024</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>8 min read</span>
                  </div>
                  <Link
                    to="/blog/timeless-interiors"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
                  >
                    Read More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm font-medium text-indigo-600">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
                  >
                    Read More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;