"use client";

import { useEffect, useRef } from "react";

export default function Orb({ size = 200, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let hue = 0;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = 400;
      canvas.height = 400;
    };

    setCanvasSize();

    // Draw glowing orb
    const drawOrb = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        120
      );

      // Animate hue
      hue = (hue + 0.2) % 360;

      // Main orb colors
      gradient.addColorStop(0, `hsla(${hue + 180}, 80%, 50%, 0.8)`);
      gradient.addColorStop(0.5, `hsla(${hue + 240}, 100%, 65%, 0.3)`);
      gradient.addColorStop(1, "transparent");

      // Draw main orb with blur
      ctx.shadowColor = `hsla(${hue + 180}, 80%, 50%, 0.5)`;
      ctx.shadowBlur = 30;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
      ctx.fill();

      // Add highlight
      const highlightGradient = ctx.createLinearGradient(
        canvas.width / 2 - 60,
        canvas.height / 2 - 60,
        canvas.width / 2 + 60,
        canvas.height / 2 + 60
      );
      highlightGradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
      highlightGradient.addColorStop(1, "transparent");

      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(drawOrb);
    };

    drawOrb();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}
