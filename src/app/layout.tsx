import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-display",
    weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-body",
});

export const metadata: Metadata = {
    title: "Schnithouse Elizabeth | Premium Schnitzels Adelaide",
    description: "A gastronomic experience that is second to none! 90-year-old family recipe. 5 types of schnitzels served fresh daily in Elizabeth, SA.",
    keywords: ["schnitzel", "restaurant", "Elizabeth", "Adelaide", "South Australia", "German food", "family recipe"],
    openGraph: {
        title: "Schnithouse Elizabeth",
        description: "A gastronomic experience that is second to none!",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body className="font-body bg-white text-foreground antialiased">
                {children}
            </body>
        </html>
    );
}
