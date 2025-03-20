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
document.getElementById("contactForm").addEventListener("submit", function (event) {
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
    const subject = `Demande de devis de ${prenom} ${nom} - ${niveau}`;
    const body = `Bonjour,

Voici ma demande de devis de peinture ${niveau} :
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
    window.location.href = 'index.html'; // Redirige vers index.html
});

// Événements d'entrée pour la mise à jour du total
document.querySelectorAll("#contactForm input, #contactForm select").forEach(element => {
    element.addEventListener("input", updateTotal);
});

// Fonction pour envoyer un mail depuis le formulaire de demande de cours
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

window.onload = function () {
    setTimeout(function () {
        $('#chatBox').toggle();
        var inputElement = document.getElementById("chatInput");
        inputElement.focus(); // Met le focus sur l'input
        document.getElementById('chat-button').style.display = 'none'; // Masque le bouton
        // Ajout du message dans le chatContent
        var chatContent = document.getElementById("chatContent");
        if (chatContent) {
            chatContent.innerHTML += `
                <div class='blocchat'><div class='bot-message'>
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

// Fonction pour ouvrir le chat
function ouvrechat() {
    var inputElement = document.getElementById("chatInput");
    inputElement.focus(); // Met le focus sur l'input
    document.getElementById('chat-button').style.display = 'none'; // Masque le bouton
}

// Fonction pour fermer le chat
function fermechat() {
    document.getElementById('chat-button').style.display = 'block'; // Affiche le bouton
}

// Fonction pour gérer les entrées clavier
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

// Fonction pour envoyer un message
function sendMessage() {
    var inputElement = document.getElementById("chatInput");
    var input = inputElement
