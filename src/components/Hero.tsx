"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Floating bokeh/orb elements for visual interest
const FloatingOrbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
            className="absolute w-32 h-32 rounded-full bg-brand-red/20 blur-3xl"
            style={{ top: "20%", left: "10%" }}
            animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute w-48 h-48 rounded-full bg-orange-500/10 blur-3xl"
            style={{ top: "60%", right: "15%" }}
            animate={{
                y: [0, 15, 0],
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
            className="absolute w-24 h-24 rounded-full bg-white/10 blur-2xl"
            style={{ bottom: "30%", left: "20%" }}
            animate={{
                y: [0, -10, 0],
                opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
    </div>
);

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax effect for background
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
        >
            {/* Parallax Background Image */}
            <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
                <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
                    alt="Schnithouse restaurant interior"
                    fill
                    className="object-cover scale-110"
                    priority
                    sizes="100vw"
                />
                <div className="image-overlay-hero" />
            </motion.div>

            {/* Floating Orbs */}
            <FloatingOrbs />

            {/* Content */}
            <motion.div
                style={{ opacity: contentOpacity }}
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
                {/* Liquid Glass Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    className="inline-block mb-6"
                >
                    <span className="px-5 py-2.5 liquid-glass rounded-full text-white font-body text-sm md:text-base inline-flex items-center gap-2">
                        <span className="animate-pulse">✨</span>
                        90-Year-Old Family Recipe
                    </span>
                </motion.div>

                {/* Headline with staggered animation */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
                    className="font-display text-fluid-5xl font-bold text-white mb-3 drop-shadow-lg"
                >
                    Schnithouse
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
                    className="font-display text-fluid-2xl text-white/90 italic mb-6"
                >
                    Elizabeth
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
                    className="font-body text-fluid-lg text-white/80 max-w-lg mx-auto mb-10"
                >
                    "A gastronomic experience that is second to none!"
                </motion.p>

                {/* CTAs with glow effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 80 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/menu"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 gradient-red text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-glow-red hover:scale-105 active:scale-[0.98] min-h-[48px]"
                    >
                        <span>View Menu</span>
                        <motion.span
                            className="inline-block"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </Link>
                    <Link
                        href="/book"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 liquid-glass text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-[0.98] min-h-[48px]"
                    >
                        Book a Table
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center text-white/60"
                >
                    <span className="text-sm font-body mb-2">Scroll</span>
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
}

