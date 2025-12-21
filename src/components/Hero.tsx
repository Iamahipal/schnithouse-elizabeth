"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

// Floating food images with positions and parallax depth
const floatingImages = [
    {
        src: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=400&q=80",
        alt: "Crispy schnitzel",
        x: "5%", y: "15%",
        width: 180, height: 120,
        depth: 0.08, // How much it moves with mouse
        rotate: -8,
        delay: 0
    },
    {
        src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
        alt: "BBQ ribs",
        x: "80%", y: "10%",
        width: 160, height: 110,
        depth: 0.05,
        rotate: 6,
        delay: 0.2
    },
    {
        src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80",
        alt: "Fresh salad",
        x: "2%", y: "55%",
        width: 140, height: 100,
        depth: 0.06,
        rotate: 5,
        delay: 0.4
    },
    {
        src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80",
        alt: "Gourmet burger",
        x: "82%", y: "50%",
        width: 170, height: 115,
        depth: 0.07,
        rotate: -5,
        delay: 0.6
    },
    {
        src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
        alt: "Pizza",
        x: "15%", y: "75%",
        width: 150, height: 100,
        depth: 0.04,
        rotate: 8,
        delay: 0.8
    },
    {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
        alt: "Food platter",
        x: "75%", y: "78%",
        width: 165, height: 110,
        depth: 0.06,
        rotate: -6,
        delay: 1
    },
];

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Mouse position tracking with smooth springs
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Gyroscope/device orientation for mobile
    const gyroX = useMotionValue(0);
    const gyroY = useMotionValue(0);
    const smoothGyroX = useSpring(gyroX, { stiffness: 30, damping: 30 });
    const smoothGyroY = useSpring(gyroY, { stiffness: 30, damping: 30 });

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax transforms
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const floatingOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    // Detect mobile and setup event listeners
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        // Mouse move handler for desktop
        const handleMouseMove = (e: MouseEvent) => {
            if (isMobile) return;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            mouseX.set((e.clientX - centerX) / centerX);
            mouseY.set((e.clientY - centerY) / centerY);
        };

        // Device orientation handler for mobile (gyroscope)
        const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
            if (!isMobile) return;
            const gamma = e.gamma || 0; // Left/right tilt (-90 to 90)
            const beta = e.beta || 0;   // Front/back tilt (-180 to 180)
            gyroX.set(Math.max(-1, Math.min(1, gamma / 30)));
            gyroY.set(Math.max(-1, Math.min(1, (beta - 45) / 30)));
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("deviceorientation", handleDeviceOrientation);

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("deviceorientation", handleDeviceOrientation);
        };
    }, [isMobile, mouseX, mouseY, gyroX, gyroY]);

    // Stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
        >
            {/* Background Video with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover"
                    poster="https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=1920&q=85"
                >
                    <source
                        src="https://videos.pexels.com/video-files/5875797/5875797-uhd_2560_1440_25fps.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
            </motion.div>

            {/* Floating Food Images - Mouse/Gyro Parallax */}
            <motion.div
                className="absolute inset-0 z-[5] pointer-events-none hidden md:block"
                style={{ opacity: floatingOpacity }}
            >
                {floatingImages.map((item, index) => {
                    // Calculate movement based on mouse/gyro and depth
                    const xMovement = useTransform(
                        isMobile ? smoothGyroX : smoothMouseX,
                        [-1, 1],
                        [-50 * item.depth * 100, 50 * item.depth * 100]
                    );
                    const yMovement = useTransform(
                        isMobile ? smoothGyroY : smoothMouseY,
                        [-1, 1],
                        [-30 * item.depth * 100, 30 * item.depth * 100]
                    );

                    return (
                        <motion.div
                            key={index}
                            className="absolute"
                            style={{
                                left: item.x,
                                top: item.y,
                                x: xMovement,
                                y: yMovement,
                            }}
                            initial={{ opacity: 0, scale: 0.8, rotate: item.rotate - 10 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: item.rotate,
                            }}
                            transition={{
                                opacity: { delay: item.delay + 0.3, duration: 0.8 },
                                scale: { delay: item.delay + 0.3, duration: 0.8, ease: "easeOut" },
                                rotate: { delay: item.delay + 0.3, duration: 0.8 }
                            }}
                        >
                            {/* Floating bob animation wrapper */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [item.rotate, item.rotate + 2, item.rotate]
                                }}
                                transition={{
                                    y: {
                                        duration: 4 + index * 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    rotate: {
                                        duration: 6 + index * 0.3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                            >
                                {/* Glass card container */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl
                                    bg-white/10 backdrop-blur-sm
                                    border border-white/20
                                    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                                ">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={item.width}
                                        height={item.height}
                                        className="object-cover"
                                        sizes="200px"
                                    />
                                    {/* Glass shine overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Content with Scroll-Driven Fade & Scale */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                style={{
                    y: contentY,
                    opacity: contentOpacity,
                    scale: contentScale
                }}
            >
                {/* Staggered Content Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Premium Badge - Apple Liquid Glass Style */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-block mb-8"
                    >
                        <div className="group relative">
                            <div className="relative px-6 py-3.5 rounded-full inline-flex items-center gap-3 overflow-hidden
                                bg-white/10 backdrop-blur-xl
                                border border-white/30
                                shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(255,255,255,0.1)]
                                hover:bg-white/15 hover:border-white/40
                                transition-all duration-500
                            ">
                                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                                <motion.div
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.15, 1]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative z-10"
                                >
                                    <Sparkles
                                        className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                                        size={22}
                                        strokeWidth={2.5}
                                    />
                                </motion.div>

                                <span className="relative z-10 font-body font-semibold text-white text-sm md:text-base tracking-wide">
                                    90-Year-Old Family Recipe
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                        style={{
                            textShadow: "0 4px 20px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)"
                        }}
                    >
                        Adelaide's <span className="text-brand-red">Best</span> Schnitzel
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="font-body text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl mx-auto mb-10"
                        style={{
                            textShadow: "0 2px 8px rgba(0,0,0,0.5)"
                        }}
                    >
                        Crispy on the outside. Juicy on the inside.
                        <span className="block mt-1 text-amber-300 font-semibold">Unforgettable every time.</span>
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="/menu"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-h-[56px] min-w-[180px] shadow-lg shadow-red-600/30"
                        >
                            <span>View Menu</span>
                            <span className="text-lg">→</span>
                        </Link>

                        <Link
                            href="/book"
                            className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-4 
                                bg-white/10 backdrop-blur-xl
                                border border-white/30 
                                shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(255,255,255,0.1)]
                                text-white font-semibold rounded-xl 
                                transition-all duration-300 
                                hover:bg-white/20 hover:border-white/50 hover:scale-[1.02] 
                                active:scale-[0.98] min-h-[56px] min-w-[180px]
                                overflow-hidden
                            "
                        >
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                            <span className="relative z-10">Book a Table</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator with fade on scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{ opacity: contentOpacity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center text-white/70"
                >
                    <span className="text-sm font-body mb-1">Scroll to explore</span>
                    <ChevronDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
}
