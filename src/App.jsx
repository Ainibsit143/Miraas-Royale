import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Signature from './components/Signature'
import Story from './components/Story'
import Craftsmanship from './components/Craftsmanship'
import Inspiration from './components/Inspiration'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collections />
        <Signature />
        <Story />
        <Craftsmanship />
        <Inspiration />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App