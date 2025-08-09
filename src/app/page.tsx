import Hero from './components/Hero'
import Header from './components/Header'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Contact />
      <Footer />
    </main>
  )
}
