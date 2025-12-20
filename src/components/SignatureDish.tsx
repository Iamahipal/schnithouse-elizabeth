"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

// Schnitzel types with colors
const schnitzelTypes = [
    { name: "Chicken", bgColor: "bg-amber-100", textColor: "text-amber-800" },
    { name: "Beef", bgColor: "bg-red-100", textColor: "text-red-800" },
    { name: "Pork", bgColor: "bg-orange-100", textColor: "text-orange-800" },
    { name: "Fish", bgColor: "bg-blue-100", textColor: "text-blue-800" },
    { name: "Veg", bgColor: "bg-green-100", textColor: "text-green-800" },
];

export default function SignatureDish() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image - HD professional schnitzel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=1200&q=90"
                                alt="Golden crispy schnitzel"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={90}
                            />
                        </div>
                        {/* Best Seller Badge */}
                        <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-red-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2 text-sm">
                            <Star size={16} fill="currentColor" />
                            Best Seller
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                            Our Signature
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
                            Savor Adelaide's{" "}
                            <span className="text-red-600">Best Schnitzel</span>
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                            Leveraging a cherished family recipe that's been passed down over
                            90 years, we craft the best Schnitzel in Adelaide, available in
                            five distinct varieties.
                        </p>

                        {/* Schnitzel Types - Clean chips */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                            {schnitzelTypes.map((type, index) => (
                                <motion.span
                                    key={type.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`${type.bgColor} ${type.textColor} rounded-full px-4 py-2 font-semibold text-sm`}
                                >
                                    {type.name}
                                </motion.span>
                            ))}
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            Each schnitzel is lovingly crumbed and cooked to perfection,
                            a testament to our culinary passion and commitment to quality.
                        </p>

                        <Link
                            href="/menu"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl transition-all duration-200 hover:bg-gray-900 hover:text-white min-h-[48px]"
                        >
                            View Full Menu
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
