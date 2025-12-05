import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Daniela", text: "Best matcha ever!", rating: 5 },
  { name: "Tina", text: "Super delicious, no sugar spike.", rating: 5 },
  { name: "Alex", text: "I feel energized every morning!", rating: 4 },
  { name: "Maya", text: "Creamy and smooth, highly recommend.", rating: 5 },
  { name: "John", text: "Perfect balance of taste and caffeine.", rating: 4 },
];

export default function Testimonials() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="reviews"
      className="py-20"
      style={{ backgroundColor: "#c0d860" }}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-gray-800">
          What People Say
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-sm mx-auto cursor-pointer transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: hovered === i ? 1 : 0 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              transition={{
                duration: 0.3, // entry animation speed
                delay: i * 0.1,
                type: "spring",
                stiffness: 200, // makes hover snappier
                damping: 15,    // controls bounce
              }}
            >
              <div className="flex justify-center mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span
                    key={idx}
                    className="text-yellow-400 text-xl"
                    style={{
                      background: "linear-gradient(45deg, #FFD700, #FFA500)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-800 mb-4 text-lg italic">"{t.text}"</p>
              <div className="font-semibold text-gray-900 mt-2">{t.name}</div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-gray-700 italic text-sm">
          Swipe left/right to see more testimonials
        </p>
      </div>
    </section>
  );
}
