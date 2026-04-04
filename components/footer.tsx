import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light mb-4 tracking-wide">Elysium</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Where comfort meets elegance. Your luxury wellness escape awaits.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-light mb-4 uppercase tracking-widest text-primary">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <p className="text-sm text-white/60">Bole Addis Ababa, Ethiopia</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <p className="text-sm text-white/60">+251 91-121-5119</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <p className="text-sm text-white/60">elysiumhotel&wellness@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-light mb-4 uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Dining
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Reservation */}
          <div>
            <h4 className="text-sm font-light mb-4 uppercase tracking-widest text-primary">Reservation</h4>
            <button className="w-full bg-primary text-white rounded-full py-2 text-sm font-semibold hover:shadow-lg transition-all mb-4 hover:scale-105">
              Book Now
            </button>
            <p className="text-xs text-white/60">Need help? We are here to help you for all your needs. Please enjoy your stay!</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50">© 2026 Elysium Hotel & Wellness. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/50 hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
