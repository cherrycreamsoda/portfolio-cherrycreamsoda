import { useState } from 'react'
import './Contact.css'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/2575b8f268477b239ea66fc800cdcc3e'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [honey, setHoney] = useState('') // spam trap
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    // Bots fill the hidden field; pretend it worked and stop
    if (honey) {
      setStatus('success')
      return
    }

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.firstName} via your site`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const result = await response.json()
      console.log(result)

      if (!response.ok || result.success === 'false') {
        throw new Error('Submission failed')
      }

      setStatus('success')
      setFormData(initialForm)
      setErrors({})
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact" data-header-theme="dark">
      <div className="contactDetails">
        <h2>Contact</h2>
      </div>

      <form className="contactForm" onSubmit={handleSubmit} noValidate>
        <div className="nameFields">
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              aria-invalid={!!errors.firstName}
            />
            {errors.firstName && <span className="fieldError">{errors.firstName}</span>}
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="family-name"
            />
          </label>
        </div>

        <label>
          Email address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="fieldError">{errors.email}</span>}
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
          />
          {errors.message && <span className="fieldError">{errors.message}</span>}
        </label>

        {/* Honeypot: hidden from real users */}
        <input
          type="text"
          name="_honey"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <button type="submit" className="submitButton" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>

        <p className={`formStatus ${status}`} role="status" aria-live="polite">
          {status === 'success' && "Thanks! Your message was sent. I'll get back to you soon."}
          {status === 'error' && 'Something went wrong. Please try again or email me directly.'}
        </p>
      </form>
    </section>
  )
}

export default Contact