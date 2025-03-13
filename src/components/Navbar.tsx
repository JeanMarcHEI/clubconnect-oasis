
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("w-full py-4 px-6 md:px-12 flex items-center justify-between bg-white shadow-sm z-10", className)}>
      <div className="flex items-center gap-2">
        <img src="/lovable-uploads/7b0918d2-8a8e-4399-88b8-4bbde37998b2.png" alt="HEI Logo" className="h-12 w-auto" />
        <span className="text-hei-primary font-bold text-xl hidden sm:inline">ClubConnect Oasis</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="nav-link text-hei-primary font-medium">Home</Link>
        <Link to="/clubs" className="nav-link text-hei-primary font-medium">Clubs</Link>
        <Link to="/events" className="nav-link text-hei-primary font-medium">Events</Link>
        <Link to="/articles" className="nav-link text-hei-primary font-medium">Articles</Link>
        <Link to="/leaders" className="nav-link text-hei-primary font-medium">Leaders</Link>
      </div>
      
      <div className="flex items-center">
        <Link to="/join" className="bg-hei-secondary text-white px-4 py-2 rounded font-medium hover:bg-opacity-90 transition-all">
          Join a Club
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
