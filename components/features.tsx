'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Features() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const router = useRouter();

  const handleScheduleCall = () => {
    if (startDate) {
      const formattedDate = startDate.toLocaleDateString('fr-FR');
      const formattedTime = startDate.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
      });
      const message = `Je souhaite être rappelé le ${formattedDate} à ${formattedTime}.`;

      router.push({
        pathname: '/contact',
        query: { message },
      });
    } else {
      alert('Veuillez sélectionner une date et une heure.');
    }
  };

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
            {/* Repeat the other items here with similar structure */}
          </div>

          <br /><br />
          <button
            className="btn text-center text-white w-3 mt-6 mb-4 sm:w-auto sm:mb-0 bg-[#485b51] hover:bg-gray-800 shadow mx-auto flex justify-center"
            onClick={() => setShowCalendar(true)}
          >
            Planifier un appel téléphonique 📞
          </button>

          {showCalendar && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
              <div className="bg-white p-6 rounded shadow-lg text-center">
                <h2 className="mb-4 text-xl font-semibold">Choisissez une date et une heure</h2>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  inline
                />
                <div className="mt-4">
                  <button
                    onClick={handleScheduleCall}
                    className="btn bg-[#485b51] hover:bg-gray-800 text-white px-4 py-2 rounded"
                  >
                    Confirmer
                  </button>
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
