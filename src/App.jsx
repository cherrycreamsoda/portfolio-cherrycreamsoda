import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Work from './sections/Work'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import PageScrollbar from './components/PageScrollbar'

function App() {
  const [backToTopVisible, setBackToTopVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('#top')
      setBackToTopVisible(hero ? hero.getBoundingClientRect().bottom <= 0 : false)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <CustomCursor />
      <PageScrollbar />
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
      <button
        className={`backToTop${backToTopVisible ? ' visible' : ''}`}
        type="button"
        aria-label="Back to top"
        tabIndex={backToTopVisible ? 0 : -1}
        onClick={scrollToTop}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 18V6M7 11l5-5 5 5" />
        </svg>
      </button>
    </>
  )
}

export default App