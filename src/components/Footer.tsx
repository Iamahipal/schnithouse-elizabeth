"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-black text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
                            <Image
                                src="/logo.png"
                                alt="Schnithouse Logo"
                                width={80}
                                height={80}
                                className="w-16 h-16 md:w-20 md:h-20 object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                            />
                            <div>
                                <span className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-gray-200 transition-colors block">
                                    Schnithouse
                                </span>
                                <span className="text-brand-red text-sm font-body">Elizabeth</span>
                            </div>
                        </Link>
                        <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
                            A gastronomic experience that is second to none!
                            90-year-old family recipe served fresh daily.
                        </p>
                        {/* Social - Enhanced */}
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red hover:scale-110 transition-all duration-300 group"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:scale-110 transition-all duration-300 group"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-5 text-white">Quick Links</h3>
                        <ul className="space-y-3.5">
                            {["Home", "Menu", "Book", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                        className="font-body text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-5 text-white">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <div className="w-8 h-8 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-red/30 transition-colors">
                                    <MapPin size={16} className="text-brand-red" />
                                </div>
                                <span className="font-body text-gray-400 text-sm">
                                    50 Elizabeth Way,<br />Elizabeth, SA
                                </span>
                            </li>
                            <li>
                                <a
                                    href="tel:0882559000"
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-8 h-8 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/30 transition-colors">
                                        <Phone size={16} className="text-brand-red" />
                                    </div>
                                    <span className="font-body font-semibold text-white group-hover:text-brand-red transition-colors">
                                        08 8255 9000
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:schnithouse.beth@gmail.com"
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-8 h-8 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/30 transition-colors">
                                        <Mail size={16} className="text-brand-red" />
                                    </div>
                                    <span className="font-body text-sm text-gray-400 group-hover:text-white transition-colors break-all">
                                        schnithouse.beth@gmail.com
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="font-display font-bold text-lg mb-5 text-white">Opening Hours</h3>
                        <div className="flex items-start gap-3 mb-5">
                            <div className="w-8 h-8 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Clock size={16} className="text-brand-red" />
                            </div>
                            <div className="font-body text-sm text-gray-400 space-y-2 leading-relaxed">
                                <p className="flex justify-between gap-4">
                                    <span className="text-gray-500">Sun – Wed</span>
                                    <span className="text-gray-300">11:00 AM – 8:00 PM</span>
                                </p>
                                <p className="flex justify-between gap-4">
                                    <span className="text-gray-500">Thursday</span>
                                    <span className="text-gray-300">11:00 AM – 8:30 PM</span>
                                </p>
                                <p className="flex justify-between gap-4">
                                    <span className="text-gray-500">Fri – Sat</span>
                                    <span className="text-gray-300">11:00 AM – 9:00 PM</span>
                                </p>
                            </div>
                        </div>
                        {/* CTA - Unified button style with rounded-xl */}
                        <Link
                            href="/book"
                            className="inline-flex items-center justify-center w-full mt-2 px-6 py-3 border-2 border-white/30 text-white font-body font-semibold rounded-xl hover:bg-white hover:text-brand-black hover:border-white transition-all duration-300 min-h-[48px]"
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
                        © 2025 Schnithouse Elizabeth. All rights reserved.
                    </p>
                    <p className="font-body text-gray-600 text-xs">
                        Website by <span className="text-gray-400 hover:text-white transition-colors">Premium Design</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
