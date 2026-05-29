import React, { useState, useEffect } from 'react';
import { ChevronRight, Leaf } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Direct jump, no smooth scrolling
  }, [pathname]);

  return null;
}

export default function Explore() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  
  const cards = [
    {
      id: 1,
      title: "Landscaping Design",
      description: "Creating customized outdoor layouts that blend beauty, functionality, and sustainability for gardens, lawns, and open spaces. Enhances property appeal with expert plant selection and creative design concepts.",
      type: "regular"
    },
    {
      id: 2,
      title: "Vertical Gardens",
      description: "Transforming walls into lush green spaces with innovative vertical planting systems. Ideal for homes, offices, and commercial spaces to improve air quality and aesthetics.",
      type: "regular"
    },
    {
      id: 3,
      title: "Hard Landscaping",
      description: "Designing and installing structural outdoor elements like pathways, patios, decks, and retaining walls. Combines durability with style to complement your greenery.",
      type: "regular"
    },
    {
      id: 4,
      title: "Terrace And Balcony Garden",
      description: "Turning unused terraces and balconies into vibrant green retreats. Perfect for urban spaces to add nature, freshness, and relaxation areas.",
      type: "regular"
    },
    {
      id: 5,
      title: "PVT horticulture Project",
      description: "End-to-end private horticulture solutions for farms, estates, and large properties. Includes planning, planting, and maintenance services tailored to client needs.",
      type: "regular"
    },
    {
      id: 6,
      title: "Goverment Horticulture Tender:Indian Oil Porjects",
      description: " Specialized horticulture services for government and public sector projects. Expertise in large-scale planting, landscape development, and site maintenance.",
      type: "regular"
    },
    {
      id: 7,
      title: "Garden Maintenance",
      description: "Regular upkeep services including pruning, watering, pest control, and seasonal care. Ensures your garden stays healthy and visually appealing year-round.",
      type: "regular"
    },
    {
      id: 8,
      title: "Experience Superviser & Maali Service",
      description: "Providing trained supervisors and skilled gardeners for professional care and management of landscapes. Ensures quality, efficiency, and timely execution of horticulture tasks.",
      type: "regular"
    },
    {
      id: 9,
      title: "Hydroponic Plants and Services",
      description: "Modern soil-less farming techniques for growing plants using nutrient-rich water solutions. Offers installation, supply, and maintenance for hydroponic systems.",
      type: "regular"
    },
    {
      id: 10,
      title: "Timber Plants Supply",
      description: "Supplying high-quality timber plants for landscaping, forestry, and commercial use. Sourced and nurtured to meet project requirements.",
      type: "regular"
    },
    {
      id: 11,
      title: "Landscaping Plant and Grass Supply",
      description: "Providing a variety of plants, shrubs, and grasses for landscaping projects. Ensures healthy and well-grown greenery for instant installation.",
      type: "regular"
    },
    {
      id: 12,
      title: "Bonsi Tree Install and supply",
      description: "Offering artistic bonsai trees to enhance interiors and gardens. Includes expert installation and care guidance for long-lasting beauty.",
      type: "regular"
    },
    {
      id: 13,
      title: "International trees and Plants supply",
      description: "Importing rare and exotic plant species from around the world. Perfect for unique landscape designs and collectors.",
      type: "regular"
    },
    {
      id: 14,
      title: "Artificial Vertical Garden and grass",
      description: "Installing high-quality artificial greenery for low-maintenance, year-round beauty. Suitable for both indoor and outdoor decorative purposes.",
      type: "regular"
    }
  ];

  // Initialize animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Stagger card animations
    cards.forEach((card, index) => {
      setTimeout(() => {
        setVisibleCards(prev => new Set([...prev, card.id]));
      }, 300 + index * 100);
    });

    return () => clearTimeout(timer);
  }, []);

  const handleServiceClick = (service) => {
    console.log(`Clicked on: ${service}`);
    
    // Add smooth fade out transition before navigation
    setIsVisible(false);
    setVisibleCards(new Set());
    
    // Small delay for smooth transition effect
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Navigate based on service name
      if (service === "Landscaping Design") {
        navigate('/service/landscape-design');
      }
      else if (service === "Vertical Gardens") {
        navigate('/service/vertical-gardens');
      }
      else if (service === "Hard Landscaping") {
        navigate('/service/hard-landscaping');
      }
      else if (service === "Terrace And Balcony Garden") {
        navigate('/service/terrace-and-balcony-garden');
      }
      else if (service === "PVT horticulture Project") {
        navigate('/service/pvt-horticulture-project');
      }
      else if (service === "Goverment Horticulture Tender:Indian Oil Porjects") {
        navigate('/service/goverment-horticulture-tender');
      }
      else if (service === "Garden Maintenance") {
        navigate('/service/garden-maintenance');
      }
      else if (service === "Experience Superviser & Maali Service") {
        navigate('/service/experience-superviser-and-maali-services');
      }
      else if (service === "Hydroponic Plants and Services") {
        navigate('/service/hydroponic-plants-and-services');
      }
      else if (service === "Timber Plants Supply") {
        navigate('/service/timber-plants-supply');
      }
      else if (service === "Landscaping Plant and Grass Supply") {
        navigate('/service/landscape-plant-supply-and-grass-supply');
      }
      else if (service === "Bonsi Tree Install and supply") {
        navigate('/service/bonsai-tree-install-and-supply');
      }
      else if (service === "International trees and Plants supply") {
        navigate('/service/international-tree-and-plant-supply');
      }
      else if (service === "Artificial Vertical Garden and grass") {
        navigate('/service/artifical-vertical-garden-and-grass');
      }
    }, 300);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-3 sm:p-8 md:p-20 overflow-hidden">
      {/* Header Image with Animation */}
      <div className="mb-12">
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-95'
        }`}>
          <div className="relative group">
            <img 
              src="/exploreservices3.svg"
              alt="Landscaping Services Header"
              className="h-50 sm:h-64 md:h-96 w-full object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"
            />
            {/* Animated overlay gradient */}
            
           <div className="absolute backdrop-blur-xs inset-0 z-10 overflow-hidden"></div>

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-2xl">
            All Services
          </h1>
        </div>
      </div>
          </div>
        </div>
      </div>

      {/* Cards Grid with Staggered Animation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`
              rounded-2xl p-8 transition-all duration-700 ease-out cursor-pointer group relative overflow-hidden
              transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 hover:bg-[#004225]
              active:scale-98 active:translate-y-1
              ${card.type === 'accent' 
                ? 'bg-green-100 text-black' 
                : 'bg-white shadow-md hover:shadow-xl'
              }
              ${visibleCards.has(card.id) 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
              }
            `}
          
            onClick={() => handleServiceClick(card.title)}
          >
            {/* Enhanced Animated Background Elements */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:animate-pulse group-hover:scale-110"></div>
            <div className="absolute -top-16 -left-16 w-24 h-24 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:animate-bounce"></div>
            
            {/* Animated Border Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out -z-10"></div>
            
            {/* Enhanced Decorative Elements with Better Animations */}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-all duration-700 ease-out transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12 group-hover:scale-110">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-green-200 transition-all duration-700 ease-out">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>
            
            <div className="absolute top-20 left-2 opacity-10 group-hover:opacity-30 transition-all duration-800 ease-out transform group-hover:-translate-x-2 group-hover:translate-y-1 group-hover:-rotate-45 group-hover:scale-90">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-green-200 rotate-180 transition-all duration-800 ease-out">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>

            <div className="absolute top-3/4 right-5 opacity-5 group-hover:opacity-20 transition-all duration-1200 ease-out transform group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:rotate-90 group-hover:scale-125">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-green-200 -rotate-45 transition-all duration-1200 ease-out">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>

            <div className="absolute bottom-8 left-5 opacity-5 group-hover:opacity-20 transition-all duration-900 ease-out transform group-hover:-translate-x-2 group-hover:translate-y-3 group-hover:-rotate-180 group-hover:scale-75">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-green-200 -rotate-45 transition-all duration-900 ease-out">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>

            {/* Content with Enhanced Animations */}
            <div className="space-y-4 relative z-10">
              <h3 className={`text-2xl font-bold leading-tight transition-all duration-700 ease-out transform group-hover:translate-x-2
                ${card.type === 'accent' ? 'text-black' : 'text-gray-800 group-hover:text-white'}
              `}>
                {card.title}
              </h3>
              
              <p className={`text-base leading-relaxed transition-all duration-700 ease-out transform group-hover:translate-x-1
                ${card.type === 'accent' ? 'text-black' : 'text-gray-800 group-hover:text-gray-200'}
              `}>
                {card.description}
              </p>

              <div className="pt-4">
                <div className={`inline-flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all duration-700 ease-out transform group-hover:translate-x-3
                  ${card.type === 'accent' ? 'text-black' : 'text-gray-800 group-hover:text-green-300'}
                `}>
                  <span className="group-hover:font-semibold transition-all duration-500 ease-out">Learn More</span>
                  <ChevronRight size={16} className="group-hover:translate-x-2 transition-all duration-700 ease-out group-hover:scale-125 group-hover:text-green-300" />
                </div>
              </div>
            </div>

            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out">
              <div className="absolute inset-0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Elements */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 space-y-4 opacity-20 pointer-events-none">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
        <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-700"></div>
      </div>
    </div>
  );
}

export { ScrollToTop };