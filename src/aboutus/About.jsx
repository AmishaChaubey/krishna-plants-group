import React, { useEffect, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

    window.scrollTo(0, 0);

  return (
    <div className="bg-white min-h-screen p-4 sm:p-8 md:p-20">
      {/* Hero Image with enhanced fade-in animation */}
 <div
  className={`relative transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
  }`}
>
  {/* Image */}
  <img
    src="/abouttt.jpg"
    alt=""
    className="h-40 sm:h-64 md:h-96 w-full object-cover rounded-b-xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-lg"
  />

  {/* Overlay with text */}
  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px] bg-black/30 rounded-b-xl">
    <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide">
      About Us
    </h1>
  </div>
</div>
  
      <div className="flex flex-col xl:flex-row-reverse gap-10 mt-20">
    
        {/* Image Section with enhanced animations - Fixed height and spacing */}
        <div className={`xl:flex-1 relative rounded-2xl overflow-hidden border-gray-100 shadow-2xl transform transition-all duration-1000 ease-out delay-300 hover:shadow-3xl hover:scale-105 animate-float ${
          isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 -rotate-2'
        }`}>
          <div className="relative overflow-hidden rounded-2xl animate-shimmer h-full">
            <img
              src="/abouttt4.svg"
              alt="About"
              className="h-48 sm:h-64 md:h-96 xl:h-full w-full object-cover rounded-2xl transform transition-all duration-700 hover:scale-110 animate-pulse-subtle filter hover:brightness-110"
            />
            {/* Animated overlay for extra visual interest */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#004225]/10 via-transparent to-[#004225]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
       

        {/* Text Content with enhanced staggered animations */}
        <div className={`xl:flex-1 py-2 sm:py-5 md:text-left transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          {/* Enhanced animated heading */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl text-[#004225] font-bold mb-3 -mt-5 sm:mb-4 transition-all duration-800 ease-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            About Us
          </h1>
          
          {/* Enhanced animated paragraphs with staggered delays */}
          <div className="space-y-4">
            <p className={`text-[#94A3B8] text-sm text-justify sm:text-base md:text-md leading-relaxed transition-all duration-800 ease-out delay-900 hover:translate-x-2 hover:text-[#64748B] animate-fade-in-left ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Krishna Plant & Group is a leading name in landscaping design, plant varieties, and horticulture services. With 17 years of expertise, we have successfully delivered over 1280 projects, transforming spaces with sustainable and aesthetically pleasing green solutions.
            </p>
            
            <p className={`text-[#94A3B8] text-sm text-justify sm:text-base md:text-md leading-relaxed transition-all duration-800 ease-out delay-1100 hover:translate-x-2 hover:text-[#64748B] animate-fade-in-left ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Our team is dedicated to creating vibrant landscaping that enhance both residential and commercial environments. Under the leadership of our Managing Director, Saurabh Singh, we continue to innovate and provide high-quality horticulture services, ensuring client satisfaction and environmental harmony.
            </p>
            
            <p className={`text-[#94A3B8] text-sm text-justify sm:text-base md:text-md leading-relaxed transition-all duration-800 ease-out delay-1300 hover:translate-x-2 hover:text-[#64748B] animate-fade-in-left ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              At Krishna Plant & Group, we believe that greenery is not just about aesthetics—it's about fostering a deeper connection with nature. Our journey began with a simple yet powerful vision: to bring the beauty and benefits of plants into every home and workspace.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes ripple {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(20); opacity: 0; }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px rgba(0, 66, 37, 0.3); }
          50% { text-shadow: 0 0 20px rgba(0, 66, 37, 0.6), 0 0 30px rgba(0, 66, 37, 0.4); }
        }
        
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
        
        .animate-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
          pointer-events: none;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
}

export default About;