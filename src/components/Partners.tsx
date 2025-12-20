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
        <section className="py-10 md:py-12 bg-surface border-y border-gray-100">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="font-body text-muted text-sm uppercase tracking-wider mb-6 md:mb-8">
                        Our Partners
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 lg:gap-16">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                className="flex items-center gap-2 md:gap-3 text-muted hover:text-foreground transition-colors cursor-default"
                            >
                                <span className="text-2xl md:text-3xl">{partner.logo}</span>
                                <span className="font-display text-base md:text-lg font-semibold hidden sm:inline">
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

