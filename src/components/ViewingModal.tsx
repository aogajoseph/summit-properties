import type { FormEvent } from 'react'
import { ArrowRight, X } from 'lucide-react'
import type { Property } from '../content/site'

interface ViewingModalProps {
  property: Property | null
  onClose: () => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  submitting: boolean
  error: string
}

export default function ViewingModal({
  property,
  onClose,
  onSubmit,
  submitting,
  error,
}: ViewingModalProps) {
  if (!property) return null

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="modal booking-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Book a property viewing"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close booking form"
        >
          <X />
        </button>

        <div className="eyebrow">
          <span className="eyebrow-line" /> PRIVATE VIEWING
        </div>

        <h2>
          See if it feels
          <br />
          <em>like your place.</em>
        </h2>

        <p>
          Request a viewing for <strong>{property.title}</strong> in{' '}
          {property.location}.
        </p>

        <form onSubmit={onSubmit}>
          <label>
            Your name
            <input
              name="Full Name"
              required
              autoComplete="name"
              placeholder="Full name"
            />
          </label>

          <label>
            Email address
            <input
              name="Email"
              required
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>

          <label>
            Preferred date
            <input
              name="Preferred Viewing Date"
              required
              type="date"
              min={new Date().toLocaleDateString('en-CA')}
            />
          </label>

          <label>
            Anything we should know?
            <textarea
              name="Message"
              placeholder="Preferred time, questions, or requirements"
              rows={3}
            />
          </label>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button
            className="button button-dark"
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Sending request…' : 'Request viewing'}
            {!submitting && <ArrowRight size={16} />}
          </button>

          <small className="disclaimer">
            Your request will be sent to our property team. We’ll follow up with you shortly.
          </small>
        </form>
      </div>
    </div>
  )
}
