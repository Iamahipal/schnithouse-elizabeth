"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
            {/* Background Image - Static for performance */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
                    alt="Fine dining restaurant ambiance"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={85}
                />
                {/* Stronger gradient overlay (25-35% black) for text legibility - Audit recommendation */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                {/* Additional vignette for focus on center text */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Premium Badge with Liquid Glass Effect - NO SVG FILTER */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    className="inline-block mb-8"
                >
                    <div className="group relative">
                        {/* Outer glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 rounded-full opacity-60 blur-lg group-hover:opacity-80 transition-opacity duration-500" />

                        {/* Main badge container with liquid glass effect */}
                        <div className="relative px-6 py-3.5 rounded-full inline-flex items-center gap-3 overflow-hidden backdrop-blur-md border border-amber-300/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_20px_rgba(245,158,11,0.3)]">
                            {/* Premium gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/95 via-amber-300/95 to-amber-400/95" />

                            {/* Glass highlight on top */}
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-full" />

                            {/* Shimmer animation effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                            {/* Inner glow */}
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]" />

                            <Sparkles className="relative z-10 text-amber-800 drop-shadow-sm" size={20} />
                            <span className="relative z-10 font-body font-bold text-amber-900 text-sm md:text-base tracking-wide drop-shadow-sm">
                                90-Year-Old Family Recipe
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Headline - High contrast with text shadow */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
                    style={{
                        textShadow: "0 4px 20px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)"
                    }}
                >
                    Schnithouse
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="font-display text-2xl sm:text-3xl md:text-4xl text-white italic mb-6"
                    style={{
                        textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                    }}
                >
                    Elizabeth
                </motion.p>

                {/* Tagline - Now clearly visible */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="font-body text-lg sm:text-xl md:text-2xl text-white max-w-lg mx-auto mb-10"
                    style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.5)"
                    }}
                >
                    "A gastronomic experience that is second to none!"
                </motion.p>

                {/* CTAs - Clean and accessible */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/menu"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-h-[52px] shadow-lg shadow-red-600/30"
                    >
                        <span>View Menu</span>
                        <span className="text-lg">→</span>
                    </Link>
                    <Link
                        href="/book"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] min-h-[52px]"
                    >
                        Book a Table
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center text-white/70"
                >
                    <span className="text-sm font-body mb-1">Scroll</span>
                    <ChevronDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
}
