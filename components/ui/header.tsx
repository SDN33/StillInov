import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex items-center shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Stillinov">
              <Image
                src="/images/logo.png"
                alt="Stillinov logo"
                width={270}
                height={70}
                quality={100}
                priority
              />
            </Link>
          </div>

          {/* Social links and hamburger menu */}
          <div className="flex items-center space-x-4">
            {/* Social links */}
            <div className="hidden md:flex space-x-4">
              <Link href="https://www.instagram.com/stillinovagency" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/instagram.webp"
                    alt="Instagram"
                    width={24}
                    height={24}
                    layout="intrinsic"
                  />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/still-inov-agency" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    layout="intrinsic"
                  />
                </a>
              </Link>
              <Link href="https://www.threads.net/@stillinovagency" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/facebook.webp"
                    alt="Threads"
                    width={24}
                    height={24}
                    layout="intrinsic"
                  />
                </a>
              </Link>
            </div>

            {/* Hamburger menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
