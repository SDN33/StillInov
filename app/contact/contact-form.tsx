'use client';
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#f37335] via-[#f15e4b] to-[#90e7d3] py-16 sm:py-22 mt-16 sm:mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-[#f15e4b] mb-2">Contactez-nous</h3>
            <p className="text-gray-700">
              Envoyez-nous un message, nous serons ravis de vous répondre dans les plus brefs délais. 🚀
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
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#485b51] focus:border-[#485b51]"
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
                className="w-full mt-1 p-3 border border-gray-700 rounded-md shadow-sm focus:ring-[#485b51] focus:border-[#485b51]"
                placeholder="Votre message…"
                aria-label="Votre message…"
                rows={4}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#f15e4b] text-white py-3 px-4 rounded-md shadow-sm hover:bg-[#485b51] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#485b51]"
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

export default ContactForm;
