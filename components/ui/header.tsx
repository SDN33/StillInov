import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './mobile-menu';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex items-center shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" aria-label="Stillinov">
              <a className="block">
                <Image
                  src="/images/logo.png"
                  alt="Stillinov logo"
                  width={300}
                  height={100}
                  quality={100}
                  priority
                />
              </a>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <ScrollLink to="features" smooth={true} duration={500} className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={500} className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  Qui sommes-nous ?
                </ScrollLink>
              </li>
              <li>
                <Link href="/contact">
                  <a className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
