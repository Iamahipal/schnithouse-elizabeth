"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Calendar, Users, User, Star, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function BookingWidget() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        guests: "2",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! We'll confirm your booking for ${formData.guests} guests on ${formData.date} at ${formData.time}.`);
    };

    return (
        <section id="book" className="py-24 px-4 relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=80"
                    alt="Restaurant interior"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#0c0a09]/90 to-[#0c0a09]" />
            </div>

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="font-body text-amber-400 text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
                        Reserve Your Experience
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                        Book a <span className="italic bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">Table</span>
                    </h2>
                    <p className="font-body text-stone-400 max-w-md mx-auto text-lg">
                        Reserve your spot for an unforgettable dining experience
                    </p>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        {/* Phone Card - Primary */}
                        <div
                            className="p-7 rounded-2xl group cursor-pointer hover:scale-[1.02] transition-all duration-300"
                            style={{
                                background: 'linear-gradient(145deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 146, 60, 0.08) 50%, rgba(12, 10, 9, 0.9) 100%)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(251, 191, 36, 0.3)',
                                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(251, 191, 36, 0.1)'
                            }}
                        >
                            <div className="flex items-start gap-5">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/40">
                                    <Phone className="text-stone-900" size={28} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display font-bold text-white text-lg mb-1">Call Us Now</h3>
                                    <a
                                        href="tel:0882559000"
                                        className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-flex items-center gap-2"
                                    >
                                        08 8255 9000
                                        <ChevronRight size={24} strokeWidth={1.5} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <p className="font-body text-stone-500 mt-2 flex items-center gap-2">
                                        <Star size={14} strokeWidth={1.5} className="text-amber-400" fill="currentColor" />
                                        <span>Tap to call directly</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div
                            className="p-6 rounded-2xl group hover:border-amber-500/40 transition-colors duration-300"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                                    <MapPin className="text-amber-400" size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-white mb-2">Our Location</h3>
                                    <p className="font-body text-stone-300">50 Elizabeth Way</p>
                                    <p className="font-body text-stone-400">Elizabeth, South Australia</p>
                                </div>
                            </div>
                        </div>

                        {/* Hours Card */}
                        <div
                            className="p-6 rounded-2xl group hover:border-amber-500/40 transition-colors duration-300"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                                    <Clock className="text-amber-400" size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-white mb-2">Opening Hours</h3>
                                    <p className="font-body text-stone-300">Open Everyday</p>
                                    <p className="font-body text-amber-400 font-bold text-lg">11:00 AM – 8:30 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Info Cards */}
                        <div className="flex gap-3">
                            {[
                                { emoji: "🍖", label: "5 Types" },
                                { emoji: "👨‍🍳", label: "90 Years" },
                                { emoji: "⭐", label: "Premium" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex-1 p-4 rounded-xl text-center"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <span className="text-2xl mb-1 block">{item.emoji}</span>
                                    <span className="font-body text-stone-400 text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 md:p-10 rounded-2xl"
                            style={{
                                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
                            }}
                        >
                            <h3 className="font-display text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Calendar className="text-amber-400" size={24} strokeWidth={1.5} />
                                Make a Reservation
                            </h3>

                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block font-body text-sm text-stone-400 mb-2 font-medium">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" size={20} strokeWidth={1.5} />
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter your name"
                                            className="w-full font-body bg-white/5 border-2 border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-stone-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block font-body text-sm text-stone-400 mb-2 font-medium">
                                        Preferred Date
                                    </label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" size={20} strokeWidth={1.5} />
                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full font-body bg-white/5 border-2 border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Time and Guests */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-body text-sm text-stone-400 mb-2 font-medium">Time</label>
                                        <div className="relative">
                                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" size={20} strokeWidth={1.5} />
                                            <select
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                className="w-full font-body bg-white/5 border-2 border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
                                                required
                                            >
                                                <option value="">Select</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 PM</option>
                                                <option value="13:00">1:00 PM</option>
                                                <option value="17:00">5:00 PM</option>
                                                <option value="18:00">6:00 PM</option>
                                                <option value="19:00">7:00 PM</option>
                                                <option value="20:00">8:00 PM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-body text-sm text-stone-400 mb-2 font-medium">Guests</label>
                                        <div className="relative">
                                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" size={20} strokeWidth={1.5} />
                                            <select
                                                value={formData.guests}
                                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                                className="w-full font-body bg-white/5 border-2 border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                                    <option key={num} value={num}>
                                                        {num} {num === 1 ? "Guest" : "Guests"}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-xl font-body font-bold text-lg transition-all duration-300 hover:scale-[1.02] mt-4"
                                    style={{
                                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                                        color: '#0c0a09',
                                        boxShadow: '0 8px 40px rgba(251, 191, 36, 0.5), 0 4px 20px rgba(245, 158, 11, 0.3)',
                                    }}
                                >
                                    Reserve Your Table ✨
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            <div id="contact" className="absolute bottom-0" />
        </section>
    );
}
