import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FcIdea } from "react-icons/fc";
import { BsSoundwave } from "react-icons/bs";

export default function ScreenFour() {
  const circleRef = useRef(null);
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to bottom, #0c0c1c, #111122)";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  // positioning at center
  const centerCircle = () => {
    if (!circleRef.current) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const circleRect = circleRef.current.getBoundingClientRect();
    const circleWidth = circleRect.width;
    const circleHeight = circleRect.height;

    const centerX = (viewportWidth - circleWidth) / 2;
    const centerY = (viewportHeight - circleHeight) / 2;

    gsap.set(circleRef.current, {
      x: centerX,
      y: centerY,
      position: "fixed",
    });
  };
  // clean up
  useEffect(() => {
    const handleResize = () => centerCircle();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="screen-four   max-h-screen max-w-full flex-col justify-between gap-10  items-center text-white   absolute top-[0%] left-0   ">
      {/* Top Header */}
      <header className=" top-title w-full flex justify-center items-center py-4 text-lg text-gray-300 font-medium">
        ChatGPT <span className="ml-2 text-gray-500">4o</span>
      </header>

      {/* Main Content */}
      <main className="main-content flex flex-col items-center justify-center  gap-6">
        {/* OpenAI Logo */}

        {/* Replace this div with an SVG if you have the actual logo */}
        {/* <div className="w-full h-full border-2 border-white rounded-full flex items-center justify-center">
						<span className="text-xs">Logo</span>
					</div> */}
        <Image
          alt="chatgptlogo"
          src={"/logo_white.png"}
          height={105}
          width={105}
          className="logo absolute  top-[20%]"
        />

        {/* Welcome Text */}
        <div className="text-center mt-95">
          <h1 className="text-[2.75rem] font-bold tracking-wide">
            Hey, <span className="text-purple-400">Mattew!</span>
          </h1>
          <p className="text-gray-400 text-xs mt-2 max-w-xs mx-auto leading-relaxed w-[85%]">
            Hello! I'm here to assist you with anything you need — from
            answering questions to drafting content to brainstorming ideas.
          </p>
        </div>
      </main>

      {/* Footer Input Area */}
      <footer className="footer-fourth w-full pb-6">
        {/* Action buttons */}
        <div className="flex justify-center gap-2 mb-4 mt-16">
          <div className=" flex items-center rounded-full bg-white/10 gap-3 p-2 px-3">
            <button className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center shadow-md hover:scale-105 transition">
              {/* Icon here */}
              <MdOutlineMailOutline />
            </button>
            <span className="text-xs text-white/40"> Write an Email</span>
          </div>
          <div className=" flex items-center rounded-full bg-white/10 gap-3 p-2 px-3">
            <button className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shadow-md hover:scale-105 transition">
              {/* Icon here */}
              <FcIdea />
            </button>
            <span className="text-xs text-white/40"> Give me Ideas</span>
          </div>
          <button className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-md hover:scale-105 transition">
            {/* Icon here */}
          </button>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 ">
          <div className=" p-1 rounded-full bg-gray-800">
            <FaPlus color="white" size={12} />
          </div>
          <div className="mx-auto w-[90%] flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-1">
            <input
              type="text"
              placeholder="Send message to ChatGPT"
              className="flex-grow bg-transparent outline-none text-sm text-white placeholder-gray-400 py-2"
            />
            <button className="ml-2 text-white">
              {/* Send Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-9.193-5.396a1 1 0 00-1.5.868v10.788a1 1 0 001.5.868l9.193-5.396a1 1 0 000-1.732z"
                />
              </svg>
            </button>
          </div>
          <div className="iconWrapper p-1 rounded-full bg-white relative  flex justify-center items-center z-10 ">
            <BsSoundwave color="black" size={12} />
          </div>
          <div className="relative h-16 w-16 flex items-center justify-center  rounded-full">
            <div className="flex items-center">
              <Image
                alt="logog"
                src={"/logo_white.png"}
                height={30}
                width={30}
                className="absolute left-1"
              />
            </div>
            <div
              ref={circleRef}
              className="animated-circle w-full h-full rounded-full bg-black border-4 border-black absolute overflow-hidden shadow-[0_0_60px_20px_rgba(147,51,234,0.5)] top-0 left-0 z-100 opacity-0 "
            >        
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#8b5cf6,#6366f1,#a855f7,#8b5cf6)] animate-spin-slow opacity-80 blur-sm"></div>

              <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-2xl pointer-events-none"></div>

              <div className="absolute  w-full h-full bg-white/30 rounded-full blur-lg opacity-70 animate-floating"></div>

              <div className="absolute  w-full h-full bg-white/20 rounded-full blur-md opacity-50 animate-floating-slow"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
