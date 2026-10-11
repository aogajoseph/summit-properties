import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  Check,
  ChevronDown,
  Heart,
  House,
  KeyRound,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  X,
} from 'lucide-react'

import {
  properties,
  services,
  siteContent,
  steps,
  type Property,
  type PropertyCategory,
} from './content/site'

import AdvisorModal from './components/AdvisorModal'
import PropertyDetailsModal from './components/PropertyDetailsModal'
import ViewingModal from './components/ViewingModal'

import QuestionsBeforeChoosingHome from './pages/QuestionsBeforeChoosingHome'
import EvaluatePropertyPotential from './pages/EvaluatePropertyPotential'

const money = (price: number) => `KES ${new Intl.NumberFormat('en-KE').format(price)}`

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  const [query, setQuery] = useState('')

  const [category, setCategory] = useState<'All' | PropertyCategory>('All')

  const [type, setType] = useState('Any property')

  const [saved, setSaved] = useState<number[]>([])

  const [activeProperty, setActiveProperty] = useState<Property | null>(null)

  const [bookingProperty, setBookingProperty] = useState<Property | null>(null)

  const [notice, setNotice] = useState('')
  const [advisorOpen, setAdvisorOpen] = useState(false)
  const [enquiryType, setEnquiryType] = useState('General property advice')

  const [bookingSubmitting, setBookingSubmitting] = useState(false)
  const [bookingError, setBookingError] = useState('')

  const visibleProperties = useMemo(() => properties.filter((property) => {

    const matchesCategory = category === 'All' || property.category === category

    const matchesType = type === 'Any property' || property.type === type

    const search = query.toLowerCase().trim()

    const matchesQuery = !search || `${property.title} ${property.location} ${property.type}`.toLowerCase().includes(search)

    return matchesCategory && matchesType && matchesQuery

  }), [category, type, query])

  const toggleSaved = (id: number) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  const handleSearch = () => {

    document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' })

  }

  
  const handleBooking = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!bookingProperty) return

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    if (!endpoint) {
      setBookingError(
        'The booking form is temporarily unavailable. Please try again later.',
      )
      return
    }

    const formData = new FormData(event.currentTarget)
    const property = bookingProperty

    formData.set('Enquiry Type Selected', 'Property viewing request')
    formData.set('Property ID', String(property.id))
    formData.set('Property', property.title)
    formData.set('Property Location', property.location)
    formData.set('Property Price', property.priceLabel)
    formData.set(
      '_subject',
      `Property viewing request: ${property.title}`,
    )

    setBookingSubmitting(true)
    setBookingError('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Booking submission failed')
      }

      setBookingProperty(null)
      setNotice(
        `Thank you! Your viewing request for ${property.title} has been submitted successfully.`,
      )
    } catch {
      setBookingError(
        'We couldn’t submit your viewing request. Please check your connection and try again.',
      )
    } finally {
      setBookingSubmitting(false)
    }
  }

  const openAdvisor = (type = 'General property advice') => {
    setEnquiryType(type)
    setAdvisorOpen(true)
  }

  if (window.location.pathname === '/blog/questions-before-choosing-a-home') {
    return <QuestionsBeforeChoosingHome />
  }

  if (window.location.pathname === '/blog/evaluate-property-potential') {
    return <EvaluatePropertyPotential />;
  }

  return (

    <div className="site-shell">

      <div className="announcement">

        <span className="announcement-dot" /> 

        A thoughtful approach to property ownership.

        <a href="#listings">Explore listings <ArrowRight size={13} /></a>

      </div>

      <header className="header">

        <a className="brand" href="#home" aria-label="Summit Properties home">

          <span className="brand-mark">

            <span />

          </span>

          <span className="brand-copy">

            <strong>{siteContent.brand}</strong>

            <small>{siteContent.descriptor}</small>

          </span>

        </a>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>

          <a href="#listings" onClick={() => setMenuOpen(false)}>Properties</a>

          <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a>

          <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>

          <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>

        </nav>

        <a
          className="header-cta"
          href="#contact"
          onClick={(event) => {
            event.preventDefault()
            openAdvisor()
          }}
        >
          Talk to an advisor
          <ArrowUpRight size={16} />
        </a>

      </header>

      <main>

        <section className="hero" id="home">

          <div className="hero-copy">

            <div className="eyebrow"><span className="eyebrow-line" /> REAL ESTATE, REIMAGINED</div>

            <h1>Exceptional<em> spaces,</em>

            <br />Enduring<em> value.</em></h1>

            <p className="hero-description">{siteContent.intro}</p>

            <div className="hero-actions">

              <a className="button button-dark" href="#listings">Explore properties <ArrowDownRight size={17} /></a>

              <a className="text-link" href="#services">What we do <ArrowRight size={17} /></a>

            </div>

            <div className="hero-proof">

              <div className="avatar-stack">

                <span>J</span>

                <span>A</span>

                <span>M</span>

                <b>+</b>

              </div>

              <div>

                <strong>Clarity in every decision</strong>

                <small>Expert guidance at every step.</small>

              </div>

            </div>

          </div>

          <div className="hero-visual">

            <img 

              className="hero-image" 

              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" 

              alt="Modern luxury residence surrounded by greenery" 

            />

            <div className="image-shade" />

            <div className="hero-image-caption">

              <span>SUMMIT PROPERTIES</span>

              <strong>FIND YOUR<br />NEXT HORIZON</strong>

              <a href="#listings" aria-label="Explore the Summit collection">

                <ArrowUpRight />

              </a>

            </div>

            <div className="floating-card">

              <span className="floating-icon">

                <House size={19} />

              </span>

              <div>

                <strong>Spaces with purpose</strong>

                <small>Curated for you</small>

              </div>

              <Sparkles size={17} className="sparkle" />

            </div>

            <div className="image-index">01 <span /> 06</div>

          </div>

          <div className="hero-bottom">

            <span>PROPERTY, WITH PERSPECTIVE</span>

            <span>NAIROBI · COAST · BEYOND</span>

            <a href="#listings">Scroll to explore <ArrowDownRight size={14} /></a>

          </div>

        </section>

        <section className="search-panel" aria-label="Search properties">

          <div className="search-heading">

            <span>FIND YOUR NEXT HORIZON</span>

            <strong>What are you looking for?</strong>

          </div>

          <label className="search-field">

            <MapPin size={18} />

            <span>

              <small>Location (Local/Abroad)</small>

              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="e.g. Karen, Nairobi" />

            </span>

          </label>

          <label className="search-field">

            <Building2 size={18} />

            <span>

              <small>Property type</small>

              <select value={type} onChange={(event) => setType(event.target.value)}>

                <option>Any property</option>

                <option>Villa</option>

                <option>Apartment</option>

                <option>House</option>

                <option>Commercial</option>

              </select>

            </span>

            <ChevronDown size={14} />

          </label>

          <button className="button button-olive search-button" onClick={handleSearch}>

            <Search size={17} /> Find a property

          </button>

        </section>

        <section className="stats-row">

          {siteContent.stats.map((stat) => 

            <div className="stat" key={stat.label}>

              <strong>{stat.value}</strong>

              <span>{stat.label}</span>

            </div>)

          }

          <div className="stat-note">

            <ShieldCheck size={22} />

            <span>Expert guidance.<br />

              <strong>Clarity in every decision.</strong>

            </span>

          </div>

        </section>

        <section className="section listings-section" id="listings">

          <div className="section-heading">

            <div>

              <div className="eyebrow">

                <span className="eyebrow-line" /> THE SUMMIT COLLECTION

              </div>

              <h2>Find your space.<br />

                <em>Build your future.</em>

              </h2>

            </div>

            <p>A curated selection of exceptional properties and investment opportunities, chosen with an eye for quality and long-term potential.</p>

          </div>

          <div className="listing-toolbar">

            <div className="filter-tabs">

              {(['All', 'Buy', 'Rent', 'Invest'] as const).map((item) => 

                <button 

                  key={item} 

                  className={category === item ? 'filter-tab active' : 'filter-tab'} 

                  onClick={() => setCategory(item)}

                >

                  {item === 'All' ? 'All properties' : item === 'Invest' ? 'Investment' : item === 'Buy' ? 'For sale' : 'For rent'}

                </button>

              )}

            </div>

            <span className="result-count">

              <SlidersHorizontal size={15} /> 

              {visibleProperties.length} properties

            </span>

          </div>

          {visibleProperties.length ? 

            <div className="property-grid">

              {visibleProperties.map((property) => 

                <article className="property-card" key={property.id}>

                  <div className="property-image-wrap">

                    <img 

                      src={property.image} 

                      alt={property.title} 

                      loading="lazy" 

                    />

                    {property.badge && <span className="property-badge">{property.badge}</span>}

                    <button 

                      className={saved.includes(property.id) ? 'save-button saved' : 'save-button'} 

                      onClick={() => toggleSaved(property.id)} 

                      aria-label={saved.includes(property.id) ? 'Remove saved property' : 'Save property'}

                    >

                      <Heart size={17} fill={saved.includes(property.id) ? 'currentColor' : 'none'} />

                    </button>

                    <span className="category-chip">{property.category === 'Buy' ? 'For sale' : property.category === 'Rent' ? 'For rent' : 'Investment'}</span>

                  </div>

                  <div className="property-info">

                    <div className="property-location">

                      <MapPin size={13} /> 

                      {property.location}

                    </div>

                    <h3>{property.title}</h3>

                    <div className="property-price">

                      {property.priceLabel || money(property.price)}

                    </div>

                    <div className="property-meta">

                      {property.beds > 0 && <span><BedDouble size={15} /> {property.beds} beds</span>}

                      <span><span className="bath-icon">◌</span> {property.baths} baths</span>

                      <span><span className="area-icon">↗</span> {property.area} m²</span>

                    </div>

                    <div className="property-card-actions">

                      <button onClick={() => setActiveProperty(property)}>View details <ArrowUpRight size={15} /></button>

                      <button onClick={() => setBookingProperty(property)}>Book a viewing <ArrowRight size={15} /></button>

                    </div>

                  </div>

                </article>

              )}

            </div> : 

            <div className="empty-state">

              <Search size={26} />

              <h3>No properties found</h3>

              <p>Try another keyword or change your filters.</p>

              <button onClick={() => { setQuery(''); setType('Any property'); setCategory('All') }}>Clear filters</button>

            </div>

          }

          <div className="center-action">

          <a
            className="button button-outline"
            href="#contact"
            onClick={(event) => {
              event.preventDefault()
              openAdvisor()
            }}
          >
            Can’t find what you need? Let’s talk
            <ArrowRight size={16} />
          </a>

          </div>

        </section>

        <section className="services-section" id="services">

          <div className="services-photo">

            <img 

              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85" 

              alt="Warm and modern living space" 

              loading="lazy" 

            />

            <div className="photo-note">

              <span>THE SUMMIT STANDARD</span>

              <strong>More than a<br />property search.</strong>

            </div>

          </div>

          <div className="services-content">

            <div className="eyebrow">

              <span className="eyebrow-line" /> WHAT WE DO

            </div>

            <h2>Every move has<br />a <em>bigger picture.</em></h2>

            <p className="services-intro">Property ownership is more than a transaction. It’s a decision about how you live, work and build your future.</p>

            {services.map((service) => 

              <div className="service-item" key={service.number}>

                <span>{service.number}</span>

                <div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                </div>

                <ArrowUpRight size={18} />

              </div>

            )}

            <a
              className="text-link"
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                openAdvisor()
              }}
            >
              Meet your property partner
              <ArrowRight size={16} />
            </a>

          </div>

        </section>

        <section className="approach-section section" id="approach">

          <div className="section-heading">

            <div>

              <div className="eyebrow"><span className="eyebrow-line" /> OUR APPROACH</div>

              <h2>From first search<br />to <em>feeling settled.</em></h2>

            </div>

            <p>Property decisions deserve clear guidance, thoughtful choices and a seaamless path to the right property.</p>

          </div>

          <div className="steps-grid">

            {steps.map((step, index) => 

              <div className="step-card" key={step.number}>

                <div className="step-top">

                  <span>{step.number}</span>

                  {index === 0 ? <Search /> : index === 1 ? <KeyRound /> : <Check />}

                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

                <span className="step-line" />

              </div>

            )}

          </div>

        </section>

        <section className="insights-section" id="insights">

          <div className="insights-copy">

            <div className="eyebrow"><span className="eyebrow-line" /> THE SUMMIT INSIGHTS</div>

            <h2>Make your next<br />move a <em>considered one.</em></h2>

            <p>Practical perspectives for buyers, renters and investors making informed property decisions.</p>

            <a
              className="button button-light"
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                openAdvisor()
              }}
            >
              Explore with an advisor
              <ArrowRight size={16} />
            </a>

          </div>

          <div className="insight-cards">
            <article>
              <span>BUYING WELL · 5 MIN READ</span>
              <h3>Five questions to ask before choosing your next home.</h3>
              <a
                href="/blog/questions-before-choosing-a-home"
                aria-label="Read five questions to ask before choosing your next home"
              >
                <ArrowUpRight />
              </a>
            </article>

            <article>
              <span>PROPERTY INVESTMENT · 4 MIN READ</span>
              <h3>Beyond the price: how to evaluate a property's potential.</h3>
              <a
                href="/blog/evaluate-property-potential"
                aria-label="Read how to evaluate a property's potential"
              >
                <ArrowUpRight />
              </a>
            </article>
          </div>

        </section>

        <section className="contact-section section" id="contact">

          <div>

            <div className="eyebrow"><span className="eyebrow-line" /> LET’S TALK PROPERTY</div>

            <h2>Find your<br />next <em>horizon.</em></h2>

            <p>Every property journey starts with an idea. Let’s explore where yours could lead.</p>

          </div>

          <div className="contact-card">

            <span className="contact-icon"><ArrowUpRight /></span>

            <small>PERSONAL PROPERTY GUIDANCE</small>

            <h3>Let’s find your next space.</h3>

            <p>Are you buying, renting, selling or investing? We’ll help you navigate your options with clarity and confidence.</p>

            <a
              className="button button-dark"
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                openAdvisor()
              }}
            >
              Start a conversation
              <ArrowRight size={16} />
            </a>

            <div className="contact-details">

              <span>{siteContent.email}</span>

              <span>{siteContent.phone}</span>

            </div>

          </div>

        </section>

      </main>

      <footer className="footer">

        <a className="brand brand-footer" href="#home">

          <span className="brand-mark"><span /></span>

          <span className="brand-copy">

            <strong>{siteContent.brand}</strong>

            <small>{siteContent.descriptor}</small>

          </span>

        </a>

        <p>Find your next horizon.</p>

        <div className="footer-links">

          <a href="#listings">Properties</a>

          <a href="#services">Services</a>

          <a href="#contact">Contact</a>

        </div>

        <span className="copyright">© {new Date().getFullYear()} Summit Properties Ltd. All rights reserved.</span>

      </footer>

      {notice && 

        <div className="toast" role="status">

          <Check size={18} />

          {notice}

          <button 

            onClick={() => setNotice('')} 

            aria-label="Dismiss notice"

          >

            <X size={16} />

          </button>

        </div>

      }

      <PropertyDetailsModal
        property={activeProperty}
        onClose={() => setActiveProperty(null)}
        onBookViewing={(property) => {
          setBookingProperty(property)
          setActiveProperty(null)
        }}
      />

      <ViewingModal
        property={bookingProperty}
        onClose={() => {
          setBookingProperty(null)
          setBookingError('')
        }}
        onSubmit={handleBooking}
        submitting={bookingSubmitting}
        error={bookingError}
      />

      <AdvisorModal
        open={advisorOpen}
        initialEnquiryType={enquiryType}
        onClose={() => {
          setAdvisorOpen(false)
          setEnquiryType('General property advice')
        }}
        onSubmitSuccess={() => {
          setNotice('Thank you. Your enquiry has been submitted successfully.')
        }}
      />

    </div>

  )

}

export default App
