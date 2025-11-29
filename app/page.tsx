import { Header } from "@/component/header"
import { Hero } from "@/component/hero"
import { Features } from "@/component/feature"
import { Highlights } from "@/component/highlights"
import { Products } from "@/component/product"
import { Contact } from "@/component/contacts"
import { Footer } from "@/component/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Highlights />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
}
