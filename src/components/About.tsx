"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Users, Wallet } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: UtensilsCrossed,
        title: "Healthy & Tasty",
        description: "Fresh ingredients, cooked to perfection daily",
    },
    {
        icon: Users,
        title: "Friendly Staff",
        description: "Professional service with a warm smile",
    },
    {
        icon: Wallet,
        title: "Affordable",
        description: "Premium quality at family-friendly prices",
    },
];

export default function About() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Content - No horizontal scroll */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="order-2 lg:order-1"
                    >
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                            Welcome to Schnithouse
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
                            A Unique Adelaide{" "}
                            <span className="text-red-600">Dining Experience</span>
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                            As a prominent name among the best places to eat in Adelaide,
                            Schnithouse Elizabeth is more than just a food haven. We've carved
                            a niche as a family-friendly destination where every member of the
                            family, regardless of age, can have an enriching and enjoyable time.
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                            Our Little Schnitters activity packs keep the young ones entertained,
                            allowing adults to savor their meal and perhaps enjoy a sip from our
                            extensive collection of local and imported craft beers.
                        </p>

                        {/* Features Grid - Vertical on mobile, horizontal on larger screens */}
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
                                    className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-xl shrink-0">
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
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image - HD quality */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=90"
                                alt="Schnithouse restaurant interior"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={90}
                            />
                            {/* Floating info card */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white text-2xl shrink-0">
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
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
