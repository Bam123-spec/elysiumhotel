"use client"

import { Calendar, Users } from "lucide-react"

interface CheckInWidgetProps {
  checkInDate: string
  checkOutDate: string
  guests: string
  onCheckInChange: (date: string) => void
  onCheckOutChange: (date: string) => void
  onGuestsChange: (guests: string) => void
}

export default function CheckInWidget({
  checkInDate,
  checkOutDate,
  guests,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
}: CheckInWidgetProps) {
  return (
    <div id="check-in-widget" className="relative -mt-24 z-20 px-4 max-w-4xl mx-auto mb-16">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
          {/* Check-in Date */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-foreground mb-2">Check-in</label>
            <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-secondary/50">
              <Calendar className="w-4 h-4 text-primary" />
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => onCheckInChange(e.target.value)}
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-foreground mb-2">Check-out</label>
            <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-secondary/50">
              <Calendar className="w-4 h-4 text-primary" />
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => onCheckOutChange(e.target.value)}
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-foreground mb-2">Guests</label>
            <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-secondary/50">
              <Users className="w-4 h-4 text-primary" />
              <select
                value={guests}
                onChange={(e) => onGuestsChange(e.target.value)}
                className="w-full outline-none text-sm bg-transparent"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-foreground mb-2">Promo Code</label>
            <input
              type="text"
              placeholder="Enter code"
              className="border border-border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary bg-secondary/50"
            />
          </div>

          {/* Check Availability Button */}
          <button className="w-full bg-primary text-primary-foreground rounded-lg py-2 font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  )
}
