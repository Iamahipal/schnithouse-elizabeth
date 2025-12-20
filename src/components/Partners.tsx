"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "Coopers", emoji: "🍺" },
    { name: "Hofbräu München", emoji: "🍻" },
    { name: "Coca-Cola", emoji: "🥤" },
    { name: "Galipo", emoji: "🌿" },
];

export default function Partners() {
    return (
        <section className="py-12 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
                    Our Partners
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <span className="text-2xl">{partner.emoji}</span>
                            <span className="font-display font-semibold hidden sm:inline">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
