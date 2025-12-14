import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['var(--font-display)', 'Playfair Display', 'Georgia', 'serif'],
                body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                // White theme
                background: '#FFFFFF',
                surface: '#F9FAFB',
                // Text
                foreground: '#1F2937',
                muted: '#6B7280',
                // Brand colors (black + red)
                brand: {
                    black: '#0F0F0F',
                    red: '#DC2626',
                    'red-dark': '#B91C1C',
                    'red-light': '#FEE2E2',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'slide-down': 'slideDown 0.3s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
