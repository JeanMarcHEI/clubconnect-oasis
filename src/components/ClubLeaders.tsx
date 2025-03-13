
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Sample club leaders data
const leaders = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "President",
    club: "Tech Innovators",
    email: "sarah.johnson@hei.edu",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "President",
    club: "Business Leaders",
    email: "michael.chen@hei.edu",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "President",
    club: "Creative Arts",
    email: "aisha.patel@hei.edu",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    role: "President",
    club: "Sports Excellence",
    email: "carlos.rodriguez@hei.edu",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

const ClubLeaders = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-20 px-4", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-hei-primary mb-4">
            Meet Our <span className="text-hei-secondary">Club Leaders</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know the passionate students who lead our clubs and make things happen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div 
              key={leader.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-md animate-fade-in stagger-${index + 1} club-card`}
            >
              <div className="relative pt-[100%] zoom-on-hover">
                <img 
                  src={leader.image}
                  alt={leader.name} 
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-hei-primary mb-1">{leader.name}</h3>
                <p className="text-hei-secondary font-semibold mb-1">{leader.role}</p>
                <p className="text-gray-600 mb-3">{leader.club}</p>
                <div className="pt-3 border-t border-gray-100">
                  <a 
                    href={`mailto:${leader.email}`} 
                    className="inline-flex items-center text-hei-primary font-medium hover:text-hei-secondary transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in stagger-4">
          <Link 
            to="/leaders" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-hei-primary to-hei-primary/80 text-white px-6 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-all"
          >
            View All Leaders
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

export default ClubLeaders;
