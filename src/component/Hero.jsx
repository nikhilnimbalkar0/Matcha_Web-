import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const mediaSrc = "/product3.mp4"; // place in public/
  const isVideo = mediaSrc.endsWith(".mp4") || mediaSrc.endsWith(".webm");

  // Animation variants for staggered text
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  // Generate random particles
  const particles = Array.from({ length: 16 });

  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden bg-gradient-to-r from-[#607848] to-[#405030]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center relative z-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            custom={0}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-serif mb-6 drop-shadow-lg text-white"
          >
            Matcha meets Protein
          </motion.h1>

          <motion.p
            custom={1}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="text-lg mb-8 text-[#e0f7f7]"
          >
            A refreshing iced matcha latte with protein & glucomannan.
          </motion.p>

          <motion.a
            custom={2}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            href="#shop"
            className="inline-block px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#ffffff", color: "#607848" }}
          >
            Buy Now
          </motion.a>
        </div>

        {/* Media Section */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          {isVideo ? (
            <motion.div
              className="w-full h-[400px] md:h-[500px] flex justify-center items-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <video
                src={mediaSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg shadow-lg md:rotate-2"
              />
            </motion.div>
          ) : (
            <motion.img
              src={mediaSrc}
              alt="Hero Product"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg md:rotate-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            />
          )}
        </div>
      </div>

      {/* Floating Decorative Leaves */}
      <motion.img
        src="leaf1.png"
        alt="leaf decoration"
        className="absolute top-10 left-5 w-14 opacity-70"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.imgss
        src="leaf.2png"
        alt="leaf decoration"
        className="absolute bottom-10 right-10 w-16 opacity-60"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Floating Matcha Powder Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 10 + 6, // 6–16px
            height: Math.random() * 10 + 6,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: "rgba(180, 255, 180, 0.25)", // light green glow
            boxShadow: "0 0 12px rgba(180, 255, 180, 0.6)",
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 5, // 5–11s
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}
