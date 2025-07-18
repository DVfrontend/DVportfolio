import { Navbar, Footer } from '@/shared/ui'
import { Hero, About, Projects, Contact } from '@/widgets'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="sm:mt-0 mt-12">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
