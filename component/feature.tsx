"use client"

import { Shield, Zap, Heart, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"


/*MADE by VERCEL V0*/


const features = [
  {
    icon: Shield,
    title: "Premium Insurance",
    description: "Full coverage protection for peace of mind on every journey.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Reserve your car in seconds with our streamlined platform.",
  },
  {
    icon: Heart,
    title: "Well-Maintained Fleet",
    description: "All vehicles regularly serviced and inspected for your safety.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service for any roadside assistance.",
  },
]

export function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
  <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50" ref={sectionRef}>
    <div className="max-w-7xl mx-auto">

      {/* Heading */}
      <div
        className={`text-center mb-16 space-y-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
          Why Choose DriveFlow?
        </h2>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          We deliver exceptional service with every reservation
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className={`
                relative group p-6 rounded-2xl border bg-card 
                transition-all duration-500 cursor-pointer
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                hover:-translate-y-2 hover:shadow-xl 
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/40 via-purple-500/30 to-blue-500/40 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>

              {/* Inside Card */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="text-white" size={26} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

}
