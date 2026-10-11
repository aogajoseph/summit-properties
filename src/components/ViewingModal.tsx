import type { FormEvent } from 'react'
import { ArrowRight, X } from 'lucide-react'
import type { Property } from '../content/site'

interface ViewingModalProps {
  property: Property | null
  onClose: () => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function ViewingModal({
  property,
  onClose,
  onSubmit,
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
          Request a viewing for <strong>{property.title}</strong> in {property.location}.
        </p>

        <form onSubmit={onSubmit}>
          <label>
            Your name
            <input name="name" required placeholder="Full name" />
          </label>
          <label>
            Email address
            <input name="email" required type="email" placeholder="you@example.com" />
          </label>
          <label>
            Preferred date
            <input
              name="preferred_date"
              required
              type="date"
              min={new Date().toISOString().split('T')[0]}
            />
          </label>
          <label>
            Anything we should know?
            <textarea
              name="message"
              placeholder="Preferred time, questions, or requirements"
              rows={3}
            />
          </label>

          <button className="button button-dark" type="submit">
            Request viewing <ArrowRight size={16} />
          </button>

          <small className="disclaimer">
            Starter template only. Connect a backend or form service to receive booking requests.
          </small>
        </form>
      </div>
    </div>
  )
}
