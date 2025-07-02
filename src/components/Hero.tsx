import { heroDetails } from '@/data/hero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-5 pb-0 pt-32 md:pt-40"
    >
      <div className="flex flex-col md:flex-row">
        <div className="absolute bottom-0 left-0 top-0 -z-10 w-full">
          <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>

        <div className="text-center md:text-start">
          <h1 className="mx-auto max-w-lg text-4xl font-bold text-foreground md:max-w-2xl md:text-6xl md:leading-tight">
            {heroDetails.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-foreground md:mx-0">
            {heroDetails.subheading}
          </p>
          <div className="mx-auto mt-6 flex w-fit flex-col items-center sm:flex-row sm:gap-4 md:mx-0">
            <Link
              href="#cta"
              className="rounded-full bg-primary px-8 py-3 text-black transition-colors hover:bg-primary-accent"
            >
              Get Started Today
            </Link>
          </div>
        </div>

        <Image
          src={heroDetails.centerImageSrc}
          width={620}
          height={320}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="relative z-10 mx-auto mt-12 md:mt-0"
        />
      </div>
    </section>
  )
}

export default Hero
