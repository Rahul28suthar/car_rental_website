"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-sm border-b z-50 transition-all duration-500 ${
        scrolled ? "bg-background/98 border-border shadow-lg" : "bg-background/95 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:inline">DrivenDreams</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground/80 hover:text-foreground hover:scale-110 transition-all">
            Features
          </a>
          <a href="#vehicles" className="text-foreground/80 hover:text-foreground hover:scale-110 transition-all">
            Vehicles
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground hover:scale-110 transition-all">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-all hover:rotate-90 duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <Button className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg">
          Book Now
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background animate-in slide-in-from-top duration-300">
          <nav className="px-4 py-4 flex flex-col gap-4">
            <a
              href="#features"
              className="text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#vehicles"
              className="text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Vehicles
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full bg-accent text-accent-foreground hover:scale-105 transition-transform duration-300">
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
