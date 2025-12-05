import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const products = [
  {
    title: "Classic Matcha",
    desc: "Smooth, rich flavor with traditional ceremonial quality.",
    price: "₹2,000",
    img: "classic mactcha.jpg",
  },
  {
    title: "Vanilla Matcha Latte",
    desc: "Creamy and sweet, perfect for mornings.",
    price: "₹2,250",
    img: "Vanilla Matcha.jpg",
  },
  {
    title: "Energy Boost Matcha",
    desc: "High caffeine, perfect for focus and energy.",
    price: "₹2,500",
    img: "matcha11.jpg",
  },
  {
    title: "Organic Matcha Powder",
    desc: "Premium organic powder for daily rituals.",
    price: "₹3,000",
    img: "powder.jpg",
  },
  // New extra cards
  {
    title: "Matcha Latte Mix",
    desc: "Easy-to-make latte mix with authentic matcha taste.",
    price: "₹2,200",
    img: "mix.jpg",
  },
  {
    title: "Ceremonial Grade Matcha",
    desc: "Top-tier matcha for authentic tea ceremonies.",
    price: "₹3,500",
    img: "mix2.jpg",
  },
  {
    title: "Matcha Energy Bites",
    desc: "Healthy snack infused with matcha and nuts.",
    price: "₹1,800",
    img: "bites.jpg",
  },
  {
    title: "Matcha Beauty Mask",
    desc: "Rejuvenate your skin with natural matcha extracts.",
    price: "₹1,500",
    img: "mask.jpg",
  },
];

export default function ProductCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-900 mb-12">
          Our Matcha Products
        </h2>

        {/* Carousel Arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-900 text-white p-3 rounded-full shadow-lg hover:bg-green-700 z-10"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-900 text-white p-3 rounded-full shadow-lg hover:bg-green-700 z-10"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto py-4 px-2 scroll-smooth scrollbar-none"
          style={{
            scrollbarWidth: "none", // Firefox
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] md:min-w-[300px] bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 hover:shadow-emerald-400/40"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-40 h-40 mb-4 overflow-hidden rounded-full shadow-lg">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">
                {product.title}
              </h3>
              <p className="text-green-700 text-sm md:text-md mb-3">
                {product.desc}
              </p>
              <span className="text-xl md:text-2xl font-extrabold text-green-900 mb-4">
                {product.price}
              </span>
              <button className="mt-auto bg-green-900 text-white px-6 py-2 rounded-full hover:bg-green-700 font-semibold transition-colors">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
