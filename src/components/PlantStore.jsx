import React, { useEffect, useState, useRef, useCallback } from 'react';

// Optimized navigation hook with preloading and instant feedback
const useNavigate = () => {
  const preloadedRoutes = useRef(new Set());
  
  const preloadRoute = useCallback((path) => {
    if (!preloadedRoutes.current.has(path)) {
      // Preload the route for faster navigation
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'document';
      link.href = path;
      document.head.appendChild(link);
      preloadedRoutes.current.add(path);
    }
  }, []);

  const navigate = useCallback((path) => {
    // Immediate visual feedback
    document.body.style.opacity = '0.95';
    document.body.style.transition = 'opacity 0.15s ease-out';
    
    // Use requestAnimationFrame for smooth transition
    requestAnimationFrame(() => {
      window.location.href = path;
    });
  }, []);

  return { navigate, preloadRoute };
};

// Optimized ScrollToTop component
function ScrollToTop() {
  useEffect(() => {
    // Use smooth scroll behavior
    window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }, []);
  return null;
}

function ProductDetail() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState({});
  const [headerAnimated, setHeaderAnimated] = useState(false);
  const [cardsAnimated, setCardsAnimated] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Get optimized navigation functions
  const { navigate, preloadRoute } = useNavigate();
  
  // Refs for intersection observer
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const cards = [
    {
      id: 1,
      image: '/bonsai.svg',
      Name: 'Bonsai Trees',
      route: '/plants/bonsai-plants'
    },
    {
      id: 2,
      image: '/timber9.svg',
      Name: 'Timber Plants',
      route: '/plants/timber-plants'
    },
    {
      id: 3,
      image: '/ceramic15.svg',
      Name: 'Ceramic Pots',
      route: '/pots-and-planters/ceramic-pots'
    },
    {
      id: 4,
      image: '/wooden.svg',
      Name: 'Wooden Planters',
      route: '/pots-and-planters/Wooden-planters'
    },
    {
      id: 5,
      image: '/terrace12.svg',
      Name: 'Terrace & Balcony Gardens',
      route: '/service/terrace-and-balcony-garden'
    },
    {
      id: 6,
      image: '/landscapegrassandplants16.svg',
      Name: 'Landscape Plants',
      route: '/service/landscape-plant-supply-and-grass-supply'
    },
  ];

  // Preload all routes on component mount for instant navigation
  useEffect(() => {
    cards.forEach(card => {
      preloadRoute(card.route);
    });
  }, [cards, preloadRoute]);

  // Optimized intersection observer with reduced threshold for faster triggers
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05, // Reduced threshold for faster triggers
      rootMargin: '50px 0px -25px 0px', // Increased root margin for earlier detection
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current && !headerAnimated) {
            setHeaderAnimated(true);
            requestAnimationFrame(() => setIsVisible(true));
          }
          
          if (entry.target === cardsContainerRef.current && !cardsAnimated) {
            setCardsAnimated(true);
            // Staggered animation with reduced delays for faster appearance
            cards.forEach((_, index) => {
              setTimeout(() => {
                setCardsVisible(prev => ({
                  ...prev,
                  [index]: true
                }));
              }, index * 80); // Reduced from 150ms to 80ms
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (cardsContainerRef.current) observer.observe(cardsContainerRef.current);

    return () => observer.disconnect();
  }, [headerAnimated, cardsAnimated, cards.length]);

  const handleProductClick = useCallback((route) => {
    setIsNavigating(true);
    
    // Add immediate visual feedback
    requestAnimationFrame(() => {
      navigate(route);
    });
  }, [navigate]);

  const handleCardHover = useCallback((route) => {
    // Preload on hover for even faster navigation
    preloadRoute(route);
  }, [preloadRoute]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 transition-all duration-300 ${
      isNavigating ? 'scale-98 opacity-95' : 'scale-100 opacity-100'
    }`}>
      <ScrollToTop />
      
      {/* Optimized Header with faster animations */}
      <div 
        ref={headerRef}
        className={`text-center mb-16 pt-12 transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-6'
        }`}
      >
        <h1 className="text-6xl font-light mb-6 tracking-tight bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent">
          Premium Plant Collection
        </h1>
        <p className={`text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          Transform your space with our carefully curated selection of premium houseplants
        </p>
        <div className={`w-24 h-1 bg-emerald-700 mx-auto mt-6 rounded-full transition-all duration-600 delay-300 ease-out ${
          isVisible 
            ? 'opacity-100 scale-x-100' 
            : 'opacity-0 scale-x-0'
        }`}></div>
      </div>

      {/* Optimized Product Grid */}
      <div 
        ref={cardsContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-16"
      >
        {cards.map((card, index) => (
          <ProductCard 
            key={card.id} 
            card={card} 
            index={index}
            onProductClick={handleProductClick}
            onCardHover={handleCardHover}
            isVisible={cardsVisible[index] || false}
          />
        ))}
      </div>

      {/* Enhanced Navigation Status */}
     
    </div>
  );
}

// Enhanced card component with optimized hover effects
function ProductCard({ card, index, onProductClick, onCardHover, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    onCardHover(card.route);
  }, [card.route, onCardHover]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handleClick = useCallback(() => {
    onProductClick(card.route);
  }, [card.route, onProductClick]);

  return (
    <div 
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ease-out transform cursor-pointer ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      } ${
        isHovered 
          ? 'shadow-2xl -translate-y-3 scale-105' 
          : 'hover:shadow-xl hover:-translate-y-1'
      } ${
        isPressed 
          ? 'scale-100 shadow-lg translate-y-0' 
          : ''
      } border border-gray-100`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        willChange: 'transform, box-shadow',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      {/* Optimized gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent transition-opacity duration-300 z-10 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
      
      {/* Optimized image with GPU acceleration */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <img
          src={card.image}
          alt={card.Name}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
          loading="lazy"
        />
        
        {/* Optimized shine effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`} style={{ willChange: 'transform' }}></div>
      </div>

      {/* Optimized Product Info */}
      <div className="relative p-6 bg-gradient-to-br from-white to-gray-50/50">
        <div className={`absolute top-0 left-6 h-1 bg-emerald-700 rounded-full transform -translate-y-1 transition-all duration-400 ease-out ${
          isVisible ? 'w-12 opacity-100' : 'w-0 opacity-0'
        }`}></div>
        
        <h2 className={`text-xl font-semibold transition-colors duration-300 ease-out ${
          isHovered ? 'text-emerald-700' : 'text-gray-800'
        }`}>
          {card.Name}
        </h2>
        
        {/* Optimized Navigation Arrow */}
        <div className="flex items-center justify-end mt-4">
          <div className={`text-emerald-600 transition-all duration-300 ease-out transform ${
            isHovered 
              ? 'opacity-100 translate-x-0 scale-110' 
              : 'opacity-0 translate-x-2'
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Optimized pulse effect */}
        <div className={`absolute inset-0 bg-emerald-200 rounded-3xl transition-all duration-300 ease-out pointer-events-none ${
          isHovered ? 'scale-105 opacity-20' : 'scale-100 opacity-0'
        }`} style={{ willChange: 'transform, opacity' }}></div>
      </div>
      
      {/* Optimized bottom glow */}
      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-4 bg-emerald-200 rounded-full blur-md transition-all duration-400 ease-out ${
        isHovered 
          ? 'w-3/4 opacity-60' 
          : 'w-1/4 opacity-0'
      }`} style={{ willChange: 'width, opacity' }}></div>

      {/* Optimized border animation */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-emerald-400 transition-all duration-400 ease-out pointer-events-none ${
        isHovered ? 'opacity-50 scale-105' : 'opacity-0 scale-100'
      }`} style={{ willChange: 'transform, opacity' }}></div>
    </div>
  );
}

export default ProductDetail;