"use client"; 

import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Aanvraag from "./Components/Aanvraag";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default function Home() {
  const { scrollY, scrollYProgress } = useViewportScroll();

  // Opacity and scale animation
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Slide-up animation
  const slideUp = useTransform(scrollYProgress, [0, 0.5], ["20%", "0%"]);



  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {/* Hero Section */}
      <motion.div
        style={{ opacity, scale }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <Hero />
      </motion.div>

      {/* Aanvraag Section */}
      <motion.div
        style={{ opacity, y: slideUp }}
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
      >
        <Aanvraag />
      </motion.div>

      {/* About Section */}
      <About />

      {/* Footer Section */}
      <Footer />

      {/* Custom scrollbar */}
     
    </div>
  );
}
