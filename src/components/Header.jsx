import { useEffect, useState } from 'react'
import "./Header.css"

function Header() {
  const [headerTheme, setHeaderTheme] = useState('dark')

  useEffect(() => {
    const handleScroll = () => {
      const activeSection = Array.from(
        document.querySelectorAll('[data-header-theme]'),
      ).find((section) => {
        const bounds = section.getBoundingClientRect()
        return bounds.top <= 90 && bounds.bottom > 90
      })

      setHeaderTheme(activeSection?.dataset.headerTheme ?? 'dark')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header${headerTheme === 'light' ? ' light' : ''}`}>
      <nav className="nav">
        <a className="logo" href="#top">cherrycreamsoda.</a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>
      </nav>
      <div className="ctaBox">
        <a className="ctaButton" href="#contact">Contact</a>
        <a className="ctaExtension" href="#contact" aria-label="Contact">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header