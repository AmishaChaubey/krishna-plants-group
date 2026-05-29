"use client"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

const heroImages = [
  "https://i.pinimg.com/1200x/ba/73/74/ba7374b4d7ba21c8054094d7a62de640.jpg",
  "https://i.pinimg.com/736x/75/4b/ca/754bca2bb64fbcc240d4c1ddb0319d33.jpg",
  "https://i.pinimg.com/1200x/f0/c1/11/f0c111c83ac8d26b454880f7abc8630a.jpg",
  "https://i.pinimg.com/1200x/21/e6/c1/21e6c15152bc1b34f0e1804e3e5cd345.jpg",
  "https://i.pinimg.com/736x/c7/2c/41/c72c41d8115028eed85a47445e5cc767.jpg",
  "https://i.pinimg.com/1200x/56/fd/6d/56fd6dfda8085928e66a49087a478b64.jpg"
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleExploreServices = () => {
    console.log("Navigate to: /services/servicepage/explore")
    window.location.href = "/services"
  }

  const handleViewGallery = () => {
    console.log("Navigate to gallery:/gallery")
    window.location.href = "/gallery"
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={image} 
              alt={`Beautiful landscape ${index + 1}`} 
              className="w-full h-full object-cover blur-sm" 
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto w-full">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight opacity-0 animate-fade-in">
            Transform Your Space with{" "}
            <span className="block text-green-300 mt-1 sm:mt-2">Krishna Plant & Group</span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-10 text-gray-200 opacity-0 animate-fade-in-delay px-2 sm:px-0">
            Professional landscaping design and premium plants for your dream garden
          </p>
          <div className="flex flex-col xs:flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center opacity-0 animate-fade-in-delay-2 w-full max-w-lg sm:max-w-none mx-auto">
            <button 
              onClick={handleExploreServices}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 xs:px-7 sm:px-8 md:px-10 py-2.5 xs:py-3 sm:py-3 md:py-4 text-base xs:text-lg sm:text-lg md:text-xl rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg w-full xs:w-full sm:w-auto min-w-0 sm:min-w-48"
            >
              <span className="mr-2">Explore Services</span>
              <ArrowRight className="h-4 w-4 xs:h-5 xs:w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
            </button>
            <button 
              onClick={handleViewGallery}
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-6 xs:px-7 sm:px-8 md:px-10 py-2.5 xs:py-3 sm:py-3 md:py-4 text-base xs:text-lg sm:text-lg md:text-xl rounded-lg bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg w-full xs:w-full sm:w-auto min-w-0 sm:min-w-48"
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.5s forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 1s forwards;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 1.5s forwards;
        }

        /* Extra small screens */
        @media (max-width: 475px) {
          .xs\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
          .xs\:text-lg { font-size: 1.125rem; line-height: 1.75rem; }
          .xs\:px-7 { padding-left: 1.75rem; padding-right: 1.75rem; }
          .xs\:py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          .xs\:h-5 { height: 1.25rem; }
          .xs\:w-5 { width: 1.25rem; }
          .xs\:flex-col { flex-direction: column; }
          .xs\:w-full { width: 100%; }
          .xs\:max-w-sm { max-width: 24rem; }
        }
      `}</style>
    </section>
  )
}

export default HeroSection