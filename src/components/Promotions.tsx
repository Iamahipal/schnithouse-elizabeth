"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const promotions = [
    {
        title: "Monday Schnitzel Deal",
        price: "$19.90",
        time: "3PM to Close",
        description: "Dine-In Only",
        color: "bg-red-600",
    },
    {
        title: "Wednesday Wings",
        subtitle: "Half Price All Day",
        description: "Dine-In Only • Conditions Apply",
        color: "bg-yellow-500",
    },
    {
        title: "Lunch Specials",
        price: "From $12.90",
        time: "11AM to 3PM",
        description: "Dine-In Only",
        color: "bg-red-700",
    },
    {
        title: "Happy Hour",
        subtitle: "Everyday 3PM-6PM",
        description: "$4 Imperial • $5 House Wine • $5 Base Spirit",
        color: "bg-amber-500",
    },
];

export default function Promotions() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-brand-red font-body font-semibold text-sm uppercase tracking-wider">
                        Special Offers
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                        Promotions
                    </h2>
                </motion.div>

                {/* Horizontal Scroll on Mobile */}
                <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4">
                    {promotions.map((promo, index) => (
                        <motion.div
                            key={promo.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0 w-64 md:w-auto"
                        >
                            <div className={`${promo.color} rounded-2xl p-6 h-full text-white shadow-lg hover:shadow-xl transition-shadow`}>
                                <h3 className="font-display text-xl font-bold mb-2">
                                    {promo.title}
                                </h3>
                                {promo.subtitle && (
                                    <p className="font-body text-white/90 font-semibold mb-2">
                                        {promo.subtitle}
                                    </p>
                                )}
                                {promo.price && (
                                    <p className="font-display text-3xl font-bold mb-1">
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
                    className="text-center mt-10"
                >
                    <a
                        href="/book"
                        className="inline-flex items-center gap-2 text-brand-red font-body font-semibold hover:underline"
                    >
                        Book Your Table Now
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
