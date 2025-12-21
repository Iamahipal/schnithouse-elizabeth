// Structured Data (JSON-LD) for SEO
// Restaurant, LocalBusiness, and Menu schema

export const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://schnithouse-elizabeth.vercel.app/#restaurant",
    "name": "Schnithouse Elizabeth",
    "alternateName": "Schnithouse",
    "description": "A gastronomic experience that is second to none! 90-year-old family recipe. 5 types of schnitzels served fresh daily in Elizabeth, SA.",
    "url": "https://schnithouse-elizabeth.vercel.app",
    "telephone": "+61882559000",
    "email": "schnithouse.beth@gmail.com",
    "priceRange": "$$",
    "servesCuisine": ["German", "European", "Australian"],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 Elizabeth Way",
        "addressLocality": "Elizabeth",
        "addressRegion": "SA",
        "postalCode": "5112",
        "addressCountry": "AU"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-34.7167",
        "longitude": "138.6667"
    },
    "image": [
        "https://schnithouse-elizabeth.vercel.app/logo.png",
        "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=1200&q=90"
    ],
    "logo": "https://schnithouse-elizabeth.vercel.app/logo.png",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday"],
            "opens": "11:00",
            "closes": "20:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Thursday",
            "opens": "11:00",
            "closes": "20:30"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Friday", "Saturday"],
            "opens": "11:00",
            "closes": "21:00"
        }
    ],
    "menu": "https://schnithouse-elizabeth.vercel.app/menu",
    "acceptsReservations": "True",
    "reservations": "https://schnithouse-elizabeth.vercel.app/book",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
    },
    "hasMenu": {
        "@type": "Menu",
        "name": "Main Menu",
        "description": "5 types of schnitzels and more",
        "hasMenuSection": [
            {
                "@type": "MenuSection",
                "name": "Schnitzels",
                "description": "Our signature schnitzels made with a 90-year-old family recipe",
                "hasMenuItem": [
                    {
                        "@type": "MenuItem",
                        "name": "Chicken Schnitzel",
                        "description": "Golden crispy chicken schnitzel",
                        "offers": {
                            "@type": "Offer",
                            "price": "19.90",
                            "priceCurrency": "AUD"
                        }
                    },
                    {
                        "@type": "MenuItem",
                        "name": "Beef Schnitzel",
                        "description": "Premium beef schnitzel",
                        "offers": {
                            "@type": "Offer",
                            "price": "21.90",
                            "priceCurrency": "AUD"
                        }
                    },
                    {
                        "@type": "MenuItem",
                        "name": "Pork Schnitzel",
                        "description": "Classic pork schnitzel",
                        "offers": {
                            "@type": "Offer",
                            "price": "19.90",
                            "priceCurrency": "AUD"
                        }
                    }
                ]
            }
        ]
    },
    "potentialAction": {
        "@type": "ReserveAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://schnithouse-elizabeth.vercel.app/book",
            "inLanguage": "en-AU",
            "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
            ]
        },
        "result": {
            "@type": "Reservation",
            "name": "Table Reservation"
        }
    },
    "sameAs": [
        "https://www.facebook.com/schnithouseelizabeth",
        "https://www.instagram.com/schnithouse_elizabeth"
    ]
};

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Schnithouse Elizabeth",
    "image": "https://schnithouse-elizabeth.vercel.app/logo.png",
    "telephone": "+61882559000",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 Elizabeth Way",
        "addressLocality": "Elizabeth",
        "addressRegion": "SA",
        "postalCode": "5112",
        "addressCountry": "AU"
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, EFTPOS"
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
});
