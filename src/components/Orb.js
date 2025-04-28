// "use client";

// import { useEffect, useRef } from "react";

// export default function Orb({ size = 200, className = "" }) {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let hue = 0;

//     // Set canvas size
//     const setCanvasSize = () => {
//       canvas.width = 400;
//       canvas.height = 400;
//     };

//     setCanvasSize();

//     // Draw glowing orb
//     const drawOrb = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Create gradient
//       const gradient = ctx.createRadialGradient(
//         canvas.width / 2,
//         canvas.height / 2,
//         0,
//         canvas.width / 2,
//         canvas.height / 2,
//         120
//       );

//       // Animate hue
//       hue = (hue + 0.2) % 360;

//       // Main orb colors
//       gradient.addColorStop(0, `hsla(${hue + 180}, 80%, 50%, 0.8)`);
//       gradient.addColorStop(0.5, `hsla(${hue + 240}, 100%, 65%, 0.3)`);
//       gradient.addColorStop(1, "transparent");

//       // Draw main orb with blur
//       ctx.shadowColor = `hsla(${hue + 180}, 80%, 50%, 0.5)`;
//       ctx.shadowBlur = 30;
//       ctx.fillStyle = gradient;
//       ctx.beginPath();
//       ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
//       ctx.fill();

//       // Add highlight
//       const highlightGradient = ctx.createLinearGradient(
//         canvas.width / 2 - 60,
//         canvas.height / 2 - 60,
//         canvas.width / 2 + 60,
//         canvas.height / 2 + 60
//       );
//       highlightGradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
//       highlightGradient.addColorStop(1, "transparent");

//       ctx.fillStyle = highlightGradient;
//       ctx.beginPath();
//       ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
//       ctx.fill();

//       animationFrameId = requestAnimationFrame(drawOrb);
//     };

//     drawOrb();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className={className}
//       style={{
//         width: `${size}px`,
//         height: `${size}px`,
//       }}
//     />
//   );
// }
"use client";

import { useEffect, useRef } from "react";

export default function Orb({
	size = 200,
	className = "",
	isRecording = false,
}) {
	const canvasRef = useRef(null);
	const animationFrameId = useRef(null);
	const hueRef = useRef(0);
	const pulseRef = useRef(1);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");

		// Set canvas size
		const setCanvasSize = () => {
			canvas.width = 140;
			canvas.height = 140;
		};

		setCanvasSize();

		// Draw glowing orb
		const drawOrb = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Animate hue
			hueRef.current = (hueRef.current + 0.2) % 360;

			// Pulsing effect when recording
			if (isRecording) {
				pulseRef.current = 0.9 + Math.sin(Date.now() / 200) * 0.1;
			} else {
				pulseRef.current = 1;
			}

			// Create gradient
			const gradient = ctx.createRadialGradient(
				canvas.width / 2,
				canvas.height / 2,
				0,
				canvas.width / 2,
				canvas.height / 2,
				120 * pulseRef.current
			);

			// Main orb colors - more vibrant when recording
			const saturation = isRecording ? 100 : 80;
			const lightness = isRecording ? 60 : 50;

			gradient.addColorStop(
				0,
				`hsla(${hueRef.current + 180}, ${saturation}%, ${lightness}%, 0.8)`
			);
			gradient.addColorStop(
				0.5,
				`hsla(${hueRef.current + 240}, 100%, 65%, ${isRecording ? 0.5 : 0.3})`
			);
			gradient.addColorStop(1, "transparent");

			// Draw main orb with blur
			ctx.shadowColor = `hsla(${
				hueRef.current + 180
			}, ${saturation}%, ${lightness}%, 0.5)`;
			ctx.shadowBlur = isRecording ? 40 : 30;
			ctx.fillStyle = gradient;
			ctx.beginPath();
			ctx.arc(
				canvas.width / 2,
				canvas.height / 2,
				120 * pulseRef.current,
				0,
				Math.PI * 2
			);
			ctx.fill();

			// Add highlight
			const highlightGradient = ctx.createLinearGradient(
				canvas.width / 2 - 60,
				canvas.height / 2 - 60,
				canvas.width / 2 + 60,
				canvas.height / 2 + 60
			);
			highlightGradient.addColorStop(
				0,
				`rgba(255, 255, 255, ${isRecording ? 0.3 : 0.2})`
			);
			highlightGradient.addColorStop(1, "transparent");

			ctx.fillStyle = highlightGradient;
			ctx.beginPath();
			ctx.arc(
				canvas.width / 2,
				canvas.height / 2,
				120 * pulseRef.current,
				0,
				Math.PI * 2
			);
			ctx.fill();

			// Add sound wave effect when recording
			if (isRecording) {
				ctx.strokeStyle = `hsla(${hueRef.current + 180}, 100%, 70%, 0.7)`;
				ctx.lineWidth = 2;

				const waveCount = 3;
				const maxRadius = 180;

				for (let i = 1; i <= waveCount; i++) {
					const progress = (Date.now() % 1000) / 1000;
					const offset = i * 0.2;
					const radius = 120 + (maxRadius - 120) * ((progress + offset) % 1);

					ctx.beginPath();
					ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
					ctx.stroke();
				}
			}

			animationFrameId.current = requestAnimationFrame(drawOrb);
		};

		drawOrb();

		return () => {
			cancelAnimationFrame(animationFrameId.current);
		};
	}, [isRecording]);

	return (
		<canvas
			ref={canvasRef}
			className={className}
			style={{
				width: `${size}px`,
				height: `${size}px`,
				transition: "all 0.3s ease",
			}}
		/>
	);
}
