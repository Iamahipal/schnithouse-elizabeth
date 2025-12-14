"use client";

import { motion } from "framer-motion";
import { Coffee, Users, Coins } from "lucide-react";
import Image from "next/image";

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
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <span className="text-brand-red font-body font-semibold text-sm uppercase tracking-wider">
                            Welcome to Schnithouse
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
                            A Unique Adelaide{" "}
                            <span className="text-brand-red">Dining Experience</span>
                        </h2>
                        <p className="font-body text-muted text-lg leading-relaxed mb-8">
                            As a prominent name among the best places to eat in Adelaide,
                            Schnithouse Elizabeth is more than just a food haven. We've carved
                            a niche as a family-friendly destination where every member of the
                            family, regardless of age, can have an enriching and enjoyable time.
                        </p>
                        <p className="font-body text-muted text-lg leading-relaxed mb-10">
                            Our Little Schnitters activity packs keep the young ones entertained,
                            allowing adults to savor their meal and perhaps enjoy a sip from our
                            extensive collection of local and imported craft beers.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center sm:text-left"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red-light rounded-xl mb-3">
                                        <feature.icon className="text-brand-red" size={24} />
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

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                                alt="Schnithouse restaurant interior"
                                fill
                                className="object-cover"
                            />
                            {/* Floating card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-brand-red rounded-xl flex items-center justify-center text-white text-2xl">
                                        🍖
                                    </div>
                                    <div>
                                        <p className="font-display font-bold text-foreground">
                                            5 Types of Schnitzels
                                        </p>
                                        <p className="font-body text-sm text-muted">
                                            Chicken • Beef • Pork • Fish • Veg
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
