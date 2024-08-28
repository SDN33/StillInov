import { useState } from 'react';

export default function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche la soumission par défaut
    const form = e.currentTarget;

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xblrwadg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true); // Affiche le message de succès
        form.reset(); // Réinitialise le formulaire
      } else {
        setIsError(true); // Affiche le message d'erreur
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            {/* SVG code here */}
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Restons en contact !</h3>
              <p className="text-purple-200 text-lg">Inscrivez-vous à notre newsletter pour recevoir les meilleures actualités en avant-première.</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input type="email" name="email" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400" placeholder="Votre email…" aria-label="Votre email…" required />
                <input type="hidden" name="message" value="newsletter" />
                <button type="submit" className="btn text-purple-600 bg-purple-100 hover:bg-white shadow">S'abonner</button>
              </div>
            </form>

          </div>

          {/* Success/Error Message Popup */}
          {isSubmitted && (
            <div className="absolute top-0 right-0 bg-green-500 text-white p-4 rounded shadow-lg">
              Merci pour votre inscription à la newsletter !
            </div>
          )}

          {isError && (
            <div className="absolute top-0 right-0 bg-red-500 text-white p-4 rounded shadow-lg">
              Une erreur s'est produite. Veuillez réessayer.
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
