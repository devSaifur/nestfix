import { testimonials } from '@/data/testimonials'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="mx-auto grid w-full max-w-lg gap-14 lg:max-w-full lg:grid-cols-3 lg:gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="">
          <div className="mb-4 flex w-full items-center justify-center lg:justify-start">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name} avatar`}
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-secondary">
                {testimonial.name}
              </h3>
              <p className="text-sm text-foreground-accent">
                {testimonial.role}
              </p>
            </div>
          </div>
          <p className="text-center text-foreground-accent lg:text-left">
            &quot;{testimonial.message}&quot;
          </p>
        </div>
      ))}
    </div>
  )
}

export default Testimonials
