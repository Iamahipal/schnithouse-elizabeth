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
                // Brand colors (black + red + gold)
                brand: {
                    black: '#0F0F0F',
                    red: '#DC2626',
                    'red-dark': '#B91C1C',
                    'red-light': '#FEE2E2',
                    gold: '#F59E0B',
                    'gold-light': '#FCD34D',
                    'gold-dark': '#D97706',
                },
                // Glass colors for modern effects
                glass: {
                    white: 'rgba(255, 255, 255, 0.1)',
                    'white-strong': 'rgba(255, 255, 255, 0.2)',
                    dark: 'rgba(0, 0, 0, 0.2)',
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'slide-down': 'slideDown 0.3s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'scale-in': 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'bounce-soft': 'bounceSoft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
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
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.4)' },
                    '50%': { boxShadow: '0 0 40px rgba(220, 38, 38, 0.6)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                bounceSoft: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            transitionTimingFunction: {
                'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};

export default config;

