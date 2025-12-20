"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

// Schnitzel types with their colors
const schnitzelTypes = [
    { name: "Chicken", color: "bg-amber-100 text-amber-800" },
    { name: "Beef", color: "bg-red-100 text-red-800" },
    { name: "Pork", color: "bg-orange-100 text-orange-800" },
    { name: "Fish", color: "bg-blue-100 text-blue-800" },
    { name: "Veg", color: "bg-green-100 text-green-800" },
];

export default function SignatureDish() {
    const imageRef = useRef<HTMLDivElement>(null);

    // Mouse position for 3D tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animations
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current) return;
        const rect = imageRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section className="section-padding bg-surface">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image with 3D tilt effect */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                            perspective: 1000,
                        }}
                        className="relative cursor-pointer"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-premium-lg shine">
                            <Image
                                src="https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=800&q=80"
                                alt="Golden crispy schnitzel"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        {/* Animated Badge */}
                        <motion.div
                            className="absolute -top-3 -right-3 md:-top-4 md:-right-4 gradient-red text-white px-4 py-2 rounded-full font-body font-bold shadow-lg flex items-center gap-2"
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Star size={16} fill="currentColor" />
                            <span className="text-sm">Best Seller</span>
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-brand-red font-body font-semibold text-sm uppercase tracking-wider">
                            Our Signature
                        </span>
                        <h2 className="font-display text-fluid-4xl font-bold text-foreground mt-2 mb-6">
                            Savor Adelaide's{" "}
                            <span className="text-brand-red">Best Schnitzel</span>
                        </h2>
                        <p className="font-body text-muted text-fluid-base leading-relaxed mb-6">
                            Leveraging a cherished family recipe that's been passed down over
                            90 years, we craft the best Schnitzel in Adelaide, available in
                            five distinct varieties.
                        </p>

                        {/* Varieties with color-coded chips */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {schnitzelTypes.map((type, index) => (
                                <motion.div
                                    key={type.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className={`${type.color} rounded-full px-4 py-2 font-body font-semibold text-sm shadow-sm cursor-default transition-shadow hover:shadow-md min-h-[40px] flex items-center`}
                                >
                                    {type.name}
                                </motion.div>
                            ))}
                        </div>

                        <p className="font-body text-muted leading-relaxed mb-8">
                            Each schnitzel is lovingly crumbed and cooked to perfection,
                            a testament to our culinary passion and commitment to quality.
                        </p>

                        <Link
                            href="/menu"
                            className="btn-outline group min-h-[48px]"
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

