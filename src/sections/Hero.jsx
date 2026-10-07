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
      const titleStyles = window.getComputedStyle(title)
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      if (!context) return

      context.font = [
        titleStyles.fontStyle,
        titleStyles.fontVariant,
        titleStyles.fontWeight,
        `${baseSize}px`,
        titleStyles.fontFamily,
      ].join(' ')

      const naturalWidth = context.measureText(title.textContent).width
      const letterSpacing = parseFloat(titleStyles.letterSpacing)
      const adjustedWidth =
        naturalWidth +
        (Number.isFinite(letterSpacing)
          ? letterSpacing * Math.max(title.textContent.length - 1, 0)
          : 0)
      const availableWidth = Math.max(
        document.documentElement.clientWidth - 270,
        0,
      )

      if (adjustedWidth > 0 && availableWidth > 0) {
        setTitleSize(`${(baseSize * availableWidth) / adjustedWidth}px`)
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
      </div>

      <h1
        className="heroTitle heroTitleBottom"
        style={titleSize ? { fontSize: titleSize } : undefined}
        aria-hidden="true"
      >
        <span className="heroTitleText" ref={titleRef}>
          cherrycreamsoda.
        </span>
      </h1>

      <h1
        className="heroTitle heroTitleMiddle"
        style={titleSize ? { fontSize: titleSize } : undefined}
        aria-hidden="true"
      >
        <span className="heroTitleText">cherrycreamsoda.</span>
      </h1>

      <div className="heroImageLayer">
        <img
          className="heroShape"
          src="/30.png"
          alt=""
          aria-hidden="true"
        />
      </div>

      <h1
        className="heroTitle heroTitleTop"
        style={titleSize ? { fontSize: titleSize } : undefined}
        aria-label="cherrycreamsoda."
      >
        <span className="heroTitleText">cherrycreamsoda.</span>
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