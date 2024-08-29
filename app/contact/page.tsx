import React from 'react';

// Define the ContactForm component
const ContactForm: React.FC = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA box */}
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            {/* SVG code or background illustration here */}
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="text-white text-3xl font-semibold mb-2">Contactez-nous</h3>
              <p className="text-purple-200 text-lg">
                Envoyez-nous un message, nous serons ravis de vous répondre.
              </p>
            </div>

            {/* CTA form */}
            <form
              className="w-full lg:w-1/2"
              action="https://formspree.io/f/xblrwadg"
              method="POST"
            >
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="email"
                  name="email"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Votre email…"
                  aria-label="Votre email…"
                  required
                />
                <textarea
                  name="message"
                  className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400"
                  placeholder="Votre message…"
                  aria-label="Votre message…"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto btn text-purple-600 bg-purple-100 hover:bg-white shadow mt-2 sm:mt-0"
                >
                  Envoyer
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

// Define the Contact component
const Contact: React.FC = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default Contact;
