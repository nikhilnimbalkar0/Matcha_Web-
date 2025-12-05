import React from "react";
import { motion } from "framer-motion";

export default function ShopCTA() {
  // Floating leaves positions and animation variants
  const leaves = [
    { src: "leaf.png", x: -100, y: -50, size: 40, delay: 0 },
    { src: "leaf2.png", x: 120, y: -80, size: 30, delay: 1 },
    { src: "leaf3.png", x: -80, y: 70, size: 35, delay: 2 },
    { src: "leaf4.png", x: 100, y: 100, size: 25, delay: 0.5 },
  ];

  return (
    <section
      id="shop"
      className="relative py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center rounded-xl shadow-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f8e8, #d0f0c0)",
        color: "#1a1a1a",
      }}
    >
      {/* Floating Leaves */}
      {leaves.map((leaf, index) => (
        <motion.img
          key={index}
          src={leaf.src}
          alt="leaf"
          className="absolute"
          style={{
            width: leaf.size,
            height: leaf.size,
            top: "50%",
            left: "50%",
            x: leaf.x,
            y: leaf.y,
          }}
          animate={{
            y: [leaf.y, leaf.y - 20, leaf.y],
            x: [leaf.x, leaf.x + 15, leaf.x],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-serif mb-4 font-bold relative inline-block"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Try It Today
        <span className="absolute left-0 bottom-0 w-full h-1 bg-green-500 rounded-full animate-pulse"></span>
      </motion.h2>

      {/* Animated Subtitle */}
      <motion.p
        className="mb-10 text-lg md:text-xl max-w-xl drop-shadow-sm"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Experience the perfect blend of protein and flavor with our Iced Matcha Latte.
      </motion.p>

      {/* Animated Button */}
      <motion.a
        href="#"
        className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-10 py-4 rounded-full shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 5 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Buy Now
      </motion.a>
    </section>
  );
}
