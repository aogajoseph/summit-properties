import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Check,
  X,
} from 'lucide-react'
import '../styles.css'

import AdvisorModal from '../components/AdvisorModal'

const article = {
  title: 'Five Questions to Ask Before Choosing Your Next Home',
  description:
    'Buying a home is about more than the asking price. Discover five essential questions to ask about budget, location, condition, ownership and long-term suitability before making your move.',
  image:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90',
  imageAlt:
    'Contemporary home with landscaped grounds and a welcoming outdoor living space',
  category: 'BUYING WELL',
  readingTime: '5 min read',
}

function QuestionsBeforeChoosingHome() {
  const [notice, setNotice] = useState('')
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState('General property advice')

  useEffect(() => {
    document.title = `${article.title} | Summit Properties`

    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`,
      )

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }

      element.content = content
    }

    setMeta('name', 'description', article.description)
    setMeta('name', 'robots', 'index, follow')
    setMeta('property', 'og:type', 'article')
    setMeta('property', 'og:title', article.title)
    setMeta('property', 'og:description', article.description)
    setMeta('property', 'og:image', article.image)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', article.title)
    setMeta('name', 'twitter:description', article.description)
    setMeta('name', 'twitter:image', article.image)
  }, [])

  const openAdvisor = (type = 'General property advice') => {
    setEnquiryType(type)
    setAdvisorOpen(true)
  }

  return (
    <div className="blog-page">
      <header className="blog-header">
        <a className="brand" href="/#home" aria-label="Summit Properties home">
          <span className="brand-mark"><span /></span>
          <span className="blog-brand-copy">
            <strong>SUMMIT PROPERTIES</strong>
            <small>Find your next horizon.</small>
          </span>
        </a>

        <nav className="blog-nav" aria-label="Main navigation">
          <a href="/#listings">Properties</a>
          <a href="/#services">What we do</a>
          <a href="/#insights">Insights</a>
        </nav>

        <a
          className="blog-header-cta"
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
        <div className="blog-breadcrumb">
          <a href="/#insights"><ArrowLeft size={15} /> Back to insights</a>
          <span> / </span>
          <span>Buying well</span>
        </div>

        <article className="blog-article">
          <header className="blog-article-header">
            <span className="blog-eyebrow">
              <span className="blog-eyebrow-line" />
              {article.category}
            </span>

            <h1>
              Five questions to ask before{' '}
              <em>choosing your next home.</em>
            </h1>

            <p className="blog-standfirst">
              The right home is beyond what catches your eye.
              Before you commit, ask the five questions that help you look beyond
              the viewing and decide with confidence.
            </p>

            <div className="blog-article-meta">
              <span><Clock3 size={15} /> {article.readingTime}</span>
              <span className="blog-meta-divider" />
              <span>SUMMIT PROPERTY INSIGHTS</span>
            </div>
          </header>

          <figure className="blog-hero-image">
            <img
              src={article.image}
              alt={article.imageAlt}
              fetchPriority="high"
            />
            <figcaption>
              A considered choice starts with asking the right questions.
            </figcaption>
          </figure>

          <div className="blog-article-layout">
            <aside className="blog-article-aside">
              <span>IN THIS ARTICLE</span>
              <a href="#budget">01 — The full cost</a>
              <a href="#location">02 — The location</a>
              <a href="#condition">03 — The condition</a>
              <a href="#ownership">04 — The paperwork</a>
              <a href="#future">05 — Your future plans</a>
            </aside>

            <div className="blog-article-body">
              <p className="blog-lead">
                A home can look perfect in photographs, feel inviting during
                a viewing and still turn out to be the wrong choice. The
                difference often lies in the details you investigate before
                making a commitment.
              </p>

              <p>
                Are you buying your first home, moving to accommodate
                a growing family or considering a property as a long-term
                investment? A little preparation can help you avoid expensive
                surprises. Start with these five questions.
              </p>

              <section id="budget">
                <span className="blog-section-number">01</span>
                <h2>What will this property really cost me?</h2>
                <p>
                  The asking price is only one part of the financial picture.
                  Your budget should account for the costs involved in
                  completing the purchase and preparing the property for use.
                </p>
                <p>Depending on the transaction, additional costs may include:</p>
                <ul>
                  <li>Legal and conveyancing fees.</li>
                  <li>Applicable taxes, stamp duty and registration costs.</li>
                  <li>Valuation, inspection or financing-related fees.</li>
                  <li>Repairs, furnishing, moving costs and ongoing maintenance.</li>
                  <li>Service charges, insurance and other recurring expenses.</li>
                </ul>
                <p>
                  Ask for a clear breakdown of expected costs and keep a
                  contingency for unexpected expenses. If you are financing
                  the purchase, check that the repayments remain manageable
                  alongside your other financial commitments.
                </p>
                <div className="blog-tip">
                  <CheckCircle2 size={19} />
                  <p>
                    <strong>Ask yourself:</strong> After paying for the
                    property and its associated costs, will I still have a
                    sensible financial cushion?
                  </p>
                </div>
              </section>

              <section id="location">
                <span className="blog-section-number">02</span>
                <h2>Does the location work for my everyday life?</h2>
                <p>
                  Location is not just a pin on a map. It shapes your commute,
                  daily routines, access to services and how comfortable you
                  feel in the neighbourhood.
                </p>
                <p>
                  Consider how far the property is from work, schools, shops,
                  healthcare and the people or places that matter to you.
                  Think about traffic at the times you actually travel, access
                  roads, public transport and the availability of essential
                  services.
                </p>
                <p>
                  Visit the area at different times of day if possible. Look
                  beyond the property boundary, too: drainage, noise, security,
                  planned developments and the general condition of nearby
                  infrastructure can all influence your experience.
                </p>
                <div className="blog-tip">
                  <CheckCircle2 size={19} />
                  <p>
                    <strong>Ask yourself:</strong> If I lived here every day,
                    would the location make life easier—or create new
                    frustrations?
                  </p>
                </div>
              </section>

              <section id="condition">
                <span className="blog-section-number">03</span>
                <h2>What condition is the property really in?</h2>
                <p>
                  A fresh coat of paint and attractive finishes can make a
                  property look ready to move into, but appearance alone does
                  not tell you how well it has been built or maintained.
                </p>
                <p>
                  Check for signs of damp, cracks, roof leaks, poor drainage,
                  plumbing problems and electrical issues. Ask about water
                  supply, power, ventilation, security features and any
                  repairs or renovations that have been carried out.
                </p>
                <p>
                  For a significant purchase, consider an independent
                  inspection by an appropriately qualified professional.
                  For apartments or managed developments, understand the
                  maintenance arrangements, shared facilities, service
                  charges and any known upcoming works.
                </p>
                <div className="blog-tip">
                  <CheckCircle2 size={19} />
                  <p>
                    <strong>Ask yourself:</strong> What might need repairing
                    soon, and have I included those costs in my budget?
                  </p>
                </div>
              </section>

              <section id="ownership">
                <span className="blog-section-number">04</span>
                <h2>Have ownership and legal details been verified?</h2>
                <p>
                  Before paying a deposit or committing to a transaction,
                  establish that the seller has the right to sell and that
                  the property's ownership details are consistent with the
                  documents provided.
                </p>
                <p>
                  Generally, the checks required will depend on the property
                  and the nature of the transaction. Your independent
                  conveyancing advocate can help arrange the appropriate
                  official searches and review the title or other ownership
                  documents, registered interests, consents and relevant
                  transaction requirements.
                </p>
                <p>
                  For property in a development, ask what rights and
                  obligations apply to shared areas, access, utilities and
                  management. Make sure any important promises or conditions
                  are properly documented rather than relying only on verbal
                  assurances.
                </p>
                <div className="blog-tip">
                  <CheckCircle2 size={19} />
                  <p>
                    <strong>Ask yourself:</strong> Have the relevant documents
                    and ownership details been independently checked by a
                    qualified professional before I commit?
                  </p>
                </div>
              </section>

              <section id="future">
                <span className="blog-section-number">05</span>
                <h2>Will this property still suit me in the future?</h2>
                <p>
                  The best choice is not necessarily the property that meets
                  today's needs most perfectly. It is one that also makes
                  sense for the direction your life or investment plans may
                  take.
                </p>
                <p>
                  Think about changes in household size, working arrangements,
                  accessibility needs, maintenance responsibilities and the
                  flexibility of the space. If you are buying for investment,
                  consider the likely tenant or buyer, demand in the area,
                  ongoing costs, potential vacancy periods and how easily you
                  could sell if your circumstances changed.
                </p>
                <p>
                  Future value is never guaranteed. Rather than relying on
                  optimistic promises, look for evidence, compare alternatives
                  and be clear about the risks you are prepared to take.
                </p>
                <div className="blog-tip">
                  <CheckCircle2 size={19} />
                  <p>
                    <strong>Ask yourself:</strong> Does this property support
                    my longer-term plans, and would I still be comfortable
                    owning it if those plans changed?
                  </p>
                </div>
              </section>

              <section className="blog-conclusion">
                <span className="blog-eyebrow">
                  <span className="blog-eyebrow-line" />
                  THE SUMMIT INSIGHTS
                </span>
                <h2>Make your next move a considered one.</h2>
                <p>
                  A good property decision brings together the numbers, 
                  location, condition, documentation and your plans
                  for the future. No single viewing can answer every
                  question, and you do not need to rush to find the right fit.
                </p>
                <p>
                  Take the time to compare options, verify the details and
                  seek independent professional advice where needed. The goal
                  is not simply to find a property you like. It is to make a
                  decision you understand and feel comfortable standing behind it.
                </p>
              </section>
            </div>
          </div>
        </article>

        <section className="blog-cta">
          <div>
            <span className="blog-eyebrow">
              <span className="blog-eyebrow-line" />
              YOUR NEXT MOVE
            </span>
            <h2>Good decisions start with the right conversation.</h2>
            <p>
              Tell us what you are looking for. We will help you explore your
              options and find the right fit.
            </p>
          </div>
          <a
            className="blog-cta-button"
            href="#contact"
            onClick={(event) => {
              event.preventDefault()
              openAdvisor()
            }}
          >
            Talk to an advisor
            <ArrowUpRight size={16} />
          </a>
        </section>

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
      </main>

      <footer className="blog-footer">
        <a className="blog-brand" href="/#home">
          <span className="blog-brand-mark"><span /></span>
          <span className="blog-brand-copy">
            <strong>SUMMIT PROPERTIES</strong>
            <small>Find your next horizon.</small>
          </span>
        </a>
        <span>© {new Date().getFullYear()} Summit Properties Ltd.</span>
        <a href="/#insights">More insights <ArrowRight size={14} /></a>
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

    </div>
  )
}

export default QuestionsBeforeChoosingHome
