import Image from 'next/image';
import TestimonialImage01 from '@/public/images/testimonial-01.png';
import TestimonialImage02 from '@/public/images/testimonial-02.jpg';
import TestimonialImage03 from '@/public/images/testimonial-03.jpg';

export default function Testimonials() {

  const url = "https://g.page/r/CU9t7nJ6QjR9EBA/review";

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Parce qu'un avis<br /> vaut mieux qu'un<br />long discours !</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="group flex flex-col h-full p-6 bg-gray-800 transition-transform transform duration-200 hover:scale-105" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#f15e4b" }}>
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— StillInov a créé un site e-commerce pour ma marque de vêtements, avec un design au goût du jour et une partie admin pour un suivi complet de mon activité. Je ne pouvais pas espérer mieux !</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">J.F Kitsadi</cite> - <a className="text-[#f15e4b] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">SevenMates</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="group flex flex-col h-full p-6 bg-gray-800 transition-transform transform duration-200 hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#485b51" }}>
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— J'ai fait appel aux services artistiques de StillInov pour la création de mon podcast audio 'Super Humains', et ce projet a été un véritable succès. Ils ont su transformer toutes mes idées en réalité.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Diandra Tchatchouang</cite> - <a className="text-[#485b51] hover:text-gray-200 transition duration-150 ease-in-out" href="https://open.spotify.com/show/0N3bfIgmeKqztwSshyA4Gz">Podcast "Super Humains"</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="group flex flex-col h-full p-6 bg-gray-800 transition-transform transform duration-200 hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#f15e4b" }}>
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— J'ai fait appel à l'agence pour concevoir l'intégralité de mon identité visuelle, du logo aux flyers. Aujourd'hui, après plus de cinq ans d'existence, mon bar est devenu une adresse incontournable à Bègles. Je recommande vivement leurs services !</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Cédric Césarini</cite> - <a className="text-[#f15e4b] hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.facebook.com/bewinebegles">Be Wine Bègles</a>
              </div>
            </div>
          </div>
          <br />
          <div className="text-center mx-auto align-items-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Cliquez ici pour nous laisser un avis sur Google
            </a>
          </div>
          <br />
          <br />
          {/* Additional Information */}
          <div className="bg-gray-900 py-16">
            <div className="container mx-auto px-4">
              <div className="border-t border-gray-800 mb-16"></div>

                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4">Chez Still-inov Agency</h2>
                <p className="text-lg text-gray-400">
                  Nous croyons que chaque projet est unique, c'est pourquoi nous offrons des solutions personnalisées adaptées à vos besoins spécifiques.
                </p>
              </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Bloc Confiance */}
                <div className="group flex flex-col items-center max-w-sm transition-transform transform duration-200 hover:scale-110">
                  <div className="icon-wrapper p-4 rounded-full mb-4 bg-[#485b51] group-hover:bg-[#f15e4b] transition-colors duration-200">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#f15e4b] transition-colors duration-200">Confiance</h4>
                  <p className="text-center text-gray-400">Nous bâtissons des relations durables avec nos clients, basées sur la transparence, l'intégrité et des résultats concrets.</p>
                </div>

                          {/* Bloc Qualité */}
                <div className="group flex flex-col items-center max-w-sm transition-transform transform duration-200 hover:scale-110">
                  <div className="icon-wrapper p-4 rounded-full mb-4 bg-[#485b51] group-hover:bg-[#f15e4b] transition-colors duration-200">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#f15e4b] transition-colors duration-200">Qualité</h4>
                  <p className="text-center text-gray-400">Notre expertise et notre attention aux détails garantissent des solutions de haute qualité qui dépassent vos attentes.</p>
                </div>

                          {/* Bloc Adaptation */}
                <div className="group flex flex-col items-center max-w-sm transition-transform transform duration-200 hover:scale-110">
                  <div className="icon-wrapper p-4 rounded-full mb-4 bg-[#485b51] group-hover:bg-[#f15e4b] transition-colors duration-200">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#f15e4b] transition-colors duration-200">Adaptation</h4>
                  <p className="text-center text-gray-400">Notre approche flexible nous permet de nous adapter à tout type de marché et de répondre efficacement à vos besoins spécifiques.</p>
                </div>
              </div>
              <br /><br />
              <p className="text-lg text-white-400 text-center">
                L'équipe Still-inov Agency 🤝
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
