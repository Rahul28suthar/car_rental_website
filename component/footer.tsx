"use client"

import { Mail } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8" ref={footerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div
            className={`space-y-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">DriveFlow</span>
            </div>
            <p className="text-background/70">Premium car rentals for every journey.</p>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#" className="hover:text-background hover:translate-x-1 transition-all inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background hover:translate-x-1 transition-all inline-block">
                  Vehicles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background hover:translate-x-1 transition-all inline-block">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background hover:translate-x-1 transition-all inline-block">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#" className="hover:text-background hover:translate-x-1 transition-all inline-block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background hover:translate-x-1 transition-all inline-block">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background hover:translate-x-1 transition-all inline-block">
                  Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background hover:translate-x-1 transition-all inline-block">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-background/70 mb-3 text-sm">Subscribe for deals and updates.</p>
            <div className="flex group">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded-l-lg bg-background text-foreground placeholder:text-foreground/50 text-sm transition-all focus:ring-2 focus:ring-accent"
              />
              <button className="px-3 py-2 rounded-r-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-110">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-background/60 text-sm transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>&copy; 2025 DriveFlow. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-background hover:-translate-y-1 transition-all inline-block">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background hover:-translate-y-1 transition-all inline-block">
              Terms of Service
            </a>
            <a href="#" className="hover:text-background hover:-translate-y-1 transition-all inline-block">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
