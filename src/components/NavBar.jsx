"use client";

import { useState, useEffect } from "react";
import { Search, User, ShoppingCart, Menu, X, Leaf, ChevronDown } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Direct jump, no smooth scrolling
  }, [pathname]);

  return null;
}
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPlantsOpen, setIsPlantsOpen] = useState(false);
  const [isPAPOpen, setIsPAPOpen] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState(null);
  const [plantsTimeout, setPlantsTimeout] = useState(null);
  const [papTimeout, setPapTimeout] = useState(null);

  const navigate = useNavigate();

  const services = [
    "Landscaping Design",
    "Vertical Gardens",
    "Hard Landscaping",
    "Terrace And Balcony Garden",
    "PVT horticulture Project",
    "Goverment Horticulture Tender:Indian Oil Porjects",
    "Garden Maintenance",
    "Experience Superviser & Maali Service",
    "Hydroponic Plants and Services",
    "Timber Plants Supply",
    "Landscaping Plant and Grass Supply",
    "Bonsai Tree Install and supply",
    "International trees and Plants supply",
    "Artificial Vertical Garden and grass",
 
  ];

  const plants = [
    "Bonsai plants",
    "Timber Plants",
    "Indoor Plants",
    "Outdoors Plants",
    "Vertical Plants",
    "Creeper Plants",
    "Wallside Cover Plants"
  ];

  // const PAP = [
  //   "Fiber Pots",
  //   "Ceramic Pots",
  //   "Flanging Planters",
  //   "Metal Planters",
  //   "Plastic Pots",
  //   "Plants Stands",
  //   "Wooden planters"
  // ];

  const handleServiceClick = (service) => {
    console.log(`Clicked on: ${service}`);
    
      window.scrollTo(0, 0);
    // Navigate to landscape page if Landscape Vertical Design is clicked
    if (service === "Landscaping Design" ) {
      navigate('/service/landscape-design');
    }
    // Add more service navigation here as needed
    else if (service === "Terrace And Balcony Garden") {
      navigate('/service/terrace-and-balcony-garden');
    }
     else if (service === "Vertical Gardens") {
      navigate('/service/vertical-gardens');
    }

     else if (service === "Hydroponic Plants and Services") {
      navigate('/service/hydroponic-plants-and-services');
    }

    else if (service === "Artificial Vertical Garden and grass") {
      navigate('/service/artifical-vertical-garden-and-grass');
    }

    else if (service === "Garden Pergola") {
      navigate('/service/Pergola');
    }

     else if (service === "Garden Maintenance") {
      navigate('/service/garden-maintenance');
    }

     else if (service === "Hard Landscaping") {
      navigate('/service/hard-landScaping');
    }

     else if (service === "PVT horticulture Project") {
      navigate('/service/pvt-horticulture-project');
    }

    else if (service === "Goverment Horticulture Tender:Indian Oil Porjects") {
      navigate('/service/goverment-horticulture-tender');
    }
     else if (service === "Experience Superviser & Maali Service") {
      navigate('/service/experience-superviser-and-maali-services');
    }
     else if (service === "Timber Plants Supply") {
      navigate('/service/timber-plants-supply');
    }
     else if (service === "Landscaping Plant and Grass Supply") {
      navigate('/service/landscape-plant-supply-and-grass-supply');
    }
     else if (service === "Bonsai Tree Install and supply") {
      navigate('/service/bonsai-tree-install-and-supply');
    }
     else if (service === "International trees and Plants supply") {
      navigate('/service/international-tree-and-plant-supply');
    }
    setIsServicesOpen(false);
    setIsMenuOpen(false); // Close mobile menu
  };

  const handlePlantsClick = (plant) => {
    console.log(`Clicked on: ${plant}`);
      window.scrollTo(0, 0);

    if (plant === "Bonsai plants" ) {
      navigate('/plants/bonsai-plants');
    }
    else if (plant === "Indoor Plants") {
      navigate('/plants/indoor-plants');
    }

    else if (plant === "Timber Plants") {
      navigate('/plants/timber-plants');
    }

     else if (plant === "Outdoors Plants") {
      navigate('/plants/outdoor-plants');
    }

    else if (plant === "Vertical Plants") {
      navigate('/plants/vertical-plants');
    }

    else if (plant === "Wallside Cover Plants") {
      navigate('/plants/wallside-plants');
    }

      else if (plant === "Creeper Plants") {
      navigate('/plants/creeper-plants');
    }


    setIsPlantsOpen(false);
    setIsMenuOpen(false); // Close mobile menu
  };

  // const handlePAPClick = (pap) => {
  //   console.log(`Clicked on: ${pap}`);
  //     window.scrollTo(0, 0);
  //   if (pap === "Fiber Pots" ) {
  //     navigate('/pots-and-planters/fiber-pots');
  //   }
  //   else if (pap === "Ceramic Pots") {
  //     navigate('/pots-and-planters/ceramic-pots');
  //   }

  //   else if (pap === "Flanging Planters") {
  //     navigate('/pots-and-planters/flanging-pots');
  //   }

  //    else if (pap === "Metal Planters") {
  //     navigate('/pots-and-planters/metal-planters');
  //   }

  //    else if (pap === "Plastic Pots") {
  //     navigate('/pots-and-planters/plastic-pots');
  //   }

  //    else if (pap === "Plants Stands") {
  //     navigate('/pots-and-planters/plant-stand');
  //   }

  //    else if (pap === "Wooden planters") {
  //     navigate('/pots-and-planters/wooden-planters');
  //   }
  //   setIsPAPOpen(false);
  
  //   setIsMenuOpen(false); // Close mobile menu
  // };

  // Services mouse handlers
  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
    setServicesTimeout(timeout);
  };

  // Plants mouse handlers
  const handlePlantsMouseEnter = () => {
    if (plantsTimeout) {
      clearTimeout(plantsTimeout);
      setPlantsTimeout(null);
    }
    setIsPlantsOpen(true);
  };

  const handlePlantsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsPlantsOpen(false);
    }, 100);
    setPlantsTimeout(timeout);
  };

  // PAP mouse handlers
  // const handlePAPMouseEnter = () => {
  //   if (papTimeout) {
  //     clearTimeout(papTimeout);
  //     setPapTimeout(null);
  //   }
  //   setIsPAPOpen(true);
  // };

  // const handlePAPMouseLeave = () => {
  //   const timeout = setTimeout(() => {
  //     setIsPAPOpen(false);
  //   }, 100);
  //   setPapTimeout(timeout);
  // };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="p-1.5 sm:p-2 rounded-full">
              <Link to="/">
              <img src="/logooo.png" alt="" className="xl:h-15 md:h-15 h-15 sm:h-10 w-auto"/>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on smaller screens, visible from large screens up */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {["Home"].map((item, i) => (
              <Link to="/"
                key={i}
                className={`${
                  item === "Home" ? "text-[#004225]" : "text-gray-700"
                } hover:text-[#004225] transition-colors font-medium text-sm xl:text-base whitespace-nowrap`}
              >
                {item}
              </Link>
            ))}
            
            {["About"].map((item, i) => (
              <Link 
                to="/about"
                key={i}
                className="text-gray-700 hover:text-[#004225] transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {item}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#004225] transition-colors font-medium text-sm xl:text-base whitespace-nowrap">
                <span>Services</span>
                <ChevronDown className={`h-3 w-3 xl:h-4 xl:w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 xl:w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95 duration-200 max-h-80 overflow-y-auto"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  {services.map((service, i) => (
                    <button
                      key={i}
                      onClick={() => handleServiceClick(service)}
                      className="w-full text-left block px-4 py-2 text-gray-700 hover:text-[#004225] hover:bg-[#004225]/5 transition-colors text-xs xl:text-sm cursor-pointer border-none bg-transparent leading-tight"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {["Govt. Horti. Tender"].map((item, i) => (
              <Link 
                to="/goverment-horticulture-tender"
                key={i}
                className="text-gray-700 hover:text-[#004225] transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {item}
              </Link>
            ))}

            {/* Plants Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handlePlantsMouseEnter}
              onMouseLeave={handlePlantsMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#004225] transition-colors font-medium text-sm xl:text-base whitespace-nowrap">
                <span>Plants</span>
                <ChevronDown className={`h-3 w-3 xl:h-4 xl:w-4 transition-transform ${isPlantsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPlantsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 xl:w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={handlePlantsMouseEnter}
                  onMouseLeave={handlePlantsMouseLeave}
                >
                  {plants.map((plant, i) => (
                    <button
                      key={i}
                      onClick={() => handlePlantsClick(plant)}
                      className="w-full text-left block px-4 py-2 text-gray-700 hover:text-[#004225] hover:bg-[#004225]/5 transition-colors text-xs xl:text-sm cursor-pointer border-none bg-transparent"
                    >
                      {plant}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Pots and Planters Dropdown */}
            {/* <div 
              className="relative"
              onMouseEnter={handlePAPMouseEnter}
              onMouseLeave={handlePAPMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#004225] transition-colors font-medium text-sm xl:text-base whitespace-nowrap">
                <span>Pots And Planters</span>
                <ChevronDown className={`h-3 w-3 xl:h-4 xl:w-4 transition-transform ${isPAPOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPAPOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 xl:w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={handlePAPMouseEnter}
                  onMouseLeave={handlePAPMouseLeave}
                >
                  {PAP.map((pap, i) => (
                    <button
                      key={i}
                      onClick={() => handlePAPClick(pap)}
                      className="w-full text-left block px-4 py-2 text-gray-700 hover:text-[#004225] hover:bg-[#004225]/5 transition-colors text-xs xl:text-sm cursor-pointer border-none bg-transparent"
                    >
                      {pap}
                    </button>
                  ))}
                </div>
              )}
            </div> */}

            {["Gallery"].map((item, i) => (
              <Link to="/gallery"
                key={i}
                className="text-gray-700 hover:text-[#004225] transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {item}
              </Link>
            ))}

            {["Contact"].map((item, i) => (
              <Link
                to="/contact"
                key={i}
                className="text-gray-700 hover:text-[#004225] transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 rounded-full text-[#004225] hover:bg-[#004225]/10 transition"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top-2 duration-300 max-h-screen overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/"
              className="block py-3 text-[#004225] font-medium hover:text-[#004225] transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="block py-3 text-gray-700 hover:text-[#004225] transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Services */}
            <div className="border-b border-gray-100">
              <button 
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-[#004225] transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span className="font-medium">Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pb-3 space-y-1 animate-in slide-in-from-top-1 duration-200">
                  <div className="max-h-60 overflow-y-auto">
                    {services.map((service, i) => (
                      <button
                        key={i}
                        onClick={() => handleServiceClick(service)}
                        className="w-full text-left block pl-4 py-2 text-sm text-gray-600 hover:text-[#004225] hover:bg-[#004225]/5 transition-colors cursor-pointer rounded-md mx-2"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/goverment-horticulture-tender"
              className="block py-3 text-gray-700 hover:text-[#004225] transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Govt. Horti. Tender
            </Link>

            {/* Mobile Plants */}
            <div className="border-b border-gray-100">
              <button 
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-[#004225] transition-colors"
                onClick={() => setIsPlantsOpen(!isPlantsOpen)}
              >
                <span className="font-medium">Plants</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isPlantsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPlantsOpen && (
                <div className="pb-3 space-y-1 animate-in slide-in-from-top-1 duration-200">
                  {plants.map((plant, i) => (
                    <button
                      key={i}
                      onClick={() => handlePlantsClick(plant)}
                      className="w-full text-left block pl-4 py-2 text-sm text-gray-600 hover:text-[#004225] hover:bg-[#004225]/5 transition-colors cursor-pointer rounded-md mx-2"
                    >
                      {plant}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Pots & Planters */}
            <div className="border-b border-gray-100">
              <button 
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-[#004225] transition-colors"
                onClick={() => setIsPAPOpen(!isPAPOpen)}
              >
                <span className="font-medium">Pots & Planters</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isPAPOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPAPOpen && (
                <div className="pb-3 space-y-1 animate-in slide-in-from-top-1 duration-200">
                  {PAP.map((pap, i) => (
                    <button
                      key={i}
                      onClick={() => handlePAPClick(pap)}
                      className="w-full text-left block pl-4 py-2 text-sm text-gray-600 hover:text-[#004225] hover:bg-[#004225]/5 transition-colors cursor-pointer rounded-md mx-2"
                    >
                      {pap}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className="block py-3 text-gray-700 hover:text-[#004225] transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="block py-3 text-gray-700 hover:text-[#004225] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
export { ScrollToTop };