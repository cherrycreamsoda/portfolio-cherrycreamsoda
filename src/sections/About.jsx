import aboutImage from '../assets/hero.png'
import './About.css'

function About() {
  return (
    <section className="about" id="about" data-header-theme="light">
      <div className="aboutImage">
        <img src={aboutImage} alt="" />
      </div>

      <div className="aboutContent">
        <h2>About</h2>
        <p>
          I am a designer and developer creating thoughtful digital experiences
          with a focus on clarity, detail, and motion.
        </p>
      </div>
    </section>
  )
}

export default About