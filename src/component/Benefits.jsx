import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";

const features = [
  { title: "More Taste", desc: "Finest matcha, creamy and smooth.", icon: "more.jpg" },
  { title: "More Caffeine", desc: "85mg of caffeine per serving.", icon: "more2.jpg" },
  { title: "More Weight Loss", desc: "With glucomannan for fullness.", icon: "more1.jpg" },
  { title: "No Added Sugar", desc: "95% less sugar than other lattes.", icon: "more3.jpg" },
  { title: "Boost Energy", desc: "Start your day right with energy.", icon: "more4.jpg" },
  { title: "Rich Antioxidants", desc: "Protects cells from damage.", icon: "more5.jpg" },
];

export default function BenefitsCarousel() {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth / 2;
      setWidth(totalWidth);
    }
  }, []);

  const startAnimation = (fromVelocity = 0, speed = 1) => {
    if (!width) return;
    if (animation) animation.stop();

    const duration = 30 / speed;
    const anim = animate(x, -width, {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      velocity: fromVelocity,
    });

    setAnimation(anim);
  };

  useEffect(() => {
    startAnimation(0, 1.2);
    return () => animation && animation.stop();
  }, [width]);

  // Parallax tilt effect
  const handleMouseMove = (e, ref) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    card.style.transform = `rotateY(${(x - centerX) / 15}deg) rotateX(${
      (centerY - y) / 15
    }deg) scale(1.07)`;
    card.style.boxShadow = `${(x - centerX) / 5}px ${(y - centerY) / 5}px 25px rgba(0,0,0,0.2)`;
  };

  const resetCard = (ref) => {
    const card = ref.current;
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    card.style.boxShadow = "0 15px 25px rgba(0,0,0,0.15)";
  };

  return (
    <section
      id="benefits"
      className="py-28 overflow-hidden relative"
      style={{ background: "linear-gradient(135deg, #789048, #a1b955)" }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-white tracking-wide drop-shadow-lg">
          Why Choose Us
        </h2>

        <motion.div
          ref={containerRef}
          className="flex gap-10 cursor-grab select-none"
          style={{ width: "max-content", x }}
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          dragElastic={0.15}
          dragMomentum={true}
          onDragStart={() => animation && animation.stop()}
          onDragEnd={(e, info) => startAnimation(info.velocity.x / 100, 1.2)}
        >
          {[...features, ...features].map((f, i) => {
            const cardRef = useRef(null);
            return (
              <motion.div
                key={i}
                ref={cardRef}
                className="flex-shrink-0 bg-white p-8 rounded-3xl transition-all duration-300 shadow-xl border border-transparent"
                style={{ width: 280, transformStyle: "preserve-3d" }}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => resetCard(cardRef)}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-md">
                  <img src={f.icon} alt={f.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 uppercase text-center">
                  {f.title}
                </h3>
                <p className="text-gray-700 text-center text-lg">{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Optional: Edge gradients */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#789048] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#789048] to-transparent pointer-events-none"></div>
    </section>
  );
}
