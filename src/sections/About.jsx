import aboutImage from '../assets/about.jpg'
import './About.css'

function About() {
  return (
    <section className="about" id="about" data-header-theme="light">
      <div className="aboutContent">
        <h2>About</h2>
        <div className="aboutDescription">
          <p>
            I’m <span className="aboutName">Hamza Zain</span>, a Computer
            Science student and frontend developer who enjoys turning ideas into
            thoughtful, polished digital experiences.
          </p>
          <p>
            I build responsive websites and applications with JavaScript,
            React, Next.js, TypeScript, HTML, and CSS. From portfolios and
            business websites to dashboards and full-stack products.
          </p>
          <p>
            I enjoy working across both the interface and the systems behind
            it, using APIs, databases, authentication, and integrations to
            turn ideas into real products. Outside of development, I enjoy
            exploring new technology, gaming, Sudoku, chess, Minesweeper, and
            story-driven PC games.
          </p>
        </div>
      </div>

      <div className="aboutImage">
        <img src={aboutImage} alt="Abstract colorful fluid shape" />
      </div>
    </section>
  )
}

export default About