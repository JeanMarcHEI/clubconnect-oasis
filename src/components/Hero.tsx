
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative min-h-[80vh] flex items-center", className)}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-hei-primary to-hei-primary/80 z-0"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 z-0 animate-pulse-slow">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY0YzcuNzMgMCAxNCAxMC4yNyAxNCAxNGg0eiIvPjxwYXRoIGQ9Ik0yLjU5IDU4LjQxYy0zLjQ2LTMuNDYtMy40Ni05LjA2IDAtMTIuNTJsNi43OC02Ljc4IDQuMjQgNC4yNC02Ljc4IDYuNzhjLTIuMjggMi4yOC0yLjI4IDUuOTggMCA4LjI1IDIuMjggMi4yOCA1Ljk4IDIuMjggOC4yNSAwbDYuNzgtNi43OCA0LjI0IDQuMjQtNi43OCA2Ljc4Yy0zLjQ2IDMuNDYtOS4wNiAzLjQ2LTEyLjUyIDB6Ii8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 animate-fade-in text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Discover Your Passion at <span className="text-hei-secondary">HEI</span>
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-lg">
            Explore a diverse range of clubs and activities that will enrich your student experience and help you build lasting connections.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/clubs" 
              className="bg-hei-secondary text-hei-primary px-6 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all"
            >
              Explore Clubs
            </Link>
            <Link 
              to="/events" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-in stagger-2">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-hei-secondary rounded-full opacity-20 absolute -top-6 -left-6 animate-pulse-slow"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Students at HEI" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg relative z-10 shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg animate-bounce-slow">
              <p className="text-hei-primary font-bold">20+ Active Clubs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
