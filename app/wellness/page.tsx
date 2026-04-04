import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WellnessPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#8b7355] to-[#a0826d] py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h1 className="luxury-heading mb-4">Wellness & Spa</h1>
            <p className="luxury-subheading text-white/80">Rejuvenate your mind, body, and soul</p>
          </div>
        </section>

        {/* Moroccan Bath & Facial Reflexology */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f1e8]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img
                src="/spa-massage-wellness.jpg"
                alt="Moroccan Bath & Facial Reflexology"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h2 className="font-serif text-4xl font-light mb-6 tracking-wide">
                  Moroccan Bath & Facial Reflexology
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Experience the ancient traditions of Moroccan bathing combined with modern reflexology techniques. Our
                  expert therapists use traditional methods to cleanse and rejuvenate your skin, promoting circulation
                  and deep relaxation. The warmth and aromatic oils transport you to a state of pure tranquility.
                </p>
                <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Steam & Sauna */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img
                  src="/luxury-spa-wellness-amenities.jpg"
                  alt="Steam & Sauna"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:order-1">
                <h2 className="font-serif text-4xl font-light mb-6 tracking-wide">Steam & Sauna</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Detoxify your body in our state-of-the-art steam rooms and traditional saunas. Each facility is
                  designed to provide the perfect temperature and humidity to open your pores, cleanse your skin, and
                  release tension from tired muscles. The therapeutic heat promotes circulation and wellness.
                </p>
                <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Relaxation Lounge */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f1e8]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img
                src="/luxury-hotel-lobby-entrance-cinematic.jpg"
                alt="Relaxation Lounge"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h2 className="font-serif text-4xl font-light mb-6 tracking-wide">Relaxation Lounge</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Unwind in our luxurious relaxation lounge featuring comfortable seating, ambient lighting, and calming
                  aromatherapy. Enjoy herbal teas, smoothies, and light refreshments while reading or meditating. The
                  serene environment is designed for complete mental and physical restoration.
                </p>
                <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Massage Therapy Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img
                  src="/spa-massage-wellness.jpg"
                  alt="Massage Therapy Services"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:order-1">
                <h2 className="font-serif text-4xl font-light mb-6 tracking-wide">Massage Therapy Services</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  From Swedish and deep tissue to hot stone and Thai massage, our certified therapists offer a
                  comprehensive range of massage treatments. Each session is customized to your specific needs,
                  targeting tension, promoting healing, and inducing a state of pure relaxation and wellness.
                </p>
                <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gym & Fitness Center */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f1e8]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img
                src="/img/gymdesign_render_Two_collumn_grid_cb1b5850-fa8e-4a7b-a2b3-190c2e45facd.webp"
                alt="Gym & Fitness Center"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h2 className="font-serif text-4xl font-light mb-6 tracking-wide">Gym & Fitness Center</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Stay energized in our fully equipped fitness center, featuring modern cardio machines, free weights,
                  resistance equipment, and stretching areas. Whether you're maintaining your routine or starting fresh,
                  our gym provides a clean, spacious, and inspiring environment for every guest.
                </p>
                <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
