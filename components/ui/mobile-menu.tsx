'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  // Ensure useRouter is used only on client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [mobileNavOpen])

  // Close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [mobileNavOpen])

  const handleLinkClick = (href: string) => {
    if (isClient) {
      if (href.startsWith('#')) {
        // For internal anchor links, close the menu and scroll to the section
        setMobileNavOpen(false)
        if (router.pathname !== '/') {
          // If not on home page, navigate to home page
          router.push('/')
        }
      } else {
        // For external or path links, close the menu and navigate
        setMobileNavOpen(false)
        router.push(href)
      }
    }
  }

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-gray-800 px-4 py-2">
          <li>
            <button
              className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center bg-transparent border-none"
              onClick={() => handleLinkClick('#about')}
            >
              Qui sommes-nous ?
            </button>
          </li>
          <li>
            <button
              className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center bg-transparent border-none"
              onClick={() => handleLinkClick('#services')}
            >
              Services
            </button>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center"
              onClick={() => setMobileNavOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
