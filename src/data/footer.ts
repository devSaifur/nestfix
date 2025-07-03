import { IMenuItem, ISocials } from '@/types'

export const footerDetails: {
  subheading: string
  quickLinks: IMenuItem[]
  email: string
  telephone: string
  socials: ISocials
} = {
  subheading: 'Effortless, Secure, Smart Property Management with NestFix.',
  quickLinks: [
    {
      text: 'Services',
      url: '#services'
    },
    {
      text: 'Testimonials',
      url: '#testimonials'
    },
    {
      text: 'FAQs',
      url: '#faq'
    }
  ],
  email: 'address@yoursite.com',
  telephone: '(347) 751-6777',
  socials: {
    facebook: 'https://facebook.com'
  }
}
