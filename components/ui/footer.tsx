import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="flex justify-between items-center">

          {/* 1st block */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image src="/images/logo.png" alt="StillInov Logo" width={120} height={40} />
            </Link>
          </div>

          {/* Social links */}
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/stillinov" target="_blank" rel="noopener noreferrer">
              <Image src="/images/instagram.webp" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/company/stillinov" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="https://www.facebook.com/stillinov" target="_blank" rel="noopener noreferrer">
              <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
            </Link>
          </div>

        </div>

        {/* Bottom area */}
        <div className="text-center text-gray-500 text-sm mt-4">
          © StillInov.com. Tous droits réservés.
        </div>

      </div>
    </footer>
  )
}
