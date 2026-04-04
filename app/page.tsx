"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ExclusiveOffers from "@/components/exclusive-offers"
import AboutSection from "@/components/about-section"
import RoomsSection from "@/components/rooms-section"
import AmenitiesStrip from "@/components/amenities-strip"
import ImageGallery from "@/components/image-gallery"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FadeIn>
        <HeroSection />
      </FadeIn>
      <FadeIn delay={0.2}>
        <ExclusiveOffers />
      </FadeIn>
      <FadeIn delay={0.2}>
        <AboutSection />
      </FadeIn>
      <FadeIn delay={0.2}>
        <RoomsSection />
      </FadeIn>
      <FadeIn delay={0.2}>
        <AmenitiesStrip />
      </FadeIn>
      <FadeIn delay={0.2}>
        <ImageGallery />
      </FadeIn>
      <FadeIn delay={0.2}>
        <TestimonialsSection />
      </FadeIn>
      <Footer />
    </main>
  )
}
