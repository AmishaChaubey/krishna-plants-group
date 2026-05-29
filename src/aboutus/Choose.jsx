import React, { useState, useEffect, useRef } from 'react';

const ReviewCard = ({ title, description, index, isInView }) => {
  return (
    <div 
      className={`bg-white rounded-lg p-6 transition-all duration-300 ease-in-out hover:bg-[#004225] hover:-translate-y-2 hover:shadow-2xl cursor-pointer group relative overflow-hidden hover:animate-none
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transform transition-all duration-700`}
      
    >
      {/* Gradient blur decorative elements - only visible on hover */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -top-16 -left-16 w-24 h-24 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Leaf decorative elements with movement animations */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300 animate-bounce">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-white">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-2 left-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-white rotate-180 animate-bounce">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      </div>

      <div className="absolute top-1/2 right-1 opacity-5 group-hover:opacity-15 transition-opacity duration-300 animate-bounce">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-white -rotate-45">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-white">
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-white/50">
          {description}
        </p>
      </div>
    </div>
  );
};

const ReviewCards = () => {
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the component is in view
        if (entry.isIntersecting) {
          setIsInView(true);
          // Optional: Stop observing after animation triggers
          // observer.unobserve(componentRef.current);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: '0px 0px -50px 0px' // Adjust trigger point
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const cardsData = [
    {
      title: "Expert Landscaping Services",
      description: "Our team of skilled professionals designs and executes landscaping projects that enhance the beauty and functionality of any space. From garden layouts to terrace gardens, we handle it all with precision."
    },
    {
      title: "High-Quality Plants & Materials",
      description: "We provide handpicked, healthy plants and top-quality materials to ensure long-lasting greenery and aesthetic appeal."
    },
    {
      title: "Customized Designs",
      description: "Every space is unique, and we offer personalized landscaping solutions that align with your preferences, climate conditions, and maintenance requirements."
    },
    {
      title: "Sustainable & Eco-Friendly Practices",
      description: "We incorporate sustainable gardening techniques, water-efficient irrigation systems, and eco-friendly landscaping materials to promote environmental well-being."
    },
    {
      title: "Affordable & Reliable Services",
      description: "Our services are competitively priced, ensuring you get the best value for your investment without compromising on quality."
    },
    {
      title: "Maintenance & Support",
      description: "Beyond designing and installation, we provide ongoing maintenance services to keep your landscape thriving throughout the year."
    },
    {
      title: "Customer Satisfaction Guaranteed",
      description: "With years of experience and a passion for greenery, we take pride in delivering landscapes that exceed expectations and bring joy to our customers."
    }
  ];

  return (
    <div ref={componentRef} className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h1>
          <p className="text-gray-600 text-lg">At Krishna Plant & Group, we bring nature closer to you with expert
landscaping solutions tailored to your space. Whether it's a home
garden, commercial property, or public space, we ensure a lush,
vibrant, and sustainable environment. Here's why we stand out:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <ReviewCard
              key={index}
              index={index}
              title={card.title}
              description={card.description}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;