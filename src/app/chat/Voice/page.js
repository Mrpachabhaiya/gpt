"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import Orb from "@/app/components/Orb";

export default function VoiceChat({ isOpen, onClose }) {
	const router = useRouter();
	const containerRef = useRef(null);
	const orbRef = useRef(null);
	const contentRef = useRef(null);
	const [isRecording, setIsRecording] = useState(false);
	const [mediaRecorder, setMediaRecorder] = useState(null);
	const [audioChunks, setAudioChunks] = useState([]);
	const animationRef = useRef(null);

	const handleKeyboardClick = (e) => {
		e.preventDefault();
		// First fade out the current component
		gsap.to(containerRef.current, {
			opacity: 0,
			duration: 0.3,
			onComplete: () => {
				// After fade out, close the voice chat and navigate
				onClose();
				router.push("/chat/Text");
			},
		});
	};

	const startRecording = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const recorder = new MediaRecorder(stream);
			setMediaRecorder(recorder);

			recorder.ondataavailable = (e) => {
				setAudioChunks((prev) => [...prev, e.data]);
			};

			recorder.onstop = () => {
				const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
				// Here you would typically send the audio to your backend
				console.log("Audio recorded:", audioBlob);
				setAudioChunks([]);
			};

			recorder.start();
			setIsRecording(true);
			startOrbAnimation();
		} catch (err) {
			console.error("Error accessing microphone:", err);
		}
	};

	const stopRecording = () => {
		if (mediaRecorder) {
			mediaRecorder.stop();
			mediaRecorder.stream.getTracks().forEach((track) => track.stop());
			setIsRecording(false);
			stopOrbAnimation();
		}
	};

	const startOrbAnimation = () => {
		if (!orbRef.current) return;

		// Create a pulsing animation
		animationRef.current = gsap.to(orbRef.current, {
			scale: 1.1,
			duration: 0.5,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut",
		});
	};

	const stopOrbAnimation = () => {
		if (animationRef.current) {
			animationRef.current.kill();
			gsap.to(orbRef.current, { scale: 1, duration: 0.5 });
		}
	};

	const handleSettingsClick = (e) => {
		e.preventDefault();
		gsap.to(containerRef.current, {
			opacity: 0,
			duration: 0.3,
			onComplete: () => {
				onClose();
				router.push("/settings");
			},
		});
	};

	const handleCloseClick = (e) => {
		e.preventDefault();
		if (isRecording) {
			stopRecording();
		}
		gsap.to(containerRef.current, {
			opacity: 0,
			duration: 0.3,
			onComplete: () => {
				onClose();
				router.push("/chat/Text");
			},
		});
	};

	useEffect(() => {
		if (!isOpen) return;

		// GSAP Animations
		const tl = gsap.timeline();

		tl.fromTo(
			containerRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.3 }
		)
			.fromTo(
				contentRef.current,
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
				"-=0.2"
			)
			.fromTo(
				orbRef.current,
				{ scale: 0.8, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
				"-=0.3"
			);

		return () => {
			if (isRecording) {
				stopRecording();
			}
			if (containerRef.current) {
				gsap.to(containerRef.current, {
					opacity: 0,
					duration: 0.3,
					onComplete: onClose,
				});
			}
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div
			ref={containerRef}
			className="fixed inset-0 bg-[#0a0a14]/90 backdrop-blur-sm z-50 flex flex-col h-screen"
		>
			<div className="p-4 flex items-center justify-between">
				<button
					onClick={handleCloseClick}
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
				className="flex-1 flex flex-col items-center justify-center px-6 pb-10"
			>
				<h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-20 text-center text-white">
					{isRecording ? "Listening..." : "What Can I Do"}
					<br />
					{isRecording ? "Speak now..." : "for you Today?"}
				</h2>

				{/* Orb Component with ref for animations */}
				<div
					ref={orbRef}
					className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
				>
					{/* <Orb
            size={300}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            isRecording={isRecording}
          /> */}
				</div>

				<button
					onClick={handleKeyboardClick}
					className="flex items-center gap-2 text-gray-400/60 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 mt-6"
				>
					<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z" />
					</svg>
					<span className="text-sm font-medium">Use Keyboard</span>
				</button>
			</div>

			<div className="p-4 sm:p-8 flex justify-center items-center gap-4 sm:gap-6 ">
				<button
					onClick={handleSettingsClick}
					className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-black/30 transition-colors"
					aria-label="Settings"
				>
					<svg
						className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
					</svg>
				</button>

				<button
					onClick={isRecording ? stopRecording : startRecording}
					className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors relative"
					aria-label="Microphone"
				>
					<div
						className={`absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full ${
							isRecording ? "animate-pulse" : ""
						}`}
					>
						<div className="absolute inset-[2px] bg-white rounded-full flex items-center justify-center">
							<svg
								className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								{isRecording ? (
									<rect x="9" y="9" width="6" height="6" rx="1" />
								) : (
									<>
										<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
										<path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
									</>
								)}
							</svg>
						</div>
					</div>
				</button>

				<button
					className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-black/30 transition-colors"
					aria-label="Close"
					onClick={handleCloseClick}
				>
					<svg
						className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
					</svg>
				</button>
			</div>
		</div>
	);
}
