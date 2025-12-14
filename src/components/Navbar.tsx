"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/book", label: "Book" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md"
                        : "bg-white"
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <span className="font-display text-2xl md:text-3xl font-bold text-brand-black">
                                Schnithouse
                            </span>
                            <span className="text-brand-red text-sm font-body hidden sm:inline">Elizabeth</span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`font-body font-medium transition-colors link-hover ${pathname === link.href
                                            ? "text-brand-red"
                                            : "text-foreground hover:text-brand-red"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            <a
                                href="tel:0882559000"
                                className="flex items-center gap-2 text-muted hover:text-brand-red transition-colors font-body"
                            >
                                <Phone size={18} />
                                <span className="hidden lg:inline">08 8255 9000</span>
                            </a>
                            <Link href="/menu" className="btn-primary">
                                Order Online
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-foreground hover:text-brand-red transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                                    <span className="font-display text-xl font-bold text-brand-black">
                                        Menu
                                    </span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-muted hover:text-foreground transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Links */}
                                <div className="flex-1 py-6">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`block px-6 py-4 font-body font-medium text-lg border-b border-gray-50 transition-colors ${pathname === link.href
                                                        ? "text-brand-red bg-brand-red-light/50"
                                                        : "text-foreground hover:text-brand-red hover:bg-gray-50"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="p-6 border-t border-gray-100 space-y-4">
                                    <a
                                        href="tel:0882559000"
                                        className="flex items-center gap-3 text-foreground font-body font-medium"
                                    >
                                        <Phone size={20} className="text-brand-red" />
                                        08 8255 9000
                                    </a>
                                    <Link href="/menu" className="btn-primary w-full text-center">
                                        Order Online
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Spacer for fixed navbar */}
            <div className="h-16 md:h-20" />
        </>
    );
}
