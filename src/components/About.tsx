"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Users, Wallet } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: UtensilsCrossed,
        title: "Healthy & Tasty",
        description: "Fresh ingredients, cooked to perfection daily",
        gradient: "from-red-500 to-rose-600",
    },
    {
        icon: Users,
        title: "Friendly Staff",
        description: "Professional service with a warm smile",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        icon: Wallet,
        title: "Affordable",
        description: "Premium quality at family-friendly prices",
        gradient: "from-green-500 to-emerald-600",
    },
];

export default function About() {
    return (
        <section id="about" className="section bg-white">
            <div className="container-custom">
                {/* PREMIUM: Generous gap between text and image */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="order-2 lg:order-1"
                    >
                        {/* Section Label */}
                        <span className="section-label">
                            <span className="section-label-line" />
                            Welcome to Schnithouse
                        </span>

                        {/* Section Title */}
                        <h2 className="section-title mb-6 leading-tight">
                            A Unique Adelaide{" "}
                            <span className="section-title-accent">Dining Experience</span>
                        </h2>

                        {/* Body Text */}
                        <p className="body-text mb-4">
                            As a prominent name among the best places to eat in Adelaide,
                            Schnithouse Elizabeth is more than just a food haven. We've carved
                            a niche as a family-friendly destination where every member of the
                            family, regardless of age, can have an enriching and enjoyable time.
                        </p>
                        <p className="body-text mb-8">
                            Our Little Schnitters activity packs keep the young ones entertained,
                            allowing adults to savor their meal and perhaps enjoy a sip from our
                            extensive collection of local and imported craft beers.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.4
                                    }}
                                    className="group"
                                >
                                    <div className="card-feature flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3">
                                        {/* Icon Container - Unified size */}
                                        <div className={`icon-container-md bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <feature.icon className="text-white" size={24} />
                                        </div>
                                        <div className="sm:text-center">
                                            <h3 className="font-display font-bold text-gray-900 mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="image-container aspect-4-5 sm:aspect-3-4">
                            <Image
                                src="/schnithouse-building.jpg"
                                alt="Schnithouse Elizabeth restaurant exterior"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={90}
                            />

                            {/* Floating Info Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-4 left-4 right-4"
                            >
                                <div className="relative bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/50">
                                    {/* Glass highlight */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                                    <div className="flex items-center gap-4">
                                        <div className="icon-container-lg bg-gradient-to-br from-red-500 to-rose-600 text-white text-2xl shadow-lg">
                                            🍖
                                        </div>
                                        <div>
                                            <p className="font-display font-bold text-gray-900 text-sm sm:text-base">
                                                5 Types of Schnitzels
                                            </p>
                                            <p className="text-xs sm:text-sm text-gray-600">
                                                Chicken • Beef • Pork • Fish • Veg
                                            </p>
                                        </div>
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
