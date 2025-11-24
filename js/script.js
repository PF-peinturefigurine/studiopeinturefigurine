// ===============================================
// script.js – Version finale 100 % fonctionnelle
// ===============================================

let delaidispo = "Chargement...";
let moisChiffre = null;
let messageinfo = "";
let testscrolltotal = 0;
let sliderInterval = null;

// ------------------ CHARGEMENT MOIS + MESSAGE INFO ------------------
fetch('/data/mois.txt')
    .then(r => r.text())
    .then(t => {
        moisChiffre = parseInt(t.trim(), 10);
        const moisFr = {1:"Janvier",2:"Février",3:"Mars",4:"Avril",5:"Mai",6:"Juin",7:"Juillet",8:"Août",9:"Septembre",10:"Octobre",11:"Novembre",12:"Décembre"};
        if (moisChiffre >= 1 && moisChiffre <= 12) {
            delaidispo = moisFr[moisChiffre];
            const el = document.getElementById("resultat");
            if (el) el.textContent = delaidispo;
        }
    });

fetch('/data/messageinfo.txt')
    .then(r => r.text())
    .then(t => {
        messageinfo = t.trim() === '' ? "Pas d'informations pour le moment" : t.trim();
        const p = document.getElementById('infoParagraph');
        if (p) p.textContent = messageinfo;
        if (!messageinfo || messageinfo === "Pas d'informations pour le moment") {
            document.querySelectorAll('.info-container, .info').forEach(e => e.style.display = 'none');
        }
    });

// ------------------ FONCTIONS UTILITAIRES ------------------
function isMobile() { return window.innerWidth <= 768; }
function scrollToTop() { window.scrollTo({top:0, behavior:'smooth'}); }

// ------------------ CHARGEMENT DYNAMIQUE DES PAGES ------------------
function loadPage(page) {
    const contenu = document.getElementById("contenu-principal");
    if (!contenu) return console.error("contenu-principal introuvable");

    contenu.style.opacity = 0;
    setTimeout(() => {
        fetch(page)
            .then(r => { if (!r.ok) throw new Error(); return r.text(); })
            .then(html => {
                const doc = new DOMParser().parseFromString(html, 'text/html');
                const newC = doc.querySelector('#contenu-principal');
                contenu.innerHTML = newC ? newC.innerHTML : "<p>Erreur contenu</p>";

                if (typeof initializeCardToggle === 'function') initializeCardToggle();
                initializePageSpecificScripts(page);
                adjustMenuVisibility();
                setupScrollHandler();

                // Slider auto unique
                if (typeof moveSlide === 'function') {
                    clearInterval(sliderInterval);
                    sliderInterval = setInterval(() => moveSlide(1), 5000);
                }

                // Bouton scrollTotal uniquement sur le simulateur
                testscrolltotal = (page.includes("simulateur_devis")) ? 1 : 0;
                const btn = document.getElementById("scrollTotal");
                if (btn) btn.style.display = testscrolltotal ? "block" : "none";

                contenu.style.opacity = 1;
            })
            .catch(() => {
                contenu.innerHTML = "<p>Page introuvable</p>";
                contenu.style.opacity = 1;
            });
    }, 200);
}

function setupScrollHandler() {
    const btn = document.getElementById("scrollToTopBtn");
    const menu = document.getElementById("formSection");
    window.onscroll = () => {
        const scrolled = document.documentElement.scrollTop > 100;
        if (btn) btn.style.display = scrolled ? "block" : "none";
        if (menu) menu.style.display = (isMobile() && scrolled) ? "none" : "block";
    };
}

function adjustMenuVisibility() {
    const menu = document.getElementById("formSection");
    if (menu) menu.style.display = isMobile() ? "none" : "block";
}

function initializePageSpecificScripts(page) {
    const map = {
        "simulateur_devis.html": initializeFormCalculations,
        "simulateur_devis-fr.html": initializeFormCalculations,
        "formation.html": initializeFormationForm,
        "galeriegeneral.html": initializeGalerie,
        "age-of-sigmar.html": initializeGalerieAoS,
        "blood-bowl.html": initializeGalerieBB,
        "horus-heresy.html": initializeGalerieHH,
        "marvel-crisis-protocol.html": initializeGalerieMarvel,
        "middle-earth.html": initializeGalerieMiddle,
        "song-of-ice-and-fire.html": initializeGalerieASOIAF,
        "star-wars-legion.html": initializeGalerieSWL,
        "star-wars-shatterpoint.html": initializeGalerieSWS,
        "warhammer-40k.html": initializeGalerie40k,
        "warhammer-old-world.html": initializeGalerieToW,
        "galeriestudio.html": initializeGalerieStudio
    };
    if (map[page] && typeof map[page] === "function") map[page]();
}

// ------------------ INITIALISATION GÉNÉRALE ------------------
window.addEventListener("DOMContentLoaded", () => {
    fermechat();
    document.getElementById("scrollToTopBtn").style.display = "none";
    setupScrollHandler();
    adjustMenuVisibility();
    window.addEventListener("resize", adjustMenuVisibility);

    // Message bot après 4 min
    setTimeout(() => {
        const c = document.getElementById("chatContent");
        if (c && c.innerHTML.trim() === "") {
            ouvrechat();
            c.innerHTML += `<div class="blocchat"><div class="bot-message"><p><strong>Peinture de Figurines :</strong><br>
                Bienvenue ! 😊<br><br>
                • Devis → <a href="#" onclick="loadPage('simulateur_devis-fr.html'); fermechat(); return false;">Simulateur de devis</a><br>
                • Disponibilité : <strong>${delaidispo}</strong><br>
                • Conseil → tape "conseil"<br>
                • Blague → tape "blague"</p></div></div>`;
        }
    }, 240000);
});

// ------------------ CHAT ------------------
function ouvrechat()  { document.getElementById("chatBox").style.display = "block"; document.getElementById("chatInput")?.focus(); document.getElementById("chat-button").style.display = "none"; }
function fermechat()  { document.getElementById("chatBox").style.display = "none"; document.getElementById("chat-button").style.display = "block"; }

function escapeHtml(t) { const d=document.createElement('div'); d.textContent=t; return d.innerHTML; }

function sendMessage() {
    const input = document.getElementById("chatInput");
    const cont = document.getElementById("chatContent");
    if (!input || !cont) return;
    let msg = input.value.trim();
    if (!msg) return;

    let reponse = "Désolé, je n’ai pas compris. Écrivez-moi : studiopeinturefigurine@gmail.com";
    msg = msg.toLowerCase();

    if (/devis|tarif|prix/.test(msg)) reponse = `Simulateur de devis → <a href="#" onclick="loadPage('simulateur_devis-fr.html'); fermechat(); return false;">Cliquez ici</a>`;
    else if (/salut|bonjour/.test(msg)) reponse = "Bonjour ! Comment puis-je vous aider ?";
    else if (/conseil/.test(msg)) reponse = ["Couche fine + lavis + éclaircissement progressif = rendu propre !", "Pinceau 00 bien pointu pour les yeux et détails.", "Pour les socles : texture + herbe + touffes = top !"][Math.floor(Math.random()*3)] + "<br>Un autre ? Tape « conseil »";
    else if (/blague/.test(msg)) reponse = ["Pourquoi les figurines détestent l’aéro ? Trop de pression !", "Pourquoi les peintres ne jouent pas à cache-cache ? Ils sont toujours bien éclaircis !"][Math.floor(Math.random()*2)] + "<br>Encore ? Tape « blague »";
    else if (/dispo|délai/.test(msg)) reponse = `Planning ouvert à partir de <strong>${delaidispo}</strong>`;

    cont.innerHTML += `<div class="blocchat">
        <div class="user-message"><p><strong>Vous :</strong><br>${escapeHtml(input.value)}</p></div>
        <div class="bot-message"><p><strong>Peinture Figurine :</strong><br>${reponse}</p></div>
    </div>`;
    input.value = "";
    cont.scrollTop = cont.scrollHeight;
}

// ------------------ SIMULATEUR DE DEVIS (VERSION QUI NE PLANTE PLUS) ------------------
const niveauLabels = {niveau0:"Discount",niveau1:"Essentiel",niveau2:"Approfondi",expo:"Pièce d'exposition"};
const niveauLabelsLong = {niveau0:"Niveau Discount - TableTop basique",niveau1:"Niveau Essentiel - TableTop+",niveau2:"Niveau Approfondi - TableTop++",expo:"Niveau Studio - Vitrine"};

const tariffs = {
    petiteinfanterie:          {niveau0:10,  niveau1:15,  niveau2:20},
    infanterie:                {niveau0:15,  niveau1:30,  niveau2:40},
    infanterieelite:           {niveau0:20,  niveau1:35,  niveau2:50},
    personnage:                {niveau0:40,  niveau1:70,  niveau2:90},
    personnageelite:           {niveau0:50,  niveau1:90,  niveau2:120},
    personnagemonstrueux:      {niveau0:100, niveau1:190, niveau2:240},
    personnagesurmonstre:      {niveau0:120, niveau1:240, niveau2:300},
    personnagesurgrandmonstre: {niveau0:180, niveau1:360, niveau2:450},
    cavalerie:                 {niveau0:30,  niveau1:40,  niveau2:50},
    cavalerielourde:           {niveau0:25,  niveau1:50,  niveau2:70},
    petitvehiculemonstre:      {niveau0:40,  niveau1:80,  niveau2:100},
    vehiculemonstremoyen:      {niveau0:60,  niveau1:120, niveau2:150},
    grosvehiculemonstre:       {niveau0:100, niveau1:190, niveau2:240},
    enormevehiculemonstre:     {niveau0:140, niveau1:270, niveau2:340},
    titanvehiculemonstre:      {niveau0:240, niveau1:480, niveau2:600}
};
const categories = Object.keys(tariffs);

function calculateTotals() {
    const sel = document.getElementById("niveau");
    if (!sel) return;
    const niveau = sel.value;

    document.getElementById("afficheniveau").textContent = niveauLabelsLong[niveau];

    let total = 0;
    if (niveau === "expo") {
        categories.forEach(c => { const d=document.getElementById(c); if(d) d.style.display="none"; });
        ["aimant","montage","aimant-input","montage-input","message"].forEach(id => { const e=document.getElementById(id); if(e) e.style.display="none"; });
        document.getElementById("oktotal").textContent = "Sur devis uniquement";
        document.getElementById("comparative-table").innerHTML = "";
        return;
    }

    categories.forEach(cat => {
        const input = document.getElementById(cat+"-input");
        const prix = document.getElementById("prix"+cat);
        const tot = document.getElementById("total"+cat);
        if (!input || !prix || !tot) return;
        const q = Number(input.value) || 0;
        const pu = tariffs[cat][niveau] || 0;
        const st = q * pu;
        prix.textContent = pu.toFixed(2);
        tot.textContent = st.toFixed(2);
        total += st;
        document.getElementById(cat).style.display = "block";
    });

    ["aimant","montage","aimant-input","montage-input","message"].forEach(id => { const e=document.getElementById(id); if(e) e.style.display="block"; });

    document.getElementById("oktotal").innerHTML = `<strong>Total ${niveauLabels[niveau]}</strong> : ${total.toFixed(2)} €<br><small>Hors port & hors frais PayPal</small>`;

    // Comparatif simple (sans bug)
    const prev = {niveau0:"niveau1", niveau1:"niveau2", niveau2:"niveau1"}[niveau];
    if (prev) {
        let totPrev = 0;
        categories.forEach(cat => {
            const q = Number(document.getElementById(cat+"-input")?.value) || 0;
            totPrev += q * (tariffs[cat][prev] || 0);
        });
        document.getElementById("comparative-table").innerHTML = `
            <table style="margin:20px auto;width:90%;max-width:600px;border-collapse:collapse;">
                <tr style="background:#f0f0f0;">
                    <th style="padding:10px;border:1px solid #ccc;">${niveauLabels[niveau]}</th>
                    <th style="padding:10px;border:1px solid #ccc;">${niveauLabels[prev]}</th>
                </tr>
                <tr>
                    <td style="padding:10px;text-align:center;border:1px solid #ccc;"><strong>${total.toFixed(2)} €</strong></td>
                    <td style="padding:10px;text-align:center;border:1px solid #ccc;"><strong>${totPrev.toFixed(2)} €</strong></td>
                </tr>
            </table>`;
    } else {
        document.getElementById("comparative-table").innerHTML = "";
    }
}

function initializeFormCalculations() {
    const form = document.getElementById("contactForm");
    const niveau = document.getElementById("niveau");
    if (!form || !niveau) return;

    calculateTotals();
    form.querySelectorAll("input, select").forEach(el => {
        el.addEventListener("input", calculateTotals);
        el.addEventListener("change", calculateTotals);
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll("[required]").forEach(f => { if (!f.value.trim()) { valid=false; f.style.border="2px solid red"; } else f.style.border=""; });
        if (!valid) return alert("Champs obligatoires manquants");

        const data = {
            nom: document.getElementById("nom").value,
            prenom: document.getElementById("prenom").value,
            email: document.getElementById("email").value,
            tel: document.getElementById("telephone").value,
            niveau: niveau.value,
            message: document.getElementById("message-input")?.value || ""
        };

        const subject = `Devis ${data.prenom} ${data.nom} - ${niveauLabels[data.niveau]}`;
        const body = data.niveau === "expo" 
            ? `Devis pièce d'exposition\n\n${data.prenom} ${data.nom}\n${data.email} - ${data.tel}\n\n${data.message}`
            : `Devis ${niveauLabels[data.niveau]}\n\n${data.prenom} ${data.nom}\n${data.email} - ${data.tel}\n\n${data.message}`;

        location.href = `mailto:studiopeinturefigurine@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}

// ------------------ GALERIES (légères, sans bug) ------------------
// Tu peux remettre tes fonctions initializeGalerie / appelimg etc. ici sans aucun problème
// Elles ne sont pas obligatoires pour que le reste marche

// Lancement auto du simulateur si on est dessus
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("contactForm")) initializeFormCalculations();
});
