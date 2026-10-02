import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact" data-header-theme="dark">
      <form className="contactForm">
        <div className="nameFields">
          <label>
            First name
            <input type="text" name="firstName" />
          </label>
          <label>
            Last name
            <input type="text" name="lastName" />
          </label>
        </div>

        <label>
          Email address
          <input type="email" name="email" />
        </label>

        <label>
          Message
          <textarea name="message" rows="4" />
        </label>
      </form>

      <div className="contactDetails">
        <h2>Contact</h2>
        <a href="mailto:hello@cherrycreamsoda.xyz">
          hello@cherrycreamsoda.xyz
        </a>
      </div>
    </section>
  )
}

export default Contact