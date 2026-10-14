import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  TrendingUp,
  Check,
  X,
} from 'lucide-react';
import '../styles.css';

import AdvisorModal from '../components/AdvisorModal'

const article = {
  title: 'How to Evaluate a Property’s Investment Potential Before Buying ',
  description:
    'Learn how to assess location, rental demand, total costs, property condition and long-term value before investing in real estate in Kenya.',
  image:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90',
  category: 'PROPERTY INVESTMENT',
  readingTime: '6 min read',
};

const sections = [
  { id: 'location', label: '1. Look beyond the location name' },
  { id: 'demand', label: '2. Understand real demand' },
  { id: 'numbers', label: '3. Calculate the full cost' },
  { id: 'condition', label: '4. Inspect the property' },
  { id: 'legal', label: '5. Verify the legal details' },
  { id: 'future', label: '6. Think about your exit plan' },
];

function setMeta(attribute: string, key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

export default function EvaluatePropertyPotential() {
  const [notice, setNotice] = useState('')
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState('General property advice')

  useEffect(() => {
    document.title = `${article.title} | Summit Properties`;

    setMeta('name', 'description', article.description);
    setMeta('name', 'robots', 'index, follow');
    setMeta('property', 'og:type', 'article');
    setMeta('property', 'og:title', article.title);
    setMeta('property', 'og:description', article.description);
    setMeta('property', 'og:image', article.image);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', article.title);
    setMeta('name', 'twitter:description', article.description);
    setMeta('name', 'twitter:image', article.image);
  }, []);

  const openAdvisor = (type = 'General property advice') => {
    setEnquiryType(type)
    setAdvisorOpen(true)
  }

  return (
    <div className="potential-page">
      <header className="potential-header">
        <a className="brand" href="/#home" aria-label="Summit Properties home">
          <span className="brand-mark"><span /></span>
          <span className="blog-brand-copy">
            <strong>SUMMIT PROPERTIES</strong>
            <small>Find your next horizon.</small>
          </span>
        </a>

        <nav className="potential-nav" aria-label="Main navigation">
          <a href="/#home">Home</a>
          <a href="/#listings">Properties</a>
          <a href="/#services">Services</a>
          <a href="/#insights" aria-current="page">Insights</a>
        </nav>

        <a
          className="potential-header-cta"
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
        <div className="potential-breadcrumb">
          <a href="/#insights">
            <ArrowLeft size={15} /> Back to insights
          </a>
          <span> / </span>
          <span>Property investment</span>
        </div>

        <section className="potential-hero">
          <div className="potential-hero-copy">
            <span className="potential-eyebrow">
              <TrendingUp size={14} /> {article.category}
            </span>

            <h1>{article.title}</h1>

            <p className="potential-deck">
              A property can look impressive and still be a poor investment.
              Learn how to separate genuine potential from a convincing sales pitch.
            </p>

            <div className="potential-byline">
              <span className="potential-brand-mark"></span>
              <span>
                <strong>Summit Properties</strong>
                <small>Practical guidance for smarter property decisions</small>
              </span>
              <span className="potential-reading-time">
                <Clock3 size={15} /> {article.readingTime}
              </span>
            </div>
          </div>

          <figure className="potential-hero-image">
            <img src={article.image} alt="Contemporary residential property with a considered architectural design" />
            <figcaption>
              Look beyond appearances to understand what a property can really offer.
            </figcaption>
          </figure>
        </section>

        <div className="potential-article-layout">
          <aside className="potential-toc">
            <span className="potential-toc-heading">IN THIS ARTICLE</span>
            <nav aria-label="Table of contents">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.label}
                </a>
              ))}
              <a href="#checklist">Your evaluation checklist</a>
            </nav>
            <div className="potential-toc-note">
              <span className="potential-note-icon">
                <TrendingUp size={18} />
              </span>
              <p>
                <strong>Think like an investor.</strong>
                <br />
                Every property should stand up to questions about cost, demand and risk.
              </p>
            </div>
          </aside>

          <article className="potential-article">
            <p className="potential-intro">
              Real estate can be a valuable way to build wealth, earn rental
              income or secure a place to live. But buying property simply
              because it looks beautiful, sits in a popular neighbourhood or
              promises rapid appreciation can lead to expensive mistakes.
            </p>

            <p>
              The key is to assess the property as a whole: what it costs, who
              might want it, what it will take to maintain, and how well it
              fits your financial goals. Here are six pointers to guide that process:
            </p>

            <section id="location" className="potential-section">
              <span className="potential-section-number">01</span>
              <h2>Look beyond the location name</h2>
              <p>
                A familiar or fashionable neighbourhood is not automatically a
                good investment. The more useful question is whether the
                specific location supports the way people want to live, work
                or do business.
              </p>
              <p>Look at factors such as:</p>
              <ul>
                <li>Access to major roads and reliable public transport.</li>
                <li>Proximity to workplaces, schools, healthcare and shopping.</li>
                <li>Water supply, electricity, drainage and internet access.</li>
                <li>Security, noise, congestion and the general condition of nearby infrastructure.</li>
                <li>Planned developments that could improve—or disrupt—the area.</li>
              </ul>
              <div className="potential-insight">
                <span>THE INVESTOR’S LENS</span>
                <p>
                  Visit at different times of day. A quiet street on a Sunday
                  afternoon may feel very different during a weekday commute.
                </p>
              </div>
            </section>

            <section id="demand" className="potential-section">
              <span className="potential-section-number">02</span>
              <h2>Understand who would want the property</h2>
              <p>
                A property’s potential depends partly on the people it can
                realistically serve. Before buying, identify the likely tenant
                or future buyer and check whether the property matches their needs.
              </p>
              <p>For example, investigate:</p>
              <ul>
                <li>Whether similar properties are being rented or sold successfully.</li>
                <li>The asking rents and, where possible, the rents landlords actually receive.</li>
                <li>How long comparable properties remain vacant or on the market.</li>
                <li>Whether the layout, size, parking and amenities suit local demand.</li>
                <li>How much competing supply is available or being built nearby.</li>
              </ul>
              <p>
                Do not rely on one agent’s estimate or a single advertised
                listing. Compare several genuinely similar properties and
                distinguish advertised prices from completed transactions where possible.
              </p>
            </section>

            <section id="numbers" className="potential-section">
              <span className="potential-section-number">03</span>
              <h2>Calculate the full cost, not just the asking price</h2>
              <p>
                The purchase price is only one part of the financial picture.
                Transaction expenses, repairs, financing and periods without
                rental income can significantly change the outcome.
              </p>

              <h3>Build a realistic cost estimate</h3>
              <ul>
                <li>Purchase price and applicable transaction taxes or duties.</li>
                <li>Legal, valuation, inspection and other professional fees.</li>
                <li>Loan interest and other financing costs, if borrowing.</li>
                <li>Repairs, furnishing, renovations and ongoing maintenance.</li>
                <li>Management fees, insurance and any applicable service charges.</li>
                <li>Vacancy periods and a reserve for unexpected expenses.</li>
              </ul>

              <div className="potential-formula">
                <span>START WITH THE BASICS</span>
                <p>Gross rental yield = Annual rental income ÷ Purchase price × 100</p>
                <small>
                  This is a starting point, not your final return. It excludes
                  expenses, financing and periods without a tenant.
                </small>
              </div>

              <p>
                For a more useful estimate, calculate net operating income by
                subtracting realistic operating expenses from rental income.
                Compare that figure with your total investment, and assess loan
                repayments separately if the property is financed.
              </p>
              <p>
                Be conservative with your assumptions. If the investment only
                looks attractive when every month is occupied and nothing ever
                breaks, the financial plan may be too fragile.
              </p>
            </section>

            <section id="condition" className="potential-section">
              <span className="potential-section-number">04</span>
              <h2>Inspect the property, not just the presentation</h2>
              <p>
                Fresh paint, stylish finishes and attractive staging can make
                a property feel move-in ready. They do not necessarily tell
                you whether the building is sound or affordable to maintain.
              </p>
              <p>Pay attention to:</p>
              <ul>
                <li>Cracks, dampness, leaks and signs of poor drainage.</li>
                <li>Roofing, plumbing, electrical installations and ventilation.</li>
                <li>Water storage, sewage arrangements and waste disposal.</li>
                <li>Quality of finishes and any work that may soon need replacing.</li>
                <li>Shared facilities, access roads and the upkeep of common areas.</li>
              </ul>
              <p>
                Where appropriate, arrange an independent professional
                inspection and obtain repair estimates before making a final
                decision. A lower purchase price can be misleading if major
                repairs quickly erase the apparent saving.
              </p>
            </section>

            <section id="legal" className="potential-section">
              <span className="potential-section-number">05</span>
              <h2>Verify the legal details before committing</h2>
              <p>
                A promising location and attractive numbers cannot compensate
                for unclear ownership or unresolved legal issues. Generally,
                property due diligence should be handled carefully and with
                independent professional advice.
              </p>
              <p>Depending on the property, your due diligence may include:</p>
              <ul>
                <li>Conducting an official search to verify registered ownership and recorded interests.</li>
                <li>Checking title documents, tenure and the nature of the interest being sold.</li>
                <li>Confirming boundaries, access rights and any relevant restrictions.</li>
                <li>Reviewing approved plans, permits and relevant completion documentation.</li>
                <li>Understanding applicable land-use rules, rates, rents and outstanding charges.</li>
                <li>Reviewing the sale agreement with an independent advocate.</li>
              </ul>
              <p>
                The exact checks depend on whether you are buying freehold or
                leasehold land, a house, an apartment or an off-plan property.
                Do not treat documents supplied by a seller as a substitute
                for independent verification.
              </p>
              <div className="potential-insight">
                <span>DON’T SKIP THIS STEP</span>
                <p>
                  Avoid paying a substantial, non-refundable amount before
                  the necessary legal checks and contractual protections are
                  in place. Ask your advocate what is appropriate for your transaction.
                </p>
              </div>
            </section>

            <section id="future" className="potential-section">
              <span className="potential-section-number">06</span>
              <h2>Think about your exit plan</h2>
              <p>
                Even if you intend to hold a property for many years, it is
                worth asking what happens if your plans change. Could you rent
                it out, sell it or adapt it for a different use?
              </p>
              <p>Consider:</p>
              <ul>
                <li>Whether there is a clear pool of future buyers or tenants.</li>
                <li>Whether the property can serve more than one practical need.</li>
                <li>How easily you could cover costs if rental income stopped temporarily.</li>
                <li>Whether a future sale would be affected by access, title, condition or restrictions.</li>
                <li>How long you could afford to hold the property if the market weakened.</li>
              </ul>
              <p>
                No one can guarantee future appreciation. A sensible decision
                should still make sense under less favourable conditions—not
                only under the most optimistic forecast.
              </p>
            </section>

            <section id="checklist" className="potential-checklist">
              <span className="potential-eyebrow">BEFORE YOU DECIDE</span>
              <h2>Your property evaluation checklist</h2>
              <p>
                Use these questions to organise your research before making an offer.
              </p>
              {[
                'I have visited the location and assessed everyday access and infrastructure.',
                'I have compared similar properties and checked realistic local demand.',
                'I have estimated purchase costs, ongoing expenses and a contingency reserve.',
                'I understand the property’s physical condition and likely repair costs.',
                'Ownership and relevant legal details will be independently verified.',
                'I can explain how this property fits my financial goals and exit plan.',
              ].map((item) => (
                <div className="potential-checklist-item" key={item}>
                  <CheckCircle2 size={19} />
                  <span>{item}</span>
                </div>
              ))}
            </section>

            <section className="potential-conclusion">
              <h2>Choose potential you can explain. Not promises you hope will come true.</h2>
              <p>
                A good property decision is built on evidence, realistic
                numbers and careful due diligence. Take the time to investigate
                what you are buying, challenge assumptions and get independent
                advice where needed.
              </p>
              <p>
                The goal is not simply to buy a property. It is to understand
                why that property makes sense for you.
              </p>
            </section>

            <div className="potential-article-footer">
              <span>SUMMIT PROPERTIES</span>
              <p>Find your next horizon.</p>
              <a href="/#insights">
                Explore more insights <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </div>

        <section className="potential-cta">
          <div>
            <span className="potential-eyebrow">YOUR NEXT MOVE</span>
            <h2>Looking for a property with real potential?</h2>
            <p>
              Tell us about your goals, budget and
              the kind of property you are looking for.
            </p>
          </div>
          <a
          className="potential-cta-button"
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

      <footer className="potential-footer">
        <a className="brand" href="/#home">
          <span className="brand-mark"><span /></span>
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
  );
}
