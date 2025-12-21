"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah M.",
        rating: 5,
        text: "Best schnitzel I've ever had! The 90-year family recipe really shows. Kids loved it too!",
        source: "Google Review",
        date: "2 weeks ago",
    },
    {
        name: "Mike T.",
        rating: 5,
        text: "Outstanding food and service. The Happy Hour deals are unbeatable. Highly recommend the chicken schnitzel!",
        source: "Google Review",
        date: "1 month ago",
    },
    {
        name: "Emma L.",
        rating: 5,
        text: "A hidden gem in Elizabeth! Fresh ingredients, generous portions, and friendly staff. Will definitely be back.",
        source: "TripAdvisor",
        date: "3 weeks ago",
    },
];

const stats = [
    { value: "4.8", label: "Google Rating", stars: 5 },
    { value: "500+", label: "Happy Customers", stars: 0 },
    { value: "90", label: "Years of Recipe", stars: 0 },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
                        <span className="w-8 h-px bg-red-600/50" />
                        Customer Reviews
                        <span className="w-8 h-px bg-red-600/50" />
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                        What Our Guests Say
                    </h2>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center px-4">
                            <div className="flex items-center justify-center gap-1 mb-1">
                                {stat.stars > 0 ? (
                                    <>
                                        <span className="font-display text-4xl md:text-5xl font-bold text-gray-900">
                                            {stat.value}
                                        </span>
                                        <Star size={24} className="text-amber-400 fill-amber-400" />
                                    </>
                                ) : (
                                    <span className="font-display text-4xl md:text-5xl font-bold text-gray-900">
                                        {stat.value}
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div className="h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                {/* Quote Icon */}
                                <Quote className="text-red-100 mb-4" size={32} />

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.source}</p>
                                    </div>
                                    <span className="text-xs text-gray-400">{testimonial.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Google Reviews Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <a
                        href="https://www.google.com/search?q=schnithouse+elizabeth+reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        View all reviews on Google
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
