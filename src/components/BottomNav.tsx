"use client";

import { motion } from "framer-motion";
import { Home, UtensilsCrossed, CalendarDays, Phone, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";

interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    href: string;
}

const navItems: NavItem[] = [
    { id: "home", label: "Home", icon: <Home size={20} strokeWidth={1.5} />, href: "#home" },
    { id: "menu", label: "Menu", icon: <UtensilsCrossed size={20} strokeWidth={1.5} />, href: "#menu" },
    { id: "book", label: "Book", icon: <CalendarDays size={20} strokeWidth={1.5} />, href: "#book" },
    { id: "contact", label: "Contact", icon: <MapPin size={20} strokeWidth={1.5} />, href: "#contact" },
];

export default function BottomNav() {
    const [activeTab, setActiveTab] = useState("home");

    const handleClick = (id: string, href: string) => {
        setActiveTab(id);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Mobile Bottom Navigation */}
            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-bottom"
            >
                <div
                    className="mx-3 mb-3 rounded-2xl overflow-hidden"
                    style={{
                        background: 'rgba(12, 10, 9, 0.85)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 -4px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(251, 191, 36, 0.08)'
                    }}
                >
                    <div className="flex items-center justify-around py-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleClick(item.id, item.href)}
                                className="relative flex flex-col items-center gap-1 px-5 py-3 transition-all duration-300 font-body"
                            >
                                <motion.div
                                    whileTap={{ scale: 0.85 }}
                                    className={`p-2.5 rounded-xl transition-all duration-300 ${activeTab === item.id
                                            ? "bg-gradient-to-br from-amber-400 to-orange-500 text-stone-900 shadow-lg shadow-amber-500/40"
                                            : "text-stone-500"
                                        }`}
                                >
                                    {item.icon}
                                </motion.div>
                                <span
                                    className={`text-xs font-semibold transition-colors duration-300 ${activeTab === item.id ? "text-amber-400" : "text-stone-600"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </motion.nav>

            {/* Desktop Top Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 right-0 z-50 hidden md:block"
            >
                <div
                    className="mx-6 mt-4 px-8 py-4 rounded-2xl"
                    style={{
                        background: 'rgba(12, 10, 9, 0.8)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)'
                    }}
                >
                    <div className="flex items-center justify-between max-w-6xl mx-auto">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">🍖</span>
                            <div>
                                <h1 className="font-display text-xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                                    Schnithouse
                                </h1>
                                <p className="font-body text-xs text-stone-500 -mt-0.5">Elizabeth</p>
                            </div>
                        </div>

                        {/* Nav Links */}
                        <div className="flex items-center gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleClick(item.id, item.href)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-body font-medium ${activeTab === item.id
                                            ? "bg-white/10 text-amber-400 border border-amber-500/30"
                                            : "text-stone-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href="tel:0882559000"
                            className="group flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                                color: '#0c0a09',
                                boxShadow: '0 4px 20px rgba(251, 191, 36, 0.4)',
                            }}
                        >
                            <Phone size={18} strokeWidth={1.5} />
                            <span>Call Now</span>
                            <Sparkles size={14} strokeWidth={1.5} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </motion.nav>
        </>
    );
}
