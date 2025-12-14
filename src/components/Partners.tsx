"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "Coopers", logo: "🍺" },
    { name: "Hofbräu München", logo: "🍻" },
    { name: "Coca-Cola", logo: "🥤" },
    { name: "Galipo", logo: "🌿" },
];

export default function Partners() {
    return (
        <section className="py-12 bg-surface border-y border-gray-100">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-body text-muted text-sm uppercase tracking-wider mb-8">
                        Our Partners
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                            >
                                <span className="text-3xl">{partner.logo}</span>
                                <span className="font-display text-lg font-semibold hidden sm:inline">
                                    {partner.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
