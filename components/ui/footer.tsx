import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="flex justify-between items-center">

          {/* 1st block */}
          <div className="flex flex-col items-center">
            {/* Logo */}
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
            {/* Lien vers les mentions légales */}
            <Link href="/mentions-legales" passHref>
              <a className="text-sm text-gray-500 hover:text-gray-300 mt-2">
                Mentions légales
              </a>
            </Link>
          </div>

          {/* Social links */}
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/stillinov" passHref>
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
            <Link href="https://www.facebook.com/stillinov" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
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
          © StillInov.com. Tous droits réservés.
        </div>

      </div>
    </footer>
  );
}
