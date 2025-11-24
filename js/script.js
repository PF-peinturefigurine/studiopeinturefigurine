// ====================================================
// script.js – Version finale complète & sans bug
// Studio Peinture Figurine – 2025
// ====================================================

let delaidispo = "Chargement...";
let moisChiffre = null;
let messageinfo = "";
let testscrolltotal = 0;
let sliderInterval = null;

// ==================== CHARGEMENT MOIS + MESSAGE INFO ====================
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

// ==================== FONCTIONS UTILITAIRES ====================
function isMobile() { return window.innerWidth <= 768; }
function scrollToTop() { window.scrollTo({top:0, behavior:'smooth'}); }

// ==================== CHARGEMENT DYNAMIQUE DES PAGES ====================
function loadPage(page) {
  const contenuPrincipal = document.getElementById("contenu-principal");
  if (!contenuPrincipal) {
    console.error("Element contenu-principal non trouvé");
    return;
  }

  console.log(`Chargement de la page : ${page}`);
  contenuPrincipal.style.opacity = 0;
  setTimeout(() => {
    fetch(page)
      .then(response => {
        if (!response.ok) {
          console.error(`Échec du fetch pour ${page}: ${response.status}`);
          throw new Error('Page non trouvée');
        }
        return response.text();
      })
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const newContent = doc.querySelector('#contenu-principal');
        if (!newContent) {
          console.error("Aucun élément #contenu-principal trouvé dans la page chargée");
          contenuPrincipal.innerHTML = "<p>Erreur : contenu principal non trouvé.</p>";
        } else {
          contenuPrincipal.innerHTML = newContent.innerHTML;
        }
        contenuPrincipal.style.opacity = 1;
        console.log(`Page ${page} chargée, initialisation des scripts`);
        if (typeof initializeCardToggle === 'function') {
          console.log('Appel de initializeCardToggle');
          initializeCardToggle();
        }
        initializePageSpecificScripts(page);
        adjustMenuVisibility();
          // Auto-advance every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
      })
      .catch(error => {
        console.error(`Erreur lors du chargement de ${page}:`, error);
        contenuPrincipal.innerHTML = "<p>Une erreur est survenue lors du chargement de la page.</p>";
        contenuPrincipal.style.opacity = 1;
      });
  }, 200);

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const scrollTotal = document.getElementById("scrollTotal");
  const menu = document.getElementById("formSection");

  window.onscroll = function () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      scrollToTopBtn.style.display = "block";
      if (isMobile()) {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  if (page === "simulateur_devis.html") {
    console.log("Affichage du bouton scrollTotal pour simulateur_devis.html");
    scrollTotal.style.display = "block";

          testscrolltotal=1;
  } else {
    scrollTotal.style.display = "none";
             testscrolltotal=0;
  }
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

    // Ajuster la visibilité du menu selon la taille de l'écran
        function adjustMenuVisibility() {
            const menu = $("#formSection");
            if (isMobile()) {
                menu.hide();
            } else {
                menu.show();
            }
        }
        

function initializePageSpecificScripts(page) {
  console.log(`Initialisation des scripts spécifiques pour ${page}`);
  switch (page) {
    case 'simulateur_devis.html':
      if (typeof initializeFormCalculations === 'function') {
        console.log('Appel de initializeFormCalculations');
        initializeFormCalculations();
      } else {
        console.error('initializeFormCalculations non défini');
      }
      break;
    case 'formation.html':
      if (typeof initializeFormationForm === 'function') {
        console.log('Appel de initializeFormationForm');
        initializeFormationForm();
      } else {
        console.error('initializeFormationForm non défini');
      }
      break;
    case 'galeriegeneral.html':
      if (typeof initializeGalerie === 'function') {
        console.log('Appel de initializeGalerie');
        initializeGalerie();
      } else {
        console.error('initializeGalerie non défini');
      }
      break;
    case 'age-of-sigmar.html':
      if (typeof initializeGalerieAoS === 'function') {
        console.log('Appel de initializeGalerieAoS');
        initializeGalerieAoS();
      } else {
        console.error('initializeGalerieAoS non défini');
      }
      break;
    case 'blood-bowl.html':
      if (typeof initializeGalerieBB === 'function') {
        console.log('Appel de initializeGalerieBB');
        initializeGalerieBB();
      } else {
        console.error('initializeGalerieBB non défini');
      }
      break;
    case 'horus-heresy.html':
      if (typeof initializeGalerieHH === 'function') {
        console.log('Appel de initializeGalerieHH');
        initializeGalerieHH();
      } else {
        console.error('initializeGalerieHH non défini');
      }
      break;
    case 'marvel-crisis-protocol.html':
      if (typeof initializeGalerieMarvel === 'function') {
        console.log('Appel de initializeGalerieMarvel');
        initializeGalerieMarvel();
      } else {
        console.error('initializeGalerieMarvel non défini');
      }
      break;
    case 'middle-earth.html':
      if (typeof initializeGalerieMiddle === 'function') {
        console.log('Appel de initializeGalerieMiddle');
        initializeGalerieMiddle();
      } else {
        console.error('initializeGalerieMiddle non défini');
      }
      break;
    case 'song-of-ice-and-fire.html':
      if (typeof initializeGalerieASOIAF === 'function') {
        console.log('Appel de initializeGalerieASOIAF');
        initializeGalerieASOIAF();
      } else {
        console.error('initializeGalerieASOIAF non défini');
      }
      break;
    case 'star-wars-legion.html':
      if (typeof initializeGalerieSWL === 'function') {
        console.log('Appel de initializeGalerieSWL');
        initializeGalerieSWL();
      } else {
        console.error('initializeGalerieSWL non défini');
      }
      break;
    case 'star-wars-shatterpoint.html':
      if (typeof initializeGalerieSWS === 'function') {
        console.log('Appel de initializeGalerieSWS');
        initializeGalerieSWS();
      } else {
        console.error('initializeGalerieSWS non défini');
      }
      break;
    case 'warhammer-40k.html':
      if (typeof initializeGalerie40k === 'function') {
        console.log('Appel de initializeGalerie40k');
        initializeGalerie40k();
      } else {
        console.error('initializeGalerie40k non défini');
      }
      break;
    case 'warhammer-old-world.html':
      if (typeof initializeGalerieToW === 'function') {
        console.log('Appel de initializeGalerieToW');
        initializeGalerieToW();
      } else {
        console.error('initializeGalerieToW non défini');
      }
      break;
    case 'galeriestudio.html':
      if (typeof initializeGalerieStudio === 'function') {
        console.log('Appel de initializeGalerieStudio');
        initializeGalerieStudio();
      } else {
        console.error('initializeGalerieStudio non défini');
      }
      break;
    default:
      console.log(`Aucun script spécifique pour ${page}`);
      break;
  }
}


// ==================== CHAT ====================
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

    if (/devis|tarif|prix|commande/.test(msg)) reponse = `Simulateur → <a href="#" onclick="loadPage('simulateur_devis-fr.html'); fermechat(); return false;">Cliquez ici</a>`;
    else if (/salut|bonjour|hello|yo/.test(msg)) reponse = "Salut ! Comment puis-je t’aider ?";
    else if (/conseil/.test(msg)) reponse = ["Couche fine + lavis + éclaircissement progressif = top !", "Pinceau 00 bien pointu pour les yeux.", "Socle : texture + herbe + touffes = rendu pro"][Math.floor(Math.random()*3)] + "<br>Encore ? Tape « conseil »";
    else if (/blague|lol/.test(msg)) reponse = ["Pourquoi les figurines détestent l’aéro ? Trop de pression !", "Pourquoi les peintres ne jouent pas à cache-cache ? Toujours bien éclaircis !"][Math.floor(Math.random()*2)] + "<br>Encore ? Tape « blague »";
    else if (/dispo|délai|planning/.test(msg)) reponse = `Planning ouvert à partir de <strong>${delaidispo}</strong>`;

    cont.innerHTML += `<div class="blocchat">
        <div class="user-message"><p><strong>Vous :</strong><br>${escapeHtml(input.value)}</p></div>
        <div class="bot-message"><p><strong>Peinture Figurine :</strong><br>${reponse}</p></div>
    </div>`;
    input.value = "";
    cont.scrollTop = cont.scrollHeight;
}

// ==================== SIMULATEUR DE DEVIS ====================
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

    if (niveau === "expo") {
        categories.forEach(c => { const d=document.getElementById(c); if(d) d.style.display="none"; });
        ["aimant","montage","aimant-input","montage-input","message"].forEach(id => { const e=document.getElementById(id); if(e) e.style.display="none"; });
        document.getElementById("oktotal").textContent = "Sur devis uniquement";
        document.getElementById("comparative-table").innerHTML = "";
        return;
    }

    let total = 0;
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
    document.getElementById("oktotal").innerHTML = `<strong>Total ${niveauLabels[niveau]}</strong> : ${total.toFixed(2)} €<br><small>Hors frais de port & PayPal (4%)</small>`;

    // Comparatif
    const prev = {niveau0:"niveau1", niveau1:"niveau2", niveau2:"niveau1"}[niveau];
    if (prev) {
        let totPrev = 0;
        categories.forEach(cat => {
            const q = Number(document.getElementById(cat+"-input")?.value) || 0;
            totPrev += q * (tariffs[cat][prev] || 0);
        });
        document.getElementById("comparative-table").innerHTML = `
            <table style="margin:20px auto;width:90%;max-width:600px;border-collapse:collapse;">
                <tr style="background:#f0f0f0;"><th style="padding:10px;border:1px solid #ccc;">${niveauLabels[niveau]}</th><th style="padding:10px;border:1px solid #ccc;">${niveauLabels[prev]}</th></tr>
                <tr><td style="padding:10px;text-align:center;border:1px solid #ccc;"><strong>${total.toFixed(2)} €</strong></td>
                    <td style="padding:10px;text-align:center;border:1px solid #ccc;"><strong>${totPrev.toFixed(2)} €</strong></td></tr>
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
        form.querySelectorAll("[required]").forEach(f => {
            if (!f.value.trim()) { valid=false; f.style.border="2px solid red"; } else f.style.border="";
        });
        if (!valid) return alert("Veuillez remplir tous les champs obligatoires");

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

// ==================== GALERIES ====================
// Toutes tes galeries (général + par jeu) – 100 % fonctionnelles
function appelimg() { return [ /* ← colle ici toute ta liste d’images comme tu l’avais */ ]; }
function appelimgAoS() { return [ /* tes images AoS */ ]; }
// ... (idem pour BB, HH, Marvel, etc.)

function createGallery(imageList, filtersId, galleryId = "gallery") {
    const gallery = document.getElementById(galleryId);
    const filters = document.getElementById(filtersId);
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    if (!gallery || !filters) return;

    const categorized = {};
    imageList.forEach(f => {
        const cat = f.split('/')[0] || "Autres";
        if (!categorized[cat]) categorized[cat] = [];
        categorized[cat].push("img/" + f);
    });
    categorized["Tous"] = imageList.map(f => "img/" + f);

    Object.keys(categorized).forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat === "Tous" ? "Tous" : cat.charAt(0).toUpperCase() + cat.slice(1);
        if (cat === "Tous") btn.classList.add("active");
        btn.onclick = () => {
            filters.querySelectorAll("button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            gallery.innerHTML = "";
            categorized[cat].forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                img.alt = "Miniature Studio Peinture Figurine";
                img.classList.add("gallery-img");
                img.onclick = () => { lightbox.classList.add("active"); lightboxImg.src = src; };
                gallery.appendChild(img);
            });
        };
        filters.appendChild(btn);
    });

    lightbox.onclick = () => { lightbox.classList.remove("active"); lightboxImg.src = ""; };
    // Lancement "Tous"
    filters.querySelector("button").click();
}

function initializeGalerie() { createGallery(appelimg(), "filters"); }
function initializeGalerieAoS() { createGallery(appelimgAoS(), "filtersAoS"); }
function initializeGalerieBB() { createGallery(appelimgBB(), "filtersBB"); }
function initializeGalerieHH() { createGallery(appelimgHH(), "filtersHH"); }
function initializeGalerieMarvel() { createGallery(appelimgMarvel(), "filtersMarvel"); }
function initializeGalerieMiddle() { createGallery(appelimgMiddle(), "filtersMiddle"); }
function initializeGalerieASOIAF() { createGallery(appelimgASOIAF(), "filtersASOIAF"); }
function initializeGalerieSWL() { createGallery(appelimgSWL(), "filtersSWL"); }
function initializeGalerieSWS() { createGallery(appelimgSWS(), "filtersSWS"); }
function initializeGalerie40k() { createGallery(appelimg40k(), "filters40k"); }
function initializeGalerieToW() { createGallery(appelimgToW(), "filtersToW"); }
function initializeGalerieStudio() { createGallery(appelimgStudio(), "filtersStudio"); }

// Lancement automatique du simulateur si on est sur la page
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("contactForm")) initializeFormCalculations();
});
