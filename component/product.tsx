"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import bmw1 from "../public/bmw1.png"
import bmw2 from "../public/bmw2.png"
import bmw3 from "../public/bmw3.png"
import audi1 from "../public/audi1.png"
import audi2 from "../public/audi2.png"
import audi3 from "../public/audi3.png"
import porsche1 from "../public/porsche1.png"
import porsche2 from "../public/porsche2.png"
import porsche3 from "../public/porsche3.png"
import bmwx1 from "../public/bmwx1.png"
import bmwx2 from "../public/bmwx2.png"
import bmwx3 from "../public/bmwx3.png"

const vehicles = [
  {
    name: "Sport Sedan",
    category: "Perfect for family and fast travelers",
    price: "$65",
    images: [bmw1, bmw2, bmw3],
    features: ["5 Seats", "25 MPG", "Manual/Auto"],
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Premium SUV",
    category: "Comfort and space",
    price: "$55",
    images: [bmwx1, bmwx2, bmwx3],
    features: ["7 Seats", "25 MPG", "All-Wheel Drive"],
    color: "from-accent to-orange-600",
    featured: true,
  },
  {
    name: "Supercar",
    category: "Experience elegance",
    price: "$125",
    images: [audi1, audi2, audi3],
    features: ["5 Seats", "28 MPG", "Advanced Tech"],
    color: "from-purple-500 to-purple-600",
  },
   {
    name: "Sportcar",
    category: "Experience elegance",
    price: "$100",
    images: [porsche1, porsche2, porsche3],
    features: ["5 Seats", "28 MPG", "Advanced Tech"],
    color: "from-purple-500 to-purple-600",
  },
]

export function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [slides, setSlides] = useState<number[]>(
    vehicles.map(() => 0)
  )

  const sectionRef = useRef<HTMLDivElement>(null)

  // Section fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto slide animation for each product
  useEffect(() => {
    const timers = vehicles.map((_, index) =>
      setInterval(() => {
        setSlides((prev) => {
          const next = [...prev]
          next[index] = (prev[index] + 1) % vehicles[index].images.length
          return next
        })
      }, 3000)
    )

    return () => timers.forEach((t) => clearInterval(t))
  }, [])

  return (
    <section id="vehicles" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Fleet</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Choose from our carefully selected collection of premium vehicles
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden bg-card border border-border transition-all duration-700 
                hover:scale-105 hover:rotate-1 hover:shadow-xl group
                ${vehicle.featured ? "ring-2 ring-accent md:col-span-2 lg:col-span-1" : ""}
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Slider */}
              <div className={`relative h-48 bg-gradient-to-br ${vehicle.color} overflow-hidden`}>
                {vehicle.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={typeof img === "string" ? img : img.src}
                    alt={vehicle.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                      ${slides[index] === imgIndex ? "opacity-100" : "opacity-0"}
                      group-hover:scale-125 transition-transform
                    `}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-accent font-semibold mb-1">{vehicle.category}</p>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                    {vehicle.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-muted px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-3xl font-bold">{vehicle.price}</span>
                  <span className="text-foreground/60">/day</span>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
