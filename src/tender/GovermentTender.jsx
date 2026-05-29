import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop component - Add this to your App.js or main router component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Direct jump, no smooth scrolling
  }, [pathname]);

  return null;
}

export default function ProductDetail() {


  const cards = [

    {
      id: 28,
      image: '/indianoil3.svg',
      Name: 'Bonsai Trees',
    }, 
   {
      id: 29,
      image: '/indianoil4.svg',
      Name: 'Bonsai Trees',
    }, {
      id: 30,
      image: '/indianoil5.svg',
      Name: 'Bonsai Trees',
    },{
      id: 26,
      image: '/indianoil.svg',
      Name: 'Bonsai Trees',
    }, 
    {
      id: 31,
      image: '/indianoil6.svg',
      Name: 'Bonsai Trees',
    },
    {
      id: 15,
      image: '/indianoil18.svg',
      Name: 'Bonsai Trees',
    },

    {
      id: 16,
      image: '/indianoil29.svg',
      Name: 'Timber Plants',
    },
    {
      id: 17,
      image: '/indianoil27.svg',
      Name: 'Bonsai Trees',
    }, {
      id: 18,
      image: '/indianoil17.svg',
      Name: 'Bonsai Trees',
    },
    {
      id: 19,
      image: '/indianoil25.svg',
      Name: 'Bonsai Trees',
    }, {
      id: 20,
      image: '/indianoil23.svg',
      Name: 'Bonsai Trees',
    }, {
      id: 21,
      image: '/indianoil22.svg',
      Name: 'Bonsai Trees',
    }, {
      id: 22,
      image: '/indianoil8.svg',
      Name: 'Bonsai Trees',
    }, {
      id: 23,
      image: '/indianoil9.svg',
      Name: 'Bonsai Trees',
    }, {
      id: 24,
      image: '/indianoil10.svg',
      Name: 'Bonsai Trees',
    }, {
      id: 25,
      image: '/indianoil11.svg',
      Name: 'Bonsai Trees',
    },  {
      id: 2,
      image: '/indianoil12.svg', ///indianoil6.svg
      Name: 'Bonsai Trees',
    },
    
    {
      id: 4,
      image: '/indianoil7.svg',
      Name: 'Bonsai Trees',
    },
    {
      id: 5,
      image: '/indianoil13.svg',
      Name: 'Bonsai Trees',
    },
    {
      id: 6,
      image: '/indianoil17.svg',
      Name: 'Bonsai Trees',
    }, {
      id: 3,
      image: '/indianoil15.svg',
      Name: 'Bonsai Trees',
    },
  ];

  const handleProductClick = (productName) => {
    console.log(`Clicked on: ${productName}`);

    // Direct jump to top - instant, no animation
    window.scrollTo(0, 0);

    // Navigate immediately without delay

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-5 ">
      <div className="relative group px-5 pb-5 ">
        <div className="absolute backdrop-blur-xs inset-0 z-10 overflow-hidden"></div>

        <img
          src="/indianoil6.svg"
          alt="Landscaping Services Header"
          className="h-50 sm:h-64 md:h-96 w-full object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] z-20 "
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide ">
              Goverment Horticulture Tender
            </h1></div></div>

      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-16 pt-5">
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

// Enhanced card component with only image - no text
function ProductCard({ card, index, onProductClick }) {
  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
      onClick={() => onProductClick(card.Name)}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

      {/* Image only - full card height */}
      <div className="relative h-80 overflow-hidden bg-gray-100">
        <img
          src={card.image}
          alt={card.Name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

        {/* Navigation Arrow - positioned over image */}

      </div>

      {/* Bottom glow effect */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-emerald-200/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

// CSS animations (inline styles for the animation keyframes)
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Export ScrollToTop component for use in App.js
export { ScrollToTop };