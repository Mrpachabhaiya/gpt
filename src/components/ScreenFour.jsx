// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import {
// 	ArrowPathIcon,
// 	PlusIcon,
// 	GlobeAltIcon,
// 	MicrophoneIcon,
// 	Bars3Icon,
// } from "@heroicons/react/24/outline";
// import {
// 	PencilIcon,
// 	LightBulbIcon,
// 	CommandLineIcon,
// } from "@heroicons/react/24/solid";

// import { useRouter } from "next/navigation";
// import { gsap } from "gsap";
// import VoiceChat from "@/app/chat/Voice/page";

// export default function Chat() {
// 	const [isListening, setIsListening] = useState(false);
// 	const [message, setMessage] = useState("");
// 	const [showVoiceChat, setShowVoiceChat] = useState(false);
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);
// 	const router = useRouter();
// 	const menuRef = useRef(null);

// 	// Handle voice chat toggle
// 	const handleVoiceClick = () => {
// 		setShowVoiceChat(true);
// 		setIsListening(true);
// 	};

// 	const handleVoiceChatClose = () => {
// 		setShowVoiceChat(false);
// 		setIsListening(false);
// 	};

// 	// Handle menu toggle
// 	const toggleMenu = () => {
// 		setIsMenuOpen(!isMenuOpen);
// 	};

// 	// Handle refresh
// 	const handleRefresh = () => {
// 		// Add any refresh logic here
// 		router.refresh();
// 	};

// 	// Handle quick action buttons
// 	const handleQuickAction = (action) => {
// 		switch (action) {
// 			case "write":
// 				setMessage("Help me write a professional email about...");
// 				break;
// 			case "brainstorm":
// 				setMessage("Brainstorm ideas for a new startup about...");
// 				break;
// 			case "code":
// 				setMessage("Write a Python function that...");
// 				break;
// 			default:
// 				break;
// 		}
// 	};

// 	// Handle message input change
// 	const handleInputChange = (e) => {
// 		setMessage(e.target.value);
// 	};

// 	// Handle message submission
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (message.trim()) {
// 			// Add your message submission logic here
// 			console.log("Message sent:", message);
// 			setMessage("");
// 		}
// 	};

// 	// Handle global click to close menu
// 	useEffect(() => {
// 		const handleClickOutside = (event) => {
// 			if (menuRef.current && !menuRef.current.contains(event.target)) {
// 				setIsMenuOpen(false);
// 			}
// 		};

// 		document.addEventListener("mousedown", handleClickOutside);
// 		return () => {
// 			document.removeEventListener("mousedown", handleClickOutside);
// 		};
// 	}, []);

// 	// Menu animation
// 	useEffect(() => {
// 		if (menuRef.current) {
// 			gsap.to(menuRef.current, {
// 				opacity: isMenuOpen ? 1 : 0,
// 				y: isMenuOpen ? 0 : 20,
// 				duration: 0.2,
// 				display: isMenuOpen ? "block" : "none",
// 				ease: "power2.out",
// 			});
// 		}
// 	}, [isMenuOpen]);

// 	return (
// 		<>
// 			<div className="flex flex-col min-h-screen bg-[#0a0a14] relative">
// 				{/* Header - Responsive padding and icon sizes */}
// 				<header className="glass-effect px-4 sm:px-6 py-3 flex items-center justify-between border-b border-white/10">
// 					<div className="flex items-center gap-2 sm:gap-4">
// 						<button
// 							onClick={handleRefresh}
// 							className="p-1 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
// 							aria-label="Refresh"
// 						>
// 							<ArrowPathIcon className="w-5 h-5 sm:w-6 sm:h-6" color="#ffff" />
// 						</button>
// 						<Link href={"/"}>
// 							<h1 className="text-lg sm:text-xl font-semibold flex items-center gap-1 text-[#ffff]">
// 								ChatGPT
// 								<span className="text-xs sm:text-sm text-gray-400">4o</span>
// 								<span className="text-gray-400 hidden sm:inline">&gt;</span>
// 							</h1>
// 						</Link>
// 					</div>
// 					<div className="relative" ref={menuRef}>
// 						<button
// 							onClick={toggleMenu}
// 							className="p-1 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
// 							aria-label="Menu"
// 						>
// 							<Bars3Icon className="w-5 h-5 sm:w-6 sm:h-6" color="#ffff" />
// 						</button>

// 						{/* Dropdown Menu */}
// 						<div className="absolute right-0 mt-2 w-48 bg-[#0a0a14] border border-white/10 rounded-lg shadow-lg py-1 z-50 opacity-0 hidden">
// 							<button
// 								onClick={() => router.push("/settings")}
// 								className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
// 							>
// 								Settings
// 							</button>
// 							<button
// 								onClick={() => router.push("/help")}
// 								className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
// 							>
// 								Help & FAQ
// 							</button>
// 							<button
// 								onClick={() => router.push("/logout")}
// 								className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
// 							>
// 								Log out
// 							</button>
// 						</div>
// 					</div>
// 				</header>

// 				{/* Main Content - Responsive spacing and sizing */}
// 				<main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
// 					{/* Logo - Responsive sizing */}
// 					<div className="mb-4 sm:mb-6 md:mb-8">
// 						<svg
// 							className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white/20"
// 							viewBox="0 0 24 24"
// 						>
// 							<path
// 								fill="currentColor"
// 								d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
// 							/>
// 							<path
// 								fill="currentColor"
// 								d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
// 							/>
// 						</svg>
// 					</div>

// 					{/* Welcome Text - Responsive typography */}
// 					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[#ffff] text-center px-2">
// 						Hey, Matthew!
// 					</h2>
// 					<p className="text-gray-400 text-center max-w-xs sm:max-w-sm md:max-w-md mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base px-2">
// 						Hello! I&rsquo;m here to assist you with anything you need — from
// 						answering questions and writing content to brainstorming ideas.
// 					</p>

// 					{/* Quick Actions - Responsive spacing and sizing */}
// 					<div className="flex gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
// 						<button
// 							onClick={() => handleQuickAction("write")}
// 							className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-colors"
// 							aria-label="Write"
// 						>
// 							<PencilIcon className="w-4 h-4 sm:w-5 sm:h-5" />
// 						</button>
// 						<button
// 							onClick={() => handleQuickAction("brainstorm")}
// 							className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 hover:bg-orange-500/30 transition-colors"
// 							aria-label="Brainstorm"
// 						>
// 							<LightBulbIcon className="w-4 h-4 sm:w-5 sm:h-5" />
// 						</button>
// 						<button
// 							onClick={() => handleQuickAction("code")}
// 							className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500/30 transition-colors"
// 							aria-label="Code"
// 						>
// 							<CommandLineIcon className="w-4 h-4 sm:w-5 sm:h-5" />
// 						</button>
// 					</div>

// 					{/* Scroll Indicator - Responsive sizing */}
// 					<div className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 animate-bounce">
// 						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								strokeWidth={2}
// 								d="M19 14l-7 7m0 0l-7-7m7 7V3"
// 							/>
// 						</svg>
// 					</div>
// 				</main>

// 				{/* Input Area - Responsive padding and sizing */}
// 				<div className="p-3 sm:p-4 pb-6 sm:pb-8">
// 					<form
// 						onSubmit={handleSubmit}
// 						className="glass-effect p-1 sm:p-2 flex items-center gap-1 sm:gap-2 max-w-md sm:max-w-lg md:max-w-3xl mx-auto rounded-full"
// 					>
// 						<button
// 							type="button"
// 							className="p-1 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
// 							aria-label="Attach"
// 						>
// 							<PlusIcon className="w-5 h-5 sm:w-6 sm:h-6" color="#ffff" />
// 						</button>
// 						<input
// 							type="text"
// 							value={message}
// 							onChange={handleInputChange}
// 							placeholder="Send message to ChatGPT..."
// 							className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 text-sm sm:text-base px-1 sm:px-2"
// 							aria-label="Message input"
// 						/>
// 						<button
// 							type="button"
// 							className="p-1 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
// 							aria-label="Language"
// 						>
// 							<GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6" color="#ffff" />
// 						</button>
// 						<button
// 							type="button"
// 							className={`p-1 sm:p-2 rounded-full transition-colors ${
// 								isListening ? "bg-purple-600" : "hover:bg-white/10"
// 							}`}
// 							onClick={handleVoiceClick}
// 							aria-label={isListening ? "Stop recording" : "Start recording"}
// 						>
// 							<MicrophoneIcon className="w-5 h-5 sm:w-6 sm:h-6" color="#ffff" />
// 						</button>
// 					</form>
// 				</div>
// 			</div>

// 			{/* Voice Chat Modal */}
// 			<VoiceChat isOpen={showVoiceChat} onClose={handleVoiceChatClose} />
// 		</>
// 	);
// }
import Image from "next/image";
import { useEffect } from "react";

export default function ScreenFour() {
	useEffect(() => {
		document.body.style.background =
			"linear-gradient(to bottom, #0c0c1c, #111122)";
		return () => {
			document.body.style.background = "";
		};
	}, []);

	return (
		<div className="screen-four   max-h-screen  flex-col justify-between gap-10  items-center text-white font-sans px-4 absolute top-[0%] left-0   ">
			{/* Top Header */}
			<header className=" top-title w-full flex justify-center items-center py-4 text-sm text-gray-300 font-medium">
				ChatGPT 4o
			</header>

			{/* Main Content */}
			<main className="main-content flex flex-col items-center justify-center  gap-6">
				{/* OpenAI Logo */}
				<div className="w-16 h-16">
					{/* Replace this div with an SVG if you have the actual logo */}
					<div className="w-full h-full border-2 border-white rounded-full flex items-center justify-center">
						<span className="text-xs">Logo</span>
					</div>
				</div>

				{/* Welcome Text */}
				<div className="text-center mt-85">
					<h1 className="text-3xl font-bold">
						Hey, <span className="text-purple-400">Mattew!</span>
					</h1>
					<p className="text-gray-400 text-sm mt-2 max-w-xs mx-auto leading-relaxed">
						Hello! I'm here to assist you with anything you need — from
						answering questions to drafting content to brainstorming ideas.
					</p>
				</div>
			</main>

			{/* Footer Input Area */}
			<footer className="footer-fourth w-full pb-6">
				{/* Action buttons */}
				<div className="flex justify-center gap-6 mb-4">
					<button className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-md hover:scale-105 transition">
						{/* Icon here */}
					</button>
					<button className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-md hover:scale-105 transition">
						{/* Icon here */}
					</button>
					<button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-md hover:scale-105 transition">
						{/* Icon here */}
					</button>
				</div>

				{/* Input bar */}
				<div className="flex item-center gap-5">
					<div className="mx-auto w-[90%] flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
						<input
							type="text"
							placeholder="Send message to ChatGPT"
							className="flex-grow bg-transparent outline-none text-sm text-white placeholder-gray-400"
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
					<div className="relative h-16 w-16 flex items-center justify-center  rounded-full">
						<Image
							alt="logog"
							src={"/logo_white.png"}
							height={40}
							width={40}
							className=" absolute"
						/>
						<div className="animated-circle w-full h-full rounded-full bg-black border-4 border-black absolute overflow-hidden shadow-[0_0_60px_20px_rgba(147,51,234,0.5)] top-0 left-0 z-100 opacity-0 ">
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
