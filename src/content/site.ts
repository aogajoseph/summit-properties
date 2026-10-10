export const siteContent = {
  brand: 'SUMMIT',
  descriptor: 'PROPERTIES',
  tagline: 'Find your next horizon.',
  intro:
    'Thoughtful property guidance for the way you want to live, the value you want to build and the future you envision.',
  phone: '+123 712 345 678',
  email: 'info@summitproperties.com',
  locations: ['Kenya', 'Zanzibar', 'Dubai'],
  stats: [
    { value: '250+', label: 'Properties listed' },
    { value: '54', label: 'Locations covered' },
    { value: '96%', label: 'Client satisfaction' },
  ],
}

export type PropertyCategory = 'Buy' | 'Rent' | 'Invest'

export type Property = {
  id: number
  title: string
  location: string
  price: number
  priceLabel: string
  beds: number
  baths: number
  area: number
  category: PropertyCategory
  type: string
  image: string
  badge?: string
  summary: string
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'The Ridge Residence',
    location: 'Runda, Nairobi',
    price: 68500000,
    priceLabel: 'KES 68.5M',
    beds: 5,
    baths: 5,
    area: 420,
    category: 'Buy',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    badge: 'Featured',
    summary: 'A contemporary family home with generous living spaces, landscaped gardens and refined finishes.',
  },
  {
    id: 2,
    title: 'Olive Garden Apartment',
    location: 'Kilimani, Nairobi',
    price: 145000,
    priceLabel: 'KES 145K / mo',
    beds: 3,
    baths: 3,
    area: 168,
    category: 'Rent',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    badge: 'Move-in ready',
    summary: 'Light-filled apartment with calm interiors, secure parking and convenient access to city amenities.',
  },
  {
    id: 3,
    title: 'Azure Coast Villas',
    location: 'Diani, Kwale',
    price: 32500000,
    priceLabel: 'KES 32.5M',
    beds: 4,
    baths: 4,
    area: 290,
    category: 'Invest',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    badge: 'Investment pick',
    summary: 'A relaxed coastal retreat designed for private living or a considered holiday-rental strategy.',
  },
  {
    id: 4,
    title: 'Westlands Sky Suite',
    location: 'Westlands, Nairobi',
    price: 21800000,
    priceLabel: 'KES 21.8M',
    beds: 2,
    baths: 2,
    area: 112,
    category: 'Buy',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    summary: 'A polished city residence with open-plan living, broad windows and a connected urban address.',
  },
  {
    id: 5,
    title: 'Karen Courtyard House',
    location: 'Karen, Nairobi',
    price: 420000,
    priceLabel: 'KES 420K / mo',
    beds: 4,
    baths: 4,
    area: 360,
    category: 'Rent',
    type: 'House',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    summary: 'A private, leafy setting with indoor-outdoor flow and space to entertain.',
  },
  {
    id: 6,
    title: 'The Foundry Offices',
    location: 'Upper Hill, Nairobi',
    price: 185000,
    priceLabel: 'KES 185K / mo',
    beds: 0,
    baths: 2,
    area: 205,
    category: 'Invest',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    summary: 'Flexible commercial space in a professional setting, suited to teams ready for their next stage.',
  },
]

export const services = [
  {
    number: '01',
    title: 'Buy with confidence',
    text: 'Find the right property for your lifestyle, with expert guidance from viewing to handover.',
  },
  {
    number: '02',
    title: 'Rent with ease',
    text: 'Discover quality residential and commercial spaces that fit your needs.',
  },
  {
    number: '03',
    title: 'Invest with clarity',
    text: 'Identify promising opportunities with a focus on location, demand and long-term value.',
  },
]

export const steps = [
  { number: '01', title: 'Tell us what matters', text: 'Share your goals, budget and preferred locations.' },
  { number: '02', title: 'Explore your options', text: 'Compare shortlisted properties and arrange viewings.' },
  { number: '03', title: 'Move forward with confidence', text: 'Navigate the next steps with a dedicated property partner.' },
]