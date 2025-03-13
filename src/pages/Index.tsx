
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClubsShowcase from '@/components/ClubsShowcase';
import UpcomingEvents from '@/components/UpcomingEvents';
import ClubLeaders from '@/components/ClubLeaders';
import LatestArticles from '@/components/LatestArticles';
import JoinCTA from '@/components/JoinCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClubsShowcase />
      <UpcomingEvents />
      <ClubLeaders />
      <LatestArticles />
      <JoinCTA />
      <Footer />
    </div>
  );
};

export default Index;
