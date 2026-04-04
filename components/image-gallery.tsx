"use client"

export default function ImageGallery() {
  const images = [
    {
      id: 1,
      src: "/luxury-hotel-lobby-entrance-cinematic.jpg",
      alt: "Lobby",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      src: "/fine-dining-experience.png",
      alt: "Restaurant",
      span: "md:col-span-1",
    },
    {
      id: 3,
      src: "/spa-massage-wellness.jpg",
      alt: "Spa",
      span: "md:col-span-1",
    },
    {
      id: 4,
      src: "/hotel-bedroom-luxury.jpg",
      alt: "Bedroom",
      span: "md:col-span-1",
    },
    {
      id: 5,
      src: "/pool-resort-views.jpg",
      alt: "Pool",
      span: "md:col-span-1",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="luxury-text text-center mb-16 text-foreground">Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {images.map((image) => (
            <div key={image.id} className={`relative rounded-lg overflow-hidden shadow-lg group ${image.span}`}>
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              <p className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
