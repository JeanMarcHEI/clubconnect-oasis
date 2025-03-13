
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ClubsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-20 px-4 bg-gradient-to-b from-hei-primary to-hei-primary/90 text-white">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Explore Our <span className="text-hei-secondary">Clubs</span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Discover the wide variety of clubs available at HEI and find your perfect fit.
          </p>
        </div>
      </div>
      <div className="py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-hei-primary text-xl font-medium animate-fade-in">
            Detailed clubs page coming soon...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClubsPage;
