"use client"; 

import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Aanvraag from "./Components/Aanvraag";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default function Home() {

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
  
        <Hero />
   
      {/* Aanvraag Section */}
  
   
        <Aanvraag />


      {/* About Section */}
      <About />

      {/* Footer Section */}
      <Footer />

      {/* Custom scrollbar */}
     
    </div>
  );
}
