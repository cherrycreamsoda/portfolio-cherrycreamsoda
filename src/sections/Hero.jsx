import { useLayoutEffect, useRef, useState } from 'react'
import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  const titleRef = useRef(null)
  const [titleSize, setTitleSize] = useState(null)

  useLayoutEffect(() => {
    const title = titleRef.current
    if (!title) return undefined

    const updateTitleSize = () => {
      const baseSize = 100
      const measurement = title.cloneNode(true)
      measurement.style.position = 'fixed'
      measurement.style.left = '0'
      measurement.style.top = '0'
      measurement.style.width = 'max-content'
      measurement.style.fontSize = `${baseSize}px`
      measurement.style.visibility = 'hidden'
      measurement.style.pointerEvents = 'none'
      document.body.appendChild(measurement)

      const naturalWidth = measurement.getBoundingClientRect().width
      const availableWidth = Math.max(
        document.documentElement.clientWidth,
        0,
      )
      measurement.remove()

      if (naturalWidth > 0 && availableWidth > 0) {
        setTitleSize(`${(baseSize * availableWidth) / naturalWidth}px`)
      }
    }

    updateTitleSize()
    const observer = new ResizeObserver(updateTitleSize)
    observer.observe(document.documentElement)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="top" data-header-theme="light">
      <div className="heroFrame">
        <nav className="heroNav" aria-label="Hero navigation">
          <div className="heroNavLinks">
            <a href="#work">Work</a>
            <a href="#about">About</a>
          </div>
          <a href="#contact">Contact</a>
        </nav>

        <img
          className="heroShape"
          src="/30.png"
          alt=""
          aria-hidden="true"
        />
      </div>

      <h1
        ref={titleRef}
        className="heroTitle"
        style={titleSize ? { fontSize: titleSize } : undefined}
      >
        cherrycreamsoda.
      </h1>

      <div className="scroll">
        <svg
          className="scrollArrow"
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <g className="arrowDrop">
            <path className="arrowCurve" d="M4 6 L17 19 Q20 22 23 19 L36 6" />
          </g>
        </svg>
      </div>

      <nav className="heroSocials" aria-label="Social links">
        <a
          href="https://www.linkedin.com/in/hamzazainbhatti/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn aria-hidden="true" />
        </a>
        <a
          href="https://github.com/cherrycreamsoda/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub aria-hidden="true" />
        </a>
        <a
          href="https://www.behance.net/hamzazainbhatti"
          target="_blank"
          rel="noreferrer"
          aria-label="Behance"
        >
          <FaBehance aria-hidden="true" />
        </a>
      </nav>

    </section>
  )
}

export default Hero