"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

// Schnitzel types with premium styling
const schnitzelTypes = [
    { name: "Chicken", bgColor: "bg-amber-50", textColor: "text-amber-700", borderColor: "border-amber-200", hoverBg: "hover:bg-amber-100" },
    { name: "Beef", bgColor: "bg-red-50", textColor: "text-red-700", borderColor: "border-red-200", hoverBg: "hover:bg-red-100" },
    { name: "Pork", bgColor: "bg-orange-50", textColor: "text-orange-700", borderColor: "border-orange-200", hoverBg: "hover:bg-orange-100" },
    { name: "Fish", bgColor: "bg-blue-50", textColor: "text-blue-700", borderColor: "border-blue-200", hoverBg: "hover:bg-blue-100" },
    { name: "Veg", bgColor: "bg-green-50", textColor: "text-green-700", borderColor: "border-green-200", hoverBg: "hover:bg-green-100" },
];

export default function SignatureDish() {
    return (
        <section id="signature" className="section section-alt">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-sections items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="image-container aspect-square">
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
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4"
                        >
                            <div className="group relative">
                                {/* Outer glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 rounded-full opacity-70 blur-md animate-pulse" />

                                {/* Badge */}
                                <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg flex items-center gap-2 text-sm border border-red-400/30">
                                    {/* Glass highlight */}
                                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-full" />

                                    <Star size={16} fill="currentColor" className="relative z-10 text-amber-300 drop-shadow-sm" />
                                    <span className="relative z-10 drop-shadow-sm">Best Seller</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* Section Label */}
                        <span className="section-label">
                            <span className="section-label-line" />
                            Our Signature
                        </span>

                        {/* Section Title */}
                        <h2 className="section-title mb-6 leading-tight">
                            Savor Adelaide's{" "}
                            <span className="section-title-accent">Best Schnitzel</span>
                        </h2>

                        {/* Body Text */}
                        <p className="body-text mb-6">
                            Leveraging a cherished family recipe that's been passed down over
                            90 years, we craft the best Schnitzel in Adelaide, available in
                            five distinct varieties.
                        </p>

                        {/* Schnitzel Types - Pills */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            {schnitzelTypes.map((type, index) => (
                                <motion.span
                                    key={type.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`pill ${type.bgColor} ${type.textColor} ${type.borderColor} ${type.hoverBg}`}
                                >
                                    {type.name}
                                </motion.span>
                            ))}
                        </div>

                        <p className="body-text mb-8">
                            Each schnitzel is lovingly crumbed and cooked to perfection,
                            a testament to our culinary passion and commitment to quality.
                        </p>

                        {/* CTA Button - Unified */}
                        <Link href="/menu" className="btn-secondary group">
                            View Full Menu
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
