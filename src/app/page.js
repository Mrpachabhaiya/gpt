"use client";
import Orb from "./components/Orb";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();
  const headerRef = useRef(null);
  const gradientCardRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const footerSectionRef = useRef(null);
  const orbContainerRef = useRef(null);
  const containerRef = useRef(null);

  // All GSAP animations moved to useGSAP hook
  useGSAP(
    () => {
      // Entrance animations
      const tl = gsap.timeline();

      tl.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          gradientCardRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          orbContainerRef.current,
          {
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.4"
        )
        .from(
          [leftCardRef.current, rightCardRef.current],
          {
            x: (i) => (i === 0 ? -50 : 50),
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          footerSectionRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Navigation exit animations will be handled by handleNavigation
    },
    { scope: containerRef }
  );

  const handleNavigation = (path) => {
    // Use GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => router.push(path),
      });

      tl.to(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      })
        .to(
          gradientCardRef.current,
          {
            y: -50,
            scale: 0.95,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          orbContainerRef.current,
          {
            scale: 0.8,
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          leftCardRef.current,
          {
            x: -100,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          rightCardRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.4"
        )
        .to(
          footerSectionRef.current,
          {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          },
          "-=0.3"
        );
    }, containerRef); // Scope to container

    return () => ctx.revert(); // Cleanup on unmount
  };
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 bg-[#0a0a14] relative overflow-hidden">
      {/* Header */}
      <div ref={headerRef} className="text-center space-y-2 mb-12">
        <h1 className="text-4xl font-bold tracking-wide text-[#fff]">
          CHATGPT
        </h1>
        <p className="text-gray-400 text-sm">Smart Help, Just a Tap Away</p>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-md">
        {/* Purple Gradient Card with Cutout */}
        <div
          ref={gradientCardRef}
          className="gradient-card rounded-3xl p-8 text-center relative z-10 overflow-visible"
        >
          <div className="mb-16">
            <svg
              className="w-8 h-8 mx-auto mb-4 text-white/80"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <h2 className="text-3xl font-bold mb-2">
              Effortless Conversations
            </h2>
            <p className="text-purple-200/80">Powerful Outcomes</p>
          </div>
          <div className="absolute bottom-0 flex items-center justify-center left-1/2 -translate-x-1/2 translate-y-1/2 w-[140px] h-[140px] bg-[#0a0a14] rounded-full"></div>

          {/* Card Cutout Shape */}
          <div
            ref={orbContainerRef}
            className="absolute left-1/2 -translate-x-1/2 translate-y-1/2  bottom-0 z-20"
          >
            <div className="relative w-[200px] h-[200px]">
              <Orb size={200} className="relative" />
            </div>
          </div>
        </div>

        {/* Feature Cards with proper spacing */}
        <div ref={containerRef} className="grid grid-cols-2 gap-4 mt-4 mb-8">
          <div
            ref={leftCardRef}
            className="glass-effect p-6 text-start border-2 border-amber-50"
          >
            <div className="mb-3 mt-16">
              <svg
                className="w-6 h-6 text-purple-400/80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#ffff]">
              Data Analysis in Seconds,
            </h3>
            <p className="text-sm text-gray-400">
              Debug and write code in multiple languages
            </p>
          </div>
          <div
            ref={rightCardRef}
            className="glass-effect p-6 text-start border-2 border-amber-50"
          >
            <div className="mb-3 mt-16">
              <svg
                className="w-6 h-6 text-purple-400/80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#ffff]">
              Your Daily Planner,
            </h3>
            <p className="text-sm text-gray-400">
              Automate routine tasks with ease
            </p>
          </div>
        </div>

        {/* Get Started Button */}
        <div ref={footerSectionRef}>
          <div
            className="relative mt-4"
            onClick={() => handleNavigation("/chat/Text")}
          >
            <button className="w-full bg-white text-black font-semibold py-4 px-6 rounded-full text-center hover:bg-gray-100 transition-colors mb-6 flex items-center justify-center">
              <span className="absolute left-4 text-black/50">
                &gt;&gt;&gt;
              </span>
              <span className="flex-1 text-center">Get Started</span>
            </button>
          </div>

          {/* Footer Links */}
          <div className="text-sm text-gray-400 text-center space-x-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy policy
            </Link>
            <span>/</span>
            <Link href="/terms" className="hover:text-white">
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
