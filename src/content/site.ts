export const siteContent = {
  brand: 'SUMMIT',
  descriptor: 'PROPERTIES',
  tagline: 'Find your next horizon.',
  intro:
    'Thoughtfully selected homes, remarkable spaces, and investment opportunities with room to grow.',
  phone: '+254 700 000 000',
  email: 'hello@summitproperties.example',
  locations: ['Nairobi', 'Kiambu', 'Coast'],
  stats: [
    { value: '250+', label: 'Properties listed' },
    { value: '18', label: 'Neighbourhoods covered' },
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
    text: 'Find a home that fits your life, with clear guidance from first viewing to handover.',
  },
  {
    number: '02',
    title: 'Rent with ease',
    text: 'Explore quality homes and commercial spaces with a smoother, more personal search.',
  },
  {
    number: '03',
    title: 'Invest with clarity',
    text: 'Assess promising opportunities with a practical view of location, demand and long-term potential.',
  },
]

export const steps = [
  { number: '01', title: 'Tell us what matters', text: 'Share your goals, preferred areas and budget.' },
  { number: '02', title: 'Explore a shortlist', text: 'We’ll help you compare spaces and arrange viewings.' },
  { number: '03', title: 'Make your move', text: 'Navigate the next steps with a dedicated property partner.' },
]