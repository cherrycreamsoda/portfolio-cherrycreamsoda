import './Footer.css'

function Footer() {
  return (
    <footer className="siteFooter">
      <nav className="footerSection" aria-label="Footer navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <nav className="footerSection" aria-label="Social links">
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
    </footer>
  )
}

export default Footer
