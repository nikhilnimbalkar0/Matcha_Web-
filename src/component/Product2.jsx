import React, { useRef, useState, useEffect } from "react";

// --- Icons ---
const CheckIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function App() {
  const sectionRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = (e.clientX - centerX) / (rect.width / 2);
      const offsetY = (e.clientY - centerY) / (rect.height / 2);

      setMouseOffset({ x: offsetX, y: offsetY });
    };

    const handleMouseLeave = () => setMouseOffset({ x: 0, y: 0 });

    const current = sectionRef.current;
    if (current) {
      current.addEventListener("mousemove", handleMouseMove);
      current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (current) {
        current.removeEventListener("mousemove", handleMouseMove);
        current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const videoTranslate = 15;
  const textTranslate = 8;
  const videoRotate = 10;
  const textRotate = 5;
  const videoScale = 1.05;

  const glowX = mouseOffset.x * 20;
  const glowY = mouseOffset.y * 20;
  const glowOpacity = 0.3 + Math.min(Math.abs(mouseOffset.x), Math.abs(mouseOffset.y)) * 0.4;

  return (
    <div
      ref={sectionRef}
      className="font-['Inter'] min-h-screen bg-green-50/70 p-4 sm:p-8 lg:p-16 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32 bg-white p-6 lg:p-16 rounded-3xl shadow-2xl">

        {/* --- Left Column: Text --- */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center text-gray-800 text-center lg:text-left transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(${-mouseOffset.x * textTranslate}px, ${-mouseOffset.y * textTranslate}px, 0) rotateY(${-mouseOffset.x * textRotate}deg) rotateX(${mouseOffset.y * textRotate}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-green-800">
            Discover Our Refreshing New Supergreen Drink
          </h1>
          <p className="text-lg sm:text-xl font-medium mb-8 text-green-700">
            A perfect blend of natural superfoods, antioxidants, and vitamins designed to energize your day, boost immunity, and taste amazing. Every sip brings health and vitality in one delicious drink.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
            <button className="flex items-center gap-2 px-8 py-3 bg-green-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105">
              <CheckIcon className="w-5 h-5" />
              Try Now
            </button>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-600">
                1K Early Reviews
              </span>
            </div>
          </div>
        </div>

        {/* --- Right Column: Video --- */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          <div
            className="absolute w-full h-full max-w-lg rounded-2xl pointer-events-none"
            style={{
              boxShadow: `${glowX}px ${glowY}px 60px rgba(72, 187, 120, ${glowOpacity})`,
              borderRadius: "20px",
              transition: "box-shadow 0.2s ease-out",
            }}
          />
          <div
            className="relative w-full h-full max-w-lg rounded-2xl overflow-hidden transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${mouseOffset.x * videoTranslate}px, ${mouseOffset.y * videoTranslate}px, 0) rotateY(${mouseOffset.x * videoRotate}deg) rotateX(${-mouseOffset.y * videoRotate}deg) scale(${1 + Math.min(Math.abs(mouseOffset.x), Math.abs(mouseOffset.y)) * (videoScale - 1)})`,
              boxShadow: `${mouseOffset.x * 5}px ${mouseOffset.y * 5}px 30px rgba(0,0,0,0.25)`,
              transformStyle: "preserve-3d",
            }}
          >
            <video
              src="new.mp4" // <-- Replace with your new drink video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Refreshing Supergreen Drink
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
