
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Sample articles data
const articles = [
  {
    id: 1,
    title: "Tech Innovation Week: A Resounding Success",
    excerpt: "Our annual Tech Innovation Week brought together students from across campus to collaborate on exciting projects...",
    author: "Tech Innovators Club",
    date: "September 28, 2023",
    category: "Event Recap",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 2,
    title: "Business Leaders Club Secures Corporate Partnership",
    excerpt: "We're excited to announce our new partnership with Tech Industries, offering internship opportunities for our members...",
    author: "Business Leaders Club",
    date: "September 15, 2023",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: 3,
    title: "Creative Arts Showcase: Celebrating Student Talent",
    excerpt: "The recent Creative Arts Showcase highlighted the incredible artistic talents of our students across various mediums...",
    author: "Creative Arts Club",
    date: "September 5, 2023",
    category: "Event Recap",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  }
];

const LatestArticles = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-20 px-4 bg-gradient-to-b from-hei-primary to-hei-primary/90 text-white", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Latest <span className="text-hei-secondary">Articles</span>
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto">
            Stay updated with the latest news, event recaps, and announcements from our clubs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={article.id} 
              className={`bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-md animate-fade-in stagger-${index + 1} club-card`}
            >
              <div className="zoom-on-hover h-48">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-hei-secondary text-hei-primary">
                    {article.category}
                  </span>
                  <span className="text-white/70 text-xs">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                <p className="text-white/80 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">{article.author}</span>
                  <Link 
                    to={`/articles/${article.id}`} 
                    className="inline-flex items-center text-hei-secondary font-semibold hover:underline"
                  >
                    Read more
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
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in stagger-4">
          <Link 
            to="/articles" 
            className="inline-flex items-center justify-center bg-hei-secondary text-hei-primary px-6 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all"
          >
            View All Articles
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

export default LatestArticles;
