"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Navbar - Simple, performant */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
                    ? "bg-white shadow-md"
                    : "bg-white/90 backdrop-blur-sm"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Brand Name - Unified "Schnithouse Elizabeth" */}
                        <Link href="/" className="flex items-center gap-3 min-h-[44px] group">
                            <Image
                                src="/logo.png"
                                alt="Schnithouse Logo"
                                width={48}
                                height={48}
                                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-105"
                                priority
                            />
                            <span className="font-display text-xl md:text-2xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                                Schnithouse <span className="text-brand-red">Elizabeth</span>
                            </span>
                        </Link>

                        {/* Desktop Nav - PREMIUM spacing */}
                        <div className="hidden md:flex items-center gap-8 lg:gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`font-medium transition-colors py-2 ${pathname === link.href
                                        ? "text-red-600"
                                        : "text-gray-700 hover:text-red-600"
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
                                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors min-h-[44px]"
                            >
                                <Phone size={18} />
                                <span className="hidden lg:inline">08 8255 9000</span>
                            </a>
                            <Link
                                href="/menu"
                                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors min-h-[44px] flex items-center"
                            >
                                Order Online
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-3 text-gray-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/30 z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.25 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-xl z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header with Brand */}
                                <div className="flex items-center justify-between p-4 border-b">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src="/logo.png"
                                            alt="Schnithouse Logo"
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 object-contain"
                                        />
                                        <span className="font-display text-lg font-bold">
                                            Schnithouse <span className="text-brand-red">Elizabeth</span>
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                                        aria-label="Close menu"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Links */}
                                <div className="flex-1 py-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`flex items-center px-6 py-4 font-medium text-lg min-h-[56px] ${pathname === link.href
                                                ? "text-red-600 bg-red-50"
                                                : "text-gray-700 hover:bg-gray-50"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="p-6 border-t space-y-4">
                                    <a
                                        href="tel:0882559000"
                                        className="flex items-center gap-3 text-gray-700 font-medium min-h-[44px]"
                                    >
                                        <Phone size={20} className="text-red-600" />
                                        08 8255 9000
                                    </a>
                                    <Link
                                        href="/menu"
                                        className="block w-full text-center px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg min-h-[48px]"
                                    >
                                        Order Online
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Spacer */}
            <div className="h-16 md:h-20" />
        </>
    );
}
