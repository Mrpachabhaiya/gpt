"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Settings() {
  const router = useRouter();
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    ).fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );

    return () => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.3,
        });
      }
    };
  }, []);

  const handleBackClick = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => router.back(),
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#0a0a14]/90 backdrop-blur-sm z-50 flex flex-col h-screen"
    >
      <div className="p-4 flex items-center justify-between">
        <button
          onClick={handleBackClick}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          aria-label="Close"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <Link href={"/"}>
          <h1 className="text-xl font-semibold flex items-center gap-1 text-white">
            ChatGPT
            <span className="text-sm text-gray-400">4o</span>
            <span className="text-gray-400">&gt;</span>
          </h1>
        </Link>
        <div className="w-10" /> {/* Spacer for alignment */}
      </div>

      <div
        ref={contentRef}
        className="flex-1 flex flex-col items-center px-6 pb-10 overflow-y-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
          Settings
        </h2>

        <div className="w-full max-w-md space-y-6">
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Audio Settings
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Microphone
                </label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Default Microphone</option>
                  <option>Microphone 2</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Speaker
                </label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option className=" bg-white/10">Default Speaker</option>
                  <option className=" bg-white/10">Headphones</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Appearance
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Theme
                </label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Dark</option>
                  <option>Light</option>
                  <option>System</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">
                  Animations
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>

            <div className="space-y-2 text-sm text-gray-400">
              <p>ChatGPT 4o Version 1.0.0</p>
              <p>© 2023 OpenAI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
