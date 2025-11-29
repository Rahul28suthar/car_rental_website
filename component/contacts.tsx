"use client"

import type React from "react"


import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

/*MADE WITH VERCEL V0*/
export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
  }

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Have questions about our vehicles or need special arrangements? Our team is ready to help you plan the
                perfect rental experience.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, title: "Phone", content: "1-800-DRIVE-NOW" },
                { icon: Mail, title: "Email", content: "support@driveflow.com" },
                { icon: MapPin, title: "Headquarters", content: "123 Drive Street, Auto City, AC 12345" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 hover:translate-x-2 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    <Icon
                      className="flex-shrink-0 mt-1 animate-bounce"
                      size={24}
                      style={{ animationDelay: `${index * 200}ms` }}
                    />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-primary-foreground/80">{item.content}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className={`bg-primary-foreground/5 rounded-xl p-8 border border-primary-foreground/10 transition-all duration-1000 delay-300 hover:scale-105 hover:shadow-2xl ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg bg-background text-foreground placeholder:text-foreground/50 border border-border transition-all focus:scale-105 focus:ring-2 focus:ring-accent"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg bg-background text-foreground placeholder:text-foreground/50 border border-border transition-all focus:scale-105 focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground placeholder:text-foreground/50 border border-border transition-all focus:scale-105 focus:ring-2 focus:ring-accent"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground placeholder:text-foreground/50 border border-border transition-all focus:scale-105 focus:ring-2 focus:ring-accent"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground placeholder:text-foreground/50 border border-border min-h-32 resize-none transition-all focus:scale-105 focus:ring-2 focus:ring-accent"
                required
              />

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
