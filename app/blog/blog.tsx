'use client';
import React from 'react';

const Blog: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#f37335] via-[#f15e4b] to-[#90e7d3] py-16 sm:py-22 mt-16 sm:mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Notre Blog</h1>

        {/* Example Blog Post 1 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Titre du premier article de blog</h2>
          <p className="text-gray-700 mb-4">
            Ceci est un résumé ou un extrait de l'article de blog. Il donne une idée du contenu sans révéler tous les détails...
          </p>
          <a href="/blog/post-1" className="text-blue-600 hover:underline">Lire la suite</a>
        </article>

        {/* Example Blog Post 2 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Titre du deuxième article de blog</h2>
          <p className="text-gray-700 mb-4">
            Un autre extrait pour un second article de blog. Cet extrait sert à captiver l'intérêt du lecteur...
          </p>
          <a href="/blog/post-2" className="text-blue-600 hover:underline">Lire la suite</a>
        </article>

        {/* Add more blog posts as needed */}

      </div>
    </section>
  );
};

export default Blog;
