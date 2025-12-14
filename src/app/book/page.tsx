"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PartyPopper, ExternalLink, ChevronDown } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        occasion: "",
        notes: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! We'll confirm your booking for ${formData.guests} guests on ${formData.date} at ${formData.time}.`);
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=80"
                    alt="Restaurant booking"
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
                        Book a Table
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-body text-white/80 mt-2"
                    >
                        Reserve your dining experience
                    </motion.p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Booking Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                                Make a Reservation
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name & Email */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Name *</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Your name"
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Email *</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="your@email.com"
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block font-body text-sm font-medium text-foreground mb-2">Phone *</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="Your phone number"
                                        className="input-field"
                                        required
                                    />
                                </div>

                                {/* Date & Time */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Date *</label>
                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Time *</label>
                                        <div className="relative">
                                            <select
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                className="input-field appearance-none cursor-pointer pr-10"
                                                required
                                            >
                                                <option value="">Select time</option>
                                                {["11:00", "11:30", "12:00", "12:30", "13:00", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"].map((t) => (
                                                    <option key={t} value={t}>{t}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Guests & Occasion */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Guests *</label>
                                        <div className="relative">
                                            <select
                                                value={formData.guests}
                                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                                className="input-field appearance-none cursor-pointer pr-10"
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                                                    <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" size={18} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Occasion</label>
                                        <div className="relative">
                                            <select
                                                value={formData.occasion}
                                                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                                                className="input-field appearance-none cursor-pointer pr-10"
                                            >
                                                <option value="">Select occasion</option>
                                                <option value="birthday">Birthday</option>
                                                <option value="anniversary">Anniversary</option>
                                                <option value="date">Date Night</option>
                                                <option value="business">Business</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Notes */}
                                <div>
                                    <label className="block font-body text-sm font-medium text-foreground mb-2">Special Requests</label>
                                    <textarea
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        placeholder="Any dietary requirements or special requests?"
                                        rows={3}
                                        className="input-field resize-none"
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full py-4 text-lg">
                                    Confirm Reservation
                                </button>
                            </form>

                            {/* Alternative Booking */}
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <p className="font-body text-muted text-sm mb-4">Or book via our partners:</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.thefork.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-body font-semibold hover:bg-green-700 transition-colors"
                                    >
                                        TheFork
                                        <ExternalLink size={14} />
                                    </a>
                                    <a
                                        href="https://www.quandoo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg font-body font-semibold hover:bg-orange-600 transition-colors"
                                    >
                                        Quandoo
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Functions & Events */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="card p-6 md:p-8 mb-6">
                                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <PartyPopper className="text-brand-red" size={24} />
                                    Functions & Events
                                </h3>
                                <p className="font-body text-muted mb-4">
                                    Why party at your house when you can party at the Schnithouse!
                                    We cater for all occasions - birthdays, corporate events,
                                    Christmas parties, and more.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {["Private function rooms", "Customized menus", "Full catering service", "AV equipment available"].map((item) => (
                                        <li key={item} className="flex items-center gap-2 font-body text-foreground">
                                            <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="tel:0882559000"
                                    className="btn-outline w-full text-center"
                                >
                                    Call to Discuss
                                </a>
                            </div>

                            {/* Image */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                                    alt="Functions and events"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="font-display text-white text-lg font-bold">Christmas Bookings Open</p>
                                    <p className="font-body text-white/80 text-sm">Limited spots available for December</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
