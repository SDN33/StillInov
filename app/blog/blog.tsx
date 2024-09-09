'use client';
import React from 'react';

const Blog: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#f37335] via-[#f15e4b] to-[#90e7d3] py-16 sm:py-22 mt-16 sm:mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-8">Notre Blog est en cours de construction</h1>
        <br />
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        <div className="elfsight-app-595c6831-4922-44c8-8841-c8246b826715" data-elfsight-app-lazy></div>
        {/* Retour Button */}
        <article className="mb-12">
          <button
            onClick={() => window.history.back()} // Ajoute une fonctionnalité pour revenir à la page précédente
            className="text-[#485b51] font-semibold text-lg hover:underline"
          >
            Retour
          </button>
        </article>
      </div>
    </section>
  );
};

export default Blog;
