import './Hero.css'

const TEXT = 'CherryCreamSoda'
const REPEAT = 4

const track = Array(REPEAT).fill(TEXT).join('')

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroContent">
        <div className="marquee">
          <div className="marqueeTrack">
            <span className="marqueeText">{track}</span>
            <span className="marqueeText" aria-hidden="true">{track}</span>
          </div>
        </div>
      </div>

      <div className="scroll">
        <span className="scrollLabel">Scroll</span>
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
    </section>
  )
}

export default Hero