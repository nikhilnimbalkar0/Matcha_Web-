import { useState } from 'react'
import { motion } from "framer-motion";
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Benefits from './component/Benefits';
import Testimonials from './component/Testimonials';
import ShopCTA from './component/ShopCTA';
import Footer from './component/Footer';
import Productvideo from './component/Productvideo';
import LandingPage from "./pages/LandingPage";
import Shopme from './component/Shopme';
import Product2 from './component/Product2';
import Bounce from './component/Bounce';
import FarmSection from './component/Farm';
function App() {

  return (
    <>
      <LandingPage />
      <Navbar/>
      <Hero/>
      <FarmSection/>
      <Benefits/>
      <Productvideo/>
      <Product2/>
      <Bounce/>
      <Shopme/>
      <Testimonials/>
      <ShopCTA/>
      <Footer/>
    </>
  )
}

export default App
