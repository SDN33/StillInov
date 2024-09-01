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
              De la création de sites web optimisés et attractifs à la gestion des réseaux sociaux, en passant par des stratégies de marketing digital personnalisées,
              <br />
              nous donnons vie à vos ambitions digitales.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* Feature Items */}
            {[
              {
                title: "Identité Visuelle",
                description:
                  "Création d'une image de marque unique et cohérente pour renforcer votre reconnaissance et impact sur tous supports.",
                delay: 0,
              },
              {
                title: "Site web et Application",
                description:
                  "Concevoir des plateformes digitales sur mesure, alliant design moderne et performance, pour offrir une expérience utilisateur optimale.",
                delay: 100,
              },
              {
                title: "Référencement SEO",
                description:
                  "Optimiser votre visibilité en ligne pour vous positionner en tête des résultats de recherche et attirer plus de trafic qualifié.",
                delay: 200,
              },
              {
                title: "Publicité digitale",
                description:
                  "Créez des campagnes publicitaires ciblées et efficaces pour atteindre votre audience et maximiser votre retour sur investissement.",
                delay: 300,
              },
              {
                title: "Analyse et Reporting",
                description:
                  "Suivez et analysez les performances de vos campagnes et actions digitales grâce à des rapports détaillés et des analyses approfondies.",
                delay: 400,
              },
              {
                title: "Formation et Support",
                description:
                  "Offrir des formations personnalisées et un support technique pour vous aider à maîtriser les outils et techniques digitales.",
                delay: 500,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect className="fill-current" width="64" height="64" rx="32" style={{ fill: index < 3 ? "#f15e4b" : "#485b51" }}>
                    <animate attributeName="rx" values="32;16;32" dur="2s" repeatCount="indefinite" />
                  </rect>
                  {/* Add custom SVG content here for each feature if needed */}
                </svg>
                <h4 className="h4 mb-2">{item.title}</h4>
                <p className="text-lg text-gray-400 text-center">{item.description}</p>
              </div>
            ))}
          </div>

          <br />

          {/* Call to Action Button */}
          <a
            className="btn text-white w-full mt-4 mb-4 sm:w-auto sm:mb-0"
            href="/contact"
            style={{ backgroundColor: '#f15e4b' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d14c3d')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f15e4b')}
          >
            Planifier un appel téléphonique 📞
          </a>
        </div>
      </div>
    </section>
  );
}
