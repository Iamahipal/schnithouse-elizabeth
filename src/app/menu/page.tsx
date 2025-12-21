"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Flame, Star, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    menuType: string;
    image: string;
    popular?: boolean;
    spicy?: boolean;
}

const menuItems: MenuItem[] = [
    // Main Menu - Schnitzels
    { id: 1, name: "Classic Chicken Schnitzel", description: "Golden crispy chicken breast with chips and salad", price: "$22.90", category: "schnitzels", menuType: "main", image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=400&q=80", popular: true },
    { id: 2, name: "Beef Schnitzel", description: "Premium beef, hand-crumbed and golden fried", price: "$24.90", category: "schnitzels", menuType: "main", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80" },
    { id: 3, name: "Pork Schnitzel", description: "Tender pork loin with traditional German spices", price: "$23.90", category: "schnitzels", menuType: "main", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80" },
    { id: 4, name: "Fish Schnitzel", description: "Fresh fish fillet, lightly crumbed", price: "$25.90", category: "schnitzels", menuType: "main", image: "https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&q=80" },
    { id: 5, name: "Vegetarian Schnitzel", description: "Plant-based with herbs and spices", price: "$21.90", category: "schnitzels", menuType: "main", image: "https://images.unsplash.com/photo-1585325701165-351af257f5f0?w=400&q=80" },
    // Main Menu - Burgers
    { id: 6, name: "Schnitzel Burger", description: "Crispy schnitzel, lettuce, tomato, special sauce", price: "$18.90", category: "burgers", menuType: "main", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", popular: true },
    { id: 7, name: "Classic Beef Burger", description: "Angus beef with melted cheese and bacon", price: "$17.90", category: "burgers", menuType: "main", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80" },
    { id: 8, name: "Spicy Chicken Burger", description: "Grilled chicken with jalapeños and sriracha", price: "$16.90", category: "burgers", menuType: "main", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80", spicy: true },
    // Main Menu - Pizzas
    { id: 9, name: "Schnitzel Pizza", description: "Our famous schnitzel on pizza base", price: "$26.90", category: "pizzas", menuType: "main", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", popular: true },
    { id: 10, name: "Margherita", description: "San Marzano tomatoes, fresh mozzarella, basil", price: "$19.90", category: "pizzas", menuType: "main", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
    { id: 11, name: "Meat Lovers", description: "Beef, bacon, pepperoni, Italian sausage", price: "$24.90", category: "pizzas", menuType: "main", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80", spicy: true },
    // Lunch Menu
    { id: 12, name: "Lunch Schnitzel", description: "Smaller portion schnitzel with chips", price: "$14.90", category: "schnitzels", menuType: "lunch", image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=400&q=80", popular: true },
    { id: 13, name: "Lunch Burger", description: "Mini burger with fries", price: "$12.90", category: "burgers", menuType: "lunch", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
    { id: 14, name: "Pasta of the Day", description: "Chef's special pasta", price: "$13.90", category: "pasta", menuType: "lunch", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80" },
    // Drinks
    { id: 15, name: "Hofbräu Original", description: "500ml German lager", price: "$12.00", category: "beer", menuType: "drinks", image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80", popular: true },
    { id: 16, name: "Coopers Pale Ale", description: "375ml local craft", price: "$9.00", category: "beer", menuType: "drinks", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80" },
    { id: 17, name: "House Red Wine", description: "Glass", price: "$8.00", category: "wine", menuType: "drinks", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80" },
    { id: 18, name: "House White Wine", description: "Glass", price: "$8.00", category: "wine", menuType: "drinks", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&q=80" },
];

const menuTypes = [
    { id: "main", label: "Main Menu", subtitle: "After 3pm" },
    { id: "lunch", label: "Lunch Menu", subtitle: "Mon-Thu 11am-3pm" },
    { id: "drinks", label: "Drinks", subtitle: "All day" },
];

export default function MenuPage() {
    const [activeMenu, setActiveMenu] = useState("main");

    const filteredItems = menuItems.filter((item) => item.menuType === activeMenu);

    // Group by category
    const groupedItems = filteredItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, MenuItem[]>);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
                    alt="Menu hero"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-6xl font-bold text-white"
                    >
                        Our Menu
                    </motion.h1>
                </div>
            </section>

            {/* Menu Tabs */}
            <section className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
                <div className="container-custom py-4">
                    <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                        {menuTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setActiveMenu(type.id)}
                                className={`flex-shrink-0 px-6 py-3 rounded-full font-body font-semibold transition-all ${activeMenu === type.id
                                    ? "bg-brand-red text-white shadow-lg"
                                    : "bg-surface text-foreground hover:bg-gray-200"
                                    }`}
                            >
                                <span>{type.label}</span>
                                <span className={`text-xs ml-2 ${activeMenu === type.id ? "text-white/80" : "text-muted"}`}>
                                    {type.subtitle}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Content */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeMenu}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {Object.entries(groupedItems).map(([category, items]) => (
                                <div key={category} className="mb-16">
                                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground capitalize mb-8">
                                        {category}
                                    </h2>
                                    {/* PREMIUM: More gap between menu rows */}
                                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                        {items.map((item, index) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="card flex gap-5 p-5 group cursor-pointer"
                                            >
                                                {/* Image */}
                                                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between gap-2">
                                                        <div>
                                                            <h3 className="font-display font-bold text-foreground group-hover:text-brand-red transition-colors">
                                                                {item.name}
                                                            </h3>
                                                            <div className="flex gap-2 mt-1">
                                                                {item.popular && (
                                                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                                                                        <Star size={10} fill="currentColor" />
                                                                        Popular
                                                                    </span>
                                                                )}
                                                                {item.spicy && (
                                                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                                                                        <Flame size={10} />
                                                                        Spicy
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <span className="font-display text-xl font-bold text-brand-red">
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                    <p className="font-body text-muted text-sm mt-2 line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Order CTA */}
                    <div className="text-center mt-8 pt-8 border-t border-gray-100">
                        <p className="font-body text-muted mb-4">Ready to order?</p>
                        <button className="btn-primary text-lg px-10 py-4">
                            <ShoppingBag size={20} />
                            Order Online
                        </button>
                        <p className="font-body text-xs text-muted mt-3">
                            Online ordering coming soon
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
