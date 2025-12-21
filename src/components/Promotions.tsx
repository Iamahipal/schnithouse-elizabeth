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
        textColor: "text-white",
        subtextColor: "text-white/80",
        Icon: Utensils,
    },
    {
        title: "Wednesday Wings",
        subtitle: "Half Price All Day",
        description: "Dine-In Only • Conditions Apply",
        gradient: "from-amber-500 via-orange-500 to-amber-600",
        glowColor: "rgba(245, 158, 11, 0.4)",
        textColor: "text-white",
        subtextColor: "text-white/80",
        Icon: Utensils,
    },
    {
        title: "Lunch Specials",
        price: "From $12.90",
        time: "11AM to 3PM",
        description: "Dine-In Only",
        gradient: "from-rose-600 via-red-600 to-red-700",
        glowColor: "rgba(225, 29, 72, 0.4)",
        textColor: "text-white",
        subtextColor: "text-white/80",
        Icon: Sun,
    },
    {
        // ACCESSIBILITY FIX: Dark text on light yellow background
        title: "Happy Hour",
        subtitle: "Everyday 3PM-6PM",
        description: "$4 Imperial • $5 House Wine",
        gradient: "from-amber-300 via-yellow-300 to-amber-400",
        glowColor: "rgba(234, 179, 8, 0.4)",
        textColor: "text-amber-900", // Dark text for WCAG compliance
        subtextColor: "text-amber-800/80",
        Icon: Beer,
    },
];

export default function Promotions() {
    return (
        <section id="promotions" className="section bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    {/* Section Label - Centered */}
                    <span className="section-label justify-center mb-3">
                        <span className="section-label-line" />
                        Special Offers
                        <span className="section-label-line" />
                    </span>
                    <h2 className="section-title">
                        Promotions
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-cards">
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

                                {/* Glass overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />

                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                                {/* Content - Unified padding */}
                                <div className={`relative p-6 h-full flex flex-col ${promo.textColor}`}>
                                    {/* Icon - Unified container */}
                                    <div className={`icon-container-md ${promo.textColor === 'text-amber-900' ? 'bg-amber-900/20 border-amber-900/20' : 'bg-white/20 border-white/20'} backdrop-blur-sm shadow-inner border mb-4`}>
                                        <promo.Icon size={22} className="drop-shadow-sm" />
                                    </div>

                                    <h3 className="font-display text-lg font-bold mb-1.5 drop-shadow-sm">
                                        {promo.title}
                                    </h3>

                                    {promo.subtitle && (
                                        <p className={`${promo.subtextColor} font-semibold text-sm mb-2 drop-shadow-sm`}>
                                            {promo.subtitle}
                                        </p>
                                    )}

                                    {promo.price && (
                                        <p className="font-display text-3xl font-bold mb-1 drop-shadow-md tracking-tight">
                                            {promo.price}
                                        </p>
                                    )}

                                    {promo.time && (
                                        <p className={`${promo.subtextColor} text-sm mb-2 flex items-center gap-1.5`}>
                                            <Clock size={14} className="opacity-80" />
                                            {promo.time}
                                        </p>
                                    )}

                                    <p className={`${promo.subtextColor} text-sm mt-auto`}>
                                        {promo.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA - Unified button style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link href="/book" className="btn-outline-red group">
                        Book Your Table Now
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
