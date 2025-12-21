"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, UtensilsCrossed, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#DC2626_1px,transparent_0)] bg-[length:40px_40px]" />
            </div>

            {/* Decorative Food Image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-10 hidden lg:block">
                <Image
                    src="https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=800&q=80"
                    alt="Schnitzel decoration"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                {/* 404 Number */}
                <div className="mb-8">
                    <span className="font-display text-[120px] md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-600 leading-none">
                        404
                    </span>
                </div>

                {/* Message */}
                <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Oops! This page got eaten
                </h1>
                <p className="font-body text-gray-600 text-lg mb-8 max-w-md mx-auto">
                    Looks like someone was hungrier than expected!
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Navigation Options */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link
                        href="/"
                        className="btn-primary group"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                    <Link
                        href="/menu"
                        className="btn-secondary group"
                    >
                        <UtensilsCrossed size={18} />
                        View Menu
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="pt-8 border-t border-gray-200">
                    <p className="font-body text-gray-500 text-sm mb-4">Or try these popular pages:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/book"
                            className="text-red-600 hover:text-red-700 font-medium text-sm hover:underline transition-colors"
                        >
                            Book a Table
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link
                            href="/contact"
                            className="text-red-600 hover:text-red-700 font-medium text-sm hover:underline transition-colors"
                        >
                            Contact Us
                        </Link>
                        <span className="text-gray-300">|</span>
                        <a
                            href="tel:0882559000"
                            className="text-red-600 hover:text-red-700 font-medium text-sm hover:underline transition-colors flex items-center gap-1"
                        >
                            <Phone size={14} />
                            Call Now
                        </a>
                    </div>
                </div>

                {/* Back Link */}
                <button
                    onClick={() => window.history.back()}
                    className="mt-8 inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 font-body text-sm transition-colors"
                >
                    <ArrowLeft size={16} />
                    Go back to previous page
                </button>
            </div>
        </main>
    );
}
