import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill = "#050505",
  skyFill = "#1e1b4b",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  skyFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise = createNoise3D();
    let w = 0;
    let h = 0;
    let nt = 0;
    let animationId = 0;

    const resize = () => {
      w = canvas.width = container.offsetWidth;
      h = canvas.height = container.offsetHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];
    const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

    const drawWave = (n: number) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const drawFrame = () => {
      ctx.globalAlpha = waveOpacity;
      ctx.fillStyle = skyFill;
      ctx.fillRect(0, 0, w, h * 0.5);
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, h * 0.5, w, h * 0.5);
      drawWave(5);
    };

    const render = () => {
      drawFrame();
      animationId = requestAnimationFrame(render);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      // Paint the fills to full strength once, then leave a static frame.
      for (let f = 0; f < 8; f++) drawFrame();
    } else {
      render();
    }

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [blur, colors, speed, waveOpacity, waveWidth, backgroundFill, skyFill]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
