export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" id="features">
        <div className="py-11 md:py-11">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Atteignez des objectifs qui comptent
            </div>
            <h2 className="h2 mb-4">
              Une solution complète pour renforcer votre empreinte numérique.
            </h2>
            <p className="text-xl text-gray-400">
              De la création de sites web optimisés et attractifs à la gestion des réseaux sociaux, en passant par des stratégies de marketing digital personnalisées, nous donnons vie à vos ambitions digitales.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <ellipse cx="32" cy="32" rx="20" ry="12" fill="#C4B5FD" className="stroke-current text-purple-300" strokeWidth="2" />
                <circle cx="32" cy="32" r="8" fill="#7C3AED" className="stroke-current text-purple-100" strokeWidth="2" />
                <circle cx="35" cy="29" r="3" fill="#EDE9FE" />
              </svg>
              <h4 className="h4 mb-2">Identité Visuelle</h4>
              <p className="text-lg text-gray-400 text-center">
                Création d'une image de marque unique et cohérente pour renforcer votre reconnaissance et impact sur tous supports.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Site web et Application</h4>
              <p className="text-lg text-gray-400 text-center">
                Concevoir des plateformes digitales sur mesure, alliant design moderne et performance, pour offrir une expérience utilisateur optimale.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Référencement SEO</h4>
              <p className="text-lg text-gray-400 text-center">
                Optimiser votre visibilité en ligne pour vous positionner en tête des résultats de recherche et attirer plus de trafic qualifié.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Stratégies Marketing</h4>
              <p className="text-lg text-gray-400 text-center">
                Développer des plans sur mesure pour maximiser votre visibilité, attirer votre cible et stimuler votre croissance.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Campagnes Pub</h4>
              <p className="text-lg text-gray-400 text-center">
                Créer des campagnes publicitaires efficaces pour accroître votre visibilité et générer des conversions.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Audit</h4>
              <p className="text-lg text-gray-400 text-center">
                Évaluer et optimiser vos performances digitales pour identifier les opportunités d'amélioration.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
