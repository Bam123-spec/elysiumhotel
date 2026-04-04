"use client"

import { Star, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const scrollToCheckIn = () => {
    const element = document.getElementById("exclusive-offers")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image - luxury wooden lobby */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/luxury-hotel-lobby-entrance-cinematic.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="flex gap-2 mb-8 fade-in-up" style={{ animationDelay: "0.1s" }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-[#d4a574] text-[#d4a574]" />
          ))}
        </div>

        {/* Main heading */}
        <h1 className="luxury-heading text-white mb-6 fade-in-up max-w-4xl" style={{ animationDelay: "0.2s" }}>
          Welcome to Elysium
        </h1>

        {/* Subheading */}
        <p className="luxury-subheading text-white/90 mb-12 fade-in-up max-w-2xl" style={{ animationDelay: "0.4s" }}>
          Where comfort meets elegance. Your escape begins here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: "0.6s" }}>
          <button className="gold-button-pill bg-[#d4a574] text-white hover:scale-105">Book Your Stay</button>
          <button className="gold-button-pill border-2 border-white text-white bg-transparent hover:bg-white/10">
            Explore Wellness
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToCheckIn}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors scroll-indicator pulse"
        >
          <span className="text-sm font-light">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
