import { useEffect, useRef } from "react";
import Orb from "./Orb";
import Link from "next/link";
import gsap from "gsap";
import { Fader } from "./Fader";
import Image from "next/image";

const ScreenTwo = ({ onClick }) => {
	const headerRef = useRef(null);
	const gradientCardRef = useRef(null);
	const leftCardRef = useRef(null);
	const rightCardRef = useRef(null);
	const footerSectionRef = useRef(null);
	const orbContainerRef = useRef(null);
	const containerRef = useRef(null);
	// useEffect(() => {
	// 	gsap.set(leftCardRef, {
	// 		x: -500,
	// 	});
	// 	gsap.set(rightCardRef, {
	// 		x: 500,
	// 	});
	// 	gsap.set(headerRef, {
	// 		y: 500,
	// 	});
	// }, []);

	return (
		<div className="screen-two max-h-screen overflow-hidden absolute opacity-0 top-0 left-0  flex flex-col items-center justify-start min-h-screen p-4 bg-[#0a0a14] relative overflow-x-hidden">
			{/* Header */}
			<Fader />
			<div
				ref={headerRef}
				className="headerTitle text-center space-y-2 mb-6 mt-10"
			>
				<h1 className=" text-4xl font-extrabold tracking-wider text-white">
					CHATGPT
				</h1>
				<p className="text-gray-500 text-xs tracking-tight relative bottom-3">
					Smart Help, Just a Tap Away
				</p>
			</div>

			{/* Main Content */}
			<div className="relative w-full max-w-md">
				{/* Purple Gradient Card with Cutout */}
				<div
					ref={gradientCardRef}
					className="header-card gradient-card rounded-3xl p-8 text-center relative z-0 overflow-visible"
				>
					<div className="mb-16 relative titleText">
						<Image
							src={"/chatgptlogo.png"}
							height={30}
							width={30}
							className=" logo absolute left-[45%] -translate-x-1/2 -top-[45%]"
						/>
						<h2 className="  text-4xl font-bold text-white text-center mt-10 leading-8">
							Effortless Conversations
						</h2>
						<p className="text-purple-200/80">Powerful Outcomes</p>
					</div>
					{/* <Orb size={200} className="relative" /> */}
					{/* <div className="absolute  flex items-center justify-center left-[30%] -translate-x-1/2  top-[70%] translate-y-[10%] w-[140px] h-[140px] bg-[#0a0a14] rounded-full"></div> */}

					{/* Card Cutout Shape */}
				</div>
				<div
					ref={orbContainerRef}
					className="absolute z-100  left-[30%] -translate-x-1/2  top-[27%]  -translate-y-[50%]  "
				>
					<div className="relative w-[140px] h-[140px]">
						{/* <Orb size={200} className="relative" /> */}
						{/* <div className="w-full h-full rounded-full bg-black border-4 border-black relative overflow-hidden shadow-[0_0_60px_20px_rgba(147,51,234,0.5)]">
							<div className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#8b5cf6,#6366f1,#a855f7,#8b5cf6)] animate-spin-slow opacity-80 blur-sm"></div>

							<div className="absolute inset-0 rounded-full bg-white opacity-10 blur-2xl pointer-events-none"></div>

							<div className="absolute top-3 left-4 w-16 h-16 bg-white/30 rounded-full blur-lg opacity-70 animate-floating"></div>

							<div className="absolute bottom-4 right-6 w-10 h-10 bg-white/20 rounded-full blur-md opacity-50 animate-floating-slow"></div>
						</div> */}
					</div>
				</div>

				{/* Feature Cards with proper spacing */}
				<div ref={containerRef} className="grid grid-cols-2 gap-4 mt-4 mb-8">
					<div
						ref={leftCardRef}
						className="left-card glass-effect p-6 text-start bg-[rgba(59,130,246,0.1)] shadow-md rounded-xl"
					>
						<div className="left-card-contents mb-3 mt-16">
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
						<h3 className="text-md font-semibold text-white text-left">
							Data Analysis in Seconds,
						</h3>
						<p className="text-sm text-gray-400">
							Debug and write code in multiple languages
						</p>
					</div>
					<div
						ref={rightCardRef}
						className="right-card  glass-effect p-6 text-start bg-[rgba(59,130,246,0.1)] shadow-md rounded-xl"
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
						<h3 className="text-md leading-5 font-semibold text-white text-left">
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
						className="footer relative mt-4"
						// onClick={() => handleNavigation("/chat/Text")}
					>
						<button
							className="w-full bg-white text-black font-semibold py-4 px-6 rounded-full text-center hover:bg-gray-100 transition-colors mb-6 flex items-center justify-center relative z-10"
							onClick={onClick}
						>
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
};

export default ScreenTwo;
