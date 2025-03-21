const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Votre clé API Google (gardez-la sécurisée, idéalement dans un fichier .env)
const apiKey = 'AIzaSyBnYhSenKvnePIT_Xuu6Dyx9sjcWI1xWic';
const placeId = 'ChIJbQMrvwZB9EcRTtDXOMNF9-o';

// Endpoint pour récupérer le nombre d'avis
app.get('/api/reviews', async (req, res) => {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=user_ratings_total&key=${apiKey}`;
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === 'OK') {
            const reviewCount = data.result.user_ratings_total || 0;
            res.json({ success: true, reviewCount });
        } else {
            res.status(500).json({ success: false, error: 'Erreur API Google' });
        }
    } catch (error) {
        console.error('Erreur serveur:', error);
        res.status(500).json({ success: false, error: 'Erreur inattendue' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
