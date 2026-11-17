import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Signature from './components/Signature'
import Craftsmanship from './components/Craftsmanship'
import Lifestyle from './components/Lifestyle'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Collections />
        </Reveal>
        <Reveal>
          <Signature />
        </Reveal>
        <Reveal>
          <Craftsmanship />
        </Reveal>
        <Reveal>
          <Lifestyle />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App