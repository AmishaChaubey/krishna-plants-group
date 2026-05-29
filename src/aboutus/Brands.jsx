import { useState, useEffect, useRef } from 'react';

export default function BrandsTrustSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const brandPartners = [
    { name: "Ekkaa", logo: "/logo15.svg" },
    { name: "Gaur's Builder ", logo: "/logo15.png" },
    { name: "Greater Noida Development Authority",  logo: "/logo2.svg" },
    { name: "Navy", logo: "/logo14.svg" },
    { name: "Larsen & Toubro", logo: "/logo5.svg" },
    { name: "Indian Oil",  logo: "/logo6.svg" },
    { name: "Delhi Metro ", logo: "/logo7.svg" },
    { name: "Defence ", logo: "/defencelogo.svg" },
  ];

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for individual cards
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => cardObserver.disconnect();
  }, []);

  // Fallback component for when images don't load
  const LogoFallback = ({ brand }) => (
    <div className="w-full h-full flex flex-col items-center justify-center text-gray-600">
      <div className="text-2xl mb-1">🌱</div>
      <div className="text-xs font-medium text-center leading-tight">
        {brand.name.split(' ').map(word => word.charAt(0)).join('')}
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="bg-[#004225] py-20 px-5 relative overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white"></div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full border border-white"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full border border-white"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 rounded-full border-2 border-white"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
          >
            🌿 Brands That Trust Us
          </h2>
          <p 
            className={`text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
          >
            Leading nurseries, landscaping companies, and botanical institutions choose us as their trusted partner for premium plants and exceptional service.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {brandPartners.map((brand, index) => {
            // Different entrance animations for different positions
            const getEntranceAnimation = (idx) => {
              const patterns = [
                'opacity-0 -translate-x-20 rotate-12 scale-75', // slide from left with rotation
                'opacity-0 translate-y-20 -rotate-12 scale-75', // slide from bottom with counter-rotation
                'opacity-0 translate-x-20 rotate-12 scale-75',  // slide from right with rotation
                'opacity-0 -translate-y-20 -rotate-12 scale-75' // slide from top with counter-rotation
              ];
              return patterns[idx % 4];
            };

            return (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 text-center transition-all duration-1200 ease-out transform-gpu ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-x-0 translate-y-0 rotate-0 scale-100 blur-0'
                    : getEntranceAnimation(index)
                }`}
                style={{ 
                  transitionDelay: `${index * 250 + 400}ms`,
                  transformOrigin: 'center center',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                {/* Enhanced shimmer effect */}
                <div className="relative overflow-hidden">
                  
                  {/* Brand Logo with morphing container */}
                  <div 
                    className={`w-32 h-30 md:w-36 md:h-24 bg-white rounded-xl mx-auto mb-4 md:mb-6 flex items-center justify-center transition-all duration-800 overflow-hidden transform-gpu ${
                      visibleCards.includes(index)
                        ? 'opacity-100 scale-100 rotate-0 blur-0'
                        : 'opacity-0 scale-50 rotate-45 blur-sm'
                    }`}
                
                  >
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className={`w-full h-full object-contain p-2 transition-all duration-500 `}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none' }} className="w-full h-full flex-col items-center justify-center">
                      <LogoFallback brand={brand} />
                    </div>
                  </div>

                  {/* Brand Info with typewriter-like reveal */}
                  <div className="relative z-10 overflow-hidden">
                    <h3 
                      className={`text-white font-semibold text-lg md:text-xl mb-2 transition-all duration-700 relative ${
                        visibleCards.includes(index)
                          ? 'opacity-100 translate-y-0 blur-0'
                          : 'opacity-0 translate-y-8 blur-sm'
                      }`}
                
                    >
                      {brand.name}
                    </h3>
                    <p 
                      className={`text-white/70 text-sm md:text-base transition-all duration-700 ${
                        visibleCards.includes(index)
                          ? 'opacity-100 translate-y-0 blur-0'
                          : 'opacity-0 translate-y-4 blur-sm'
                      }`}
                      style={{ transitionDelay: `${index * 200 + 1000}ms` }}
                    >
                      {brand.category}
                    </p>
                  </div>
                </div>

                {/* Border glow effect */}
              </div>
            )
          })}
        </div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-20 right-10 animate-bounce text-green-300 text-4xl opacity-30 hidden lg:block">
        🌱
      </div>
      <div className="absolute bottom-20 left-10 animate-bounce text-green-300 text-3xl opacity-30 hidden lg:block" style={{ animationDelay: '1s' }}>
        🌿
      </div>
      <div className="absolute top-1/2 right-5 animate-bounce text-green-300 text-2xl opacity-30 hidden lg:block" style={{ animationDelay: '2s' }}>
        🍃
      </div>
    </section>     
  );
}