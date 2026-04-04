"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

const roomCategories = [
  {
    id: 1,
    name: "Standard Room",
    description: "Elegantly appointed room with premium comfort and essential amenities for a restful stay.",
    amenities: ["Breakfast Included", "Gym Access", "Steam & Sauna", "WiFi"],
    image: "/classic-luxury-hotel-room.jpg",
    price: "250",
  },
  {
    id: 2,
    name: "Twin Room",
    description: "Spacious accommodation with two premium beds, perfect for friends or colleagues traveling together.",
    amenities: ["Breakfast Included", "Gym Access", "Steam & Sauna", "WiFi"],
    image: "/deluxe-hotel-room-with-balcony.jpg",
    price: "320",
  },
  {
    id: 3,
    name: "Junior Suite",
    description:
      "Extended living space with enhanced furnishings, offering extra room for ultimate comfort and relaxation.",
    amenities: ["Breakfast Included", "Gym Access", "Steam & Sauna", "WiFi", "Extra Space"],
    image: "/hotel-bedroom-luxury.jpg",
    price: "480",
  },
  {
    id: 4,
    name: "Suite",
    description:
      "Our most exclusive offering with premium interior design, expansive layout, and personalized luxury experience.",
    amenities: ["Breakfast Included", "Gym Access", "Steam & Sauna", "WiFi", "Extra Space", "Premium Service"],
    image: "/ultra-luxury-presidential-suite.jpg",
    price: "750",
  },
]

export default function RoomsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="mt-20 py-16 md:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="luxury-heading mb-4 text-foreground">Rooms & Suites</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover our carefully curated collection of luxurious accommodations, each designed to provide the perfect
            sanctuary for your stay.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {roomCategories.map((room) => (
              <div
                key={room.id}
                className="group cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredId(room.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg mb-8 border border-border">
                  <img
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <div>
                    <h2 className="text-3xl font-light text-foreground group-hover:text-primary transition-colors tracking-wide font-serif mb-3">
                      {room.name}
                    </h2>
                    <p className="text-foreground/70 leading-relaxed">{room.description}</p>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-primary/80 mb-3 font-light">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-4 py-2 bg-secondary border border-primary/20 rounded-full text-foreground/80 font-light"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center pt-6 border-t border-primary/20">
                    <div>
                      <span className="text-3xl font-light text-foreground">${room.price}</span>
                      <span className="text-sm text-foreground/50">/night</span>
                    </div>
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 text-2xl">
                      →
                    </div>
                  </div>

                  {/* Book Button */}
                  <button className="w-full bg-primary hover:shadow-lg text-white rounded-full py-3 text-sm font-semibold transition-all duration-300 hover:scale-105">
                    Reserve Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
