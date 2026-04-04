"use client"

import { Search } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomepage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "Wellness", href: "/wellness" },
    { label: "Dining", href: "/dining" },
    { label: "Contact", href: "/contact" },
  ]

  const headerBg = isHomepage
    ? isScrolled
      ? "bg-[#f8f1e8] shadow-md backdrop-blur-sm"
      : "bg-transparent shadow-none"
    : "bg-[#f8f1e8] shadow-md backdrop-blur-sm"

  const textColor = isHomepage ? (isScrolled ? "text-foreground" : "text-white") : "text-foreground"

  const subtextColor = isHomepage ? (isScrolled ? "text-muted-foreground" : "text-white/70") : "text-muted-foreground"

  const navLinkColor = isHomepage ? (isScrolled ? "text-foreground" : "text-white") : "text-foreground"

  const buttonBg = isHomepage
    ? isScrolled
      ? "bg-foreground text-background hover:shadow-md"
      : "bg-white text-foreground hover:shadow-lg"
    : "bg-foreground text-background hover:shadow-md"

  const searchIconColor = isHomepage
    ? isScrolled
      ? "text-foreground hover:text-primary"
      : "text-white hover:text-white/70"
    : "text-foreground hover:text-primary"

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col items-start hover:opacity-80 transition-opacity">
            <h2 className={`font-serif text-2xl font-light ${textColor}`}>Elysium</h2>
            <p className={`text-xs font-light ${subtextColor}`}>Hotel & Wellness</p>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-light relative transition-colors ${navLinkColor}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Search & Login */}
          <div className="flex items-center gap-4">
            <button className={`p-2 transition-colors ${searchIconColor}`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${buttonBg}`}>
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
