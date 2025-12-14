"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
    "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=600&q=80",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! We'll get back to you soon.`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80"
                    alt="Contact us"
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
                        Contact Us
                    </motion.h1>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                                Get in Touch
                            </h2>
                            <p className="font-body text-muted mb-8">
                                Have a question or feedback? We'd love to hear from you.
                                Reach out via any of the methods below.
                            </p>

                            {/* Info Cards */}
                            <div className="space-y-4 mb-8">
                                <div className="card p-5 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center">
                                        <MapPin className="text-brand-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-foreground">Location</h3>
                                        <p className="font-body text-muted">50 Elizabeth Way, Elizabeth SA 5112</p>
                                        <a
                                            href="https://maps.google.com?q=50+Elizabeth+Way+Elizabeth+SA"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-body text-brand-red text-sm hover:underline"
                                        >
                                            Get Directions →
                                        </a>
                                    </div>
                                </div>

                                <div className="card p-5 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center">
                                        <Phone className="text-brand-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-foreground">Phone</h3>
                                        <a
                                            href="tel:0882559000"
                                            className="font-body text-xl font-semibold text-brand-red hover:text-brand-red-dark"
                                        >
                                            08 8255 9000
                                        </a>
                                        <p className="font-body text-muted text-sm">Tap to call</p>
                                    </div>
                                </div>

                                <div className="card p-5 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center">
                                        <Mail className="text-brand-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-foreground">Email</h3>
                                        <a
                                            href="mailto:schnithouse.beth@gmail.com"
                                            className="font-body text-brand-red hover:underline break-all"
                                        >
                                            schnithouse.beth@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="card p-5 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center">
                                        <Clock className="text-brand-red" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-foreground">Opening Hours</h3>
                                        <div className="font-body text-muted text-sm space-y-1">
                                            <p>Sun – Wed: 11:00 AM – 8:00 PM</p>
                                            <p>Thursday: 11:00 AM – 8:30 PM</p>
                                            <p>Fri – Sat: 11:00 AM – 9:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.123456789!2d138.123456!3d-34.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjQiUyAxMzjCsDA3JzI2LjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Schnithouse Elizabeth Location"
                                />
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="card p-6 md:p-8">
                                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                                    Send us a Message
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block font-body text-sm text-muted mb-2">Name *</label>
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
                                        <label className="block font-body text-sm text-muted mb-2">Email *</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="your@email.com"
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-body text-sm text-muted mb-2">Message *</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="How can we help you?"
                                            rows={5}
                                            className="input-field resize-none"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn-primary w-full py-4">
                                        <Send size={18} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="section-padding bg-surface">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="text-brand-red font-body font-semibold text-sm uppercase tracking-wider">
                            Our Moments
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                            Gallery
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
