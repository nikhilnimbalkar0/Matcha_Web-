import React, { useState, useEffect } from "react";
import SplashScreen from "../component/SplashScreen"; // Import path

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <div>
      {/* Your landing page content */}
      
    </div>
  );
}
