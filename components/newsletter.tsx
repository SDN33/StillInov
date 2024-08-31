'use client';

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-custom-orange py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            {/* SVG code here */}
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-black mb-2">Restons en contact !</h3>
              <p className="text-gray-200 text-lg">Inscrivez-vous à notre newsletter pour recevoir les meilleures actualités en avant-première.</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2" action="https://formspree.io/f/xblrwadg" method="POST">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input type="email" name="email" className="w-full appearance-none bg-white border border-gray-300 focus:border-gray-500 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-gray-900 placeholder-gray-400" placeholder="Votre email…" aria-label="Votre email…" required />
                <input type="hidden" name="message" value="newsletter" />
                <button type="submit" className="btn text-white bg-gray-800 hover:bg-gray-900 shadow">S'abonner</button>
              </div>
            </form>

          </div>

        </div>

      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        .bg-custom-orange {
          background: rgb(243,115,53);
          background: radial-gradient(circle, rgba(243,115,53,1) 0%, rgba(241,94,75,1) 35%, rgba(144,231,211,1) 100%);
        }

        .text-gray-200 {
          color: rgba(255, 255, 255, 0.8); /* Slightly lighter gray for better contrast on orange */
        }

        .text-gray-900 {
          color: #333; /* Dark text color for better visibility */
        }

        .bg-white {
          background-color: #ffffff; /* Ensure form input is visible */
        }

        .border-gray-300 {
          border-color: #e2e8f0; /* Light border color for input fields */
        }

        .focus\:border-gray-500:focus {
          border-color: #4a5568; /* Darker border on focus */
        }

        .bg-gray-800 {
          background-color: #2d3748; /* Button background color */
        }

        .hover\:bg-gray-900:hover {
          background-color: #1a202c; /* Button hover color */
        }
      `}</style>
    </section>
  )
}
