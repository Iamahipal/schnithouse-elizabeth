"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Users, Coins } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const features = [
    {
        icon: Coffee,
        title: "Healthy & Tasty",
        description: "Fresh ingredients, cooked to perfection daily",
    },
    {
        icon: Users,
        title: "Friendly Staff",
        description: "Professional service with a warm smile",
    },
    {
        icon: Coins,
        title: "Affordable",
        description: "Premium quality at family-friendly prices",
    },
];

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

    return (
        <section ref={containerRef} className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="order-2 lg:order-1"
                    >
                        <span className="text-brand-red font-body font-semibold text-sm uppercase tracking-wider">
                            Welcome to Schnithouse
                        </span>
                        <h2 className="font-display text-fluid-4xl font-bold text-foreground mt-2 mb-6">
                            A Unique Adelaide{" "}
                            <span className="text-brand-red">Dining Experience</span>
                        </h2>
                        <p className="font-body text-muted text-fluid-base leading-relaxed mb-6">
                            As a prominent name among the best places to eat in Adelaide,
                            Schnithouse Elizabeth is more than just a food haven. We've carved
                            a niche as a family-friendly destination where every member of the
                            family, regardless of age, can have an enriching and enjoyable time.
                        </p>
                        <p className="font-body text-muted text-fluid-base leading-relaxed mb-10">
                            Our Little Schnitters activity packs keep the young ones entertained,
                            allowing adults to savor their meal and perhaps enjoy a sip from our
                            extensive collection of local and imported craft beers.
                        </p>

                        {/* Features Grid with glassmorphism */}
                        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.15,
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{
                                        y: -4,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="text-center sm:text-left p-4 rounded-xl bg-surface/50 border border-gray-100 hover:shadow-premium transition-all duration-300"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 gradient-red rounded-xl mb-3 shadow-md">
                                        <feature.icon className="text-white" size={22} />
                                    </div>
                                    <h3 className="font-display font-bold text-foreground mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="font-body text-sm text-muted">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image with parallax */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="order-1 lg:order-2"
                        style={{ scale: imageScale, opacity: imageOpacity }}
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-premium-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                                alt="Schnithouse restaurant interior"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Floating card with liquid glass */}
                            <motion.div
                                className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 liquid-glass rounded-xl p-4 shadow-lg"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 md:w-16 md:h-16 gradient-red rounded-xl flex items-center justify-center text-white text-2xl shadow-md shrink-0">
                                        🍖
                                    </div>
                                    <div>
                                        <p className="font-display font-bold text-white text-sm md:text-base">
                                            5 Types of Schnitzels
                                        </p>
                                        <p className="font-body text-xs md:text-sm text-white/80">
                                            Chicken • Beef • Pork • Fish • Veg
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

