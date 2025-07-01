import { ITestimonial } from '@/types'
import { siteDetails } from './siteDetails'

export const testimonials: ITestimonial[] = [
  {
    name: 'John Smith',
    role: 'Property Owner',
    message: `${siteDetails.siteName} has made managing my rental properties effortless. Their platform keeps everything organized and communication with tenants is seamless.`,
    avatar: '/images/testimonial-1.webp'
  },
  {
    name: 'Jane Doe',
    role: 'Real Estate Investor',
    message: `With ${siteDetails.siteName}, I can track all my properties in one place and handle maintenance requests efficiently. It's a must-have for any serious property investor.`,
    avatar: '/images/testimonial-2.webp'
  },
  {
    name: 'Emily Johnson',
    role: 'Tenant',
    message: `Whenever I have an issue in my apartment, the response from ${siteDetails.siteName} is quick and professional. Paying and submitting requests is also convenient!`,
    avatar: '/images/testimonial-3.webp'
  }
]
