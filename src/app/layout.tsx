import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Toaster } from '@/components/ui/sonner'
import { siteDetails } from '@/data/siteDetails'
import type { Metadata } from 'next'
import { Manrope, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })
const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: '/photos/og.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/photos/logo.svg"
          sizes="any"
          type="image/svg+xml"
        ></link>
      </head>
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
