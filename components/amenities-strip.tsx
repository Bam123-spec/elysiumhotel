import { Space as Spa, Wine, Headphones, Hotel } from "lucide-react"

const amenities = [
  {
    icon: Headphones,
    label: "24/7 Concierge",
  },
  {
    icon: Spa,
    label: "Wellness & Spa",
  },
  {
    icon: Wine,
    label: "Fine Dining",
  },
  {
    icon: Hotel,
    label: "150+ Luxury Suites",
  },
]

export default function AmenitiesStrip() {
  return (
    <section className="py-16 bg-background border-y border-primary/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="p-3 rounded-full bg-secondary border-2 border-primary/30">
                <amenity.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-light text-foreground tracking-wide">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
