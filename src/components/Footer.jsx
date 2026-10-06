import './Footer.css'

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerTop">
        <span>© 2026 cherrycreamsoda.</span>
        <div className="footerLinks">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="footerCredit">
        <span>made with 🤍 by yours truely.</span>
      </div>
    </footer>
  )
}

export default Footer
