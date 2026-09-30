import './Hero.css'

const TEXT = 'CherryCreamSoda.'
const REPEAT = 4

const track = Array(REPEAT).fill(TEXT).join('')

function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <div className="marquee">
          <div className="marqueeTrack">
            <span className="marqueeText">{track}</span>
            <span className="marqueeText" aria-hidden="true">{track}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero