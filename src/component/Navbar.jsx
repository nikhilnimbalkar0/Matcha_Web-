import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction and amount
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`w-full px-6 md:px-12 py-4 flex justify-between items-center fixed top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-white/0"
          }`}
        >
          {/* Logo with scale effect */}
          <motion.div
            className="text-2xl font-bold text-primary cursor-pointer"
            animate={{ scale: scrolled ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            MoreNutrition
          </motion.div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
            <li>
              <a
                href="#benefits"
                className="hover:text-primary transition-colors duration-200"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="hover:text-primary transition-colors duration-200"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#shop"
                className="hover:text-primary transition-colors duration-200"
              >
                Shop
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-1 w-6 bg-gray-700 mb-1 rounded transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-gray-700 mb-1 rounded transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-gray-700 rounded transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center py-6 space-y-4 md:hidden z-40"
              >
                <li>
                  <a
                    href="#benefits"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-primary text-lg font-medium transition-colors duration-200"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-primary text-lg font-medium transition-colors duration-200"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#shop"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-primary text-lg font-medium transition-colors duration-200"
                  >
                    Shop
                  </a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
