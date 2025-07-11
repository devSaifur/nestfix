'use client'

import { cn } from '@/lib/utils'
import { IBenefit } from '@/types'
import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'
import ServiceBullet from './ServiceBullet'

interface Props {
  benefit: IBenefit
  imageAtRight?: boolean
  className?: string
}

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1
    }
  }
}

const BenefitSection = ({ benefit, imageAtRight, className }: Props) => {
  const { title, description, imageSrc, bullets } = benefit

  return (
    <section className={cn('benefit-section rounded-lg', className)}>
      <motion.div
        className="mb-24 flex flex-col flex-wrap items-center justify-center gap-2 lg:flex-row lg:flex-nowrap lg:gap-20"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div
          className={clsx('flex w-full max-w-lg flex-wrap items-center', {
            'justify-start': imageAtRight,
            'justify-end lg:order-1': !imageAtRight
          })}
        >
          <div className="w-full text-center lg:text-left">
            <motion.div
              className="flex w-full flex-col"
              variants={childVariants}
            >
              <SectionTitle>
                <h3 className="lg:max-w-2xl">{title}</h3>
              </SectionTitle>

              <p className="mx-auto mt-1.5 leading-normal text-foreground-accent lg:ml-0">
                {description}
              </p>
            </motion.div>

            <div className="mx-auto w-full lg:ml-0">
              {bullets.map((item, index) => (
                <ServiceBullet
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={clsx('mt-5 lg:mt-0', { 'lg:order-2': imageAtRight })}>
          <div
            className={clsx('flex w-fit', {
              'justify-start': imageAtRight,
              'justify-end': !imageAtRight
            })}
          >
            <Image
              src={imageSrc}
              alt="title"
              width="584"
              height="962"
              quality={100}
              className="rounded-xl lg:ml-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default BenefitSection
