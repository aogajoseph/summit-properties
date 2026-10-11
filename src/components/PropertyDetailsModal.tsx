import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from 'lucide-react'
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
  const [activeImage, setActiveImage] = useState(0)

  const images = property
    ? [...new Set(
        [property.image, ...(property.images ?? [])].filter(Boolean),
      )]
    : []

  useEffect(() => {
    setActiveImage(0)
  }, [property?.title])

  useEffect(() => {
    if (!property) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()

      if (event.key === 'ArrowRight') {
        setActiveImage((current) => (current + 1) % images.length)
      }

      if (event.key === 'ArrowLeft') {
        setActiveImage(
          (current) => (current - 1 + images.length) % images.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [property, images.length, onClose])

  if (!property) return null

  const showPrevious = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length)
  }

  const showNext = () => {
    setActiveImage((current) => (current + 1) % images.length)
  }

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

        <div className="property-gallery">
          <div className="property-gallery-main">
            <img
              src={images[activeImage] ?? property.image}
              alt={`${property.title} — image ${activeImage + 1}`}
            />

            {images.length > 1 && (
              <>
                <button
                  className="gallery-arrow gallery-arrow-left"
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous image"
                >
                  <ChevronLeft />
                </button>

                <button
                  className="gallery-arrow gallery-arrow-right"
                  type="button"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  <ChevronRight />
                </button>

                <span className="gallery-counter">
                  {activeImage + 1} / {images.length}
                </span>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div
              className="property-gallery-thumbnails"
              aria-label="Property photos"
            >
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={`gallery-thumbnail ${
                    activeImage === index ? 'active' : ''
                  }`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                  aria-pressed={activeImage === index}
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

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
            Love this property? Schedule a viewing and experience it in person.
          </small>
        </div>
      </div>
    </div>
  )
}