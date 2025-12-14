"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Flame, Star } from "lucide-react";
import Image from "next/image";

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
    popular?: boolean;
    spicy?: boolean;
}

const menuItems: MenuItem[] = [
    // Schnitzels
    {
        id: 1,
        name: "Classic Chicken Schnitzel",
        description: "Golden crispy chicken breast, served with chips and fresh garden salad",
        price: "$22.90",
        category: "schnitzels",
        image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=400&q=80",
        popular: true
    },
    {
        id: 2,
        name: "Beef Schnitzel",
        description: "Premium beef, hand-crumbed and golden fried to perfection",
        price: "$24.90",
        category: "schnitzels",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80"
    },
    {
        id: 3,
        name: "Pork Schnitzel",
        description: "Tender pork loin, traditional German recipe with secret spices",
        price: "$23.90",
        category: "schnitzels",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80"
    },
    {
        id: 4,
        name: "Fish Schnitzel",
        description: "Fresh fish fillet, lightly crumbed and pan-fried",
        price: "$25.90",
        category: "schnitzels",
        image: "https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&q=80"
    },
    {
        id: 5,
        name: "Vegetarian Schnitzel",
        description: "Plant-based schnitzel with herbs and aromatic spices",
        price: "$21.90",
        category: "schnitzels",
        image: "https://images.unsplash.com/photo-1585325701165-351af257f5f0?w=400&q=80",
        popular: true
    },
    // Burgers
    {
        id: 6,
        name: "Schnitzel Burger",
        description: "Crispy schnitzel, lettuce, tomato, special house sauce",
        price: "$18.90",
        category: "burgers",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
        popular: true
    },
    {
        id: 7,
        name: "Classic Beef Burger",
        description: "Angus beef patty with melted cheese and smoky bacon",
        price: "$17.90",
        category: "burgers",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80"
    },
    {
        id: 8,
        name: "Spicy Chicken Burger",
        description: "Grilled chicken breast with jalapeños and sriracha mayo",
        price: "$16.90",
        category: "burgers",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80",
        spicy: true
    },
    // Pizzas
    {
        id: 9,
        name: "Schnitzel Pizza",
        description: "Our famous schnitzel on a pizza base with premium mozzarella",
        price: "$26.90",
        category: "pizzas",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
        popular: true
    },
    {
        id: 10,
        name: "Margherita",
        description: "San Marzano tomatoes, fresh mozzarella, and basil",
        price: "$19.90",
        category: "pizzas",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80"
    },
    {
        id: 11,
        name: "Meat Lovers",
        description: "Beef, bacon, pepperoni, Italian sausage",
        price: "$24.90",
        category: "pizzas",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
        spicy: true
    },
];

const categories = [
    { id: "schnitzels", label: "Schnitzels", emoji: "🍖" },
    { id: "burgers", label: "Burgers", emoji: "🍔" },
    { id: "pizzas", label: "Pizzas", emoji: "🍕" },
];

export default function MenuGrid() {
    const [activeCategory, setActiveCategory] = useState("schnitzels");

    const filteredItems = menuItems.filter(
        (item) => item.category === activeCategory
    );

    return (
        <section id="menu" className="py-24 px-4 relative bg-[#0c0a09]">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(251, 191, 36, 0.03) 2px, transparent 0)',
                backgroundSize: '50px 50px'
            }} />

            {/* Ambient glows */}
            <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[250px] h-[250px] bg-orange-500/8 rounded-full blur-[100px] pointer-events-none" />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <span className="font-body text-amber-400 text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
                    Discover Our Flavors
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                    Our <span className="italic bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">Menu</span>
                </h2>
                <p className="font-body text-stone-400 max-w-md mx-auto text-lg">
                    5 signature schnitzels — Chicken, Beef, Pork, Fish & Vegetarian
                </p>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6" />
            </motion.div>

            {/* Category Tabs */}
            <div className="sticky top-20 md:top-28 z-40 py-4 mb-8">
                <div className="flex gap-3 overflow-x-auto hide-scrollbar max-w-xl mx-auto justify-center px-4">
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-2 px-6 py-3.5 rounded-full whitespace-nowrap transition-all duration-300 font-body font-semibold text-sm md:text-base backdrop-blur-xl ${activeCategory === category.id
                                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 shadow-lg shadow-amber-500/30"
                                    : "bg-white/10 border border-white/10 text-stone-300 hover:bg-white/15 hover:border-amber-400/30"
                                }`}
                        >
                            <span className="text-lg">{category.emoji}</span>
                            <span>{category.label}</span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Menu Grid with Images */}
            <div className="max-w-5xl mx-auto relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid gap-5 md:grid-cols-2"
                    >
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10"
                                style={{
                                    background: 'linear-gradient(160deg, rgba(28, 25, 23, 0.95) 0%, rgba(12, 10, 9, 0.98) 100%)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <div className="flex gap-4 p-4">
                                    {/* Food Image */}
                                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors duration-300 leading-tight">
                                                    {item.name}
                                                </h3>
                                                {item.popular && (
                                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30">
                                                        <Star size={10} fill="currentColor" strokeWidth={1.5} />
                                                        Popular
                                                    </span>
                                                )}
                                                {item.spicy && (
                                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                                                        <Flame size={10} strokeWidth={1.5} />
                                                        Spicy
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="font-body text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors line-clamp-2">
                                            {item.description}
                                        </p>
                                        {/* Price tag */}
                                        <div className="mt-3">
                                            <span className="font-display text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom accent line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/60 transition-all duration-500" />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
