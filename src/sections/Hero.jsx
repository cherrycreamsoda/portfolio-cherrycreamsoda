import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './Hero.css'

const TEXT = 'CherryCreamSoda'
const REPEAT = 4

const track = Array(REPEAT).fill(TEXT).join('')

function Hero() {
  return (
    <section className="hero" id="top" data-header-theme="dark">
      <div className="heroContent">
        <div className="marquee">
          <div className="marqueeTrack">
            <span className="marqueeText">{track}</span>
            <span className="marqueeText" aria-hidden="true">{track}</span>
          </div>
        </div>
      </div>

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