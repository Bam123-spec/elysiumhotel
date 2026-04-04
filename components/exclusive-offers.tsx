"use client"

export default function ExclusiveOffers() {
  const offers = [
    {
      id: 1,
      badge: "25% OFF",
      title: "Summer Escape Package",
      description: "Tropical beach views and sunset experiences",
      expiration: "Valid until Aug 31, 2025",
      image: "/pool-resort-views.jpg",
    },
    {
      id: 2,
      badge: "20% OFF",
      title: "Romantic Getaway",
      description: "Perfect for couples seeking intimate luxury",
      expiration: "Valid until Sep 30, 2025",
      image: "/classic-luxury-hotel-room.jpg",
    },
    {
      id: 3,
      badge: "30% OFF",
      title: "Luxury Retreat",
      description: "Elegant interiors and world-class amenities",
      expiration: "Valid until Oct 31, 2025",
      image: "/ultra-luxury-presidential-suite.jpg",
    },
  ]

  return (
    <section id="exclusive-offers" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="luxury-heading text-foreground mb-4">Exclusive Offers</h2>
            <p className="text-muted-foreground max-w-2xl text-balance">
              Discover limited-time packages and exclusive deals curated for an unforgettable Elysium experience.
            </p>
          </div>
          <a
            href="#"
            className="text-primary hover:text-primary/80 transition-colors font-light flex items-center gap-2 mt-6 md:mt-0"
          >
            View All Offers
            <span className="text-lg">→</span>
          </a>
        </div>

        {/* Offer Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card group relative rounded-2xl overflow-hidden bg-card shadow-lg">
              {/* Image with overlay */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${offer.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  {offer.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-light text-foreground mb-2">{offer.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{offer.description}</p>
                <p className="text-xs text-muted-foreground mb-6">{offer.expiration}</p>
                <button className="w-full text-white bg-foreground hover:bg-foreground/90 transition-colors py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                  View Offer
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
