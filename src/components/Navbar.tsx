"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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

    const { scrollY } = useScroll();
    const blurValue = useTransform(scrollY, [0, 100], [0, 12]);
    const bgOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);

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
            {/* Navbar */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled
                    ? "bg-white/95 shadow-md"
                    : "bg-white/80"
                    }`}
                style={{
                    backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
                    WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
                }}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 min-h-[44px]">
                            <span className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-brand-black">
                                Schnithouse
                            </span>
                            <span className="text-brand-red text-xs md:text-sm font-body hidden sm:inline">Elizabeth</span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`font-body font-medium transition-colors link-hover py-2 ${pathname === link.href
                                        ? "text-brand-red"
                                        : "text-foreground hover:text-brand-red"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-3 lg:gap-4">
                            <a
                                href="tel:0882559000"
                                className="flex items-center gap-2 text-muted hover:text-brand-red transition-colors font-body min-h-[44px] px-2"
                            >
                                <Phone size={18} />
                                <span className="hidden lg:inline">08 8255 9000</span>
                            </a>
                            <Link
                                href="/menu"
                                className="btn-primary-glow text-sm lg:text-base px-4 lg:px-6"
                            >
                                Order Online
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-3 text-foreground hover:text-brand-red transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

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
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] md:w-72 bg-white shadow-2xl z-50 md:hidden safe-top"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                                    <span className="font-display text-xl font-bold text-brand-black">
                                        Menu
                                    </span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-muted hover:text-foreground transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                                        aria-label="Close menu"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Links */}
                                <div className="flex-1 py-4">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.08 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`flex items-center px-6 py-4 font-body font-medium text-lg border-b border-gray-50 transition-colors min-h-[56px] ${pathname === link.href
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
                                <div className="p-6 border-t border-gray-100 space-y-4 safe-bottom">
                                    <a
                                        href="tel:0882559000"
                                        className="flex items-center gap-3 text-foreground font-body font-medium min-h-[44px]"
                                    >
                                        <Phone size={20} className="text-brand-red" />
                                        08 8255 9000
                                    </a>
                                    <Link href="/menu" className="btn-primary-glow w-full text-center">
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

