import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, X } from 'lucide-react'

interface AdvisorModalProps {
  open: boolean
  initialEnquiryType: string
  onClose: () => void
  onSubmitSuccess: () => void
}

export default function AdvisorModal({
  open,
  initialEnquiryType,
  onClose,
  onSubmitSuccess,
}: AdvisorModalProps) {
  const [enquiryType, setEnquiryType] = useState(initialEnquiryType)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setEnquiryType(initialEnquiryType)
    setError('')
  }, [initialEnquiryType, open])

  if (!open) return null

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    if (!endpoint) {
      setError('The enquiry form is not configured yet. Please try again later.')
      return
    }

    setSubmitting(true)
    setError('')

    try {
      const formData = new FormData(event.currentTarget)
      formData.set('enquiry_type', enquiryType)

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Enquiry submission failed')

      onSubmitSuccess()
      onClose()
    } catch {
      setError('We couldn’t submit your enquiry. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="modal booking-modal advisor-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Talk to a property advisor"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
        >
          <X />
        </button>

        <div className="eyebrow">
          <span className="eyebrow-line" /> PERSONAL PROPERTY GUIDANCE
        </div>
        <h2>Let’s discuss your next move.</h2>
        <p>
          Tell us what you’re looking for, and we’ll help you explore your options.
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="Full Name" required autoComplete="name" placeholder="Full name" />
          </label>
          <label>
            Email address
            <input
              name="Email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>
          <label>
            Phone number (optional)
            <input name="Phone Number" type="tel" autoComplete="tel" placeholder="Your contact number" />
          </label>
          <label>
            What can we help you with?
            <select
              name="Enquiry Type Selected" 
              value={enquiryType}
              onChange={(event) => setEnquiryType(event.target.value)}
            >
              <option>General property advice</option>
              <option>Buying a property</option>
              <option>Renting a property</option>
              <option>Selling a property</option>
              <option>Property investment</option>
              <option>Commercial property</option>
              <option>Other enquiry</option>
            </select>
          </label>
          <label>
            Tell us a little more
            <textarea
              name="Message"
              required
              rows={3}
              placeholder="Location, budget, property type, or your plans"
            />
          </label>

          {error && <p role="alert">{error}</p>}

          <button className="button button-dark" type="submit" disabled={submitting}>
            {submitting ? 'Submitting…' : 'Send enquiry'}
            {!submitting && <ArrowRight size={16} />}
          </button>
          <small className="disclaimer">
            Your enquiry will be sent through our configured form service.
          </small>
        </form>
      </div>
    </div>
  )
}
