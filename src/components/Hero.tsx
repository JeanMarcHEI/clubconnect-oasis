
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative min-h-[90vh] flex items-center overflow-hidden", className)}>
      {/* Background with better gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-hei-primary via-hei-primary/95 to-hei-primary/90 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-hei-secondary/20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-hei-secondary/10 blur-3xl"></div>
      </div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/20 rounded-md rotate-12 animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-hei-secondary/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-lg -rotate-12 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 animate-fade-in text-white">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-hei-secondary font-medium text-sm mb-6 backdrop-blur-sm">
            Student Life at HEI
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            Discover Your <span className="text-hei-secondary">Passion</span> at HEI
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-lg leading-relaxed">
            Join our vibrant community of clubs and activities that will enrich your student experience and help you build lasting connections.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/clubs" 
              className="bg-hei-secondary hover:bg-hei-secondary/90 text-hei-primary px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg shadow-hei-secondary/20"
            >
              Explore Clubs
            </Link>
            <Link 
              to="/events" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-semibold text-lg transition-all"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center animate-fade-in stagger-2">
          <div className="relative">
            {/* Decorative elements for the image */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-hei-secondary/30 rounded-lg rotate-6"></div>
            <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-hei-secondary/50 rounded-lg -rotate-6"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Students at HEI" 
              className="w-72 h-96 md:w-80 md:h-[30rem] object-cover rounded-lg relative z-10 shadow-2xl shadow-black/30"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl animate-bounce-slow">
              <p className="text-hei-primary font-bold text-lg">20+ Active Clubs</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
