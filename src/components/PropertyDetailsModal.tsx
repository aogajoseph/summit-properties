import { ArrowRight, BedDouble, MapPin, X } from 'lucide-react'
import type { Property } from '../content/site'

interface PropertyDetailsModalProps {
  property: Property | null
  onClose: () => void
  onBookViewing: (property: Property) => void
}

export default function PropertyDetailsModal({
  property,
  onClose,
  onBookViewing,
}: PropertyDetailsModalProps) {
  if (!property) return null

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="modal property-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${property.title} details`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close details"
        >
          <X />
        </button>

        <img src={property.image} alt={property.title} />

        <div className="modal-body">
          <div className="property-location">
            <MapPin size={14} /> {property.location}
          </div>

          <h2>{property.title}</h2>
          <strong className="modal-price">{property.priceLabel}</strong>
          <p>{property.summary}</p>

          <div className="property-meta">
            {property.beds > 0 && (
              <span>
                <BedDouble size={15} /> {property.beds} beds
              </span>
            )}
            <span>{property.baths} baths</span>
            <span>{property.area} m²</span>
          </div>

          <button
            className="button button-dark modal-book"
            type="button"
            onClick={() => onBookViewing(property)}
          >
            Book a viewing <ArrowRight size={16} />
          </button>

          <small className="disclaimer">
            Demo listing. Confirm availability, pricing and property details before publishing.
          </small>
        </div>
      </div>
    </div>
  )
}
