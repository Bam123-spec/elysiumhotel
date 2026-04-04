const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Luxury Travel Enthusiast",
    content:
      "Elysium exceeded every expectation. The spa experience alone was transformative, and the staff treated us like family.",
    image: "/professional-headshot.png",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Business Executive",
    content:
      "A perfect blend of productivity and relaxation. The concierge service is impeccable, and every detail is thoughtfully designed.",
    image: "/professional-headshot.png",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Wellness Coach",
    content:
      "This is where wellness meets luxury. Every moment at Elysium felt intentional and rejuvenating. I'm already planning my return.",
    image: "/professional-headshot.png",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-center mb-16 text-foreground text-balance">
          What Our Guests Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-secondary rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-primary/10"
            >
              <p className="text-foreground/70 leading-relaxed mb-8 font-light italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-primary/20"
                />
                <div>
                  <p className="font-light text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
