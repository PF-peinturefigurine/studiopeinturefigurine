 // Fonction AJAX pour charger le contenu des pages
    function loadPage(page) {
        // Enlever l'ancien contenu et charger la nouvelle page
        $("#contenu-principal").fadeOut(20, function () {
            // Charger la nouvelle page dans le div #contenu-principal
            $("#contenu-principal").load(page + " #contenu-principal", function () {
                // Rendre le contenu visible après qu'il soit chargé
                $("#contenu-principal").fadeIn(20);

                // Vérifier si l'appareil est mobile et ajuster l'affichage du menu
                function isMobile() {
                    return window.innerWidth <= 768; // Largeur typique des mobiles
                }

                // Sélectionner l'élément du menu
                let myMenu = document.getElementById("mymenu");

                if (myMenu) {
                    myMenu.style.display = isMobile() ? "none" : "block";
                }
            });
        });
    }


    // Tarifs en JavaScript
    const tarifs = {
        "infanterie": { "niveau_1": 8.00, "niveau_2": 12.00, "niveau_3": 25.00 },
          "personnage": { "niveau_1": 15.00, "niveau_2": 25.00, "niveau_3": 50.00 },
           "heros": { "niveau_1": 40.00, "niveau_2": 70.00, "niveau_3": 130.00 },
        "cavalerie_lourde": { "niveau_1": 15.00, "niveau_2": 18.00, "niveau_3": 38.00 },
        "petit_vehicule_monstre": { "niveau_1": 15.00, "niveau_2": 25.00, "niveau_3": 50.00 },
        "gros_vehicule_monstre": { "niveau_1": 50.00, "niveau_2": 80.00, "niveau_3": 150.00 }
    };

    // Fonction de mise à jour du total
    function updateTotal() {
        const niveau = document.getElementById("niveau").value;
        const infanterie = parseInt(document.getElementById("infanterie").value) || 0;
          const personnage = parseInt(document.getElementById("personnage").value) || 0;
          const heros = parseInt(document.getElementById("heros").value) || 0;
        const cavalerie = parseInt(document.getElementById("cavalerie").value) || 0;
        const petitMonstre = parseInt(document.getElementById("petitMonstre").value) || 0;
        const grosMonstre = parseInt(document.getElementById("grosMonstre").value) || 0;

        const total =
            (tarifs.infanterie[niveau] * infanterie) +
              (tarifs.personnage[niveau] * personnage) +
                (tarifs.heros[niveau] * heros) +
            (tarifs.cavalerie_lourde[niveau] * cavalerie) +
            (tarifs.petit_vehicule_monstre[niveau] * petitMonstre) +
            (tarifs.gros_vehicule_monstre[niveau] * grosMonstre);

        document.getElementById("total").textContent = total.toFixed(2);
        return total;
    }

    // Gestion de l'envoi du formulaire
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le comportement par défaut

        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const email = document.getElementById("email").value;
        const telephone = document.getElementById("telephone").value;
        const total = updateTotal(); // Récupère le total calculé
     const infanterie = document.getElementById("infanterie").value;
         const personnage = document.getElementById("personnage").value;
            const heros = document.getElementById("heros").value;
         const cavalerie = document.getElementById("cavalerie").value;
         const petitMonstre = document.getElementById("petitMonstre").value;
         const grosMonstre = document.getElementById("grosMonstre").value;
         const niveau = document.getElementById("niveau").value;
            const message = document.getElementById("message").value;
        // Construire l'URL mailto
        const subject = `Demande de devis de ${prenom} ${nom} - ${niveau} `;
        const body = `Bonjour,
        
Voici ma demande de devis de peinture  ${niveau} :
 - Nom : ${nom}
 - Prénom : ${prenom}
 - Email : ${email}
- Téléphone : ${telephone}

- Niveau choisi : ${niveau} 
- Infanterie : ${infanterie}
- Cavalerie : ${cavalerie}
- Personnage : ${personnage}
- Héros Monstrueux : ${heros}
- Petit Monstre/Véhicule : ${petitMonstre}
- Gros Monstre/Véhicule : ${grosMonstre}

 Total estimé : ${total.toFixed(2)} €
 
 Mon message :
 ${message}
Cordialement.`;
        const mailtoURL = `mailto:studiopeinturefigurine@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 
        window.location.href = mailtoURL; // Redirection
         window.location.href = 'index.html';  // Redirige vers index.html
     
    });

    // Événements d'entrée pour la mise à jour du total
    document.querySelectorAll("#contactForm input, #contactForm select").forEach(element => {
        element.addEventListener("input", updateTotal);
    });


  function envoyerMail(form) {
            const nom = encodeURIComponent(form.nom.value);
            const prenom = encodeURIComponent(form.prenom.value);
            const email = encodeURIComponent(form.email.value);
            const telephone = encodeURIComponent(form.telephone.value);
            const cours = encodeURIComponent(form.cours.value);
            const message = encodeURIComponent(form.message.value);

            const subject = `Demande de cours de peinture - ${nom} ${prenom}`;
            const body = `Bonjour,
            
            Voici une nouvelle demande de cours :
            Nom : ${nom}
            
            Prénom : ${prenom}
            
            Email : ${email}
            
            Téléphone : ${telephone}
            
            Cours choisi : ${cours}
            
            Message : 
            ${message}
            
            Cordialement,
            ${prenom} ${nom}`;
            
            const mailtoLink = `mailto:studiopeinturefigurine@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
        }

window.onload = function() {
    setTimeout(function() {
$('#chatBox').toggle();
             var inputElement = document.getElementById("chatInput");
        inputElement.focus(); // Met le focus sur l'input
        document.getElementById('chat-button').style.display = 'none'; // Masque le bouton
        // Ajout du message dans le chatContent
        var chatContent = document.getElementById("chatContent");
        if (chatContent) {
            chatContent.innerHTML += `
                <div='blocchat'><div class='bot-message'>
                    <strong>Peinture Figurine :<br></strong> Bienvenue ! Comment puis-je vous aider ? 😊
                <br>
                Voici ce que je peux faire pour vous : <br> 
                - 📌 <strong>Infos sur les services</strong> : "peinture" ou "impression 3D" <br>
                - 🎨 <strong>Cours de peinture</strong> : "formation" ou "cours" <br>
                - 💰 <strong>Demande de devis</strong> : "tarif" ou "prix" <br>
                - 🤣 <strong>Une blague</strong> : "blague" ou "mdr" <br>
                - 📆 <strong>Dispo actuelle</strong> : "disponibilité" <br></div></div>
            `;
        }
    }, 120000);
};
  function ouvrechat() {
        var inputElement = document.getElementById("chatInput");
        inputElement.focus(); // Met le focus sur l'input
        document.getElementById('chat-button').style.display = 'none'; // Masque le bouton
    }

    function fermechat() {
        document.getElementById('chat-button').style.display = 'block'; // Affiche le bouton
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Empêche un comportement indésirable
            sendMessage(); // Envoie le message
        } else {
            var inputElement = document.getElementById("chatInput");
            var sendButton = document.getElementById("sendButton");
            sendButton.style.display = inputElement.value.trim() === "" ? "none" : "block"; // Affiche ou cache le bouton d'envoi
        }
    }

    function sendMessage() {
        var inputElement = document.getElementById("chatInput");
        var input = inputElement.value.trim().toLowerCase();
        var chatContent = document.getElementById("chatContent");
        var sendButton = document.getElementById("sendButton");

        if (input === "") return; // Ne pas envoyer si le champ est vide

        var blagues = [
            "Pourquoi les peintres de figurines ne jouent-ils jamais à cache-cache ? Parce qu'ils savent que personne ne pourra jamais les retrouver sous leur couche de peinture ! 😄",
            "Pourquoi les figurines peintes détestent-elles les peintures à l'huile ? Parce qu'elles ont peur de se faire maculer ! 😆",
            "Pourquoi les figurines détestent-elles les aérographes ? Parce qu'elles trouvent que ça met toujours trop de pression ! 😆",
            "Vous voulez vraiment savoir cela ? C'est assez mystérieux !",
            "Pourquoi les figurines ne se disputent-elles jamais ? Parce qu'elles savent qu'elles finiront toujours par se mettre d'accord sur un socle ! 😄"
        ];

        var randomIndex = Math.floor(Math.random() * blagues.length);
var blague = blagues[randomIndex];
var datedispo = "mi Mai 2025";

var response = "Je n'ai pas compris votre demande.";

if (
    input.includes("contact") || input.includes("formulaire") || input.includes("devis") || 
    input.includes("tarif") || input.includes("commande") || input.includes("estimation") || 
    input.includes("faire peindre") || input.includes("prix") || input.includes("peintre")
) {
    response = 'Voici notre formulaire de contact : <a href="simulateur_devis.html">Simulateur de devis 💰</a>';
} else if (input.includes("disponibilité") || input.includes("délai") || input.includes("dispo")) {
    response = 'Mon planning de service de peinture est rempli jusqu\'à ' + datedispo + ' actuellement.';
} else if (
    input.includes("bonjour") || input.includes("coucou") || input.includes("bonsoir") || 
    input.includes("salut") || input.includes("wesh") || input.includes("yo") || input.includes("cc")
) {
    response = 'Bonjour 😀 Comment puis-je vous aider ? Pour savoir ce que je peux faire, tapez "aide".';
} else if (input.includes("merci") || input.includes("remercie") || input.includes("ca va")) {
    response = 'Merci à toi 😀';
} else if (input.includes("blague") || input.includes("rire") || input.includes("lol") || input.includes("mdr")) {
    response = blague;
} else if (input.includes("infos") || input.includes("informations") || input.includes("conditions")) {
    response = 'Voici des informations utiles : <a href="conditions.html" onclick="loadPage(\'conditions.html\'); scrollToTop(); return false;">Conditions générales de vente 📜</a>';
} else if (input.includes("cours") || input.includes("formation") || input.includes("apprendre")) {
    response = 'Voici des informations utiles : <a href="formation.html">Formation 📚</a>';
} else if (input.includes("impression 3d") || input.includes("stl") || input.includes("imprimante")) {
    response = 'Nous proposons un service d\'impression 3D haute qualité ! Voici les détails : <a href="impression3d.html" onclick="loadPage(\'impression3d.html\'); return false;">Impression 3D 🖨️</a>';
} else if (input.includes("lavis") || input.includes("éclaircissement") || input.includes("pinceau")) {
    response = 'Pour améliorer vos éclaircissements, utilisez la technique du "layering" avec des transitions progressives. Plus d\'infos ici : <a href="formation.html">Cours de peinture</a>';
} else if (input.includes("aide") || input.includes("menu") || input.includes("que peux tu faire")) {
    response = 'Voici ce que je peux faire pour vous : <br> ' +
                '- 📌 *Infos sur les services* : "peinture" ou "impression 3D" <br>' +
                '- 🎨 *Cours de peinture* : "formation" ou "cours" <br>' +
                '- 💰 *Demande de devis* : "tarif" ou "prix" <br>' +
                '- 🤣 *Une blague* : "blague" ou "mdr" <br>' +
                '- 📆 *Dispo actuelle* : "disponibilité" <br>';
} else if (input.includes("modalités de paiement") || input.includes("paiement") || input.includes("acompte")) {
    response = 'Les modalités de paiement sont les suivantes :\n' +
               '- **20%** pour réserver un créneau.\n' +
               '- **30%** au démarrage ou **50%** directement en remplacement des deux premières étapes.\n' +
               '- **50%** restants à la validation finale sur photos (présentation à 80% d\'avancement).\n' +
               'Nous acceptons les paiements par virement, carte bancaire ou PayPal (des frais de 4% s\'appliquent pour PayPal). Une réduction de 4% est accordée pour les paiements hors PayPal.';
} else if (input.includes("délais") || input.includes("temps de réalisation")) {
    response = 'Les délais de réalisation sont les suivants :\n' +
               '- **Impression 3D** : sous 72h ouvrées.\n' +
               '- **Peinture TableTop** :\n' +
               '  - Niveau 1 et 2 : 1 à 2 mois.\n' +
               '  - Niveau 3 : 2 à 4 mois.\n' +
               '- **Peinture Vitrine** : 4 à 6 mois.';
} else if (input.includes("livraison") || input.includes("frais de port") || input.includes("expédition")) {
    response = 'Nous expédions via Colissimo ou Mondial Relay. Les frais de port sont offerts à partir de 1200€ de commande. Voici les tarifs d\'envoi :\n' +
               '- **Colissimo** :\n' +
               '  - Jusqu\'à 0,5 kg : 8€\n' +
               '  - Jusqu\'à 1 kg : 10€\n' +
               '  - Jusqu\'à 2 kg : 12€\n' +
               '- **Mondial Relay** :\n' +
               '  - Jusqu\'à 0,5 kg : 5€\n' +
               '  - Jusqu\'à 1 kg : 6€\n' +
               '  - Jusqu\'à 2 kg : 8€';
} else if (input.includes("publication") || input.includes("photos") || input.includes("publicité")) {
    response = 'Le Studio Peinture Figurine se réserve le droit de publier des photos et vidéos des figurines peintes, sauf demande contraire de votre part.';
} else if (input.includes("annulation") || input.includes("remboursement") || input.includes("arrhes")) {
    response = 'Les arrhes et acomptes versés ne sont pas remboursables en cas de désistement. Le paiement des arrhes valide le devis. Des frais de 30% s\'appliquent pour les commandes urgentes (moins de 15 jours). Si les figurines ne sont pas envoyées dans un délai de plus de 3 mois à compter de la date de démarrage du projet, celui-ci sera automatiquement annulé et les arrhes conservées.';
} else if (input.includes("propriété intellectuelle") || input.includes("droits d'auteur") || input.includes("œuvre")) {
    response = 'Les œuvres réalisées sont protégées par le droit d\'auteur. Toutefois, vous bénéficiez d\'un droit d\'usage exclusif en tant que client.';
}

        chatContent.innerHTML += "<div class='blocchat'><div class='user-message'><strong>Vous:<br></strong> " + 
            escapeHtml(input) + "</div><div class='bot-message'><strong>Peinture Figurine :<br></strong> " + 
            response + "</div></div>";

        inputElement.value = "";
        sendButton.style.display = "none";
        chatContent.scrollTop = chatContent.scrollHeight; // Scrolling vers le bas
    }

    function escapeHtml(text) {
        var div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    // Obtenir le bouton
    let mybutton = document.getElementById("scrollToTopBtn");
let mymenu = document.getElementById("formSection");

    // Afficher le bouton quand l'utilisateur a défilé de 20px vers le bas
    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            mybutton.style.display = "block";
             function isMobile() {
  return window.innerWidth <= 768; // Largeur typique des mobiles
}

// Utilisation
if (isMobile()) {
  mymenu.style.display = "none";
} else {
  mymenu.style.display = "block";
}
        } else {
            mybutton.style.display = "none";
        }
    };

    // Fonction pour faire défiler la page jusqu'en haut
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
