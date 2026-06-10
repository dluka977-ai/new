import CursorSpotlight from "@/components/CursorSpotlight";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Products />
        <WhyUs />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <CursorSpotlight />
    </>
  );
}
