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
        <section id="about" className="py-16 md:py-24 bg-white scroll-mt-24">
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
                        <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm uppercase tracking-wider">
                            <span className="w-6 h-px bg-red-600/50" />
                            Welcome to Schnithouse
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
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

                        {/* Features Grid - Premium Cards */}
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
                                    <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        {/* Gradient icon background */}
                                        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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

                            {/* Premium Floating info card with glass effect */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-4 left-4 right-4"
                            >
                                <div className="relative bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/50">
                                    {/* Subtle glass highlight */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center text-white text-2xl shrink-0 shadow-lg">
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
