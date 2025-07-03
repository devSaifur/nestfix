import { IFAQ } from '@/types'
import { siteDetails } from './siteDetails'

export const faqs: IFAQ[] = [
  {
    question: `How does ${siteDetails.siteName} Builder pay?`,
    answer: `${siteDetails.siteName} pays on a weekly basis through direct deposit from Bank to Bank, Zelle, or CashApp.`
  },
  {
    question: `Does ${siteDetails.siteName} Builder pay gas money?`,
    answer: `Yes, ${siteDetails.siteName} Builder will pay for gas or travel fees for inspections based on the property distance.`
  },
  {
    question: 'Can I connect all my bank accounts?',
    answer: `Yes! ${siteDetails.siteName} supports connections with over 10,000 financial institutions worldwide. Simply log in through our secure portal to link your accounts.`
  },
  {
    question: `Does ${siteDetails.siteName} Builder pay for rental equipment?`,
    answer: `Certainly! ${siteDetails.siteName} Builder will provide the equipment rental cost for work order completion`
  },
  {
    question: 'Is the company only work for tenant occupied/rental properties?',
    answer:
      'No, our company works for both types of clients: Property preservation (vacant properties) and Maintenance (tenant occupied/rental properties).'
  }
]
