import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Neural from "../components/Neural"
import AISolutions from "../components/AISolutions"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Neural />
      <AISolutions />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

