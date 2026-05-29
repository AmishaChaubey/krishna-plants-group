import { Leaf, MapPin, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-white text-gray-900 py-8 sm:py-12 md:py-16">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <div className=" rounded-full">
              <img src="/logooo.png" alt="Vrinda Logo" className="h-30 xl:h-25  sm:h-15 md:h-20 w-auto"/>
            </div>
          </div>
          <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
            Creating beautiful, sustainable landscapes that bring nature closer to your home.
          </p>
        </div>
        
        {/* Quick Links, Services & Contact Info Side by Side */}
        <div className="col-span-1 sm:col-span-2 md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about" className="hover:text-gray-900 transition-colors text-sm sm:text-base block py-1">About Us</Link></li>
                <li><a href="/services" className="hover:text-gray-900 transition-colors text-sm sm:text-base block py-1">Services</a></li>
                <li><a href="/contact" className="hover:text-gray-900 transition-colors text-sm sm:text-base block py-1">Contact Us</a></li>
                <li><Link to="/blog" className="hover:text-gray-900 transition-colors text-sm sm:text-base block py-1">Blog</Link></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/service/landscape-design" className="hover:text-gray-900 transition-colors text-sm sm:text-base block py-1">Landscaping Design</Link></li>
                <li><a href="/service/experience-superviser-and-maali-services" className="hover:text-gray-900 transition-colors text-sm sm:text-base block py-1">Plant Installation</a></li>
                <li><Link to="/service/garden-maintenance" className="hover:text-gray-900 transition-colors text-sm sm:text-base block py-1">Garden Maintenance</Link></li>
                <li><Link to="/service/international-tree-and-plant-supply" className="hover:text-gray-900 transition-colors text-sm sm:text-base block py-1">International Plant Supply</Link></li>
              </ul>
            </div>
            
            {/* Contact Info */}   
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base leading-relaxed text-justify">UGA 39, Galaxy Diamond Plaza, Haibatpur, Sector 4, Greater Noida, Uttar Pradesh 201009</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <a href="tel:+917310884215" className="text-sm sm:text-base hover:text-gray-900 transition-colors">+91 7310884215 , +91 9528114927</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <a href="mailto:krishnaplanthouse@gmail.com " className="text-sm sm:text-base hover:text-gray-900 transition-colors break-all tracking-tighter">krishnaplanthouse@gmail.com </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-600">
        <p className="text-sm sm:text-base">&copy; 2025 Debox Technology. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer