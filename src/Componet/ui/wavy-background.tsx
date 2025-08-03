"use client";

import { cn } from "@/src/utils/cn";
import React, {
    useEffect,
    useRef,
    useState,
    MutableRefObject,
    HTMLAttributes,
} from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth = 50,
    backgroundFill = "black",
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const noise = createNoise3D();

    const [isSafari, setIsSafari] = useState(false);

    const getSpeed = () => {
        return speed === "slow" ? 0.001 : 0.002;
    };

    const waveColors = colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
    ];

    const initCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (ctx.canvas.width = window.innerWidth);
        let height = (ctx.canvas.height = window.innerHeight);
        let nt = 0;

        ctx.filter = `blur(${blur}px)`;

        const onResize = () => {
            width = ctx.canvas.width = window.innerWidth;
            height = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };

        window.addEventListener("resize", onResize);

        const drawWave = (n: number) => {
            nt += getSpeed();
            for (let i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.lineWidth = waveWidth;
                ctx.strokeStyle = waveColors[i % waveColors.length];

                for (let x = 0; x < width; x += 5) {
                    const y = noise(x / 800, 0.3 * i, nt) * 100;
                    ctx.lineTo(x, y + height * 0.5);
                }

                ctx.stroke();
                ctx.closePath();
            }
        };

        const render = () => {
            ctx.fillStyle = backgroundFill;
            ctx.globalAlpha = waveOpacity;
            ctx.fillRect(0, 0, width, height);
            drawWave(5);
            animationRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener("resize", onResize);
        };
    };

    useEffect(() => {
        const cleanup = initCanvas();
        return () => {
            if (cleanup) cleanup();
        };
    }, []);

    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div
            className={cn(
                "h-screen flex flex-col items-center justify-center",
                containerClassName
            )}
        >
            <canvas
                className="absolute inset-0 z-0"
                ref={canvasRef}
                id="canvas"
                style={isSafari ? { filter: `blur(${blur}px)` } : {}}
            ></canvas>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    );
};
