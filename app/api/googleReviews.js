// pages/api/googleReviews.js

export default async function handler(req, res) {
  const apiKey = 'AIzaSyDuT60eaTyiRhF8faZwQhEMzIpZHR5lUEI';
  const placeId = '6218168612558860929'; // Remplacez par votre Place ID
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      const reviews = data.result.reviews || [];

      // Extraire et reformater les avis pour correspondre au format attendu
      const formattedReviews = reviews.map(review => ({
        profile_photo_url: review.profile_photo_url || '',
        author_name: review.author_name || 'Anonymous',
        text: review.text || '',
        relative_time_description: review.relative_time_description || 'Unknown time'
      }));

      res.status(200).json(formattedReviews);
    } else {
      // Retourner le message d'erreur spécifique de l'API Google si disponible
      res.status(500).json({ error: `Google API error: ${data.status}` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
