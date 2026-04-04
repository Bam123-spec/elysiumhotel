export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image with warm styling */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-xl border-8 border-secondary">
              <img
                src="/luxury-spa-wellness-amenities.jpg"
                alt="Spa and wellness at Elysium"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Right: Content with soft gold accents */}
          <div className="flex flex-col gap-8">
            <h2 className="luxury-heading text-foreground">A place to relax and rejuvenate</h2>
            <p className="text-foreground/70 leading-relaxed text-lg">
              At Elysium Hotel & Wellness, we believe that true luxury is found in the perfect balance of comfort,
              elegance, and holistic well-being. Our boutique resort offers world-class amenities, personalized service,
              and serene spaces designed to nourish both body and mind.
            </p>
            <p className="text-foreground/70 leading-relaxed text-lg">
              Each detail has been carefully curated to create an unforgettable experience—from our award-winning spa to
              our fine dining restaurant, every moment at Elysium is crafted for your ultimate comfort and rejuvenation.
            </p>
            <div className="pt-6 border-t-2 border-primary/20">
              <p className="text-foreground font-light text-lg">- The Elysium Team</p>
              <p className="text-sm text-muted-foreground">Dedicated to your wellness journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
