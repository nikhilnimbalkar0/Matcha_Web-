import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#604848] text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">More Nutrition</h2>
          <p className="mt-2 text-gray-300 text-sm">
            Premium matcha latte for energy, focus, and balance.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#shop" className="hover:text-yellow-400 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-yellow-400 transition-colors">
                Reviews
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe for special offers and health tips!
          </p>
          <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg w-full text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg w-full sm:w-auto
                        transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-500"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-black transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-black transition-all duration-300"
              aria-label="TikTok"
            >
              <FaTiktok className="text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-black transition-all duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2025 More Nutrition. All Rights Reserved.
      </div>
    </footer>
  );
}
