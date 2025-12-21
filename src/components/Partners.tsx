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
        // Reduced vertical padding as per audit recommendation
        <section className="py-8 md:py-10 bg-gray-50/50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
                    <span className="text-gray-400 text-xs uppercase tracking-widest font-medium">
                        Partners
                    </span>

                    <div className="hidden sm:block w-px h-6 bg-gray-200" />

                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors group"
                        >
                            {/* Grayscale effect, color on hover */}
                            <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300">
                                {partner.emoji}
                            </span>
                            <span className="font-medium text-sm hidden sm:inline">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
