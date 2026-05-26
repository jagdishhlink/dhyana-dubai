import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { businessData, aiContent, siteConfig } from './data'

export default function App() {
  const layout = siteConfig.layout || 'default'

  return (
    <div className="noise">
      <div className="mesh-gradient" />
      <Navbar business={businessData} />
      <Hero business={businessData} ai={aiContent} layout={layout} />
      <About business={businessData} ai={aiContent} layout={layout} />
      <Services ai={aiContent} layout={layout} />
      <Gallery business={businessData} />
      <Testimonials ai={aiContent} layout={layout} />
      <Contact business={businessData} ai={aiContent} />
      <Footer business={businessData} ai={aiContent} />
    </div>
  )
}
