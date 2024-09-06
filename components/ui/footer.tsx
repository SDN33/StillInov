import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  // Obtenez l'année actuelle
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <a className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="StillInov Logo"
                  width={120}
                  height={40}
                  layout="intrinsic"
                />
              </a>
            </Link>
          </div>

          {/* Centered links */}
          <div className="flex space-x-4">
            <Link href="/mentions-legales" passHref>
              <a className="text-sm text-gray-500 hover:text-gray-300">
                Mentions légales
              </a>
            </Link>
            <Link href="/blog" passHref>
              <a className="text-sm text-gray-500 hover:text-gray-300">
                Blog
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="text-sm text-gray-500 hover:text-gray-300">
                Contactez-nous
              </a>
            </Link>
            <Link href="https://calendly.com/stillinovagency/30min" passHref>
              <a className="text-sm text-gray-500 hover:text-gray-300">
                Planifiez un appel
              </a>
            </Link>
          </div>



          {/* Social links */}
          <div className="flex space-x-4">
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
        </div>

        {/* Bottom area */}
        <div className="text-center text-gray-500 text-sm mt-4">
          &copy; {currentYear} StillInov.com. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
