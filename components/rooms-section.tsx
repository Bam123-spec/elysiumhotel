"use client"

import { useState } from "react"

const rooms = [
  {
    id: 1,
    name: "Classic Room",
    description: "Elegantly designed room with essential amenities",
    image: "/classic-luxury-hotel-room.jpg",
    price: "250",
  },
  {
    id: 2,
    name: "Grand Deluxe Room",
    description: "Spacious room with premium furnishings and views",
    image: "/deluxe-hotel-room-with-balcony.jpg",
    price: "450",
  },
  {
    id: 3,
    name: "Ultra Superior Room",
    description: "Our most exclusive offering with private terrace",
    image: "/ultra-luxury-presidential-suite.jpg",
    price: "750",
  },
]

export default function RoomsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="luxury-heading text-center mb-16 text-foreground">Rooms & Suites</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg mb-6 border-4 border-background">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-light text-foreground group-hover:text-primary transition-colors tracking-wide">
                  {room.name}
                </h3>
                <p className="text-sm text-foreground/60">{room.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-primary/20">
                  <span className="text-lg font-light text-foreground">
                    ${room.price}
                    <span className="text-xs text-foreground/50">/night</span>
                  </span>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-all">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
