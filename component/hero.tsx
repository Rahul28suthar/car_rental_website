"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import bmw from "../public/BMW-M5-CS-2021-1.jpg"
import bmwx from "../public/BMW-X7.jpg"
import audi from "../public/2020-audi-r8-coupe.jpg"
import porsche from "../public/PCGB25_0177_fine-1920x960.jpg"

export function Hero() {
  const images = [
    bmw,
    bmwx,
    audi,
    porsche,
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // 4 seconds per slide

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 mt-16 overflow-hidden">
      {/* 🔥 Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Car"
            fill
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
        

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 🔥 Actual Content (z-index above images) */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT SECTION */}
          <div className="space-y-6 text-white drop-shadow-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your <span className="text-accent animate-pulse">Perfect</span> Journey Starts Here
            </h1>

            <p className="text-lg text-white/90 leading-relaxed">
              Experience premium car rentals with transparent pricing, professional drivers, and unlimited routes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/#vehicles">
      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6 px-8">
        Book Your Car
        <ChevronRight className="ml-2" size={20} />
      </Button>
    </Link>

              <Button variant="outline" className="border-white text-black hover:bg-accent/10 text-base py-6 px-8">
                Learn More
              </Button>
            </div>
          </div>

          {/* EMPTY RIGHT SIDE (you can add image or remove completely) */}
          <div className="hidden lg:block"></div>
        </div>

        

      </div>
    </section>
  )
}
