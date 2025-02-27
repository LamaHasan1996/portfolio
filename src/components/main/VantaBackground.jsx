import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min"; // Import Vanta effect
import * as THREE from "three"; // Import Three.js

const VantaBackground = () => {
  const vantaRef = useRef(null); // Create ref for Vanta

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE: THREE,
      color: 0xff3f81, // Dim Blue Dots
      color2: 0x0d47a1, // Dim Blue Lines
      backgroundColor: 0x1e1e1f, // Very Dark Background
      points: 10, // Fewer Points for Minimal Effect
      maxDistance: 20, // Spread out Connections
      spacing: 15,
      showDots: true,
      opacity: 0.5, // Reduced Opacity for a Softer Look
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="vanta-background"></div>;
};

export default VantaBackground;
