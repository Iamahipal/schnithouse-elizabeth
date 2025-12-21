"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
            {/* Background Video - Autoplay, muted, looping for showcase */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=1920&q=85"
                >
                    {/* HD Premium restaurant/food video from Pexels */}
                    <source
                        src="https://videos.pexels.com/video-files/5875797/5875797-uhd_2560_1440_25fps.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                {/* Vignette for center focus */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Premium Badge - Apple Liquid Glass Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    className="inline-block mb-8"
                >
                    <div className="group relative">
                        {/* Apple Liquid Glass Container */}
                        <div className="relative px-6 py-3.5 rounded-full inline-flex items-center gap-3 overflow-hidden
                            bg-white/10 backdrop-blur-xl
                            border border-white/30
                            shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(255,255,255,0.1)]
                            hover:bg-white/15 hover:border-white/40
                            transition-all duration-500
                        ">
                            {/* Top highlight reflection - Apple style */}
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                            {/* Subtle inner glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />

                            {/* Animated shimmer sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                            {/* Shiny animated sparkle icon */}
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

                {/* Main Headline - Engaging, not just restaurant name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    style={{
                        textShadow: "0 4px 20px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)"
                    }}
                >
                    Adelaide's <span className="text-brand-red">Best</span> Schnitzel
                </motion.h1>

                {/* Tagline - Short and crispy */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="font-body text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl mx-auto mb-10"
                    style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.5)"
                    }}
                >
                    Crispy on the outside. Juicy on the inside.
                    <span className="block mt-1 text-amber-300 font-semibold">Unforgettable every time.</span>
                </motion.p>

                {/* CTAs - Consistent sizing, equal width, dynamic */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="/menu"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-h-[56px] min-w-[180px] shadow-lg shadow-red-600/30"
                    >
                        <span>View Menu</span>
                        <span className="text-lg">→</span>
                    </Link>
                    {/* Book a Table - Apple Liquid Glass Style */}
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
                        {/* Top highlight */}
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                        {/* Shimmer sweep on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                        <span className="relative z-10">Book a Table</span>
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
