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
        <button type="button">Contact</button>
      </div>
    </header>
  )
}

export default Header