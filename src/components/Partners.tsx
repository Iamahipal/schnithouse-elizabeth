"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "Coopers", emoji: "🍺", description: "Premium Beer" },
    { name: "Hofbräu München", emoji: "🍻", description: "German Brewery" },
    { name: "Coca-Cola", emoji: "🥤", description: "Beverages" },
    { name: "Galipo", emoji: "🌿", description: "Fresh Produce" },
];

export default function Partners() {
    return (
        <section className="py-14 md:py-16 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 text-sm uppercase tracking-widest mb-10 font-medium"
                >
                    Our Trusted Partners
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="group"
                        >
                            <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 hover:-translate-y-0.5">
                                {/* Larger emoji with hover effect */}
                                <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                                    {partner.emoji}
                                </span>

                                {/* Brand name - always visible */}
                                <div className="flex flex-col">
                                    <span className="font-display font-bold text-gray-800 text-sm md:text-base">
                                        {partner.name}
                                    </span>
                                    <span className="text-xs text-gray-500 hidden sm:block">
                                        {partner.description}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
