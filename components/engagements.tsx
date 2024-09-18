import React from 'react';

const Engagements: React.FC = () => {
  return (
    <section>
      {/* Additional Information */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 mb-16"></div>

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Nos valeurs</h2>
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

          <div className="mt-8">
            <p className="text-lg text-gray-400 text-center">
              L'équipe Still-inov Agency 🤝
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagements;
