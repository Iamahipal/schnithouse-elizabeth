"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function SignatureDish() {
    return (
        <section className="section-padding bg-surface">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=800&q=80"
                                alt="Golden crispy schnitzel"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Badge */}
                        <div className="absolute -top-4 -right-4 bg-brand-red text-white px-4 py-2 rounded-full font-body font-bold shadow-lg flex items-center gap-2">
                            <Star size={16} fill="currentColor" />
                            Best Seller
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-red font-body font-semibold text-sm uppercase tracking-wider">
                            Our Signature
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
                            Savor Adelaide's{" "}
                            <span className="text-brand-red">Best Schnitzel</span>
                        </h2>
                        <p className="font-body text-muted text-lg leading-relaxed mb-6">
                            Leveraging a cherished family recipe that's been passed down over
                            90 years, we craft the best Schnitzel in Adelaide, available in
                            five distinct varieties.
                        </p>

                        {/* Varieties */}
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
                            {["Chicken", "Beef", "Pork", "Fish", "Veg"].map((type, index) => (
                                <motion.div
                                    key={type}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100"
                                >
                                    <span className="font-body font-semibold text-foreground text-sm">
                                        {type}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <p className="font-body text-muted leading-relaxed mb-8">
                            Each schnitzel is lovingly crumbed and cooked to perfection,
                            a testament to our culinary passion and commitment to quality.
                        </p>

                        <Link
                            href="/menu"
                            className="btn-outline group"
                        >
                            View Full Menu
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
