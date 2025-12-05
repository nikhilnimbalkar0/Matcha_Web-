import React from "react";
import { motion } from "framer-motion";

// Product icons/images
const products = [
  { id: 1, img: "classic2.jpg", alt: "Classic Matcha" },
  { id: 2, img: "m.jpg", alt: "Vanilla Matcha Latte" },
  { id: 3, img: "m2.jpg", alt: "Chocolate Matcha" },
  { id: 4, img: "m3.jpg", alt: "Strawberry Matcha" },
  { id: 5, img: "m4.jpg", alt: "Mint Matcha Latte" },
  { id: 6, img: "mmm.jpg", alt: "Coconut Matcha Latte" },
];

// Floating motion with smaller up-down movement
const randomMotion = () => {
  const shiftX = Math.floor(Math.random() * 30 - 15);
  const shiftY = Math.floor(Math.random() * 50 - 25);
  const rotate = Math.floor(Math.random() * 12 - 6);

  return {
    x: [0, shiftX, 0, -shiftX, 0],
    y: [0, shiftY, 0, -shiftY, 0],
    rotate: [0, rotate, -rotate, 0],
  };
};

export default function FloatingIcons() {
  return (
    <div className="relative w-full bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center justify-center overflow-hidden py-6">
      
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-400 mb-8">
        Our Matcha Flavors
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative flex items-center justify-center"
            animate={randomMotion()}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          >
            {/* Fully rounded card */}
            <motion.img
              src={product.img}
              alt={product.alt}
              className="w-44 h-44 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg bg-white/60 backdrop-blur-md p-2 border border-white/40"
              whileHover={{
                scale: 1.1,
                rotate: 3,
                boxShadow: "0px 12px 35px rgba(0,0,0,0.25)",
              }}
            />

            {/* Label badge */}
            <span className="absolute bottom-2 text-sm font-semibold text-emerald-800 bg-white/80 px-3 py-1 rounded-full shadow">
              {product.alt}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
