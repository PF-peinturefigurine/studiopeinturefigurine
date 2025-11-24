// ==================================================================
// ==================== SIMULATEUR DE DEVIS =========================
// ==================================================================

const niveauLabels = {
    niveau0: "Niveau Discount - TableTop basique 3 couleurs, texture simple : Idéal pour les petits budgets, Minimum efficace sans détails.",
    niveau1: "Niveau Essentiel - TableTop+, Qualité supérieur qui va à l'essentiel : Parfait pour valoriser les figurines de jeu. Notre recommandation.",
    niveau2: "Niveau Approfondi - TableTop++, Qualité supérieure plus approfondie : Chaque pièce devient une œuvre d’art. Pour les pièces principales.",
    expo: "Niveau Studio : Limitée et réservée aux passionnés souhaitant le meilleur. Pour la collection en vitrine."
};

const niveauLabelsmini = {
    niveau0: "Discount",
    niveau1: "Essentiel",
    niveau2: "Approfondi",
    expo: "Pièce d'exposition"
};

const tariffs = {
    petiteinfanterie:          { niveau0: 10,  niveau1: 15,  niveau2: 20 },
    infanterie:                { niveau0: 15,  niveau1: 30,  niveau2: 40 },
    infanterieelite:           { niveau0: 20,  niveau1: 35,  niveau2: 50 },
    personnage:                { niveau0: 40,  niveau1: 70,  niveau2: 90 },
    personnageelite:           { niveau0: 50,  niveau1: 90,  niveau2: 120 },
    personnagemonstrueux:      { niveau0: 100, niveau1: 190, niveau2: 240 },
    personnagesurmonstre:      { niveau0: 120, niveau1: 240, niveau2: 300 },
    personnagesurgrandmonstre: { niveau0: 180, niveau1: 360, niveau2: 450 },
    cavalerie:                 { niveau0: 30,  niveau1: 40,  niveau2: 50 },
    cavalerielourde:           { niveau0: 25,  niveau1: 50,  niveau2: 70 },
    petitvehiculemonstre:      { niveau0: 40,  niveau1: 80,  niveau2: 100 },
    vehiculemonstremoyen:      { niveau0: 60,  niveau1: 120, niveau2: 150 },
    grosvehiculemonstre:       { niveau0: 100, niveau1: 190, niveau2: 240 },
    enormevehiculemonstre:     { niveau0: 140, niveau1: 270, niveau2: 340 },
    titanvehiculemonstre:      { niveau0: 240, niveau1: 480, niveau2: 600 }
};

const categories = Object.keys(tariffs);

function calculateTotals() {
    const niveauSelect = document.getElementById("niveau");
    const niveau = niveauSelect?.value || "niveau1";

    const afficheniveau = document.getElementById("afficheniveau");
    const comparativeTable = document.getElementById("comparative-table");
    const oktotal = document.getElementById("oktotal");

    if (!afficheniveau || !comparativeTable || !oktotal) return;

    // Mise à jour du libellé
    afficheniveau.textContent = niveauLabels[niveau];

    let totalGeneral = 0;

    // === CAS SPÉCIAL : NIVEAU EXPO ===
    if (niveau === "expo") {
        categories.forEach(cat => {
            const div = document.getElementById(cat);
            if (div) div.style.display = "none";
        });
        ["aimant", "montage", "aimant-input", "montage-input", "message"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = "none";
        });
        comparativeTable.innerHTML = "";
        oktotal.textContent = "Sur devis uniquement";
        return;
    }

    // === NIVEAUX NORMAUX ===
    categories.forEach(cat => {
        const input = document.getElementById(`${cat}-input`);
        const prixEl = document.getElementById(`prix${cat}`);
        const totalEl = document.getElementById(`total${cat}`);

        if (!input || !prixEl || !totalEl) return;

        const qty = Number(input.value) || 0;
        const prixUnitaire = tariffs[cat][niveau] || 0;
        const sousTotal = qty * prixUnitaire;

        prixEl.textContent = prixUnitaire.toFixed(2);
        totalEl.textContent = sousTotal.toFixed(2);
        totalGeneral += sousTotal;

        // Afficher les catégories
        const divCat = document.getElementById(cat);
        if (divCat) divCat.style.display = "block";
    });

    // Afficher les options supplémentaires
    ["aimant", "montage", "aimant-input", "montage-input", "message"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "block";
    });

    // Total général
    oktotal.innerHTML = `<strong>Total estimé ${niveauLabelsmini[niveau]}</strong> : ${totalGeneral.toFixed(2)} €<br><small>Tarif approximatif, hors frais de port et hors frais PayPal (4 %).</small>`;

    // === TABLEAU COMPARATIF ===
    const previousMap = { niveau0: "niveau1", niveau1: "niveau2", niveau2: "niveau1" };
    const previousLevel = previousMap[niveau];

    if (!previousLevel) {
        comparativeTable.innerHTML = "";
        return;
    }

    let totalPrevious = 0;
    categories.forEach(cat => {
        const qty = Number(document.getElementById(`${cat}-input`)?.value) || 0;
        totalPrevious += qty * (tariffs[cat][previousLevel] || 0);
    });

    const currentNum = niveau.replace("niveau", "");
    const prevNum = previousLevel.replace("niveau", "");

    if (niveau === "niveau2") {
        // On est au niveau le plus haut → on montre le niveau inférieur
        comparativeTable.innerHTML = `
            <table style="margin:20px auto; border-collapse:collapse; width:90%; max-width:600px;">
                <thead>
                    <tr style="background:#f0f0f0;">
                        <th style="padding:10px; border:1px solid #ccc;">${niveauLabelsmini[previousLevel]}</th>
                        <th style="padding:10px; border:1px solid #ccc;">${niveauLabelsmini[niveau]}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:10px; text-align:center; border:1px solid #ccc;">
                            <strong>${totalPrevious.toFixed(2)} €</strong><br>
                            <img src="img/exempleniveau${prevNum}.jpg" class="imgcomparative-table" alt="${niveauLabelsmini[previousLevel]}">
                        </td>
                        <td style="padding:10px; text-align:center; border:1px solid #ccc;">
                            <strong>${totalGeneral.toFixed(2)} €</strong><br>
                            <img src="img/exempleniveau${currentNum}.jpg" class="imgcomparative-table" alt="${niveauLabelsmini[niveau]}">
                        </td>
                    </tr>
                </tbody>
            </table>
            <p style="text-align:center;">
                <a href="#" onclick="event.preventDefault(); document.getElementById('niveau').value='${previousLevel}'; document.getElementById('niveau').dispatchEvent(new Event('change')); return false;" style="color:#0066cc;">
                    ← Revenir au niveau ${niveauLabelsmini[previousLevel]}
                </a>
            </p>`;
    } else {
        // On peut monter d’un cran
        comparativeTable.innerHTML = `
            <table style="margin:20px auto; border-collapse:collapse; width:90%; max-width:600px;">
                <thead>
                    <tr style="background:#f0f0f0;">
                        <th style="padding:10px; border:1px solid #ccc;">${niveauLabelsmini[niveau]}</th>
                        <th style="padding:10px; border:1px solid #ccc;">${niveauLabelsmini[previousLevel]}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:10px; text-align:center; border:1px solid #ccc;">
                            <strong>${totalGeneral.toFixed(2)} €</strong><br>
                            <img src="img/exempleniveau${currentNum}.jpg" class="imgcomparative-table" alt="${niveauLabelsmini[niveau]}">
                        </td>
                        <td style="padding:10px; text-align:center; border:1px solid #ccc;">
                            <strong>${totalPrevious.toFixed(2)} €</strong><br>
                            <img src="img/exempleniveau${prevNum}.jpg" class="imgcomparative-table" alt="${niveauLabelsmini[previousLevel]}">
                        </td>
                    </tr>
                </tbody>
            </table>
            <p style="text-align:center;">
                <a href="#" onclick="event.preventDefault(); document.getElementById('niveau').value='${previousLevel}'; document.getElementById('niveau').dispatchEvent(new Event('change')); return false;" style="color:#0066cc;">
                    Passer au niveau supérieur →
                </a>
            </p>`;
    }
}

// ==================================================================
// INITIALISATION DU FORMULAIRE DEVIS
// ==================================================================
function initializeFormCalculations() {
    const niveauSelect = document.getElementById("niveau");
    if (!niveauSelect) return;

    calculateTotals(); // Premier calcul au chargement

    // Recalcul à chaque modification
    document.querySelectorAll("#contactForm input, #contactForm select").forEach(el => {
        el.addEventListener("input", calculateTotals);
        el.addEventListener("change", calculateTotals);
    });

    // Soumission du formulaire → mailto
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Vérification champs obligatoires
            let valid = true;
            form.querySelectorAll("[required]").forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.style.borderColor = "red";
                } else {
                    field.style.borderColor = "";
                }
            });
            if (!valid) return alert("Veuillez remplir tous les champs obligatoires.");

            const niveau = niveauSelect.value;
            const isExpo = niveau === "expo";

            const data = {
                nom: document.getElementById("nom").value,
                prenom: document.getElementById("prenom").value,
                email: document.getElementById("email").value,
                telephone: document.getElementById("telephone").value,
                adresse: document.getElementById("adresse").value,
                cp: document.getElementById("cp").value,
                ville: document.getElementById("ville").value,
                pays: document.getElementById("pays").value,
                montage: document.getElementById("montage-input")?.value || 0,
                aimant: document.getElementById("aimant-input")?.value || 0,
                message: document.getElementById("message-input")?.value || ""
            };

            let body = "";
            const subject = `Demande de devis - ${data.prenom} ${data.nom} - ${niveauLabelsmini[niveau]}`;

            if (isExpo) {
                body = `Bonjour,\n\nNouvelle demande de devis (Pièce d'exposition - sur devis uniquement)\n\n` +
                       `${data.prenom} ${data.nom}\n${data.adresse}\n${data.cp} ${data.ville}\n${data.pays}\n` +
                       `${data.email} - ${data.telephone}\n\nMessage :\n${data.message}\n\nCordialement.`;
            } else {
                const quantites = {};
                categories.forEach(cat => {
                    quantites[cat] = Number(document.getElementById(`${cat}-input`)?.value) || 0;
                });

                const totalText = document.getElementById("oktotal")?.textContent || "";
                const total = totalText.includes("€") ? parseFloat(totalText.replace(/[^\d,.-]/g, '').replace(',', '.')) : 0;

                let lignes = "";
                categories.forEach(cat => {
                    if (quantites[cat] > 0) lignes += `- ${cat.replace(/-/g, ' ')} : ${quantites[cat]}\n`;
                });

                body = `Bonjour,\n\nNouvelle demande de devis (${niveauLabelsmini[niveau]})\n\n` +
                       `${data.prenom} ${data.nom}\n${data.adresse}\n${data.cp} ${data.ville}\n${data.pays}\n` +
                       `${data.email} - ${data.telephone}\n\n` +
                       lignes +
                       `Montage : ${data.montage}\nAimantation : ${data.aimant}\n\n` +
                       `Total estimé : ${total.toFixed(2)} €\n\nMessage :\n${data.message}\n\nCordialement.`;
            }

            const mailto = `mailto:studiopeinturefigurine@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailto;
        });
    }
}

// Lancement automatique si on est sur la page du simulateur
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("contactForm")) {
        initializeFormCalculations();
    }
});
