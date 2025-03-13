
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const JoinCTA = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-20 px-4", className)}>
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-hei-primary to-hei-primary/80 rounded-2xl p-8 md:p-12 overflow-hidden relative animate-fade-in">
          {/* Abstract Shape */}
          <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-hei-secondary opacity-20 animate-pulse-slow"></div>
          <div className="absolute -left-24 -top-24 w-64 h-64 rounded-full bg-hei-secondary opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-white md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Ready to <span className="text-hei-secondary">Join a Club</span>?
              </h2>
              <p className="opacity-90 max-w-xl">
                Whether you're looking to develop new skills, pursue your passions, or connect with like-minded individuals, there's a club waiting for you at HEI. Start your journey today!
              </p>
            </div>
            <div className="animate-fade-in stagger-2">
              <Link 
                to="/join" 
                className="inline-flex items-center justify-center bg-hei-secondary text-hei-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg"
              >
                Join Now
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
