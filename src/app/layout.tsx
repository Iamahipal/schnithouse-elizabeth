import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { restaurantSchema } from "@/lib/schema";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-display",
    weight: ["400", "500", "600", "700", "800", "900"],
});

// Using Inter as primary body font with Google Sans Flex imported via CSS
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-body",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Schnithouse Elizabeth | Premium Schnitzels Adelaide",
    description: "A gastronomic experience that is second to none! 90-year-old family recipe. 5 types of schnitzels served fresh daily in Elizabeth, SA.",
    keywords: ["schnitzel", "restaurant", "Elizabeth", "Adelaide", "South Australia", "German food", "family recipe", "best schnitzel Adelaide"],
    authors: [{ name: "Schnithouse Elizabeth" }],
    creator: "Schnithouse Elizabeth",
    publisher: "Schnithouse Elizabeth",
    formatDetection: {
        telephone: true,
        email: true,
        address: true,
    },
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
    openGraph: {
        title: "Schnithouse Elizabeth | Adelaide's Best Schnitzel",
        description: "A gastronomic experience that is second to none! 90-year-old family recipe.",
        type: "website",
        locale: "en_AU",
        url: "https://schnithouse-elizabeth.vercel.app",
        siteName: "Schnithouse Elizabeth",
        images: [
            {
                url: "https://schnithouse-elizabeth.vercel.app/logo.png",
                width: 800,
                height: 800,
                alt: "Schnithouse Elizabeth Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Schnithouse Elizabeth | Adelaide's Best Schnitzel",
        description: "A gastronomic experience that is second to none!",
        images: ["https://schnithouse-elizabeth.vercel.app/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google-site-verification-code", // Replace with actual code
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <head>
                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(restaurantSchema),
                    }}
                />
            </head>
            <body className="font-body bg-white text-foreground antialiased">
                {children}
            </body>
        </html>
    );
}
