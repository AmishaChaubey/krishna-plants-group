import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import PlantStore from "../components/PlantStore";
import PlantShowcase from "../components/PlantShowcase";
import TestimonialsSection from "../components/TestimonialsSection ";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PlantStore/>
      <PlantShowcase/>
      <TestimonialsSection/>
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;