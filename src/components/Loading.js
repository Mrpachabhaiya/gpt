"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isComplete) {
      // Animate out
      gsap.to(".loading-container", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isComplete]);

  if (isComplete) return null;

  return (
    <div className="loading-container fixed inset-0 z-50 bg-[#0a0a14] flex flex-col items-center justify-center">
      <div className="relative w-48 h-48 mb-8">
        {/* Animated Orb */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-70 animate-pulse"></div>
        <div className="absolute inset-4 rounded-full bg-[#0a0a14]"></div>
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 animate-ping"></div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">ChatWithMe</h2>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-white/60 mt-4">{Math.min(progress, 100)}%</p>
    </div>
  );
}
