import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DiningPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#8b7355] to-[#a0826d] py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h1 className="luxury-heading mb-4">Dining Experience</h1>
            <p className="luxury-subheading text-white/80">Culinary excellence awaits at every table</p>
          </div>
        </section>

        {/* Restaurant */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f1e8]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img
                src="/fine-dining-experience.png"
                alt="The Elysium Restaurant"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h2 className="font-serif text-4xl font-light mb-4 tracking-wide">The Elysium Restaurant</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Discover modern European cuisine prepared by our award-winning Chef in an elegant, intimate setting.
                  Our restaurant showcases seasonal ingredients and innovative techniques, offering a multi-course
                  dining experience that celebrates culinary artistry. Each dish is a masterpiece, complemented by our
                  carefully curated wine selection and attentive service.
                </p>
                <p className="text-gray-600 mb-6 font-light">
                  Whether for a romantic dinner, special celebration, or simply an unforgettable evening, The Elysium
                  Restaurant promises an exceptional gastronomic journey.
                </p>
                <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Make Reservation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Wine Bar */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img
                  src="/hotel-bedroom-luxury.jpg"
                  alt="The Elysium Wine Bar"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:order-1">
                <h2 className="font-serif text-4xl font-light mb-4 tracking-wide">The Elysium Wine Bar</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Step into sophistication at our exclusive Wine Bar, featuring an extensive collection of over 500
                  wines from around the world. Our knowledgeable sommeliers are passionate about wine and delighted to
                  guide you through our selections. Enjoy wine tastings, wine and cheese pairings, and curated small
                  plates in an ambiance of refined elegance.
                </p>
                <p className="text-gray-600 mb-6 font-light">
                  Whether you're a wine connoisseur or exploring new flavors, our Wine Bar offers the perfect setting
                  for an evening of discovery and relaxation.
                </p>
                <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Make Reservation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Terrace Bar */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f1e8]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img
                src="/pool-resort-views.jpg"
                alt="The Elysium Terrace Bar"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h2 className="font-serif text-4xl font-light mb-4 tracking-wide">The Elysium Terrace Bar</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Experience the magic of our open-air Terrace Bar, where stunning views meet craft cocktails and
                  refreshing beverages. Watch the sunset while savoring expertly crafted drinks prepared by our talented
                  mixologists. Our menu features signature cocktails, premium spirits, and light bites to complement
                  your evening.
                </p>
                <p className="text-gray-600 mb-6 font-light">
                  The Terrace Bar is the perfect venue for pre-dinner drinks, evening celebrations, or simply unwinding
                  under the stars with friends and loved ones.
                </p>
                <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Make Reservation
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
