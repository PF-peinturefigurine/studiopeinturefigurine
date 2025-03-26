const fs = require('fs');

// Dictionnaires des mois en français et en espagnol
const moisFr = {
  1: "janvier", 2: "février", 3: "mars", 4: "avril", 5: "mai", 6: "juin",
  7: "juillet", 8: "août", 9: "septembre", 10: "octobre", 11: "novembre", 12: "décembre"
};

const moisEs = {
  1: "enero", 2: "febrero", 3: "marzo", 4: "abril", 5: "mayo", 6: "junio",
  7: "julio", 8: "agosto", 9: "septiembre", 10: "octubre", 11: "noviembre", 12: "diciembre"
};

// Fonction pour lire et convertir le mois
function convertirMois() {
  // Lire le fichier contenant le chiffre du mois
  fs.readFile('data/mois.txt', 'utf8', (err, data) => {
    if (err) {
      console.log("Erreur de lecture du fichier 'mois.txt' : ", err);
      return;
    }

    const moisChiffre = parseInt(data.trim());
    
    // Vérifier que le mois est dans l'intervalle valide
    if (moisChiffre >= 1 && moisChiffre <= 12) {
      const moisFrancais = moisFr[moisChiffre];
      const moisEspagnol = moisEs[moisChiffre];

      // Écrire dans les fichiers de sortie
      fs.writeFile('data/delaidispo.txt', moisFrancais, (err) => {
        if (err) {
          console.log("Erreur d'écriture dans le fichier 'delaidispo.txt' : ", err);
          return;
        }
        console.log(`Mois en français : ${moisFrancais}`);
      });

      fs.writeFile('data/delaidispo-es.txt', moisEspagnol, (err) => {
        if (err) {
          console.log("Erreur d'écriture dans le fichier 'delaidispo-es.txt' : ", err);
          return;
        }
        console.log(`Mois en espagnol : ${moisEspagnol}`);
      });
    } else {
      console.log("Le chiffre du mois dans le fichier 'mois.txt' est invalide. Il doit être entre 1 et 12.");
    }
  });
}

// Appeler la fonction pour effectuer la conversion
convertirMois();

const fs = require('fs');
const axios = require('axios');

// Lire le contenu du fichier source
fs.readFile('data/messageinfo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture du fichier:', err);
    return;
  }

  // Envoyer une requête à l'API de Google Translate
  axios.post('https://translation.googleapis.com/language/translate/v2', null, {
    params: {
      q: data,
      target: 'es',
      format: 'text',
      key: 'YOUR_GOOGLE_API_KEY' // Remplacez par votre clé API Google Translate
    }
  })
  .then(response => {
    // Récupérer la traduction depuis la réponse
    const translatedText = response.data.data.translations[0].translatedText;

    // Écrire le texte traduit dans un nouveau fichier
    fs.writeFile('data/messageinfo-es.txt', translatedText, 'utf8', (err) => {
      if (err) {
        console.error('Erreur d\'écriture dans le fichier:', err);
      } else {
        console.log("Traduction terminée et enregistrée dans 'data/messageinfo-es.txt'");
      }
    });
  })
  .catch(error => {
    console.error('Erreur de traduction:', error);
  });
});
