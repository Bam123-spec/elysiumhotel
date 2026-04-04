"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "standard",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", roomType: "standard", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#8b7355] to-[#a0826d] py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h1 className="luxury-heading mb-4">Contact & Booking</h1>
            <p className="luxury-subheading text-white/80">We're here to help you plan your perfect stay</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f1e8]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl font-light mb-12 tracking-wide text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light mb-3 tracking-wide">Address</h3>
                <p className="text-gray-700">Elysium hotel and wellness</p>
                <p className="text-gray-700">XQPJ+JCC, Addis Ababa, Ethiopia</p>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light mb-3 tracking-wide">Phone</h3>
                <p className="text-gray-700 mb-2">251-9211-1519</p>
                <p className="text-gray-700">24/7 Guest Support Available</p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light mb-3 tracking-wide">Email</h3>
                <p className="text-gray-700 mb-2">reservations@elysium.com</p>
                <p className="text-gray-700 mb-2">info@elysium.com</p>
                <p className="text-gray-700">We respond within 2 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Inquiry Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl font-light mb-12 tracking-wide text-center">Booking Inquiry</h2>

            {submitted ? (
              <div className="bg-[#f8f1e8] border border-primary rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl font-light mb-3 text-primary">Thank You!</h3>
                <p className="text-gray-700">
                  We've received your inquiry and will contact you shortly to confirm your booking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-light mb-2 text-foreground">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-light mb-2 text-foreground">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-light mb-2 text-foreground">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="+1 (800) 555-0000"
                  />
                </div>

                {/* Room Type */}
                <div>
                  <label htmlFor="roomType" className="block text-sm font-light mb-2 text-foreground">
                    Room Type *
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
                  >
                    <option value="standard">Standard Room</option>
                    <option value="twin">Twin Room</option>
                    <option value="junior">Junior Room</option>
                    <option value="suite">Suite</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-light mb-2 text-foreground">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                    placeholder="Tell us about your booking needs, special requests, or questions..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
