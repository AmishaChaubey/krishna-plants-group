import React, { useState, useEffect, useRef } from 'react'

export default function MissionVision() {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay for smoother animation
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
        } else {
          // Optional: Reset animation when out of view
          // setIsVisible(false);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleCardInteraction = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div 
      ref={sectionRef}
      className="bg-white min-h-screen p-4 sm:p-8 md:p-12 lg:p-20 -mt-5"
    >
      <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-10 ml-0 lg:ml-5'>
        
        {/* Mission Card */}
        <div 
          className={`relative w-full h-80 sm:h-96 md:h-110 lg:h-136 lg:flex-1 shadow-gray-300 border-gray-100 group cursor-pointer shadow-xl hover:shadow-2xl overflow-hidden rounded-3xl transition-all duration-500 ease-out transform hover:-translate-y-3 ${
            activeCard === 'mission' ? 'active scale-105' : ''
          } ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
       
          onClick={() => handleCardInteraction('mission')}
          onMouseEnter={() => setActiveCard('mission')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <img 
            src="https://i.pinimg.com/736x/ee/95/c9/ee95c985d7d138502ed803de6d59b932.jpg"
            alt="Mission"
            className={`h-full w-full object-cover transition-all duration-500 ease-out ${
              activeCard === 'mission' ? 'scale-110 brightness-110' : 'group-hover:scale-110 group-hover:brightness-110'
            }`}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-400 ease-out ${
            activeCard === 'mission' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            <div className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform transition-all duration-500 ease-out ${
              activeCard === 'mission' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
            }`}>
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-300 ease-out delay-100 ${
                activeCard === 'mission' ? 'animate-pulse' : ''
              }`}>Our Mission</h3>
              <h4 className={`text-sm sm:text-md lg:text-md font-light mb-3 transition-all duration-300 ease-out delay-150 ${
                activeCard === 'mission' ? 'text-green-200' : ''
              }`}>Landscaping with the blessing of Vrinda</h4>
              <p className={`text-xs sm:text-sm lg:text-base leading-relaxed transition-all duration-400 ease-out delay-200 ${
                activeCard === 'mission' ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'
              }`}>
               At Krishna Plant & Group, our mission is to bring nature closer to every home, workplace, and community by providing high-quality plants and eco-friendly gardening solutions. We are committed to promoting sustainability, enhancing green spaces, and fostering a deeper connection between people and nature.

Through innovation, expert guidance, and a diverse range of plants, we aim to inspire individuals to cultivate healthier environments while contributing to a greener planet. Our dedication to quality, customer satisfaction, and environmental consciousness drives us to be a trusted name in the world of gardening and landscaping.
              </p>
            </div>
          </div>
        </div>
        
        {/* Vision Card */}
        <div 
          className={`relative w-full h-80 sm:h-96 md:h-110 lg:h-136 lg:flex-1 group cursor-pointer shadow-gray-300 shadow-xl hover:shadow-2xl overflow-hidden rounded-3xl transition-all duration-500 ease-out transform hover:-translate-y-3 ${
            activeCard === 'vision' ? 'active scale-105' : ''
          } ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
        
          onClick={() => handleCardInteraction('vision')}
          onMouseEnter={() => setActiveCard('vision')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <img 
            src="https://i.pinimg.com/1200x/d8/6b/f5/d86bf56a725c4ff94cb52722a84afa4e.jpg"
            alt="Vision"
            className={`h-full w-full object-cover transition-all duration-500 ease-out ${
              activeCard === 'vision' ? 'scale-110 brightness-110' : 'group-hover:scale-110 group-hover:brightness-110'
            }`}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-400 ease-out ${
            activeCard === 'vision' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            <div className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform transition-all duration-500 ease-out ${
              activeCard === 'vision' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
            }`}>
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-300 ease-out delay-100 ${
                activeCard === 'vision' ? 'animate-pulse' : ''
              }`}>Our Vision</h3>
              <h4 className={`text-sm sm:text-md lg:text-md font-light mb-3 transition-all duration-300 ease-out delay-150 ${
                activeCard === 'vision' ? 'text-green-200' : ''
              }`}>Landscaping with the blessing of Vrinda</h4>

              <p className={`text-xs sm:text-sm lg:text-base leading-relaxed transition-all duration-400 ease-out delay-200 ${
                activeCard === 'vision' ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'
              }`}>
              At Krishna Plant & Group, our vision is to create a greener and healthier world by making plants an integral part of every home, office, and urban space. We aspire to be a leading provider of high-quality plants, fostering a deep connection between people and nature.

Through innovation, sustainability, and a commitment to excellence, we aim to inspire a lifestyle that values greenery, enhances well-being, and contributes to environmental conservation. Our goal is to make plant care accessible and enjoyable, ensuring that every space thrives with the beauty and benefits of nature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}