
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Sample club data
const clubs = [
  {
    id: 1,
    name: "Tech Innovators",
    category: "Technology",
    description: "Exploring cutting-edge technologies and developing innovative solutions for real-world problems.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    name: "Business Leaders",
    category: "Business",
    description: "Developing entrepreneurial mindsets and business acumen through workshops and competitions.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    color: "from-green-500 to-emerald-700"
  },
  {
    id: 3,
    name: "Creative Arts",
    category: "Arts",
    description: "Expressing creativity through various art forms including visual arts, music, and performance.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 4,
    name: "Sports Excellence",
    category: "Sports",
    description: "Promoting physical fitness, teamwork, and competitive spirit through various sporting activities.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    color: "from-red-500 to-pink-600"
  }
];

const ClubsShowcase = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-20 px-4", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-hei-primary mb-4">
            Discover Our <span className="text-hei-secondary">Vibrant Clubs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From technology and business to arts and sports, our diverse range of clubs caters to every interest and passion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clubs.map((club, index) => (
            <div 
              key={club.id} 
              className={`club-card rounded-xl overflow-hidden shadow-md bg-white animate-fade-in stagger-${index + 1}`}
            >
              <div className="zoom-on-hover h-48">
                <img 
                  src={club.image} 
                  alt={club.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${club.color} text-white`}>
                    {club.category}
                  </span>
                  <span className="text-hei-primary text-xs font-medium">Active</span>
                </div>
                <h3 className="text-xl font-bold text-hei-primary mb-2">{club.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{club.description}</p>
                <Link 
                  to={`/clubs/${club.id}`} 
                  className="inline-flex items-center text-hei-secondary font-semibold hover:underline"
                >
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in stagger-4">
          <Link 
            to="/clubs" 
            className="inline-flex items-center justify-center bg-hei-primary text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all"
          >
            View All Clubs
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClubsShowcase;
