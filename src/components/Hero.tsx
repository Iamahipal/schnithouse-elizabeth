"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
                    alt="Schnithouse restaurant interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-6"
                >
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-body text-sm">
                        ✨ 90-Year-Old Family Recipe
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
                >
                    Schnithouse
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-display text-2xl md:text-3xl text-white/90 italic mb-6"
                >
                    Elizabeth
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="font-body text-lg md:text-xl text-white/80 max-w-lg mx-auto mb-10"
                >
                    "A gastronomic experience that is second to none!"
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/menu"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-lg transition-all duration-300 hover:bg-brand-red-dark hover:shadow-xl hover:scale-105"
                    >
                        View Menu
                    </Link>
                    <Link
                        href="/book"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-black font-semibold rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105"
                    >
                        Book a Table
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-white/60"
                >
                    <span className="text-sm font-body mb-2">Scroll</span>
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
}
