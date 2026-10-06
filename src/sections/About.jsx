import aboutImage from '../assets/hero.png'
import './About.css'

function About() {
  return (
    <section className="about" id="about" data-header-theme="light">
      <div className="aboutContent">
        <h2>About</h2>
        <div className="aboutDescription">
          <p>
            I am a designer and developer creating thoughtful digital
            experiences with a focus on clarity, detail, and motion.
          </p>
        </div>
      </div>

      <div className="aboutImage">
        <img src={aboutImage} alt="" />
      </div>
    </section>
  )
}

export default About