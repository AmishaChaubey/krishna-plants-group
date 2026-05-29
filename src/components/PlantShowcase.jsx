import React from 'react';

const FloatingLeaf = ({ delay, position }) => (
  <div 
    className={`absolute w-5 h-5 bg-white/10 rounded-tl-full rounded-br-full ${position}`}
    style={{
      animation: `floatLeaf 10s linear infinite ${delay}s`,
      transform: 'rotate(45deg)'
    }}
  />
);

const PlantShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 flex items-center justify-center p-5">
      <div className="flex max-w-6xl w-full bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-[350px] flex-col lg:flex-row">
        
        {/* Content Section */}
        <div className="flex-1 p-4 lg:p-8 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-emerald-900/95 to-emerald-800/90">
          
          {/* Floating Background Effect */}
          <div 
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-white/2 to-transparent"
            style={{
              animation: 'float 12s ease-in-out infinite'
            }}
          />
          
          {/* Floating Leaves */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
            <FloatingLeaf delay={0} position="top-[25%] left-[8%]" />
            <FloatingLeaf delay={4} position="top-[65%] left-[15%]" />
            <FloatingLeaf delay={8} position="top-[45%] left-[3%]" />
          </div>
          
          {/* Main Content */}
          <div className="relative z-20">
            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
              <span className="block text-white">
                Krishna Plant & Group
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-green-200 to-teal-200 py-1">
                
                ( A unit of
              </span>
              <span className="block text-white">
                 Krishna Plant House)  
              </span>
             
            </h1>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-16 -left-16 w-24 h-24 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex-1 relative bg-black overflow-hidden">
          <div className="w-full h-full relative">
            {/* YouTube Iframe with object-fit cover effect */}
            <iframe 
              className="absolute inset-0 w-full h-full border-0 brightness-90 contrast-110 saturate-125"
              style={{
                minWidth: '100%',
                minHeight: '100%',
                width: '177.78vh', // 16:9 aspect ratio
                height: '56.25vw', // 16:9 aspect ratio
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              src="https://www.youtube.com/embed/RzVvThhjAKw?autoplay=1&mute=1&loop=1&playlist=RzVvThhjAKw&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1"
              title="Plant Showcase Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/10 to-emerald-900/10 pointer-events-none z-10" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -20px) rotate(180deg); }
        }

        @keyframes floatLeaf {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
};

export default PlantShowcase;