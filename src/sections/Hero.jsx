import { useEffect, useState } from 'react'
import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './Hero.css'

const NAME = 'cherrycreamsoda'

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hamzazainbhatti/', Icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/cherrycreamsoda/', Icon: FaGithub },
  { label: 'Behance', href: 'https://www.behance.net/hamzazainbhatti', Icon: FaBehance },
]

function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="top" data-header-theme="light">
      <div className="heroFrame">
        <nav
          className={`heroNav${hasScrolled ? ' is-hidden' : ''}`}
          aria-label="Hero navigation"
        >
          <div className="heroNavLinks">
            <a href="#work">Work</a>
            <a href="#about">About</a>
          </div>
          <a className="heroNavBrand" href="#top">Cherrycreamsoda.</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="heroDescriptor">a Frontend Developer.</p>
      </div>

      {/* Same name, 3 layers. Their z-index (see CSS) controls the stacking. */}
      <div className="heroTitle heroTitleMiddle" aria-hidden="true">
        <span className="heroTitleText">{NAME}</span>
      </div>
      <div className="heroTitle heroTitleBottom" aria-hidden="true">
        <span className="heroTitleText">{NAME}</span>
      </div>
      <img className="heroShape" src="/30.png" alt="" />
      <h1 className="heroTitle heroTitleTop">
        <span className="heroTitleText">{NAME}</span>
      </h1>

      <div className="scroll" aria-hidden="true">
        <svg className="scrollArrow" viewBox="0 0 40 40">
          <g className="arrowDrop">
            <path className="arrowCurve" d="M4 6 L17 19 Q20 22 23 19 L36 6" />
          </g>
        </svg>
      </div>

      <nav className="heroSocials" aria-label="Social links">
        {SOCIALS.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        ))}
      </nav>
    </section>
  )
}

export default Hero