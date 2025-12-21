"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { PartyPopper, ExternalLink, ChevronDown, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Form validation types
interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    date?: string;
    time?: string;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: string;
    occasion: string;
    notes: string;
}

export default function BookPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        occasion: "",
        notes: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validation functions
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string): boolean => {
        // Australian phone number format
        const phoneRegex = /^(?:\+61|0)[2-478](?:[ -]?[0-9]){8}$/;
        return phone.length >= 8 && (phoneRegex.test(phone.replace(/\s/g, '')) || phone.replace(/\D/g, '').length >= 8);
    };

    const validateDate = (date: string): boolean => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
    };

    // Validate single field
    const validateField = useCallback((field: keyof FormData, value: string): string | undefined => {
        switch (field) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                break;
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!validateEmail(value)) return 'Please enter a valid email';
                break;
            case 'phone':
                if (!value.trim()) return 'Phone is required';
                if (!validatePhone(value)) return 'Please enter a valid phone number';
                break;
            case 'date':
                if (!value) return 'Date is required';
                if (!validateDate(value)) return 'Please select a future date';
                break;
            case 'time':
                if (!value) return 'Time is required';
                break;
        }
        return undefined;
    }, []);

    // Validate all fields
    const validateForm = useCallback((): boolean => {
        const newErrors: FormErrors = {};

        const nameError = validateField('name', formData.name);
        if (nameError) newErrors.name = nameError;

        const emailError = validateField('email', formData.email);
        if (emailError) newErrors.email = emailError;

        const phoneError = validateField('phone', formData.phone);
        if (phoneError) newErrors.phone = phoneError;

        const dateError = validateField('date', formData.date);
        if (dateError) newErrors.date = dateError;

        const timeError = validateField('time', formData.time);
        if (timeError) newErrors.time = timeError;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formData, validateField]);

    // Handle input change
    const handleChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Clear error when user starts typing
        if (errors[field as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    // Handle blur - validate on blur
    const handleBlur = (field: keyof FormData) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        const error = validateField(field, formData[field]);
        if (error) {
            setErrors(prev => ({ ...prev, [field]: error }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Touch all fields
        setTouched({
            name: true,
            email: true,
            phone: true,
            date: true,
            time: true,
        });

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    // Success state
    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <section className="section flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center max-w-md mx-auto px-4"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="text-green-600" size={40} />
                        </div>
                        <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">
                            Reservation Confirmed!
                        </h1>
                        <p className="body-text mb-2">
                            Thank you, <strong>{formData.name}</strong>!
                        </p>
                        <p className="body-text mb-6">
                            Your table for <strong>{formData.guests} guests</strong> on{" "}
                            <strong>{new Date(formData.date).toLocaleDateString('en-AU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>{" "}
                            at <strong>{formData.time}</strong> has been reserved.
                        </p>
                        <p className="text-sm text-gray-500 mb-8">
                            A confirmation email has been sent to {formData.email}
                        </p>
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                setFormData({
                                    name: "",
                                    email: "",
                                    phone: "",
                                    date: "",
                                    time: "",
                                    guests: "2",
                                    occasion: "",
                                    notes: "",
                                });
                                setTouched({});
                            }}
                            className="btn-secondary"
                        >
                            Make Another Reservation
                        </button>
                    </motion.div>
                </section>
                <Footer />
            </main>
        );
    }

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

            <section className="section">
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

                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                {/* Name & Email */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Name *</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleChange('name', e.target.value)}
                                            onBlur={() => handleBlur('name')}
                                            placeholder="Your name"
                                            className={`input-field ${touched.name && errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                        />
                                        {touched.name && errors.name && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle size={14} />
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Email *</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            onBlur={() => handleBlur('email')}
                                            placeholder="your@email.com"
                                            className={`input-field ${touched.email && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                        />
                                        {touched.email && errors.email && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle size={14} />
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block font-body text-sm font-medium text-foreground mb-2">Phone *</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        onBlur={() => handleBlur('phone')}
                                        placeholder="Your phone number"
                                        className={`input-field ${touched.phone && errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                    />
                                    {touched.phone && errors.phone && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle size={14} />
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* Date & Time */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Date *</label>
                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => handleChange('date', e.target.value)}
                                            onBlur={() => handleBlur('date')}
                                            min={new Date().toISOString().split('T')[0]}
                                            className={`input-field ${touched.date && errors.date ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                        />
                                        {touched.date && errors.date && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle size={14} />
                                                {errors.date}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Time *</label>
                                        <div className="relative">
                                            <select
                                                value={formData.time}
                                                onChange={(e) => handleChange('time', e.target.value)}
                                                onBlur={() => handleBlur('time')}
                                                className={`input-field appearance-none cursor-pointer pr-10 ${touched.time && errors.time ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                            >
                                                <option value="">Select time</option>
                                                {["11:00", "11:30", "12:00", "12:30", "13:00", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"].map((t) => (
                                                    <option key={t} value={t}>{t}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" size={18} />
                                        </div>
                                        {touched.time && errors.time && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle size={14} />
                                                {errors.time}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Guests & Occasion */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">Guests *</label>
                                        <div className="relative">
                                            <select
                                                value={formData.guests}
                                                onChange={(e) => handleChange('guests', e.target.value)}
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
                                                onChange={(e) => handleChange('occasion', e.target.value)}
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
                                        onChange={(e) => handleChange('notes', e.target.value)}
                                        placeholder="Any dietary requirements or special requests?"
                                        rows={3}
                                        className="input-field resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        'Confirm Reservation'
                                    )}
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
                                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl font-body font-semibold hover:bg-green-700 transition-colors"
                                    >
                                        TheFork
                                        <ExternalLink size={14} />
                                    </a>
                                    <a
                                        href="https://www.quandoo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-xl font-body font-semibold hover:bg-orange-600 transition-colors"
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
                                    className="btn-outline-red w-full text-center"
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
