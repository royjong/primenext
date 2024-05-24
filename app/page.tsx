import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default function Home() {
  return ( 
    <div>
      <Navbar /> 
      <Hero /> 
      <About /> 
      <Footer /> 
    </div>
  );
}
