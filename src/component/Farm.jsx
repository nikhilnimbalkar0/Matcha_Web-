import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FarmSection() {
  // Scroll-based animation (parallax effect)
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.img
        src="https://www.shutterstock.com/image-photo/lush-rice-paddy-field-neat-260nw-2499404003.jpg"
        alt="Matcha Farm in Shizuoka, Japan"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y }}
      />

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Animated Text Section */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          className="text-white text-3xl md:text-6xl font-extrabold drop-shadow-lg"
          whileHover={{ scale: 1.05, textShadow: "0px 0px 20px #ffffff" }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Our Farm in Shizuoka, Japan
        </motion.h2>

        <motion.p
          className="mt-4 text-white/90 text-lg md:text-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Discover where our premium Matcha is grown 🌱 — nurtured by nature,
          tradition, and care.
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href="#products"
          className="mt-8 inline-block px-6 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Matcha
        </motion.a>
      </motion.div>
    </section>
  );
}
