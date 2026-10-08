import { useMemo, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BedDouble, Building2, Check,
  ChevronDown, Heart, House, KeyRound, MapPin, Menu, Search, ShieldCheck,
  SlidersHorizontal, Sparkles, X,
} from 'lucide-react'
import { properties, services, siteContent, steps, type Property, type PropertyCategory } from './content/site'

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

  const handleBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNotice('Thanks — your viewing request is ready. Connect this form to your CRM or email service to receive enquiries.')
    setBookingProperty(null)
  }

  return (
    <div className="site-shell">
      <div className="announcement"><span className="announcement-dot" /> A more considered way to find your next property <a href="#listings">Explore listings <ArrowRight size={13} /></a></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Summit Properties home">
          <span className="brand-mark"><span /></span>
          <span className="brand-copy"><strong>{siteContent.brand}</strong><small>{siteContent.descriptor}</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#listings" onClick={() => setMenuOpen(false)}>Properties</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
        </nav>
        <a className="header-cta" href="#contact">Talk to an advisor <ArrowUpRight size={16} /></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> REAL ESTATE, REIMAGINED</div>
            <h1>Find a place<br />to <em>belong.</em><br />A space to grow.</h1>
            <p className="hero-description">{siteContent.intro}</p>
            <div className="hero-actions"><a className="button button-dark" href="#listings">Explore properties <ArrowRight size={17} /></a><a className="text-link" href="#services">Discover Summit <ArrowDownRight size={17} /></a></div>
            <div className="hero-proof"><div className="avatar-stack"><span>J</span><span>A</span><span>M</span><b>+</b></div><div><strong>Guidance at every step</strong><small>Personal service. Considered choices.</small></div></div>
          </div>
          <div className="hero-visual">
            <img className="hero-image" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" alt="Modern luxury residence surrounded by greenery" />
            <div className="image-shade" />
            <div className="hero-image-caption"><span>THE SUMMIT COLLECTION</span><strong>Architecture that<br />feels like home.</strong><a href="#listings" aria-label="Explore the Summit collection"><ArrowUpRight /></a></div>
            <div className="floating-card"><span className="floating-icon"><House size={19} /></span><div><small>Curated for you</small><strong>Spaces with purpose</strong></div><Sparkles size={17} className="sparkle" /></div>
            <div className="image-index">01 <span /> 06</div>
          </div>
          <div className="hero-bottom"><span>PROPERTY, WITH PERSPECTIVE</span><span>NAIROBI · COAST · BEYOND</span><a href="#listings">Scroll to explore <ArrowDownRight size={14} /></a></div>
        </section>

        <section className="search-panel" aria-label="Search properties">
          <div className="search-heading"><span>YOUR NEXT CHAPTER</span><strong>What are you looking for?</strong></div>
          <label className="search-field"><MapPin size={18} /><span><small>Location or keyword</small><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="e.g. Karen, Nairobi" /></span></label>
          <label className="search-field"><Building2 size={18} /><span><small>Property type</small><select value={type} onChange={(event) => setType(event.target.value)}><option>Any property</option><option>Villa</option><option>Apartment</option><option>House</option><option>Commercial</option></select></span><ChevronDown size={14} /></label>
          <button className="button button-olive search-button" onClick={handleSearch}><Search size={17} /> Find a property</button>
        </section>

        <section className="stats-row">
          {siteContent.stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          <div className="stat-note"><ShieldCheck size={22} /><span>Thoughtful guidance.<br /><strong>Trusted decisions.</strong></span></div>
        </section>

        <section className="section listings-section" id="listings">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> THE PROPERTY EDIT</div><h2>Good spaces.<br /><em>Better possibilities.</em></h2></div>
            <p>Explore a considered collection of homes and investment opportunities selected for the way you want to live, work and grow.</p>
          </div>
          <div className="listing-toolbar"><div className="filter-tabs">{(['All', 'Buy', 'Rent', 'Invest'] as const).map((item) => <button key={item} className={category === item ? 'filter-tab active' : 'filter-tab'} onClick={() => setCategory(item)}>{item === 'All' ? 'All properties' : item === 'Invest' ? 'Investment' : item === 'Buy' ? 'For sale' : 'For rent'}</button>)}</div><span className="result-count"><SlidersHorizontal size={15} /> {visibleProperties.length} properties</span></div>
          {visibleProperties.length ? <div className="property-grid">{visibleProperties.map((property) => <article className="property-card" key={property.id}>
            <div className="property-image-wrap"><img src={property.image} alt={property.title} loading="lazy" />{property.badge && <span className="property-badge">{property.badge}</span>}<button className={saved.includes(property.id) ? 'save-button saved' : 'save-button'} onClick={() => toggleSaved(property.id)} aria-label={saved.includes(property.id) ? 'Remove saved property' : 'Save property'}><Heart size={17} fill={saved.includes(property.id) ? 'currentColor' : 'none'} /></button><span className="category-chip">{property.category === 'Buy' ? 'For sale' : property.category === 'Rent' ? 'For rent' : 'Investment'}</span></div>
            <div className="property-info"><div className="property-location">
              <MapPin size={13} /> 
              {property.location}
            </div>
            <h3>{property.title}</h3>
            <div className="property-price">
              {property.category === 'Rent'
                ? property.priceLabel
                : money(property.price)}
            </div>
            
            <div className="property-meta">{property.beds > 0 && <span><BedDouble size={15} /> {property.beds} beds</span>}<span><span className="bath-icon">◌</span> {property.baths} baths</span><span><span className="area-icon">↗</span> {property.area} m²</span></div><div className="property-card-actions"><button onClick={() => setActiveProperty(property)}>View details <ArrowUpRight size={15} /></button><button onClick={() => setBookingProperty(property)}>Book a viewing <ArrowRight size={15} /></button></div></div>
          </article>)}</div> : <div className="empty-state"><Search size={26} /><h3>No properties found</h3><p>Try another keyword or change your filters.</p><button onClick={() => { setQuery(''); setType('Any property'); setCategory('All') }}>Clear filters</button></div>}
          <div className="center-action"><a className="button button-outline" href="#contact">Can’t find what you need? Let’s talk <ArrowRight size={16} /></a></div>
        </section>

        <section className="services-section" id="services"><div className="services-photo"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85" alt="Warm and modern living space" loading="lazy" /><div className="photo-note"><span>THE SUMMIT STANDARD</span><strong>More than a<br />property search.</strong></div></div><div className="services-content"><div className="eyebrow"><span className="eyebrow-line" /> HOW WE HELP</div><h2>Every move has<br />a <em>bigger picture.</em></h2><p className="services-intro">The right property is about more than an address. It’s about the possibilities it opens up.</p>{services.map((service) => <div className="service-item" key={service.number}><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><ArrowUpRight size={18} /></div>)}<a className="text-link" href="#contact">Meet your property partner <ArrowRight size={16} /></a></div></section>

        <section className="approach-section section" id="approach"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> A CLEARER WAY FORWARD</div><h2>From first search<br />to <em>feeling settled.</em></h2></div><p>Property decisions deserve clarity, context and someone in your corner. We make the journey feel more straightforward.</p></div><div className="steps-grid">{steps.map((step, index) => <div className="step-card" key={step.number}><div className="step-top"><span>{step.number}</span>{index === 0 ? <Search /> : index === 1 ? <KeyRound /> : <Check />}</div><h3>{step.title}</h3><p>{step.text}</p><span className="step-line" /></div>)}</div></section>

        <section className="insights-section" id="insights"><div className="insights-copy"><div className="eyebrow"><span className="eyebrow-line" /> THE SUMMIT PERSPECTIVE</div><h2>Make your next<br />move a <em>considered one.</em></h2><p>Useful perspectives for buyers, renters and investors navigating a changing property landscape.</p><a className="button button-light" href="#contact">Explore with an advisor <ArrowRight size={16} /></a></div><div className="insight-cards"><article><span>BUYING WELL · 5 MIN READ</span><h3>Five questions to ask before choosing your next home.</h3><a href="#contact" aria-label="Ask us about buying a home"><ArrowUpRight /></a></article><article><span>INVESTMENT · 4 MIN READ</span><h3>Looking beyond the price: evaluating property potential.</h3><a href="#contact" aria-label="Ask us about property investment"><ArrowUpRight /></a></article></div></section>

        <section className="contact-section section" id="contact"><div><div className="eyebrow"><span className="eyebrow-line" /> LET’S TALK PROPERTY</div><h2>Your next chapter<br />starts <em>somewhere.</em></h2><p>Tell us what you have in mind. We’ll help you explore the possibilities.</p></div><div className="contact-card"><span className="contact-icon"><ArrowUpRight /></span><small>PERSONAL PROPERTY GUIDANCE</small><h3>Let’s find your place.</h3><p>Buying, renting, selling or investing — start with a conversation.</p><a className="button button-dark" href={`mailto:${siteContent.email}?subject=Property%20enquiry`}>Start a conversation <ArrowRight size={16} /></a><div className="contact-details"><span>{siteContent.email}</span><span>{siteContent.phone}</span></div></div></section>
      </main>

      <footer className="footer"><a className="brand brand-footer" href="#home"><span className="brand-mark"><span /></span><span className="brand-copy"><strong>{siteContent.brand}</strong><small>{siteContent.descriptor}</small></span></a><p>Find your next horizon.</p><div className="footer-links"><a href="#listings">Properties</a><a href="#services">Services</a><a href="#contact">Contact</a></div><span className="copyright">© {new Date().getFullYear()} Summit Properties. Demo concept.</span></footer>

      {notice && <div className="toast" role="status"><Check size={18} />{notice}<button onClick={() => setNotice('')} aria-label="Dismiss notice"><X size={16} /></button></div>}
      {activeProperty && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProperty(null)}><div className="modal property-modal" role="dialog" aria-modal="true" aria-label={`${activeProperty.title} details`} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProperty(null)} aria-label="Close details"><X /></button><img src={activeProperty.image} alt={activeProperty.title} /><div className="modal-body"><div className="property-location"><MapPin size={14} /> {activeProperty.location}</div><h2>{activeProperty.title}</h2><strong className="modal-price">{activeProperty.priceLabel}</strong><p>{activeProperty.summary}</p><div className="property-meta">{activeProperty.beds > 0 && <span><BedDouble size={15} /> {activeProperty.beds} beds</span>}<span>{activeProperty.baths} baths</span><span>{activeProperty.area} m²</span></div><button className="button button-dark modal-book" onClick={() => { setBookingProperty(activeProperty); setActiveProperty(null) }}>Book a viewing <ArrowRight size={16} /></button><small className="disclaimer">Demo listing. Confirm availability, pricing and property details before publishing.</small></div></div></div>}
      {bookingProperty && <div className="modal-backdrop" role="presentation" onClick={() => setBookingProperty(null)}><div className="modal booking-modal" role="dialog" aria-modal="true" aria-label="Book a property viewing" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setBookingProperty(null)} aria-label="Close booking form"><X /></button><div className="eyebrow"><span className="eyebrow-line" /> PRIVATE VIEWING</div><h2>See if it feels<br /><em>like your place.</em></h2><p>Request a viewing for <strong>{bookingProperty.title}</strong> in {bookingProperty.location}.</p><form onSubmit={handleBooking}><label>Your name<input required placeholder="Full name" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Preferred date<input required type="date" min={new Date().toISOString().split('T')[0]} /></label><label>Anything we should know?<textarea placeholder="Preferred time, questions, or requirements" rows={3} /></label><button className="button button-dark" type="submit">Request viewing <ArrowRight size={16} /></button><small className="disclaimer">Starter template only. Connect a backend or form service to receive booking requests.</small></form></div></div>}
    </div>
  )
}

export default App