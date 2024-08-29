import React from 'react';

// Define the ContactForm component
const ContactForm: React.FC = () => {
  return (
    <section className="bg-purple-600 py-16 sm:py-22">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">Contactez-nous</h3>
            <p className="text-gray-700">
              Envoyez-nous un message, nous serons ravis de vous répondre.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xblrwadg"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Votre email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Votre email…"
                aria-label="Votre email…"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Votre message…"
                aria-label="Votre message…"
                rows={4}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Envoyer
              </button>
            </div>
          </form>
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
