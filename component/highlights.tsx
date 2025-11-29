"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import happy1 from "../public/-1x-1.webp"
import happy2 from "../public/6aa8eff0-c0f9-4dfc-9782-0d6de2bdf305_audi-rs6-performance-review-thumbnail-1.avif"
import happy3 from "../public/Ci6ElXVWYAAYlgw.jpg"

const sliderImages = [
  happy1,
  happy2,
  happy3,
]

export function Highlights() {
  const [isVisible, setIsVisible] = useState(false)
  const [slide, setSlide] = useState(0)
  const [counters, setCounters] = useState({ customers: 0, vehicles: 0, locations: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const animateCounter = (target: number, key: any, duration: number) => {
        let current = 0
        const step = target / (duration / 16)

        const timer = setInterval(() => {
          current += step
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
        }, 16)
      }

      animateCounter(50, "customers", 2000)
      animateCounter(500, "vehicles", 2000)
      animateCounter(25, "locations", 2000)
    }
  }, [isVisible])

  // Background image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prev => (prev + 1) % sliderImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

   return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" ref={sectionRef}>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* ---------------- LEFT IMAGE ---------------- */}
    <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden">
      {sliderImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="Happy customers"
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-[1500ms] 
            ${slide === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>

    {/* ---------------- RIGHT TEXT ---------------- */}
    <div
      className={`relative z-10 space-y-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
        Find, book, and rent a car in{" "}
        <span className="text-blue-600">minutes</span>
      </h1>

      <p className="text-gray-700 text-lg">
        Experience a seamless car rental service with flexible pickup options
        and premium vehicles designed for your journey.
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Start Your Ride
      </button>
    </div>

  </div>
</section>


  )
}
