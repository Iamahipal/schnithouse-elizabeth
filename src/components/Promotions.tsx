"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Utensils, Sun, Beer } from "lucide-react";
import Link from "next/link";

const promotions = [
    {
        title: "Monday Schnitzel Deal",
        price: "$19.90",
        time: "3PM to Close",
        description: "Dine-In Only",
        gradient: "from-red-600 via-red-500 to-rose-600",
        glowColor: "rgba(220, 38, 38, 0.4)",
        Icon: Utensils,
    },
    {
        title: "Wednesday Wings",
        subtitle: "Half Price All Day",
        description: "Dine-In Only • Conditions Apply",
        gradient: "from-amber-500 via-orange-500 to-amber-600",
        glowColor: "rgba(245, 158, 11, 0.4)",
        Icon: Utensils,
    },
    {
        title: "Lunch Specials",
        price: "From $12.90",
        time: "11AM to 3PM",
        description: "Dine-In Only",
        gradient: "from-rose-600 via-red-600 to-red-700",
        glowColor: "rgba(225, 29, 72, 0.4)",
        Icon: Sun,
    },
    {
        title: "Happy Hour",
        subtitle: "Everyday 3PM-6PM",
        description: "$4 Imperial • $5 House Wine",
        gradient: "from-amber-400 via-yellow-500 to-amber-500",
        glowColor: "rgba(234, 179, 8, 0.4)",
        Icon: Beer,
    },
];

export default function Promotions() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
                        <span className="w-8 h-px bg-red-600/50" />
                        Special Offers
                        <span className="w-8 h-px bg-red-600/50" />
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                        Promotions
                    </h2>
                </motion.div>

                {/* Cards Grid - Premium Glassmorphism */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {promotions.map((promo, index) => (
                        <motion.div
                            key={promo.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="group"
                        >
                            <div
                                className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                                style={{
                                    boxShadow: `0 10px 40px -10px ${promo.glowColor}`,
                                }}
                            >
                                {/* Gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${promo.gradient}`} />

                                {/* Glass overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />

                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                                {/* Content */}
                                <div className="relative p-6 h-full text-white flex flex-col">
                                    {/* Icon with glass background */}
                                    <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 shadow-inner border border-white/20">
                                        <promo.Icon size={22} className="drop-shadow-sm" />
                                    </div>

                                    <h3 className="font-display text-lg font-bold mb-1.5 drop-shadow-sm">
                                        {promo.title}
                                    </h3>

                                    {promo.subtitle && (
                                        <p className="text-white/95 font-semibold text-sm mb-2 drop-shadow-sm">
                                            {promo.subtitle}
                                        </p>
                                    )}

                                    {promo.price && (
                                        <p className="font-display text-3xl font-bold mb-1 drop-shadow-md tracking-tight">
                                            {promo.price}
                                        </p>
                                    )}

                                    {promo.time && (
                                        <p className="text-white/80 text-sm mb-2 flex items-center gap-1.5">
                                            <Clock size={14} className="opacity-80" />
                                            {promo.time}
                                        </p>
                                    )}

                                    <p className="text-white/70 text-sm mt-auto">
                                        {promo.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/book"
                        className="group inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors min-h-[44px]"
                    >
                        Book Your Table Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
