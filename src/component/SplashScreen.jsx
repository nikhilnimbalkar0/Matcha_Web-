import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamic taglines
const taglines = [
  "Experience the Taste of Matcha 🍵",
  "Refreshing • Natural • Premium",
  "Made for You ✨",
];

export default function SplashScreen() {
  const [index, setIndex] = useState(0);

  // Cycle through taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 w-full h-full z-50 overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 5, ease: "easeInOut" }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="motion.mp4" type="video/mp4" />
      </video>

      {/* Fallback image */}
      <img
        src="/matchD.jpg"
        alt="Splash Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-white/50 absolute"
              initial={{ y: -10, x: Math.random() * 100 + "%" }}
              animate={{
                y: ["-10%", "110%"],
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Main Title */}
        <motion.h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Welcome
        </motion.h1>

        {/* Dynamic tagline */}
        <div className="h-10 mt-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              className="text-white text-lg md:text-2xl font-light tracking-wide drop-shadow-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {taglines[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Glow underline */}
        <motion.div
          className="mt-6 w-36 h-1 rounded-full bg-gradient-to-r from-green-300 via-green-500 to-green-400 shadow-lg"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </motion.div>
  );
}
