
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Sample events data
const events = [
  {
    id: 1,
    title: "Tech Hackathon",
    club: "Tech Innovators",
    date: "October 15, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "Computer Lab, Main Building",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 2,
    title: "Business Case Competition",
    club: "Business Leaders",
    date: "October 22, 2023",
    time: "1:00 PM - 5:00 PM",
    location: "Auditorium, Business School",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: 3,
    title: "Art Exhibition",
    club: "Creative Arts",
    date: "November 5, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Art Gallery, Student Center",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  }
];

const UpcomingEvents = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-20 px-4 bg-gray-50", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-hei-primary mb-4">
            Upcoming <span className="text-hei-secondary">Events</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest events and activities organized by our clubs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-md animate-fade-in stagger-${index + 1} club-card`}
            >
              <div className="zoom-on-hover h-48">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-hei-secondary/10 text-hei-secondary text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  {event.date}
                </div>
                <h3 className="text-xl font-bold text-hei-primary mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-semibold">Organized by:</span> {event.club}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-semibold">Time:</span> {event.time}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold">Location:</span> {event.location}
                </p>
                <Link 
                  to={`/events/${event.id}`} 
                  className="inline-flex items-center justify-center w-full bg-hei-primary text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all"
                >
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in stagger-4">
          <Link 
            to="/events" 
            className="inline-flex items-center text-hei-primary font-semibold hover:text-hei-secondary transition-colors"
          >
            View All Events
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

export default UpcomingEvents;
