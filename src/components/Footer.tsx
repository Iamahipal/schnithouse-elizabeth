"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-black text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="font-display text-3xl font-bold text-white">
                                Schnithouse
                            </span>
                            <span className="text-brand-red text-sm font-body ml-2">Elizabeth</span>
                        </Link>
                        <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
                            A gastronomic experience that is second to none!
                            90-year-old family recipe served fresh daily.
                        </p>
                        {/* Social */}
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {["Home", "Menu", "Book", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                        className="font-body text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-brand-red flex-shrink-0 mt-0.5" />
                                <span className="font-body text-gray-400 text-sm">
                                    50 Elizabeth Way,<br />Elizabeth, SA
                                </span>
                            </li>
                            <li>
                                <a
                                    href="tel:0882559000"
                                    className="flex items-center gap-3 text-white hover:text-brand-red transition-colors"
                                >
                                    <Phone size={18} className="text-brand-red" />
                                    <span className="font-body font-semibold">08 8255 9000</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:schnithouse.beth@gmail.com"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                                >
                                    <Mail size={18} className="text-brand-red" />
                                    <span className="font-body text-sm break-all">schnithouse.beth@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Opening Hours</h3>
                        <div className="flex items-start gap-3 mb-4">
                            <Clock size={18} className="text-brand-red flex-shrink-0 mt-0.5" />
                            <div className="font-body text-sm text-gray-400 space-y-1">
                                <p>Sun – Wed: 11:00 AM – 8:00 PM</p>
                                <p>Thursday: 11:00 AM – 8:30 PM</p>
                                <p>Fri – Sat: 11:00 AM – 9:00 PM</p>
                            </div>
                        </div>
                        <Link
                            href="/book"
                            className="inline-block mt-2 px-6 py-3 bg-brand-red text-white font-body font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
                        >
                            Book a Table
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-body text-gray-500 text-sm text-center md:text-left">
                        © 2024 Schnithouse Elizabeth. All rights reserved.
                    </p>
                    <p className="font-body text-gray-600 text-xs">
                        Website by <span className="text-gray-400">Premium Design</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
