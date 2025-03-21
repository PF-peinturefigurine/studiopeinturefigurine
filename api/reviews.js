const axios = require('axios');

module.exports = async (req, res) => {
    const apiKey = 'AIzaSyDdbJM1q7gqb8NT6BGBwJOCZOjAJ0XtpYI'; // Assurez-vous que c’est votre vraie clé
    const placeId = 'ChIJbQMrvwZB9EcRTtDXOMNF9-o';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=user_ratings_total&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === 'OK') {
            const reviewCount = data.result.user_ratings_total || 0;
            res.json({ success: true, reviewCount });
        } else {
            res.status(500).json({ 
                success: false, 
                error: 'Erreur API Google', 
                status: data.status, 
                message: data.error_message 
            });
        }
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ success: false, error: 'Erreur inattendue', details: error.message });
    }
};
