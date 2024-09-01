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
              De la création de sites web optimisés et attractifs à la gestion des réseaux sociaux, en passant par des stratégies de marketing digital personnalisées,<br /> nous donnons vie à vos ambitions digitales.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" style={{ fill: "#f15e4b" }}>
                  <animate attributeName="rx" values="32;16;32" dur="2s" repeatCount="indefinite" />
                </rect>
                <ellipse cx="32" cy="32" rx="20" ry="12" fill="#f15e4b" className="stroke-current text-purple-300" strokeWidth="2">
                  <animate attributeName="rx" values="20;25;20" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="12;8;12" dur="2s" repeatCount="indefinite" />
                </ellipse>
                <circle cx="32" cy="32" r="8" fill="#f15e4b" className="stroke-current text-purple-100" strokeWidth="2">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="35" cy="29" r="3" fill="#f15e4b">
                  <animate attributeName="cx" values="35;29;35" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="29;35;29" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>

              <h4 className="h4 mb-2">Identité Visuelle</h4>
              <p className="text-lg text-gray-400 text-center">
                Création d'une image de marque unique et cohérente pour renforcer votre reconnaissance et impact sur tous supports.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" style={{ fill: "#f15e4b" }}>
                  <animate attributeName="rx" values="32;28;32" dur="2s" repeatCount="indefinite" />
                </rect>

                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd">
                  <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite" />
                </path>

                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square">
                  <animate attributeName="stroke-width" values="2;3;2" dur="2s" repeatCount="indefinite" />
                </path>

                <polygon className="fill-current text-purple-300" points="40,16 28,24 32,30 36,26 42,32" style={{ transformOrigin: "center" }}>
                  <animateTransform attributeName="transform" type="translate" values="0,0; 5,5; 0,0" dur="2s" repeatCount="indefinite" />
                </polygon>
              </svg>

              <h4 className="h4 mb-2">Site web et Application</h4>
              <p className="text-lg text-gray-400 text-center">
                Concevoir des plateformes digitales sur mesure, alliant design moderne et performance, pour offrir une expérience utilisateur optimale.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" style={{ fill: "#f15e4b" }}>
                  <animate attributeName="rx" values="32;16;32" dur="2s" repeatCount="indefinite" />
                </rect>

                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">

                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11">
                    <animate attributeName="rx" values="5.5;7.5;5.5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="ry" values="11;8;11" dur="2s" repeatCount="indefinite" />
                  </ellipse>

                  <path className="stroke-current text-purple-100" d="M11 0v22">
                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,5; 0,0" dur="2s" repeatCount="indefinite" />
                  </path>

                  <path className="stroke-current text-purple-100" d="M0 11h22">
                    <animateTransform attributeName="transform" type="translate" values="0,0; 5,0; 0,0" dur="2s" repeatCount="indefinite" />
                  </path>

                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11">
                    <animate attributeName="r" values="11;14;11" dur="2s" repeatCount="indefinite" />
                  </circle>
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
                <rect className="fill-current" width="64" height="64" rx="32" style={{ fill: "#485b51" }}>
                  <animate attributeName="rx" values="32;16;32" dur="2s" repeatCount="indefinite" />
                </rect>
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 23v18" transform="translate(1)">
                    <animateTransform attributeName="transform" type="scale" values="1;0.9;1" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path className="stroke-current text-purple-100" d="M37 23v18" transform="translate(1)">
                    <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path className="stroke-current text-purple-300" d="M23 29h18" transform="translate(1)">
                    <animate attributeName="stroke-width" values="2;3;2" dur="2s" repeatCount="indefinite" />
                  </path>
                  <circle className="stroke-current text-purple-300" cx="31" cy="31" r="2">
                    <animate attributeName="r" values="2;5;2" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>

              <h4 className="h4 mb-2">Publicité digitale</h4>
              <p className="text-lg text-gray-400 text-center">
                Créez des campagnes publicitaires ciblées et efficaces pour atteindre votre audience et maximiser votre retour sur investissement.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" style={{ fill: "#485b51" }}>
                  <animate attributeName="rx" values="32;16;32" dur="2s" repeatCount="indefinite" />
                </rect>
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M32 21v22M21 32h22" transform="rotate(45 32 32)">
                    <animateTransform attributeName="transform" type="rotate" values="45;0;45" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path className="stroke-current text-purple-300" d="M32 14v36M14 32h36" transform="rotate(45 32 32)">
                    <animate attributeName="stroke-width" values="2;4;2" dur="2s" repeatCount="indefinite" />
                  </path>
                  <circle className="stroke-current text-purple-300" cx="32" cy="32" r="10">
                    <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>

              <h4 className="h4 mb-2">Analyse et Reporting</h4>
              <p className="text-lg text-gray-400 text-center">
                Suivez et analysez les performances de vos campagnes et actions digitales grâce à des rapports détaillés et des analyses approfondies.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" style={{ fill: "#485b51" }}>
                  <animate attributeName="rx" values="32;16;32" dur="2s" repeatCount="indefinite" />
                </rect>
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M21 23h22v18H21z">
                    <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5">
                    <animate attributeName="stroke-width" values="2;3;2" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path className="stroke-current text-purple-100" d="M31 21v18">
                    <animate attributeName="stroke-width" values="2;3;2" dur="2s" repeatCount="indefinite" />
                  </path>
                </g>
              </svg>

              <h4 className="h4 mb-2">Formation et Support</h4>
              <p className="text-lg text-gray-400 text-center">
                Offrir des formations personnalisées et un support technique pour vous aider à maîtriser les outils et techniques digitales.
              </p>
            </div>

          </div>
          <br />
          <a
            className="btn text-white w-full mt-4 mb-4 sm:w-auto sm:mb-0 bg-[#485b51] hover:bg-[#d14c3d] shadow"
            href="/contact"
          >
            Planifier un appel téléphonique 📞
          </a>
        </div>
      </div>
    </section>
  );
}
