import './Footer.css'

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerTop">
        <div className="footerBrand footerSection">
          <a className="footerLogo" href="#top">cherrycreamsoda.</a>
          <p>
            A frontend developer creating thoughtful, polished digital
            experiences.
          </p>
        </div>

        <nav className="footerSection" aria-label="Footer navigation">
          <h2>Navigation</h2>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <nav className="footerSection" aria-label="Social links">
          <h2>Socials</h2>
          <a
            href="https://github.com/cherrycreamsoda/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.behance.net/hamzazainbhatti"
            target="_blank"
            rel="noreferrer"
          >
            Behance
          </a>
          <a
            href="https://www.linkedin.com/in/hamzazainbhatti/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>

      <div className="footerBottom">
        <p>© {new Date().getFullYear()} cherrycreamsoda. All rights reserved.</p>
        <p>Built with 🤍 by yours truly.</p>
      </div>
    </footer>
  )
}

export default Footer
