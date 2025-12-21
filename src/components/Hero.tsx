"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles, Utensils, Flame, Star } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// Floating food icons for parallax decoration
const floatingIcons = [
    { Icon: Utensils, x: "10%", y: "20%", delay: 0, size: 24 },
    { Icon: Flame, x: "85%", y: "25%", delay: 0.5, size: 20 },
    { Icon: Star, x: "15%", y: "70%", delay: 1, size: 18 },
    { Icon: Sparkles, x: "80%", y: "65%", delay: 1.5, size: 22 },
    { Icon: Utensils, x: "5%", y: "45%", delay: 2, size: 16 },
    { Icon: Star, x: "90%", y: "45%", delay: 2.5, size: 20 },
];

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

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
    const floatingOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 0]);

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

            {/* Floating Decorative Icons - Parallax Layers */}
            <motion.div
                className="absolute inset-0 z-[5] pointer-events-none"
                style={{ opacity: floatingOpacity }}
            >
                {floatingIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{ left: item.x, top: item.y }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 0.4,
                            scale: 1,
                            y: [0, -15, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            opacity: { delay: item.delay + 0.5, duration: 0.8 },
                            scale: { delay: item.delay + 0.5, duration: 0.8 },
                            y: {
                                delay: item.delay + 1,
                                duration: 4 + index * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            rotate: {
                                delay: item.delay + 1,
                                duration: 6 + index * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <item.Icon
                            size={item.size}
                            className="text-amber-400/60 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                        />
                    </motion.div>
                ))}
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
