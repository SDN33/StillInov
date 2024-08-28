import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Stillinov">
                  <Image
                    src="/images/logo.png"
                    alt="Stillinov logo"
                    width={150}
                    height={50}
                    quality={100}
                  />
                </Link>
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>

              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Chez StillInov, nous croyons que chaque projet est unique, c'est pourquoi nous offrons des solutions personnalisées adaptées à vos besoins spécifiques. Que vous ayez un petit budget ou de grandes ambitions, nous nous engageons à optimiser chaque aspect de votre projet pour vous offrir le meilleur résultat possible.</h6>
              </div>
            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {/* ... (social media links remain unchanged) ... */}
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; StillInov.com. Tout droits réservés.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
