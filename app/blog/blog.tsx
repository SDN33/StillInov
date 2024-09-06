import React from 'react';

// Exemple de données d'articles
const articles = [
  {
    id: 1,
    title: 'Article 1',
    excerpt: 'Ceci est un extrait de l\'article 1.',
    date: '2024-09-01',
    url: '/blog/article-1'
  },
  {
    id: 2,
    title: 'Article 2',
    excerpt: 'Ceci est un extrait de l\'article 2.',
    date: '2024-09-02',
    url: '/blog/article-2'
  },
  // Ajoutez plus d'articles ici
];

const Blog: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#f37335] via-[#f15e4b] to-[#90e7d3] py-16 sm:py-22 mt-16 sm:mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Notre Blog</h1>

        <div className="space-y-8">
          {articles.map(article => (
            <article key={article.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">
                <a href={article.url} className="text-[#485b51] hover:text-[#f15e4b]">{article.title}</a>
              </h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <p className="text-gray-500 text-sm">{article.date}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="text-[#485b51] font-semibold text-lg hover:underline"
          >
            Retour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
