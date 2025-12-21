"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

// Mock Instagram posts with food photography
const instagramPosts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=400&q=80",
        likes: 234,
        comments: 18,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
        likes: 189,
        comments: 12,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
        likes: 312,
        comments: 24,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
        likes: 156,
        comments: 9,
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
        likes: 278,
        comments: 21,
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
        likes: 198,
        comments: 15,
    },
];

export default function InstagramFeed() {
    return (
        <section className="section bg-white overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    {/* Section Label */}
                    <span className="section-label justify-center mb-3">
                        <span className="section-label-line" />
                        <Instagram size={16} className="inline" />
                        Follow Us
                        <span className="section-label-line" />
                    </span>
                    <h2 className="section-title">
                        @schnithouse_elizabeth
                    </h2>
                    <p className="body-text mt-3 max-w-lg mx-auto">
                        Join our community and share your Schnithouse experience
                    </p>
                </motion.div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                    {instagramPosts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href="https://instagram.com/schnithouse_elizabeth"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16.66vw"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="flex items-center gap-4 text-white">
                                    <span className="flex items-center gap-1">
                                        <Heart size={18} fill="white" />
                                        {post.likes}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MessageCircle size={18} fill="white" />
                                        {post.comments}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Follow CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-8"
                >
                    <a
                        href="https://instagram.com/schnithouse_elizabeth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-[1.02]"
                    >
                        <Instagram size={20} />
                        Follow on Instagram
                        <ExternalLink size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
