"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const promotions = [
    {
        title: "Monday Schnitzel Deal",
        price: "$19.90",
        time: "3PM to Close",
        description: "Dine-In Only",
        gradient: "from-red-600 to-red-700",
        icon: "🍖",
    },
    {
        title: "Wednesday Wings",
        subtitle: "Half Price All Day",
        description: "Dine-In Only • Conditions Apply",
        gradient: "from-amber-500 to-orange-500",
        icon: "🍗",
    },
    {
        title: "Lunch Specials",
        price: "From $12.90",
        time: "11AM to 3PM",
        description: "Dine-In Only",
        gradient: "from-red-700 to-red-800",
        icon: "☀️",
    },
    {
        title: "Happy Hour",
        subtitle: "Everyday 3PM-6PM",
        description: "$4 Imperial • $5 House Wine • $5 Base Spirit",
        gradient: "from-amber-500 to-yellow-500",
        icon: "🍺",
    },
];

export default function Promotions() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <span className="text-brand-red font-body font-semibold text-sm uppercase tracking-wider">
                        Special Offers
                    </span>
                    <h2 className="font-display text-fluid-4xl font-bold text-foreground mt-2">
                        Promotions
                    </h2>
                </motion.div>

                {/* Cards Grid - Horizontal scroll on mobile */}
                <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory">
                    {promotions.map((promo, index) => (
                        <motion.div
                            key={promo.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.2 }
                            }}
                            className="flex-shrink-0 w-[280px] md:w-auto snap-start"
                        >
                            <div className={`bg-gradient-to-br ${promo.gradient} rounded-2xl p-6 h-full text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}>
                                {/* Subtle shine overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" style={{ transition: "transform 0.7s ease" }} />

                                {/* Icon */}
                                <div className="text-3xl mb-3">{promo.icon}</div>

                                <h3 className="font-display text-lg md:text-xl font-bold mb-2">
                                    {promo.title}
                                </h3>
                                {promo.subtitle && (
                                    <p className="font-body text-white/90 font-semibold mb-2">
                                        {promo.subtitle}
                                    </p>
                                )}
                                {promo.price && (
                                    <p className="font-display text-2xl md:text-3xl font-bold mb-1">
                                        {promo.price}
                                    </p>
                                )}
                                {promo.time && (
                                    <p className="font-body text-white/80 text-sm mb-2">
                                        {promo.time}
                                    </p>
                                )}
                                <p className="font-body text-white/70 text-sm">
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
                    className="text-center mt-8 md:mt-10"
                >
                    <Link
                        href="/book"
                        className="inline-flex items-center gap-2 text-brand-red font-body font-semibold hover:gap-3 transition-all duration-300 min-h-[44px]"
                    >
                        Book Your Table Now
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

