import Image from 'next/image';
import Avatar01 from '@/public/images/avatar01.png';
import Avatar02 from '@/public/images/avatar02.png';

const TeamMember = ({ image, name, role, description, linkedinUrl }: { image: string, name: string, role: string, description: string, linkedinUrl: string }) => (
  <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
    <div className="relative mb-4">
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${name}`}>
        <Image className="rounded-full" src={image} width={96} height={96} alt={`Photo de ${name}`} />
      </a>
      <svg className={`absolute top-0 right-0 -mr-3 w-6 h-5 fill-current ${name === "Stéphane Dei-negri" ? "text-[#f15e4b]" : "text-[#485b51]"}`} viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
      </svg>
    </div>
    <p className="text-lg text-gray-400">{description}</p>
    <div className="text-gray-200 font-medium mt-4">
      {name} - <span className={name === "Stéphane Dei-negri" ? "text-[#f15e4b]" : "text-[#485b51]"}>{role}</span>
    </div>
  </div>
);

export default function AboutUs() {
  const teamMembers = [
    {
      image: Avatar01.src,
      name: "Stéphane Dei-negri",
      role: "Graphiste et Web Developer",
      description: "Graphiste freelance depuis 2017 et aussi Web developeur diplomé. Ma double expertise me permet de transformer vos idées en créations visuelles captivantes tout en assurant une fonctionnalité web impeccable. Faites confiance à Stéphane pour insuffler une touche d'originalité et de précision technique à vos projets.",
      linkedinUrl: "https://www.linkedin.com/in/stephane-dn/"
    },
    {
      image: Avatar02.src,
      name: "Laura Marron",
      role: "Digital Business Developer",
      description: "Forte de 10 ans d'expérience dans le marketing digital, je suis diplômée en Digital Business Development et spécialisée dans l'optimisation de la visibilité en ligne. J'accompagne les entreprises dans leurs audits marketing, le référencement SEO/SEA, ainsi que dans la mise en œuvre de stratégies digitales efficaces.",
      linkedinUrl: "https://www.linkedin.com/in/laura-marron-/"
    }
  ];

  return (
    <section className="bg-gray-900 py-12 md:py-20" id='about'>
      <div className="py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center pb-12 md:pb-20">
            <h2 className="h2 font-bold mb-4">Découvrez notre équipe</h2>
            <p className="text-lg text-gray-400">Une équipe qualifiée et dévouée à votre succès 🏆</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 items-start">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
      <br />
      <a className="flex justify-center items-center text-white bg-[#0A66C2] hover:bg-[#004182] rounded-full w-48 h-10 font-semibold" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=stephane-dn" target="_blank" rel="noopener noreferrer">
        Follow on LinkedIn
      </a>
    </section>
  );
}
