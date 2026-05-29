import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your Home component
import AnnouncementBar from './components/AnnouncementBar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PlantStore from './components/PlantStore';
import PlantShowcase from './components/PlantShowcase';
import Testimonal from './components/TestimonialsSection ';
import CTA from './components/CTASection';
import Footer from './components/Footer';
import About from './aboutus/About';
import NavBar from "./components/NavBar";
import OurMission from './aboutus/OurMission';
import Choose from './aboutus/Choose';
import Contact from './contacts/Contact';
import Location from './contacts/Locatio';
import LandScape from './services/landscape/landscape';
import Terrace from './services/terrace/terracee';
import Vertical from './services/vertical/vertical';
import HydroPonic from './services/hydroponic/hydroponic';
import Artifical from './services/artifical/artifical';
import Maintenance from './services/maintenance/maintenance';
import Explorepage from './services/servicepage/explore';
import HardLandScaping from './services/hardlandscaping/hardlandscaping';
import HortiCulture from './services/horticulture/horticulture';
import Tender from './services/horticulture_tender/tender';
import Maali from './services/supervisor&maali/maali';
import Timber from './services/timber/timber';
import LandScapePlantSupply from './services/landscapingplant&grass/plant&grass';
import InternationalPlantSupply from './services/internationaltreesupply/treesupply';
import Bonsai from './services/bonsi/bonsi';
import Component from './aboutus/Component';
import Bonsi from './plants/bonsai/bonsai';
import Indoor from './plants/indoor/indoor';
import Timberr from './plants/timber/timber';
import Outdoor from './plants/outdoors/outdoors';
import Verticall from './plants/vertical/vertical';
import Wallside from './plants/wallside/wallside';
import Ceramic from './pots&planters/ceramic/ceramic';
import Fiber from './pots&planters/fiber/fiber';
import Flanging from './pots&planters/flanging/flanging';
import Metal from './pots&planters/metal/metal';
import PlantStand from './pots&planters/plantsstand/plantstand';
import Pots from './pots&planters/pots/pots';
import Wooden from './pots&planters/wooden/wooden';
import BrandsTrustSection from './aboutus/Brands';
import Gallery from './gallery/Gallery';
import GovermentTender from './tender/GovermentTender';
import Creeper from './plants/creeper/creeper';
import Circle from './components/icon';
import TeamSection from "./aboutus/TeamSection";
import Blogs from './blog/Blog.jsx';
import BlogPost from './blog/Blogdetails.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <AnnouncementBar/>
            <NavBar/>
            <HeroSection/>     
            <ServicesSection/>
            <PlantStore/>
            <PlantShowcase/>
            <Testimonal/>
            <BrandsTrustSection/>
          
            <Footer/>
          </div>
        } />
        <Route path="/about" element={
          <div>
            <NavBar/>
             <About />
             <OurMission />
             <BrandsTrustSection />
             <Choose/>
            <Component/>
            <TeamSection/>
            
             <Footer/>
          </div>
         }
         />
          <Route path="/contact" element={
          <div>
            <NavBar/>
            <Location/>
            <Contact/>
             
            <Footer/>
         
          </div>
         }
         />
         <Route path="/service/landscape-design" element={
          <div>
            <NavBar/>
            <LandScape/>
            <Footer/>
          </div>
         }
        />
        <Route path="/service/terrace-and-balcony-garden" element={
          <div>
            <NavBar/>
            <Terrace/>
            <Footer/>
          </div>
         }
        />

         <Route path="/service/vertical-gardens" element={
          <div>
            <NavBar/>
            <Vertical/>
            <Footer/>
          </div>
         }
        />

        <Route path="/service/hydroponic-plants-and-services" element={
          <div>
            <NavBar/>
            <HydroPonic/>
            <Footer/>
          </div>
         }
        />

         <Route path="/service/artifical-vertical-garden-and-grass" element={
          <div>
            <NavBar/>
            <Artifical/>
            <Footer/>
          </div>
         }
        />

        

         <Route path="/service/garden-maintenance" element={
          <div>
            <NavBar/>
            <Maintenance/>
            <Footer/>
          </div>
         }
        />

         <Route path="/services" element={
          <div>
            <NavBar/>
            <Explorepage/>
            <Footer/>
          </div>
         }
        />

        <Route path="/service/hard-landScaping" element={
          <div>
            <NavBar/>
            <HardLandScaping/>
            <Footer/>
          </div>
         }
        />
        <Route path="/service/pvt-horticulture-project" element={
          <div>
            <NavBar/>
            <HortiCulture/>
            <Footer/>
          </div>
         }
        />

        <Route path="/service/goverment-horticulture-tender" element={
          <div>
            <NavBar/>
            <Tender/>
            <Footer/>
          </div>
         }
        />

        <Route path="/service/experience-superviser-and-maali-services" element={
          <div>
            <NavBar/>
            <Maali/>
            <Footer/>
          </div>
         }
        />

        <Route path="/service/timber-plants-supply" element={
          <div>
            <NavBar/>
            <Timber/>
            <Footer/>
          </div>
         }
        />
        <Route path="/service/landscape-plant-supply-and-grass-supply" element={
          <div>
            <NavBar/>
            <LandScapePlantSupply/>
            <Footer/>
          </div>
         }
        />
         <Route path="/service/bonsai-tree-install-and-supply" element={
          <div>
            <NavBar/>
            <Bonsai/>
            <Footer/>
          </div>
         }
        />

         <Route path="/service/international-tree-and-plant-supply" element={
          <div>
            <NavBar/>
            <InternationalPlantSupply/>
            <Footer/>
          </div>
         }
        />

        <Route path="/plants/bonsai-plants" element={
          <div>
            <NavBar/>
            <Bonsi/>
            <Footer/>
          </div>
         }
        />

         <Route path="/plants/indoor-plants" element={
          <div>
            <NavBar/>
            <Indoor/>
            <Footer/>
          </div>
         }
        />
           <Route path="/plants/creeper-plants" element={
          <div>
            <NavBar/>
            <Creeper/>
            <Footer/>
          </div>
         }
        />

        <Route path="/plants/timber-plants" element={
          <div>
            <NavBar/>
            <Timberr/>
            <Footer/>
          </div>
         }
        />

         <Route path="/plants/outdoor-plants" element={
          <div>
            <NavBar/>
            <Outdoor/>
            <Footer/>
          </div>
         }
        />

        
         <Route path="/plants/vertical-plants" element={
          <div>
            <NavBar/>
            <Verticall/>
            <Footer/>
          </div>
         }
        />

        <Route path="/plants/wallside-plants" element={
          <div>
            <NavBar/>
            <Wallside/>
            <Footer/>
          </div>
         }
        />

        <Route path="/pots-and-planters/ceramic-pots" element={
          <div>
            <NavBar/>
            <Ceramic/>
            <Footer/>
          </div>
         }
        />
        <Route path="/pots-and-planters/fiber-pots" element={
          <div>
            <NavBar/>
            <Fiber/>
            <Footer/>
          </div>
         }
        /><Route path="/pots-and-planters/flanging-pots" element={
          <div>
            <NavBar/>
            <Flanging/>
            <Footer/>
          </div>
         }
        /><Route path="/pots-and-planters/metal-planters" element={
          <div>
            <NavBar/>
            <Metal/>
            <Footer/>
          </div>
         }
        /><Route path="/pots-and-planters/plant-stand" element={
          <div>
            <NavBar/>
            <PlantStand/>
            <Footer/>
          </div>
         }
        /><Route path="/pots-and-planters/plastic-pots" element={
          <div>
            <NavBar/>
            <Pots/>
            <Footer/>
          </div>
         }
        />

        <Route path="/pots-and-planters/wooden-planters" element={
          <div>
            <NavBar/>
            <Wooden/>
            <Footer/>
          </div>
         }
        />
        
        <Route path="/gallery" element={
          <div>
            <NavBar/>
            <Gallery/>
           
            <Footer/>
          </div>
         }
        />
         <Route path="/goverment-horticulture-tender" element={
          <div>
            <NavBar/>
            <GovermentTender/>
          
            <Footer/>
          </div>
         }
        />
        <Route path="/blog" element={
          <div>
            <NavBar/>
            <Blogs/>
            <Footer/>
          </div>
         }/>

        <Route path="/blog/:id" element={
          <div>
            <NavBar/> 
            <BlogPost/>
            <Footer/>
          </div>
         }/>
      </Routes>
        <Circle/>
    </Router>
  );
}

export default App;