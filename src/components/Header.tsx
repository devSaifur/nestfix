'use client'

import { menuItems } from '@/data/menuItems'
import { siteDetails } from '@/data/siteDetails'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2'
import Container from './Container'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto w-full bg-blue-100/50 backdrop-blur-md md:top-3 md:max-w-7xl md:rounded-3xl">
      <Container className="!px-0">
        <nav className="mx-auto flex items-center justify-between bg-white px-5 shadow-md md:bg-transparent md:shadow-none">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/photos/logo.avif"
              alt={siteDetails.siteName}
              width={80}
              height={80}
              className="size-16 min-w-fit rounded-full md:size-24"
            />
            <span className="manrope cursor-pointer text-xl font-semibold md:text-3xl">
              <span className="text-[#c14100]">Nest</span>
              <span className="text-[#e87f0b]">Fix</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden space-x-6 md:flex">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground transition-colors hover:text-foreground-accent"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="rounded-full bg-primary px-8 py-3 text-black transition-colors hover:bg-primary-accent"
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 px-6 pb-6 pt-1">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="block text-foreground hover:text-primary"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="block w-fit rounded-full bg-primary px-5 py-2 text-black hover:bg-primary-accent"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  )
}

export default Header
