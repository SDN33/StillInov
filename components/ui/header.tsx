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
                width={280}
                height={80}
                quality={100}
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="https://www.stillinov.com/#features" className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out">Services</Link>
              </li>
              <li>
                <Link href="https://www.stillinov.com/#about" className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out">Qui sommes-nous ?</Link>
              </li>
              <li>
                <Link href="/blog" className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out">Contactez-nous</Link>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex space-x-4 ml-4">
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
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
