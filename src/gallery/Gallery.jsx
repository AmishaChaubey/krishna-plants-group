import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Banner Component - Fixed with return statement
function Banner() {
  window.scrollTo(0, 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative group px-5 xl:pb-15 pt-2 pb-5"
    >
      <img 
        src="/vertical4.svg"
        alt="Landscaping Services Header"
        className="h-50 sm:h-64 md:h-96 w-full object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] z-20"
      />
      <div className="absolute backdrop-blur-xs inset-0 z-10 overflow-hidden"></div>

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-2xl">
            Gallery
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductDetail() {
  const cards = [
    { id: 1, image: '/bonsai.svg' },
    { id: 2, image: '/bonsai10.svg', Name: 'Bonsai Trees' },
    { id: 3, image: '/bonsai2.svg', Name: 'Bonsai Trees' },
    { id: 4, image: '/bonsai3.jpg', Name: 'Bonsai Trees' },
    { id: 5, image: '/bonsai4.jpg', Name: 'Bonsai Trees' },
    { id: 6, image: '/bonsai5.jpg', Name: 'Bonsai Trees' },
    { id: 7, image: '/timber.jpg', Name: 'Timber Plants' },
    { id: 8, image: '/timber10.svg', Name: 'Timber Plants' },
    { id: 9, image: '/timber2.jpg', Name: 'Timber Plants' },
    { id: 10, image: '/timber3.avif', Name: 'Timber Plants' },
    { id: 11, image: '/timber11.svg', Name: 'Timber Plants' },
    { id: 12, image: '/ceramic.svg', Name: 'Ceramic Pots' },
    { id: 13, image: '/ceramic1.svg', Name: 'Ceramic Pots' },
    { id: 14, image: '/ceramic2.svg', Name: 'Ceramic Pots' },
    { id: 15, image: '/ceramic3.svg', Name: 'Ceramic Pots' },
    { id: 16, image: '/ceramic4.svg', Name: 'Ceramic Pots' },
    { id: 17, image: '/ceramic5.svg', Name: 'Ceramic Pots' },
    { id: 18, image: '/wooden.svg', Name: 'Wooden Planters' },
    { id: 19, image: '/wooden1.svg', Name: 'Wooden Planters' },
    { id: 20, image: '/wooden2.svg', Name: 'Wooden Planters' },
    { id: 21, image: '/wooden3.svg', Name: 'Wooden Planters' },
    { id: 22, image: '/wooden4.svg', Name: 'Wooden Planters' },
    { id: 23, image: '/wooden5.svg', Name: 'Wooden Planters' },
    { id: 24, image: '/landscapegrassandplant.jpg' },
    { id: 25, image: '/landscapegrassandplants10.svg', Name: 'Landscape Grasses' },
    { id: 26, image: '/landscapegrassandplants2.svg', Name: 'Landscape Grasses' },
    { id: 27, image: '/landscapegrassandplants3.svg', Name: 'Landscape Grasses' },
    { id: 28, image: '/landscapegrassandplants4.svg', Name: 'Landscape Grasses' },
    { id: 29, image: '/landscapegrassandplants5.svg', Name: 'Landscape Grasses' },
  ];

  const handleProductClick = (productName) => {
    console.log(`Clicked on: ${productName}`);
    window.scrollTo(0, 0);
  };

  // Apply animations after component mounts (CSS keyframes)
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInScale {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes shimmer {
        0% { transform: translateX(-100%) skewX(-15deg); }
        100% { transform: translateX(100%) skewX(-15deg); }
      }
      .animate-shimmer { animation: shimmer 1.5s infinite; }
      .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
      .animate-fade-in-scale { animation: fadeInScale 0.6s ease-out forwards; opacity: 0; }
    `;
    if (!document.querySelector('[data-animation-styles]')) {
      style.setAttribute('data-animation-styles', 'true');
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Banner Section */}
      <div className="animate-fade-in-scale">
        <Banner />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-16">
        {cards.map((card, index) => (
          <ProductCard 
            key={card.id} 
            card={card} 
            index={index}
            onProductClick={handleProductClick}
          />
        ))}
      </div>
    </div>
  );
}

// Enhanced card component with animations
function ProductCard({ card, index, onProductClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onProductClick(card.Name)}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      
      {/* Loading shimmer effect */}
      <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </div>
      
      {/* Image only - full card height */}
      <div className="relative h-80 overflow-hidden bg-gray-100">
        <img
          src={card.image}
          alt={card.Name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-emerald-200/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}
