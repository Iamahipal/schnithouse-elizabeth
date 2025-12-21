import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureDish from "@/components/SignatureDish";
import Testimonials from "@/components/Testimonials";
import Promotions from "@/components/Promotions";
import InstagramFeed from "@/components/InstagramFeed";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <SignatureDish />
            <Testimonials />
            <Promotions />
            <InstagramFeed />
            <Partners />
            <Footer />
            <BackToTop />
        </main>
    );
}
