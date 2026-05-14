import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import AppSection from './components/AppSection'
import VideoSection from './components/VideoSection'
import ComingSoon from './components/ComingSoon'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <AppSection />
        <VideoSection />
        <ComingSoon />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
