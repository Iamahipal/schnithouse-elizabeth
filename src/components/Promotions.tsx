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
        gradient: "from-red-600 to-red-700",
        Icon: Utensils,
    },
    {
        title: "Wednesday Wings",
        subtitle: "Half Price All Day",
        description: "Dine-In Only • Conditions Apply",
        gradient: "from-amber-500 to-orange-500",
        Icon: Utensils,
    },
    {
        title: "Lunch Specials",
        price: "From $12.90",
        time: "11AM to 3PM",
        description: "Dine-In Only",
        gradient: "from-red-700 to-red-800",
        Icon: Sun,
    },
    {
        title: "Happy Hour",
        subtitle: "Everyday 3PM-6PM",
        description: "$4 Imperial • $5 House Wine",
        gradient: "from-amber-500 to-yellow-500",
        Icon: Beer,
    },
];

export default function Promotions() {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                        Special Offers
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                        Promotions
                    </h2>
                </motion.div>

                {/* Cards Grid - Stacked on mobile */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {promotions.map((promo, index) => (
                        <motion.div
                            key={promo.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <div
                                className={`bg-gradient-to-br ${promo.gradient} rounded-2xl p-6 h-full text-white shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]`}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                                    <promo.Icon size={20} />
                                </div>

                                <h3 className="font-display text-lg font-bold mb-2">
                                    {promo.title}
                                </h3>
                                {promo.subtitle && (
                                    <p className="text-white/90 font-semibold mb-2">
                                        {promo.subtitle}
                                    </p>
                                )}
                                {promo.price && (
                                    <p className="font-display text-2xl font-bold mb-1">
                                        {promo.price}
                                    </p>
                                )}
                                {promo.time && (
                                    <p className="text-white/80 text-sm mb-2 flex items-center gap-1">
                                        <Clock size={14} />
                                        {promo.time}
                                    </p>
                                )}
                                <p className="text-white/70 text-sm">
                                    {promo.description}
                                </p>
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
                    className="text-center mt-10"
                >
                    <Link
                        href="/book"
                        className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors min-h-[44px]"
                    >
                        Book Your Table Now
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
