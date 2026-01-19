/***********************
 * Gestion de la langue
 ***********************/
let langueselect = "french";

function setLangue(lang) {
    langueselect = lang;
    const affichelangue = document.getElementById("affichelangue");
    if (affichelangue) {
        affichelangue.textContent = lang;
    }
}

function changelangueenglish() {
    setLangue("english");
}

function changelanguespanish() {
    setLangue("spanish");
}

function changelanguefrench() {
    setLangue("french");
}

/*****************************************
 * Page peinture sur commission
 *****************************************/
function changelanguepeinturecommission() {
    const contenupagepeinturecommission = document.getElementById("contenupage-peinturecommission");
    if (!contenupagepeinturecommission) {
        return;
    }

    if (langueselect === "english") {

               contenupagepeinturecommission.innerHTML = `<h1>Tabletop and Display Commission Painting 🎲</h1>
<p>Your miniatures deserve more than a simple paint job: turn them into unique pieces.</p>

<div class="card" role="region" aria-expanded="true" tabindex="0">
    <h2>🎨 Painting Levels</h2>
    <p>A perfect foundation for your miniatures:</p>
    <ul>
        <li><strong>💸 Essential:</strong> equivalent to Battle Ready (Bronze level).</li>
        <li><strong>⭐ Advanced:</strong> equivalent to TableTop+ (Gold level).</li>
        <li><strong>👑 Prestige:</strong> equivalent to TableTop++ (Diamond level).</li>
        <li><strong>🎨 Studio:</strong> competition and display pieces.</li>
    </ul>
    <p><em>Included if assembly is handled by us.</em></p>
    <div>
        <a href="simulateur_devis.html" class="button" onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Request a quote 🎨</a>
    </div>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
    <h2>🎨 Preparation, Painting and Basing</h2>

    <div class="card-container3">

        <div class="card">
            <h3>Preparation (included) 🛠️</h3>
            <p>A perfect foundation for your miniatures:</p>
            <ul>
                <li><strong>💸 Essential:</strong> Treated as-is if already assembled.</li>
                <li><strong>⭐ Advanced:</strong> Mold lines removed, gaps filled.</li>
                <li><strong>👑 Prestige:</strong> Custom conversions ✨.</li>
                <li><strong>🎨 Studio:</strong> Quotation required 💎.</li>
            </ul>
            <p><em>Included if assembly is handled by us.</em></p>
        </div>

        <div class="card">
            <h3>Painting (basing included) 🎨</h3>
            <p>From TableTop to masterpiece:</p>
            <ul>
                <li><strong>💸 Essential:</strong> Base colors, one shading pass.</li>
                <li><strong>⭐ Advanced:</strong> Washes, basic highlights, main details, gradients, lining, weathering 🌟.</li>
                <li><strong>👑 Prestige:</strong> Fine details, texture work, NMM, freehand, gems, realistic eyes, OSL 🖌️.</li>
                <li><strong>🎨 Studio:</strong> Competition level, quotation required 🏆.</li>
            </ul>
            <p><strong><em>Essential level unavailable.</em></strong></p>
        </div>

        <div class="card">
            <h3>Basing (included in the service) 🌿</h3>
            <p>Bases that enhance your miniatures:</p>
            <ul>
                <li><strong>💸 Essential:</strong> Simple texture.</li>
                <li><strong>⭐ Advanced:</strong> Simple texture, shading, highlights, grass.</li>
                <li><strong>👑 Prestige:</strong> More nuance and highlights, 3D elements 🌳.</li>
                <li><strong>🎨 Studio:</strong> Wooden display base, quotation required 🪵.</li>
            </ul>
        </div>

    </div>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
    <h2>Custom Service 🤝</h2>
    <p>Delivery within 4 months depending on complexity for small and medium projects:</p>
    <p>Delivery within 6–8 months depending on complexity and volume for large projects:</p>
    <ul>
        <li>Meticulous preparation 🔍</li>
        <li>Premium materials ⭐</li>
        <li>Advanced techniques 🎨</li>
        <li>Full customization 💡</li>
    </ul>
    <div>
        <a href="simulateur_devis.html" class="button" onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Request a quote 💬</a>
    </div>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
    <h2>Services Overview 📊</h2>
    <div class="table-container center">
        <table class="tableborder1">
            <thead>
                <tr>
                    <th>🎨 Features</th>
                    <th>⭐ Advanced</th>
                    <th>👑 Prestige</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Quality</td>
                    <td>Clean and consistent finish</td>
                    <td>More details, enhanced contrast</td>
                </tr>
                <tr>
                    <td>Details</td>
                    <td>Simple and effective enhancement</td>
                    <td>Finer and more advanced work on key areas</td>
                </tr>
                <tr>
                    <td>Colors</td>
                    <td>Color harmony, gradients and contrast</td>
                    <td>Smoother gradients and more subtle nuances</td>
                </tr>
                <tr>
                    <td>Bases</td>
                    <td>Included, enhances the miniature</td>
                    <td>More scenic base</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
    <h2>Detailed Services 📊</h2>

    <div class="table-container center">
        <h3>Preparation</h3>
        <table class="tableborder1">
            <thead>
                <tr>
                    <th>🎨 Services</th>
                    <th>⭐ Advanced</th>
                    <th>👑 Prestige</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Removal of injection gates</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Removal of mold lines</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Gap filling and hole filling</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Kitbash / Conversion</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
            </tbody>
        </table>

        <h3>Miniature Painting</h3>
        <table class="tableborder1">
            <thead>
                <tr>
                    <th>🎨 Services</th>
                    <th>⭐ Advanced</th>
                    <th>👑 Prestige</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Base colors</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Simple gradients</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Nuanced gradients</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Simple shading</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Nuanced shading</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Simple highlights</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Nuanced highlights</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Multiple highlights</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Multiple shading layers</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Lining</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Multiple lining passes</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Light points</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Glazing</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Basic details</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Advanced details (gems, eyes…)</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Simple texture work (leather, rust)</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Advanced texture work (leather, rust)</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Battle damage</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Weathering</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>OSL</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>NMM</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Simple freehand (numbers, tattoos…)</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
            </tbody>
        </table>

        <h3>Basing</h3>
        <table class="tableborder1">
            <thead>
                <tr>
                    <th>🎨 Services</th>
                    <th>⭐ Advanced</th>
                    <th>👑 Prestige</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Simple texture</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>3D texture</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Texture shading</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Texture highlights</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Multiple texture highlights</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Weathering (pigments)</td>
                    <td class="cross">x</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Simple grass tufts</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Multiple grass tufts</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>3D accessories</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
                <tr>
                    <td>Photo-etch (on request)</td>
                    <td class="check">✓</td>
                    <td class="check">✓</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
    <h2>🧟‍♂️ Difference Between Advanced and Prestige – Example: Ghoul</h2>
    <div class="center">
        <img src="img/comparatif-ghoul.jpg" alt="Comparison Ghoul Advanced and Prestige" class="responsive-img">
    </div>
    <p class="caption">
        On the left: <strong>Advanced</strong>.  
        On the right: <strong>Prestige</strong>.
    </p>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
    <h2>👾 Difference Between Advanced and Prestige – Example: Tyranid</h2>
    <div class="center">
        <img src="img/comparatif-tyty.jpg" alt="Comparison Tyranid Advanced and Prestige" class="responsive-img">
    </div>
    <p class="caption">
        On the left: <strong>Advanced</strong>.  
        On the right: <strong>Prestige</strong>.
    </p>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
    <h2>🛡️ Difference Between Advanced and Prestige – Example: Space Marine</h2>
    <div class="center">
        <img src="img/comparatif-sm.jpg" alt="Comparison Space Marine Advanced and Prestige" class="responsive-img">
    </div>
    <p class="caption">
        On the left: <strong>Advanced</strong>.  
        On the right: <strong>Prestige</strong>.
    </p>
</div>

<div class="banniere">
    <a href="simulateur_devis.html" class="button" onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Request a quote 💬</a>
</div>
`;
    } else if (langueselect === "spanish") {

      contenupagepeinturecommission.innerHTML = `<h1>Pintura por Encargo TableTop y Vitrina 🎲</h1>
  <p>Vuestras miniaturas merecen más que una simple pintura: transformadlas en piezas únicas.</p>
    <div class="card" role="region" aria-expanded="true" tabindex="0">
                <h2>🎨Niveles de pintura</h2>
                <p>Una base perfecta para vuestras miniaturas:</p>
                <ul>
                    <li><strong>💸 Esencial:</strong> equivalente a Battle Ready (nivel Bronce).</li>
                    <li><strong>⭐ Avanzado:</strong> equivalente a TableTop+ (nivel Oro).</li>
                    <li><strong>👑 Prestigio:</strong> equivalente a TableTop++ (nivel Diamante).</li>
                    <li><strong>🎨 Studio:</strong> piezas de concurso y exposición.</li>
                </ul>
                <p><em>Incluido si el montaje lo realizamos nosotros.</em></p>
                  <div>
         <a href="simulateur_devis.html" class="button" onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Solicitar presupuesto 🎨</a>
          </div>
            </div>

         <div class="card" role="region" aria-expanded="true" tabindex="0">
              <h2>🎨Preparación, Pintura y Peana</h2>
 <div>
    <div class="card-container3">
        
           <div class="card">
                <h3>Preparación (incluida) 🛠️</h3>
                <p>Una base perfecta para vuestras miniaturas:</p>
                <ul>
                    <li><strong>💸 Esencial:</strong> Tratada tal cual si ya está montada.</li>
                    <li><strong>⭐ Avanzado:</strong> Líneas de molde eliminadas, uniones rellenas.</li>
                    <li><strong>👑 Prestigio:</strong> Conversiones personalizadas ✨.</li>
                    <li><strong>🎨 Studio:</strong> Bajo presupuesto 💎.</li>
                </ul>
                <p><em>Incluido si el montaje lo realizamos nosotros.</em></p>
            </div>
           
        <div class="card">
                <h3>Pintura (peana incluida) 🎨</h3>
                <p>Del TableTop a la obra maestra:</p>
                <ul>
                     <li><strong>💸 Esencial:</strong> Colores base, un sombreado.</li>
                    <li><strong>⭐Avanzado:</strong> Lavados, iluminaciones básicas, detalles principales, degradados, lining, weathering 🌟.</li>
                    <li><strong>👑Prestigio:</strong> pequeños detalles, trabajo de texturas, MNM, freehand, gemas, ojos realistas, OSL 🖌️.</li>
                    <li><strong>🎨Studio:</strong> Concurso, bajo presupuesto 🏆.</li>
                </ul>
                <p><strong><em>Esencial no disponible.</em></strong></p>
            </div>
           
        <div class="card">
                <h3>Peana (incluida en el servicio) 🌿</h3>
                <p>Peanas que realzan vuestras miniaturas:</p>
                <ul>
                    <li><strong>💸 Esencial:</strong> Textura simple.</li>
                    <li><strong>⭐ Avanzado:</strong> Textura simple, sombreado, iluminación, hierbas.</li>
                    <li><strong>👑 Prestigio:</strong> más matices e iluminaciones, elementos 3D 🌳.</li>
                    <li><strong>🎨Studio:</strong> Peana de presentación en madera, bajo presupuesto 🪵.</li>
                </ul>
            </div>
    </div>
    </div>

  </div>

      <div class="card" role="region" aria-expanded="true" tabindex="0">
            <h2>Servicio a Medida 🤝</h2>
            <p>Entrega en 4 meses según complejidad para proyectos pequeños y medianos:</p>
            <p>Entrega en 6–8 meses según complejidad y volumen para grandes proyectos:</p>
            <ul>
                <li>Preparación minuciosa 🔍</li>
                <li>Materiales premium ⭐</li>
                <li>Técnicas avanzadas 🎨</li>
                <li>Personalización total 💡</li>
            </ul>
                <div>
              <a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Solicitar presupuesto 💬</a>
              </div>
        </div>

  <div class="card" role="region" aria-expanded="true" tabindex="0">
        <h2>Resumen de servicios 📊</h2>
        <div class="table-container center">
            <table class="tableborder1">
    <thead>
        <tr>
            <th>🎨 Características</th>
            <th>⭐ Avanzado</th>
            <th>👑 Prestigio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Calidad</td>
            <td>Acabado limpio y homogéneo</td>
            <td>Más detalles, contraste reforzado</td>
        </tr>
        <tr>
            <td>Detalles</td>
            <td>Realce simple y eficaz</td>
            <td>Trabajo más fino y profundo en zonas clave</td>
        </tr>
        <tr>
            <td>Colores</td>
            <td>Armonía de colores, degradado y contraste</td>
            <td>Degradados más suaves y más matices finos</td>
        </tr>
        <tr>
            <td>Peanas</td>
            <td>Incluida, realza la miniatura</td>
            <td>Peana más escénica</td>
        </tr>
    </tbody>
</table>
        </div>
        </div>

  <div class="card" role="region" aria-expanded="true" tabindex="0">
       <h2>🧟‍♂️ Diferencia entre Avanzado y Prestigio – Ejemplo: Ghoul</h2>
 <div class="center"> <img src="img/comparatif-ghoul.jpg" alt="Comparación Ghoul Avanzado y Prestigio" class="responsive-img"></div>
<p class="caption">
    A la izquierda: <strong>Avanzado</strong>.  
    A la derecha: <strong>Prestigio</strong>.
  </p>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
<h2>👾 Diferencia entre Avanzado y Prestigio – Ejemplo: Tiránido</h2>
<div class="center">  <img src="img/comparatif-tyty.jpg" alt="Comparación Tiránido Avanzado y Prestigio" class="responsive-img"></div>
<p class="caption">
    A la izquierda: <strong>Avanzado</strong>.  
    A la derecha: <strong>Prestigio</strong>.
</p>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
<h2>🛡️ Diferencia entre Avanzado y Prestigio – Ejemplo: Space Marine</h2>
<div class="center">  <img src="img/comparatif-sm.jpg" alt="Comparación Space Marine Avanzado y Prestigio" class="responsive-img"></div>
<p class="caption">
    A la izquierda: <strong>Avanzado</strong>.  
    A la derecha: <strong>Prestigio</strong>.
</p>
</div>

<div class="banniere">
<a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Solicitar presupuesto 💬</a>
</div>`;


    } else if (langueselect === "french") {

          contenupagepeinturecommission.innerHTML = `<h1>Peinture sur Commission TableTop et Vitrine 🎲</h1>
  <p>Vos figurines méritent plus qu’une simple peinture : transformez-les en pièces uniques.</p>
    <div class="card" role="region" aria-expanded="true" tabindex="0">
                <h2>🎨Niveaux de peinture</h2>
                <p>Une base parfaite pour vos figurines :</p>
                <ul>
                    <li><strong>💸 Essentiel :</strong> équivalent d'un BattleReady (niveau Bronze).</li>
                    <li><strong>⭐ Approfondi :</strong> équivalent d'un TableTop+ (niveau Gold).</li>
                    <li><strong>👑 Prestige :</strong> équivalent d'un TableTop++ (niveau Diamond).</li>
                    <li><strong>🎨 Studio :</strong> pièces de concours et exposition.</li>
                </ul>
                <p><em>Inclus si montage par nos soins.</em></p>
                  <div>
         <a href="simulateur_devis.html" class="button" onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Demander un devis 🎨</a>
          </div>
            </div>


         <div class="card" role="region" aria-expanded="true" tabindex="0">
              <h2>🎨Préparation, Peinture et Socle</h2>
 <div>
              
    
    <div class="card-container3">
        
           <div class="card">
                <h3>Préparation (inclus) 🛠️</h3>
                <p>Une base parfaite pour vos figurines :</p>
                <ul>
                    <li><strong>💸 Essentiel :</strong> Traiter telquel si déjà monter.</li>
                    <li><strong>⭐ Approfondi :</strong> Lignes de moulage, jointures bouchées.</li>
                    <li><strong>👑 Prestige :</strong> Conversions personnalisées ✨.</li>
                    <li><strong>🎨 Studio :</strong> Sur devis 💎.</li>
                </ul>
                <p><em>Inclus si montage par nos soins.</em></p>
            </div>
           
        <div class="card">
                <h3>Peinture (soclage inclus) 🎨</h3>
                <p>Du TableTop au chef-d'œuvre :</p>
                <ul>
                     <li><strong>💸 Essentiel :</strong> Couleurs de base, un ombrage.</li>
                    <li><strong>⭐Approfondi :</strong> Lavis, éclarci de base, détails principaux, Dégradés, lining, weathering 🌟.</li>
                    <li><strong>👑Prestige :</strong> petits détails, jeu de texture, MNM, freehand, gemmes, yeux réalistes, OSL 🖌️.</li>
                    <li><strong>🎨Studio :</strong> Concours, sur devis 🏆.</li>
                </ul>
                <p><strong><em>Essentiel indisponible.</em></strong></p>
            </div>
           
        <div class="card">
                <h3>Soclage (inclus dans la prestation) 🌿</h3>
                <p>Socles qui subliment vos figurines :</p>
                <ul>
                    <li><strong>💸 Essentiel :</strong> Texture simple.</li>
                    <li><strong>⭐ Approfondi :</strong> Texture simple, Ombrage, éclarci, herbes.</li>
                    <li><strong>👑 Prestige :</strong> plus de nuances et d'éclairci, éléments 3D 🌳.</li>
                    <li><strong>🎨Studio :</strong> Socle de présentation en bois, sur devis 🪵.</li>
                </ul>
            </div>
    </div>
    </div>

  </div>

      <div class="card" role="region" aria-expanded="true" tabindex="0">
            <h2>Service Sur Mesure 🤝</h2>
            <p>Livraison en 4 mois selon complexité sur les petits et moyens projets :</p>
            <p>Livraison en 6-8 mois selon complexité et volume sur les gros projets :</p>
            <ul>
                <li>Préparation minutieuse 🔍</li>
                <li>Matériaux premium ⭐</li>
                <li>Techniques avancées 🎨</li>
                <li>Personnalisation totale 💡</li>
            </ul>
                <div>
              <a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Demander un devis 💬</a>
              </div>
        </div>

   
  <div class="card" role="region" aria-expanded="true" tabindex="0">
        <h2>Prestations en résumé 📊</h2>
        <div class="table-container center">
            <table class="tableborder1">
    <thead>
        <tr>
            <th>🎨 Caractéristiques</th>
            <th>⭐ Approfondi</th>
            <th>👑 Prestige</th>
        </tr>
    </thead>
    <tbody>
                <tr>
            <td>Qualité</td>
            <td>Finition nette et homogène</td>
            <td>Plus de détails, contraste renforcé</td>

        </tr>
                      <tr>
            <td>Détails</td>
            <td>Mise en valeur simple et efficace</td>
            <td>Travail plus fin et plus poussé sur les zones clés</td>

        </tr>
                       <tr>
            <td>Couleurs</td>
            <td>Harmonie des couleurs, dégradé et contraste</td>
            <td>Dégradés plus doux et plus de nuances fines</td>

        </tr>
                       <tr>
            <td>Socles</td>
            <td>Inclus, met en valeur la figurine</td>
            <td>Socle plus scénique</td>

        </tr>



    </tbody>
</table>
        </div>
        </div>
       
              <div class="card" role="region" aria-expanded="true" tabindex="0">
        <h2>Prestations en Détails 📊</h2>
                         <div class="table-container center">
<h3>Préparation</h3>
    <table class="tableborder1">
    <thead>
        <tr>
            <th>🎨 Prestations</th>
            <th>⭐ Approfondi</th>
            <th>👑 Prestige</th>
           
        </tr>
    </thead>
    <tbody>
                <tr>
            <td>Suppression des carottes d'injection</td>

            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Suppression des lignes de moulage</td>

            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Jointures et trous bouchés</td>

            <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Kitbash / Conversion</td>
      
            <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
    </tbody>
</table>

<h3>Peinture de la figurine</h3>
     <table class="tableborder1">
    <thead>
        <tr>
            <th>🎨 Prestations</th>
            <th>⭐ Approfondi</th>
            <th>👑 Prestige</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Couleurs de base</td>

            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
                <tr>
            <td>Dégradé simple</td>
 
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>                <tr>
            <td>Dégradés nuancés</td>
      
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Ombrage simple</td>

            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
                    <td>Ombrages nuancés</td>
 
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Éclairci simple</td>

            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
                <tr>
            <td>Éclaircis nuancés</td>
       
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Éclaircis multiples</td>
    
            <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Ombrages multiples</td>

            <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Lining</td>
   
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Lining multiples</td>

            <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Point de lumière</td>
          
            <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Glacis</td>

            <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Détails basiques</td>
 
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Détails poussés (gemmes, yeux...)</td>
  
            <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
                <tr>
            <td>Jeu de texture simple (cuir, rouille)</td>
     
           <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
                        <tr>
            <td>Jeux de textures poussés (cuir, rouille)</td>
   
           <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Battle damages</td>
   
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Weathering</td>

            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>OSL</td>

            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>MNM</td>
  
            <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Freehand simple (chiffres, tatouages...)</td>
        
            <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
    </tbody>
</table>

<h3>Soclage</h3>
     <table class="tableborder1">
    <thead>
        <tr>
            <th>🎨 Prestations</th>
            <th>⭐ Approfondi</th>
            <th>👑 Prestige</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Texture simple</td>

            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
                <tr>
            <td>Texture 3D</td>

            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Ombrage de la texture</td>

            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Éclairci de la texture</td>
 
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Éclaircis multiples de la texture</td>
      
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
                <tr>
            <td>Weathering (pigments)</td>

           <td class="cross">x</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Touffes d'herbes simple</td>
  
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
                <tr>
            <td>Touffes d'herbes multiples</td>
      
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Accessoires 3D</td>
  
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
        <tr>
            <td>Photo-découpe (sur demande)</td>
      
            <td class="check">✓</td>
            <td class="check">✓</td>
        </tr>
    </tbody>
</table>
            
        </div>
  </div>

       
  


  <div class="card" role="region" aria-expanded="true" tabindex="0">
       <h2>🧟‍♂️ Différence entre Approfondi et Prestige – Exemple : Ghoul</h2>
   
 <div class="center"> <img src="img/comparatif-ghoul.jpg" alt="Comparaison Ghoul Approfondi et Prestige" class="responsive-img"></div>
<p class="caption">
    À gauche : <strong>Approfondi</strong>.  
    À droite : <strong>Prestige</strong>.
  </p>
</div>
           <div class="card" role="region" aria-expanded="true" tabindex="0">
              <h2>👾 Différence entre Approfondi et Prestige – Exemple : Tyranid</h2>
 
 <div class="center">  <img src="img/comparatif-tyty.jpg" alt="Comparaison Tyranid Approfondi et Prestige" class="responsive-img"></div>
  <p class="caption">
    À gauche : <strong>Approfondi</strong>.  
    À droite : <strong>Prestige</strong>.
  </p>
</div>
            <div class="card" role="region" aria-expanded="true" tabindex="0">
              <h2>🛡️ Différence entre Approfondi et Prestige – Exemple : Space Marine</h2>
  
 <div class="center">  <img src="img/comparatif-sm.jpg" alt="Comparaison Tyranid Approfondi et Prestige" class="responsive-img"></div>
 <p class="caption">
    À gauche : <strong>Approfondi</strong>.  
    À droite : <strong>Prestige</strong>.
  </p>
</div>
           <div class="banniere">
         
            <a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Demander un devis 💬</a>
           
        </div>`;
    }
}

/*****************************************
 * Page index
 *****************************************/
function changelangueindex() {
    const contenupageindex = document.getElementById("contenupage-index");
    if (!contenupageindex) {
        return;
    }

    if (langueselect === "english") {
        contenupageindex.innerHTML = `<p>TEST english</p>`;
    } else if (langueselect === "spanish") {
        contenupageindex.innerHTML = `<p>TEST</p>`;
    } else if (langueselect === "french") {
        contenupageindex.innerHTML = ` <h1>🎨 Transformez vos figurines en véritables œuvres d’art</h1>
  <p>Peinture haut de gamme pour passionnés, collectionneurs et joueurs exigeants.</p>
  <p>Vos figurines méritent mieux qu’un simple coup de pinceau : elles méritent d’être sublimées, mises en valeur, et uniques.  
  Chez <strong>Studio Peinture Figurine</strong>, chaque projet devient une pièce de collection.</p>
            

  <div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>👋 Qui se cache derrière les pinceaux ?</h2>
  <p>Je suis  <strong>Pierre-François, alias PF, <span id="pf-age"></span> ans. </strong><br>
            peintre passionné et fondateur de Studio Peinture Figurine.  <br><br>
Dans le milieu de la figurine depuis 2020, le hobby à commencer un peu par hasard.<br>Le Covid à transformé la passion en véritable quête artistique.<br> 
      Aujourd’hui, je manie acrylique, pigments et huiles, avec un style qui fait vibrer les figurines.<br>
              


  Mon objectif : faire vibrer vos figurines comme si elles prenaient vie.</p>
  <blockquote>“Chaque figurine raconte une histoire. Mon rôle, c’est de la faire briller.” ✨</blockquote>
  <p>  <a href="https://www.leprogres.fr/culture-loisirs/2025/05/12/il-est-peintre-professionnel-sur-figurines-depuis-quelques-mois-les-demandes-affluent?fbclid=IwY2xjawMbHHBleHRuA2FlbQIxMQABHoFDkkpV73nHQUSLHKutNLsp1MnG2TNeNmBnK03a1bg6IpNTrylAa7rVqE8g_aem_5llSLaiTM9lgeOSTPMrLQQ" class="button" target="_blank">En savoir plus sur mon parcours ➜</a></p>
</div>

      

  <div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>🧩 Nos prestations</h2>
      <div>
      <div class="card-container3index">
      
            <div class="card">
    <h3>⚔️ TableTop Supérieur</h3>
    <p>👉 Pour les joueurs exigeants qui veulent un rendu magnifique sans sacrifier la jouabilité.</p>
    <ul>
      <li>Niveaux : TableTop + et TableTop ++ (équivalents Gold & Diamant)</li>
      <li>Peinture précise et contrastée</li>
      <li>Soclage travaillé</li>
      <li>Options de personnalisation</li>
    </ul>
    <p> <a href="peinturecommission.html" class="button"  onclick="loadPage('peinturecommission.html'); changelanguepeinturecommission(); scrollToTop(); return false;">Découvrir le niveau TableTop ➜</a></p>
                <p><a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">Demander un devis ➜</a> </p>
  </div>

          <div class="card">
    <h3>🏆 Figurines d’exposition & Pop Culture</h3>
    <p>👉 Pour les collectionneurs et passionnés qui veulent une pièce unique, prête à exposer.</p>
    <ul>
      <li>Peinture Studio (service premium)</li>
      <li>Travail sur la lumière, textures, freehand, weathering…</li>
      <li>Figurines de jeux vidéo, manga, univers fantasy ou réaliste</li>
      <li>Chaque pièce est conçue comme une œuvre d’art personnalisée.</li>
    </ul>
    <p>
       <p><a href="galerie.html" class="button"  onclick="loadPage('galerie.html'); scrollToTop(); return false;">Voir les réalisations ➜</a>  </p>
       <p><a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">Demander un devis ➜</a> </p>

        
  </div>

          <div class="card">
    <h3>🧠 Formations & Coaching peinture</h3>
    <p>👉 Apprenez les techniques pros : gestion des lumières, soclage, dégradés, finitions.  
    Séances personnalisées, en ligne ou en atelier.</p>
    <p><a href="formation.html" class="button"  onclick="loadPage('formation.html'); scrollToTop(); return false;">Découvrir les formations ➜</a></p>
  </div>
</div>
</div>
  </div>
      
  <div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>🪄 Pourquoi choisir Studio Peinture Figurine ?</h2>
  <ul>
    <li>🎨 <strong>Peinture sur mesure</strong> : chaque projet est adapté à votre univers et votre budget.</li>
    <li>🔧 <strong>Préparation soignée</strong> : montage, nettoyage, sous-couche, tout est maîtrisé.</li>
    <li>🧪 <strong>Socles immersifs & bits 3D</strong> : pour un rendu unique et réaliste.</li>
    <li>💬 <strong>Suivi client transparent</strong> : photos d’avancement, contact direct, conseils personnalisés.</li>
    <li>🚚 <strong>Expédition sécurisée</strong> via Mondial Relay ou remise en main propre.</li>
  </ul>
  <p>Vous recevez une pièce prête à exposer, durable et totalement à votre image.</p>
          <p><a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">Demander un devis ➜</a> </p>
</div>







    
    <div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>⚙️ Comment ça marche ?</h2>
  <ol>
    <li>Contactez-moi / demandez un devis.</li>
    <li>Envoyez ou déposez votre figurine.</li>
    <li>Je réalise la peinture selon le niveau choisi.</li>
    <li>Je vous livre la pièce prête à exposer.</li>
  </ol>
  <p>Simple, transparent, et 100% passion.</p>
        <p>  <a href="peinturecommission.html" class="button"  onclick="loadPage('peinturecommission.html'); changelanguepeinturecommission(); scrollToTop(); return false;">Voir les offres ➜</a> </p>
  <p><a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">Demander un devis ➜</a> </p>
`;
    }
}

/*****************************************
 * Page simulateur
 *****************************************/
function changelanguesimulateur() {
    const contenupagesimulateur = document.getElementById("contenupage-simulateur");
    if (!contenupagesimulateur) {
        return;
    }

    if (langueselect === "english") {
        contenupagesimulateur.innerHTML = `<p>TEST e sim</p>`;
    } else if (langueselect === "spanish") {
        contenupagesimulateur.innerHTML = `<p>TEST s sim</p>`;
    } else if (langueselect === "french") {
        contenupagesimulateur.innerHTML = `<p>TEST f sim</p>`;
    }
}

/*****************************************
 * Page figurines concours
 *****************************************/
function changelanguefigconcours() {
    const contenupagefigconcours = document.getElementById("contenupage-figconcours");
    if (!contenupagefigconcours) {
        return;
    }

    if (langueselect === "english") {
        contenupagefigconcours.innerHTML = `<p>TEST e con</p>`;
    } else if (langueselect === "spanish") {
        contenupagefigconcours.innerHTML = `<p>TEST s con</p>`;
    } else if (langueselect === "french") {
        contenupagefigconcours.innerHTML = `<p>TEST f con</p>`;
    }
}

/*****************************************
 * Page pièces populaires
 *****************************************/
function changelanguepiecepop() {
    const contenupagepiecepop = document.getElementById("contenupage-piecepop");
    if (!contenupagepiecepop) {
        return;
    }

    if (langueselect === "english") {
        contenupagepiecepop.innerHTML = `<p>TEST e pop</p>`;
    } else if (langueselect === "spanish") {
        contenupagepiecepop.innerHTML = `<p>TEST s pop</p>`;
    } else if (langueselect === "french") {
        contenupagepiecepop.innerHTML = `<p>TEST f pop</p>`;
    }
}


let delaidispo;
let moisChiffre;
let messageinfo;
let testscrolltotal;
 
// Chargement des données du mois
fetch('/data/mois.txt')
    .then(response => response.text())
    .then(texte => {
        moisChiffre = parseInt(texte.trim(), 10); // Conversion en entier et suppression des espaces
        convertirMois(); // Appel de la fonction après avoir récupéré le mois
    });

// Dictionnaires des mois en français
const moisFr = {
    1: "Janvier", 2: "Février", 3: "Mars", 4: "Avril", 5: "Mai", 6: "Juin",
    7: "Juillet", 8: "Août", 9: "Septembre", 10: "Octobre", 11: "Novembre", 12: "Décembre"
};

// Fonction de conversion et d'affichage
function convertirMois() {
    // Vérification de la validité du mois
    if (moisChiffre >= 1 && moisChiffre <= 12) {
        const moisFrancais = moisFr[moisChiffre];
        // Mise à jour des éléments sur la page
        delaidispo = moisFrancais;
        document.getElementById("resultat").textContent = delaidispo; // Affichage du mois sur la page
    } else {
        alert("Veuillez entrer un mois valide (entre 1 et 12).");
    }
}

// Chargement du message d'information
fetch('/data/messageinfo.txt')
    .then(response => response.text())
    .then(texte => {
        // Vérifie si le texte est vide ou contient uniquement des espaces
        messageinfo = texte.trim() === '' ? "Pas d'informations pour le moment" : texte;
       if (messageinfo === '') {
    document.querySelector('.info-container').style.display = 'none';
    document.querySelector('.info').style.display = 'none';
}
        updateParagraph(); // Appel de la fonction après avoir récupéré le message
    })
    .catch(error => {
        messageinfo = "error";
        updateParagraph();
    });

function updateParagraph() {
    const paragraph = document.getElementById('infoParagraph');
    if (paragraph) {
        paragraph.textContent = messageinfo; // Met le contenu dans le <p>
    }
}

// Fonction pour vérifier si l'utilisateur est sur mobile
function isMobile() {
    return window.innerWidth <= 768;
}

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
      case 'simulateur_devis.html':
      if (typeof changelanguesimulateur === 'function') {
        console.log('Appel de changelanguesimulateur');
        changelanguesimulateur();
      } else {
        console.error('changelangue non défini');
      }
      break;
      case 'index.html':
      if (typeof changelangueindex === 'function') {
        console.log('Appel de changelangueindex');
        changelangueindex();
      } else {
        console.error('changelangue non défini');
      }
      break;
      case 'figconcours.html':
      if (typeof changelanguefigconcours === 'function') {
        console.log('Appel de changelanguefigconcours');
        changelanguefigconcours();
      } else {
        console.error('changelangue non défini');
      }
      break;
      case 'piecepopculture.html':
      if (typeof changelanguepiecepop === 'function') {
        console.log('Appel de changelanguepiecepop');
        changelanguepiecepop();
      } else {
        console.error('changelangue non défini');
      }
      break;
      case 'peinturecommission.html':
      if (typeof changelanguepeinturecommission === 'function') {
        console.log('Appel de changelanguepeinturecommission');
        changelanguepeinturecommission();
      } else {
        console.error('changelangue non défini');
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
    
    // Ajuster la visibilité du menu selon la taille de l'écran
        function adjustMenuVisibility() {
            const menu = $("#formSection");
            if (isMobile()) {
                menu.hide();
            } else {
                menu.show();
            }
        }
        
// Initialisation au chargement de la page
window.onload = function() {
    // Fermer le chat initialement
    fermechat();

    // Initialiser l'état du bouton de retour en haut
    document.getElementById("scrollToTopBtn").style.display = "none";
    
    // Retarder l'affichage du message du bot après 30 secondes
    setTimeout(function() {
        const chatContent = document.getElementById("chatContent");

        // Vérifier si l'élément chatContent existe et est vide
        if (chatContent && chatContent.innerHTML === "") {
            // Ouvrir le chat
            ouvrechat();

            // Ajouter le message du bot au chat
            chatContent.innerHTML += `
                <div class="blocchat">
                    <div class="bot-message">
                        <p><strong>Peinture Figurine:</strong><br>
                        Bienvenue ! En quoi puis-je vous aider ? 😊<br>
                        Voici ce que je peux faire pour vous :<br><br>- 📌 Informations sur les services :<br>Studio Peinture Figurine propose un service de peinture sur figurine TableTop et de vitrine.<br><br>Nous proposons également un service de montage de vos figurines et d'impression 3D.<br>- 🎨 Conseils de peinture : Tapez "conseil"<br><br>- 💰 Demande de devis : <br><a href="simulateur_devis-fr.html" onclick="loadPage('simulateur_devis-fr.html'); scrollToTop(); fermechat(); return false;">Simulateur de devis 💰</a><br><br><br>- 📆 Disponibilité actuelle :<br>Mon agenda de service de peinture est disponible à partir de <strong>${delaidispo}</strong> actuellement.<br><br>- 🤣 Une blague ? Tapez "blague"</p>
                    </div>
                </div>
            `;
        }
    }, 240000);

    // Initialiser les formulaires de devis et formation
    initializeFormationForm();
    initializeFormCalculations();
       initializeCardToggle();
initializeGalerie();
    initializeGalerieBB();
 initializeGalerieHH();
 initializeGalerieMarvel();
 initializeGalerieMiddle();
initializeGalerieASOIAF();
initializeGalerieSWL();
initializeGalerieSWS();
 initializeGalerieToW();
    initializeGalerie40k();
initializeGalerieStudio();
    initializeGalerieAoS();

    // Ajuster la visibilité du menu
    adjustMenuVisibility();

// Auto-advance every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 50);

    // Ajuster la visibilité du menu lors du redimensionnement
    $(window).on("resize", adjustMenuVisibility);
};
// Gestion du bouton de retour en haut et du menu
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const menu = document.getElementById("formSection");
    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollPosition > 10) {
        scrollToTopBtn.style.display = "block";
        menu.style.display = isMobile() ? "none" : "block";
    } else {
        scrollToTopBtn.style.display = "none";
        menu.style.display = isMobile() ? "none" : "block";
    }
};
    
// Fonctions du chat
function ouvrechat() {
    $('#chatBox').toggle();
    const inputElement = document.getElementById("chatInput");
    const chatButton = document.getElementById('chat-button');
    if (inputElement) inputElement.focus();
    if (chatButton) chatButton.style.display = 'none';
}

function fermechat() {
    $('#chatBox').toggle();
    const chatButton = document.getElementById('chat-button');
    if (chatButton) chatButton.style.display = 'block';
}


function handleKeyPress(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche un comportement indésirable
        sendMessage(); // Envoie le message
    } else {
        var inputElement = document.getElementById("chatInput");
        var sendButton = document.getElementById("sendButton");
        if (inputElement && sendButton) {
            sendButton.style.display = inputElement.value.trim() === "" ? "none" : "block"; // Affiche ou cache le bouton d'envoi
        }
    }
}
function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function (m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}

function sendMessage() {
    const inputElement = $("#chatInput");
    const chatContent = document.getElementById("chatContent");
    const sendButton = document.getElementById("sendButton");
    const input = inputElement.val().trim().toLowerCase();
    if (!input) return;

    const conseils = [
        'Pour améliorer vos éclaircissements, utilisez la technique du "layering" avec des transitions progressives.',
        'Appliquez un lavis pour Prestiger les ombrages avant d\'ajouter un éclaircissement sur les zones exposées.',
        'Pour un rendu plus naturel, travaillez les éclaircissements par petites couches pour une transition fluide.',
        'Les détails minutieux font la différence, optez pour un pinceau taille 0 ou 00 pour plus de précision.',
        'Utilisez un pinceau fin pour les petits détails, en évitant les excès de peinture.',
        'Pour un socle réaliste, ajoutez de la texture comme du sable, de la neige artificielle ou des éléments naturels.'
    ];

    const randomIndex2 = Math.floor(Math.random() * conseils.length);
    const conseil = conseils[randomIndex2];

    const datedispo = delaidispo;
    const blagues = [
        "Pourquoi les peintres de figurines ne jouent-ils jamais à cache-cache ? Parce qu'ils savent que personne ne pourra jamais les retrouver sous leur couche de peinture ! 😄",
        "Pourquoi les figurines peintes détestent-elles les peintures à l'huile ? Parce qu'elles ont peur de se faire maculer ! 😆",
        "Pourquoi les figurines détestent-elles les aérographes ? Parce qu'elles trouvent que ça met toujours trop de pression ! 😆",
        "Pourquoi les figurines ne se disputent-elles jamais ? Parce qu'elles savent qu'elles finiront toujours par se mettre d'accord sur un socle ! 😄"
    ];

    const randomIndex = Math.floor(Math.random() * blagues.length);
    const blague = blagues[randomIndex];

    let response = "Je n'ai pas compris votre demande.<br> Si je ne comprends pas certains mots.<br> Dites-le moi par mail 📧 : <a href='mailto:studiopeinturefigurine@gmail.com'>studiopeinturefigurine@gmail.com</a>";

    if (input.match(/(contact|formulaire|devis|tarif|commande|estimation|prix)/i)) {
        response = 'Voici notre formulaire de contact :<br><a href="simulateur_devis.html" onclick="loadPage(\'simulateur_devis.html\'); scrollToTop(); fermechat(); return false;">Simulateur de devis 💰</a>';
    } else if (input.match(/(bonjour|coucou|bonsoir|salut|wesh|yo|cc)/i)) {
        response = 'Bonjour 😀 Comment puis-je vous aider ? Pour savoir ce que je peux faire, tapez "aide".';
    } else if (input.match(/(merci|remercie|ca va)/i)) {
        response = 'Merci à toi 😀';

           } else if (input.match(/(service|services|commission|commissions|prestation|prestations)/i)) {
        response = "Studio Peinture Figurine propses un service de Peinture sur Figurine TableTop et Exposition.<br>Mais également le service de montage de vos figurines et de l'impression 3D.";

           } else if (input.match(/(peinture|peindre|peintre)/i)) {
        response = 'Que recherchez vous ?<br><br>Faire peindre vos figurines ?<br><a href="simulateur_devis.html" onclick="loadPage(\'simulateur_devis.html\'); scrollToTop(); fermechat(); return false;">Simulateur de devis 💰</a><br><br>Ou apprendre la peinture suir figurine ?<br><a href="formation.html" onclick="loadPage(\'formation.html\'); return false;">Formation 📚</a><br><br>Les deux sont possibles !';
        
    } else if (input.match(/(blague|rire|lol|mdr)/i)) {
        response = blague + '<br>Plus de blagues tapez "blague"<br>';
    } else if (input.match(/(infos|info|informations|conditions|condition)/i)) {
        response = 'Voici des informations utiles :<br> <a href="conditions.html" onclick="loadPage(\'conditions.html\'); scrollToTop(); fermechat(); return false;">Conditions générales de vente 📜</a>';
    } else if (input.match(/(cours|formation|apprendre|conseil|conseils|lavis|éclaircissement|pinceau|aerographe|aero)/i)) {
        response = conseil + '<br>Plus de conseils tapez "conseil"<br><br>' + 'Pour vous former contactez-moi : <br><a href="formation.html" onclick="loadPage(\'formation.html\'); fermechat(); return false;">Formation 📚</a>';
    } else if (input.match(/(impression 3d|stl|imprimante|3D)/i)) {
        response = 'Nous proposons un service d\'impression 3D haute qualité ! <br>Voici les détails :<br><a href="impression3d.html" onclick="loadPage(\'impression3d.html\'); fermechat(); return false;">Impression 3D 🖨️</a>';
} else if (input.match(/(aide|menu|que peux-tu faire)/i)) {
    response = 'Voici ce que je peux faire pour vous :<br><br>- 📌 Infos sur les services :<br>Studio Peinture Figurine propose un service de peinture sur figurines TableTop et Exposition.<br><br>Mais également un service de montage de vos figurines et d\'impression 3D.<br>- 🎨 Conseils de peinture : Tapez "conseil"<br><br>- 💰 Demande de devis : <br><a href="simulateur_devis.html" onclick="loadPage(\'simulateur_devis.html\'); scrollToTop(); fermechat(); return false;">Simulateur de devis 💰</a><br><br><br>- 📆 Disponibilité actuelle :<br>Mon planning de service de peinture est disponible à partir de <strong>' + datedispo + '</strong> actuellement.<br><br>- 🤣 Une blague ? Tapez "blague"';
} else if (input.match(/(modalités de paiement|paiement|acompte|arrhes|arrhe)/)) {
    response = 'Les modalités de paiement sont les suivantes :<br>' +
               '- **25%** pour réserver un créneau.<br>' +
               '- **25%** au démarrage ou **50%** directement en remplacement des deux premières étapes.<br>' +
               '- **50%** restants à la validation finale sur photos (présentation à 80% d\'avancement).<br>' +
         '- Possibilité de paiement 4x par PayPal.<br>' +
               'Nous acceptons les paiements par virement, carte bancaire ou PayPal <br>(des frais de 4% s\'appliquent pour PayPal). Une réduction de 4% est accordée pour les paiements hors PayPal.';
} else if (input.match(/(délais|temps|délai|delai|dispo|disponibilité)/)) {
    response = 'Mon planning de service de peinture est disponible à partir de <strong>' + datedispo + '</strong> actuellement.<br><br>' +
               'Les délais de réalisation sont les suivants :<br>' +
               '- Impression 3D : sous 72h ouvrées (hors peinture).<br>' +
               '- Peinture TableTop :<br>' +
               '  - Niveau Approfondi : 2 à 4 mois.<br>' +
               '  - Niveau Prestige : 4 à 6 mois.<br>' +
        '  - Niveau Studio : 6-8 mois ou lus.<br>' +
               '- Peinture Vitrine : 4 à 6 mois.';
} else if (input.match(/(livraison|port|expédition)/)) {
    response = 'Nous expédions via Colissimo ou Mondial Relay. Les frais de port sont offerts à partir de 1200€ de commande.'
} else if (input.match(/(publication|photos|photo|pub|publicité)/)) {
    response = 'Le Studio Peinture Figurine se réserve le droit de publier 📷 des photos et vidéos des figurines peintes.';
} else if (input.match(/(annulation|remboursement|désistement)/)) {
    response = 'Les arrhes et acomptes versés ne sont pas remboursables en cas de désistement.<br> Le paiement des arrhes valide le devis. Des frais de 30% s\'appliquent pour les commandes urgentes (moins de 15 jours). Si les figurines ne sont pas envoyées dans un délai de plus de 3 mois à compter de la date de démarrage du projet, celui-ci sera automatiquement annulé et les arrhes conservées.';
} else if (input.match(/(propriété intellectuelle|droits d'auteur|œuvre)/)) {
    response = 'Les œuvres réalisées sont protégées par le droit d\'auteur.';
}
    else if (input.match(/(je t'aime|i love u|te quiero|je taime|❤️)/)) {
    response = "Moi aussi je t'aime. ❤️";
}
    else if (input.match(/(gaelle frasse|gaelle goujon)/)) {
    response = "Je t'aime plus que tout mon épouse chérie. ❤️❤️❤️";
}
               chatContent.innerHTML += `
                <div class="blocchat">
                    <div class="user-message">
                        <p><strong>Vous :</strong><br> ${escapeHtml(input)}</p>
                    </div>
                    <div class="bot-message">
                        <p><strong>Peinture Figurine :</strong><br> ${response}</p>
                    </div>
                </div>
            `;

            inputElement.val("");
            sendButton.style.display = "none";
            chatContent.scrollTop = chatContent.scrollHeight;
        }


const niveauLabels = {
    niveau0: "Niveau Essentiel - TableTop basique 3 couleurs, texture simple : 🚀 Idéal pour les petits budgets, Minimum efficace sans détails.",
    niveau1: "Niveau Approfondi - TableTop+, Qualité supérieur qui va à l'Approfondi : 🔍 Parfait pour valoriser les figurines de jeu. Notre recommendation.",
    niveau2: "Niveau Prestige - TableTop++, Qualité supérieur plus Prestige : 🎨 Chaque pièce devient une œuvre d’art. Pour les pièces principales.",
    expo: "Niveau Studio : ✨ Limitée et réservée aux passionnés souhaitant le meilleur. Pour la collection en vitrine."
};

const niveauLabelsmini = {
    niveau0: "Essentiel",
    niveau1: "Approfondi",
    niveau2: "Prestige",
    expo: "Pièce d'exposition"
};


const tariffs = {
    petiteinfanterie: { niveau0: 10, niveau1: 15, niveau2: 20},
    infanterie: { niveau0: 15, niveau1: 30, niveau2: 40},
    infanterieelite: { niveau0: 20, niveau1: 35, niveau2: 50 },
    personnage: { niveau0: 40, niveau1: 70, niveau2: 90},
      personnageelite: { niveau0: 50, niveau1: 90, niveau2: 120},
    personnagemonstrueux: { niveau0: 100, niveau1: 190, niveau2: 240 },
    personnagesurmonstre: { niveau0: 120, niveau1: 240, niveau2: 300 },
    personnagesurgrandmonstre: { niveau0: 180, niveau1: 360, niveau2: 450 },
    cavalerie: { niveau0: 30, niveau1: 40, niveau2: 50 },
    cavalerielourde: { niveau0: 25, niveau1: 50, niveau2: 70 },
    petitvehiculemonstre: { niveau0: 40, niveau1: 80, niveau2: 100},
    vehiculemonstremoyen: { niveau0: 60, niveau1: 120, niveau2: 150 },
    grosvehiculemonstre: { niveau0: 100, niveau1: 190, niveau2: 240},
    enormevehiculemonstre: { niveau0: 140, niveau1: 270, niveau2: 340},
    titanvehiculemonstre: { niveau0: 240, niveau1: 480, niveau2: 600 }
};


const categories = Object.keys(tariffs);

function calculateTotals() {
    const niveauSelect = document.getElementById("niveau");
    const niveau = niveauSelect?.value || "niveau1";
    const afficheniveau = document.getElementById("afficheniveau");
    const comparativeTable = document.getElementById("comparative-table");
       const niveausup = document.getElementById("niveau-sup");
    const oktotal = document.getElementById("oktotal");

    // Vérification des éléments DOM nécessaires
    if (!niveauSelect || !afficheniveau || !comparativeTable || !oktotal) {
        console.error("Un ou plusieurs éléments DOM nécessaires sont manquants.");
        return;
    }

    // Mise à jour du libellé du niveau
    afficheniveau.textContent = niveauLabels[niveau];

    let totalGeneral = 0;

    // Cas particulier pour le niveau "expo"
    if (niveau === "expo") {
        categories.forEach(cat => {
            const divCat = document.getElementById(cat);
            if (divCat) divCat.style.display = "none";
        });

        ["aimant", "montage"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = "none";
        });
        ["message"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = "done";
        });
        

        comparativeTable.innerHTML = "";
        oktotal.textContent = "Sur devis 💸";
        return;
    }

    // Calcul du total pour chaque catégorie
    categories.forEach(cat => {
        const divCat = document.getElementById(cat);
        const input = document.getElementById(`${cat}-input`);
        const prixCat = document.getElementById(`prix${cat}`);
        const totalCatEl = document.getElementById(`total${cat}`);

        if (divCat) divCat.style.display = "";
        if (!input || !prixCat || !totalCatEl) return;

        const qty = Number(input.value) || 0;
        const priceUnit = tariffs[cat][niveau] || 0;
        const totalCat = qty * priceUnit;

        prixCat.textContent = priceUnit.toFixed(2);
        totalCatEl.textContent = totalCat.toFixed(2);
        totalGeneral += totalCat;
    });

    // Affichage des champs supplémentaires
    ["aimant-input", "total", "montage-input"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "";
    });

        // Gestion de la table comparative
    const previousLevel = {
        niveau0: "niveau1",
        niveau1: "niveau2",
        niveau2: "niveau1",
    }[niveau];

    
    // Mise à jour du total général
    oktotal.innerHTML = `<strong>Total estimé niveau ${niveauLabelsmini[niveau]} </strong> : ${totalGeneral.toFixed(2)} € <br>Tarif approximatif, hors frais de port et frais PayPal.`;


    
    comparativeTable.innerHTML = ""; // Réinitialisation du tableau
       niveausup.innerHTML = "";

    if (!previousLevel || niveau === "expo") {
        return; // Pas de comparaison pour niveau2 ou si previousLevel n'existe pas
    }

    // Calcul du total pour le niveau précédent
    let totalPrevious = 0;
    categories.forEach(cat => {
        const qty = Number(document.getElementById(`${cat}-input`)?.value) || 0;
        const priceUnit = tariffs[cat][previousLevel] || 0;
        totalPrevious += qty * priceUnit;
    });


    // Génération du tableau comparatif
    const niveauNumber = niveau.replace("niveau", "");
    const previousNiveauNumber = previousLevel.replace("niveau", "");
  if (niveau === "niveau2") {
       niveausup.innerHTML = "";
    comparativeTable.innerHTML = `
        <table id="tablecompar" style="margin: 5px auto; border-collapse: collapse; width: 70%;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                 <th style="border: 1px solid #ddd; padding: 3px; text-align: center;">${niveauLabelsmini[previousLevel]}</th>
                    <th style="border: 1px solid #ddd; padding: 3px; text-align: center;">${niveauLabelsmini[niveau]}</th>
                   
                </tr>
            </thead>
            <tbody>
                <tr>
                  
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                        <strong>Total :</strong> ${totalPrevious.toFixed(2)} €<br>
                        <img src="img/exempleniveau${previousNiveauNumber}.jpg"  class="imgcomparative-table" alt="Exemple ${niveauLabelsmini[previousLevel]}">
                    </td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                        <strong>Total :</strong> ${totalGeneral.toFixed(2)} €<br>
                        <img src="img/exempleniveau${niveauNumber}.jpg"  class="imgcomparative-table" alt="Exemple ${niveauLabelsmini[niveau]}">
                    </td>
                </tr>
            </tbody>
        </table>
    `;
  }
    else{
         niveausup.innerHTML = `
                <div>
            <button class="button" onclick="changeniveau()">Passer au niveau supérieur ?</button>
        </div>
           `;
            comparativeTable.innerHTML = `
        <table id="tablecompar" style="margin: 5px auto; border-collapse: collapse; width: 70%;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th style="border: 1px solid #ddd; padding: 3px; text-align: center;">${niveauLabelsmini[niveau]}</th>
                    <th style="border: 1px solid #ddd; padding: 3px; text-align: center;">${niveauLabelsmini[previousLevel]}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                        <strong>Total :</strong> ${totalGeneral.toFixed(2)} €<br>
                        <img src="img/exempleniveau${niveauNumber}.jpg"  class="imgcomparative-table" alt="Exemple ${niveauLabelsmini[niveau]}">
                    </td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                        <strong>Total :</strong> ${totalPrevious.toFixed(2)} €<br>
                        <img src="img/exempleniveau${previousNiveauNumber}.jpg"  class="imgcomparative-table" alt="Exemple ${niveauLabelsmini[previousLevel]}">
                    </td>
                </tr>
            </tbody>
        </table>
    `;
    }

}





function initializeFormCalculations() {
    calculateTotals();

    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const requiredFields = form.querySelectorAll("[required]");
            let isValid = true;
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add("error");
                } else {
                    field.classList.remove("error");
                }
            });

            if (!isValid) {
                alert("Veuillez remplir tous les champs obligatoires.");
                return;
            }

            const nom = document.getElementById("nom").value;
            const prenom = document.getElementById("prenom").value;
            const email = document.getElementById("email").value;
            const telephone = document.getElementById("telephone").value;
            const adresse = document.getElementById("adresse").value;
            const cp = document.getElementById("cp").value;
            const ville = document.getElementById("ville").value;
            const pays = document.getElementById("pays").value;
            const niveau = document.getElementById("niveau").value;
            const montage = document.getElementById('montage-input').value || 0;
            const aimant = document.getElementById('aimant-input').value || 0;
            const message = document.getElementById("message-input").value;

            // Récupération des quantités
            const quantities = {};
            categories.forEach(cat => {
                quantities[cat] = parseInt(document.getElementById(cat + '-input').value) || 0;
            });

            // Récupération du total (si ce n'est pas "Sur devis")
            const totalText = document.getElementById("oktotal").textContent;
            const total = totalText.includes("€") ? parseFloat(totalText.replace(/[^\d.]/g, "")) : 0;

            const subject = `Demande de Devis de ${prenom} ${nom} - ${niveauLabelsmini[niveau]}`;

            let body = "";

            if (niveau === "expo") {
                body =  `Bonjour,\n\nVoici ma demande de devis de peinture (${niveauLabelsmini[niveau]}) :\n` +
                             `${nom}\n${prenom}\n${adresse}\n${cp}\n` +
                             `${ville}\n${pays}\n${email}\n${telephone}\n\n` +
                    `Pièce d'exposition - Sur devis uniquement\n\nMessage :\n${message}\n\nCordialement.`;
            } else {
                body =  `Bonjour,\n\nVoici ma demande de devis de peinture (${niveauLabelsmini[niveau]}) :\n` +
                             `${nom}\n${prenom}\n${adresse}\n${cp}\n` +
                             `${ville}\n${pays}\n${email}\n${telephone}\n\n` +
                    categories.map(cat => `- ${cat} : ${quantities[cat]}`).join('\n') + `\n\n` +
                       `- Montage : ${montage}\n- Aimant : ${aimant}\n\n` +
                       `Total estimé : ${total.toFixed(2)} €\n\nMessage :\n${message}\n\nCordialement.`;
            }

            const mailtoURL = `mailto:studiopeinturefigurine@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoURL;
        });
    }

    // Recalcul automatique quand on modifie le formulaire
    document.querySelectorAll("#contactForm input, #contactForm select").forEach(element => {
        element.addEventListener("input", calculateTotals);
    });
}

document.addEventListener("DOMContentLoaded", initializeFormCalculations);

    
// Appelle la fonction au chargement de la page
document.addEventListener("DOMContentLoaded", changelanguepeinturecommission);
document.addEventListener("DOMContentLoaded", changelangueindex);
document.addEventListener("DOMContentLoaded", changelanguesimulateur);
document.addEventListener("DOMContentLoaded", changelanguefigconcours);
document.addEventListener("DOMContentLoaded", changelanguepiecepop);
document.addEventListener('DOMContentLoaded', initializeGalerie);
document.addEventListener('DOMContentLoaded', initializeGalerieAoS);
document.addEventListener('DOMContentLoaded', initializeGalerieBB);
    document.addEventListener('DOMContentLoaded', initializeGalerieHH);
    document.addEventListener('DOMContentLoaded', initializeGalerieMarvel);
    document.addEventListener('DOMContentLoaded', initializeGalerieMiddle);
    document.addEventListener('DOMContentLoaded', initializeGalerieASOIAF);
    document.addEventListener('DOMContentLoaded', initializeGalerieSWL);
    document.addEventListener('DOMContentLoaded', initializeGalerieSWS);
    document.addEventListener('DOMContentLoaded', initializeGalerie40k);
        document.addEventListener('DOMContentLoaded', initializeGalerieToW);
    document.addEventListener('DOMContentLoaded', initializeGalerieStudio);
    

// Initialisation du formulaire de formation
function initializeFormationForm() {
    $("#formationForm").off("submit").on("submit", function (e) {
        e.preventDefault();

        const nom = $("#nom").val();
        const prenom = $("#prenom").val();
        const email = $("#email").val();
        const telephone = $("#telephone").val();
        const cours = $("#cours").val();
        const message = $("#message").val() || "Aucun message";
        const adresse = $("#adresse").val();
        const cp = $("#cp").val();
        const ville = $("#ville").val();
        const pays = $("#pays").val();

        const subject = `Demande de cours de peinture - ${nom} ${prenom}`;
        const body = `Bonjour,

Voici ma demande de cours de peinture (${cours}) :
${nom}
${prenom}
${adresse}
${cp}
${ville}
${pays}
${email}
${telephone}

Message :
${message}

Cordialement,
${prenom} ${nom}`;

        const mailtoURL = `mailto:studiopeinturefigurine@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoURL;
    });
}


function appelimg() {
  return [
   
  // Monstres
  'monstres/monstres_1.jpg', 'monstres/monstres_2.jpg', 'monstres/monstres_3.jpg', 'monstres/monstres_4.jpg', 'monstres/monstres_5.jpg',
   'monstres/monstres_6.jpg', 'monstres/monstres_7.jpg', 'monstres/monstres_8.jpg', 'monstres/monstres_9.jpg',
'monstres/monstres_10.jpg', 'monstres/monstres_11.jpg', 'monstres/monstres_12.jpg', 'monstres/monstres_13.jpg',
'monstres/monstres_14.jpg', 'monstres/monstres_15.jpg', 'monstres/monstres_16.jpg', 'monstres/monstres_17.jpg',
   'monstres/monstres_18.jpg', 'monstres/monstres_19.jpg', 



     // Bandes
  'bandes/bandes_1.jpg', 'bandes/bandes_2.jpg', 'bandes/bandes_3.jpg', 'bandes/bandes_4.jpg',  'bandes/bandes_5.jpg', 'bandes/bandes_6.jpg', 'bandes/bandes_7.jpg', 'bandes/bandes_8.jpg',
     'bandes/bandes_9.jpg', 'bandes/bandes_10.jpg', 'bandes/bandes_11.jpg', 'bandes/bandes_12.jpg',  'bandes/bandes_13.jpg', 'bandes/bandes_14.jpg', 'bandes/bandes_15.jpg', 'bandes/bandes_16.jpg',
     'bandes/bandes_17.jpg', 'bandes/bandes_18.jpg', 
     // Armées
   'armées/armées_1.jpg', 'armées/armées_2.jpg', 'armées/armées_3.jpg', 'armées/armées_4.jpg',
      'armées/armées_5.jpg', 'armées/armées_6.jpg', 'armées/armées_7.jpg', 'armées/armées_8.jpg',
  // Titans
   'titans/titans_1.jpg', 'titans/titans_2.jpg', 'titans/titans_3.jpg', 'titans/titans_4.jpg',
      'titans/titans_5.jpg', 'titans/titans_6.jpg', 'titans/titans_7.jpg', 'titans/titans_8.jpg',
      'titans/titans_9.jpg', 'titans/titans_10.jpg', 'titans/titans_11.jpg', 'titans/titans_12.jpg',
     // Décors
  'décors/décors_1.jpg', 'décors/décors_2.jpg', 'décors/décors_3.jpg', 'décors/décors_4.jpg',
  'décors/décors_5.jpg', 'décors/décors_6.jpg', 'décors/décors_7.jpg', 'décors/décors_8.jpg',
     'décors/décors_9.jpg', 'décors/décors_10.jpg', 'décors/décors_11.jpg', 'décors/décors_12.jpg',
     'décors/décors_13.jpg', 'décors/décors_14.jpg', 'décors/décors_15.jpg', 'décors/décors_16.jpg','décors/décors_17.jpg',

  // Cavalerie
  'cavaleries/cavaleries_1.jpg', 'cavaleries/cavaleries_2.jpg', 'cavaleries/cavaleries_3.jpg', 'cavaleries/cavaleries_4.jpg', 'cavaleries/cavaleries_5.jpg',
  'cavaleries/cavaleries_6.jpg', 'cavaleries/cavaleries_7.jpg', 'cavaleries/cavaleries_8.jpg', 'cavaleries/cavaleries_9.jpg', 'cavaleries/cavaleries_10.jpg',
  'cavaleries/cavaleries_11.jpg','cavaleries/cavaleries_12.jpg','cavaleries/cavaleries_13.jpg','cavaleries/cavaleries_14.jpg','cavaleries/cavaleries_15.jpg','cavaleries/cavaleries_16.jpg',

  // Véhicules
  'vehicules/vehicules_1.jpg', 'vehicules/vehicules_2.jpg', 'vehicules/vehicules_3.jpg', 'vehicules/vehicules_4.jpg', 'vehicules/vehicules_5.jpg',
  'vehicules/vehicules_6.jpg', 'vehicules/vehicules_7.jpg', 'vehicules/vehicules_8.jpg', 'vehicules/vehicules_9.jpg', 'vehicules/vehicules_10.jpg',
  'vehicules/vehicules_11.jpg','vehicules/vehicules_12.jpg','vehicules/vehicules_13.jpg',
'vehicules/vehicules_14.jpg', 'vehicules/vehicules_15.jpg', 'vehicules/vehicules_16.jpg', 'vehicules/vehicules_17.jpg',
'vehicules/vehicules_18.jpg', 'vehicules/vehicules_19.jpg', 'vehicules/vehicules_20.jpg','vehicules/vehicules_21.jpg', 'vehicules/vehicules_22.jpg', 'vehicules/vehicules_23.jpg',
'vehicules/vehicules_24.jpg', 'vehicules/vehicules_25.jpg',

  // Infanterie
  'infanteries/infanteries_1.jpg', 'infanteries/infanteries_2.jpg', 'infanteries/infanteries_3.jpg', 'infanteries/infanteries_4.jpg', 'infanteries/infanteries_5.jpg',
  'infanteries/infanteries_6.jpg', 'infanteries/infanteries_7.jpg', 'infanteries/infanteries_8.jpg', 'infanteries/infanteries_9.jpg', 'infanteries/infanteries_10.jpg',
  'infanteries/infanteries_11.jpg', 'infanteries/infanteries_12.jpg', 'infanteries/infanteries_13.jpg', 'infanteries/infanteries_14.jpg', 'infanteries/infanteries_15.jpg',
  'infanteries/infanteries_16.jpg', 'infanteries/infanteries_17.jpg', 'infanteries/infanteries_18.jpg', 'infanteries/infanteries_19.jpg', 'infanteries/infanteries_20.jpg',
  'infanteries/infanteries_21.jpg', 'infanteries/infanteries_22.jpg', 'infanteries/infanteries_23.jpg',  'infanteries/infanteries_24.jpg', 
   'infanteries/infanteries_25.jpg', 'infanteries/infanteries_26.jpg', 'infanteries/infanteries_27.jpg', 'infanteries/infanteries_28.jpg',
  'infanteries/infanteries_29.jpg', 'infanteries/infanteries_30.jpg', 'infanteries/infanteries_31.jpg', 'infanteries/infanteries_32.jpg',
  'infanteries/infanteries_33.jpg', 'infanteries/infanteries_34.jpg', 'infanteries/infanteries_35.jpg', 'infanteries/infanteries_40.jpg', 'infanteries/infanteries_41.jpg',
  'infanteries/infanteries_42.jpg', 'infanteries/infanteries_43.jpg', 'infanteries/infanteries_44.jpg',  'infanteries/infanteries_45.jpg', 'infanteries/infanteries_46.jpg',
   'infanteries/infanteries_47.jpg',  'infanteries/infanteries_48.jpg', 'infanteries/infanteries_49.jpg', 'infanteries/infanteries_50.jpg',

  // Personnages
  'personnages/personnages_1.jpg', 'personnages/personnages_2.jpg', 'personnages/personnages_3.jpg', 'personnages/personnages_4.jpg', 'personnages/personnages_5.jpg',
  'personnages/personnages_6.jpg', 'personnages/personnages_7.jpg', 'personnages/personnages_8.jpg', 'personnages/personnages_9.jpg', 'personnages/personnages_10.jpg',
  'personnages/personnages_11.jpg', 'personnages/personnages_12.jpg', 'personnages/personnages_13.jpg', 'personnages/personnages_14.jpg', 'personnages/personnages_15.jpg',
  'personnages/personnages_16.jpg', 'personnages/personnages_17.jpg', 'personnages/personnages_18.jpg', 'personnages/personnages_19.jpg', 'personnages/personnages_20.jpg',
     'personnages/personnages_21.jpg', 'personnages/personnages_22.jpg', 'personnages/personnages_23.jpg', 'personnages/personnages_24.jpg', 'personnages/personnages_25.jpg',
  'personnages/personnages_26.jpg', 'personnages/personnages_27.jpg', 'personnages/personnages_28.jpg', 'personnages/personnages_29.jpg', 'personnages/personnages_30.jpg',
  'personnages/personnages_31.jpg', 'personnages/personnages_32.jpg', 'personnages/personnages_33.jpg', 'personnages/personnages_34.jpg', 'personnages/personnages_35.jpg',
  'personnages/personnages_36.jpg', 'personnages/personnages_37.jpg', 'personnages/personnages_38.jpg',
   
  // Expo
  'jeuxvideo/expo_1.jpg', 'expo/expo_2.jpg', 'expo/expo_3.jpg', 'jeuxvideo/expo_4.jpg', 'jeuxvideo/expo_5.jpg',
  'expo/expo_6.jpg', 'manga/expo_7.jpg', 'concours/expo_9.jpg',  'manga/expo_10.jpg', 'expo/expo_11.jpg', 'concours/expo_12.jpg', 'concours/expo_13.jpg', 'concours/expo_14.jpg',
  'expo/expo_15.jpg', 'jeuxvideo/expo_16.jpg', 'manga/expo_17.jpg', 'manga/expo_18.jpg',  'jeuxvideo/expo_19.jpg', 'jeuxvideo/expo_20.jpg', 'concours/expo_21.jpg'
];
}

function initializeGalerie() {
  const imageFilenames = appelimg();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filters = document.getElementById('filters');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenames.forEach(filename => {
  const category = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[category]) categorized[category] = [];
  categorized[category].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenames.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filters.appendChild(btn);
  });

  function showImages(category) {
    gallery.innerHTML = '';
    categorized[category].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
function initializeGalerieAoS() {
  const imageFilenamesAoS = appelimgAoS();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filtersAoS = document.getElementById('filtersAoS');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenamesAoS.forEach(filename => {
  const categoryAoS = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[categoryAoS]) categorized[categoryAoS] = [];
  categorized[categoryAoS].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenamesAoS.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filtersAoS button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filtersAoS.appendChild(btn);
  });

  function showImages(categoryAoS) {
    gallery.innerHTML = '';
    categorized[categoryAoS].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
function appelimgAoS() {
  return [
   
  // Monstres
  'monstres/monstres_2.jpg', 'monstres/monstres_4.jpg', 'monstres/monstres_8.jpg', 'monstres/monstres_9.jpg', 'monstres/monstres_12.jpg',
   'monstres/monstres_13.jpg', 'monstres/monstres_15.jpg', 'monstres/monstres_16.jpg', 'monstres/monstres_18.jpg',

     // Bandes
  'bandes/bandes_1.jpg', 'bandes/bandes_18.jpg',
     // Armées
   'armées/armées_4.jpg', 'armées/armées_5.jpg', 'armées/armées_8.jpg', 'armées/armées_7.jpg',
   
 
     // Décors
  'décors/décors_1.jpg', 'décors/décors_3.jpg', 'décors/décors_5.jpg', 'décors/décors_6.jpg',
  'décors/décors_7.jpg', 'décors/décors_9.jpg', 'décors/décors_10.jpg', 'décors/décors_11.jpg',
     'décors/décors_14.jpg', 'décors/décors_15.jpg',

  // Cavalerie
'cavaleries/cavaleries_3.jpg', 'cavaleries/cavaleries_4.jpg', 'cavaleries/cavaleries_5.jpg',
  'cavaleries/cavaleries_6.jpg', 'cavaleries/cavaleries_7.jpg', 'cavaleries/cavaleries_8.jpg', 'cavaleries/cavaleries_9.jpg', 'cavaleries/cavaleries_10.jpg',
  'cavaleries/cavaleries_11.jpg','cavaleries/cavaleries_12.jpg','cavaleries/cavaleries_13.jpg','cavaleries/cavaleries_14.jpg','cavaleries/cavaleries_16.jpg',

 

  // Infanterie
  'infanteries/infanteries_10.jpg', 'infanteries/infanteries_14.jpg', 'infanteries/infanteries_11.jpg', 'infanteries/infanteries_17.jpg', 'infanteries/infanteries_20.jpg',
  'infanteries/infanteries_21.jpg', 'infanteries/infanteries_29.jpg', 'infanteries/infanteries_33.jpg', 'infanteries/infanteries_31.jpg', 'infanteries/infanteries_42.jpg',
  'infanteries/infanteries_43.jpg', 'infanteries/infanteries_44.jpg', 'infanteries/infanteries_50.jpg',
  'infanteries/infanteries_48.jpg', 
  // Personnages
  'personnages/personnages_5.jpg', 'personnages/personnages_9.jpg', 'personnages/personnages_13.jpg', 'personnages/personnages_11.jpg', 'personnages/personnages_15.jpg',
  'personnages/personnages_16.jpg', 'personnages/personnages_17.jpg', 'personnages/personnages_18.jpg', 'personnages/personnages_21.jpg', 'personnages/personnages_28.jpg',
  'personnages/personnages_32.jpg', 'personnages/personnages_36.jpg'
];
}
    function initializeGalerieBB() {
  const imageFilenamesBB = appelimgBB();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filtersBB = document.getElementById('filtersBB');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenamesBB.forEach(filename => {
  const categoryBB = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[categoryBB]) categorized[categoryBB] = [];
  categorized[categoryBB].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenamesBB.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filtersBB button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filtersBB.appendChild(btn);
  });

  function showImages(categoryBB) {
    gallery.innerHTML = '';
    categorized[categoryBB].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
    function appelimgBB() {
  return [
   
     // Bandes
  'bandes/bandes_16.jpg', 'bandes/bandes_2.jpg', 'bandes/bandes_3.jpg'
];
}
    
    function initializeGalerieHH() {
  const imageFilenamesHH = appelimgHH();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filtersHH = document.getElementById('filtersHH');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenamesHH.forEach(filename => {
  const categoryHH = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[categoryHH]) categorized[categoryHH] = [];
  categorized[categoryHH].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenamesHH.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filtersHH button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filtersHH.appendChild(btn);
  });

  function showImages(categoryHH) {
    gallery.innerHTML = '';
    categorized[categoryHH].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
    function appelimgHH() {
  return [
   
    // Véhicules
  'vehicules/vehicules_7.jpg'
];
}


    function initializeGalerieMarvel() {
  const imageFilenamesMarvel = appelimgMarvel();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filtersMarvel = document.getElementById('filtersMarvel');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenamesMarvel.forEach(filename => {
  const categoryMarvel = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[categoryMarvel]) categorized[categoryMarvel] = [];
  categorized[categoryMarvel].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenamesMarvel.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filtersMarvel button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filtersMarvel.appendChild(btn);
  });

  function showImages(categoryMarvel) {
    gallery.innerHTML = '';
    categorized[categoryMarvel].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
    function appelimgMarvel() {
  return [
   

];
}
    function initializeGalerieASOIAF() {
  const imageFilenamesASOIAF = appelimgASOIAF();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filtersASOIAF = document.getElementById('filtersASOIAF');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenamesASOIAF.forEach(filename => {
  const categoryASOIAF = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[categoryASOIAF]) categorized[categoryASOIAF] = [];
  categorized[categoryASOIAF].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenamesASOIAF.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filtersASOIAF button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filtersASOIAF.appendChild(btn);
  });

  function showImages(categoryASOIAF) {
    gallery.innerHTML = '';
    categorized[categoryASOIAF].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
    function appelimgASOIAF() {
  return [
   
   // Cavalerie
  'cavaleries/cavaleries_2.jpg', 

  // Infanterie
  'infanteries/infanteries_4.jpg', 

  // Personnages
  'personnages/personnages_10.jpg'
];
}
    function initializeGalerieMiddle() {
  const imageFilenamesMiddle = appelimgMiddle();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filtersMiddle = document.getElementById('filtersMiddle');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenamesMiddle.forEach(filename => {
  const categoryMiddle = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[categoryMiddle]) categorized[categoryMiddle] = [];
  categorized[categoryMiddle].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenamesMiddle.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filtersMiddle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filtersMiddle.appendChild(btn);
  });

  function showImages(categoryMiddle) {
    gallery.innerHTML = '';
    categorized[categoryMiddle].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
    function appelimgMiddle() {
  return [
   
 // Monstres
  'monstres/monstres_1.jpg',
     // Armées
'armées/armées_3.jpg',

  // Cavalerie
  'cavaleries/cavaleries_1.jpg', 'cavaleries/cavaleries_11.jpg', 
  // Infanterie
  'infanteries/infanteries_40.jpg', 'infanteries/infanteries_26.jpg', 'infanteries/infanteries_27.jpg'
  
];
}
    
    function initializeGalerieSWL() {
  const imageFilenamesSWL = appelimgSWL();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filtersSWL = document.getElementById('filtersSWL');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenamesSWL.forEach(filename => {
  const categorySWL = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[categorySWL]) categorized[categorySWL] = [];
  categorized[categorySWL].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenamesSWL.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filtersSWL button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filtersSWL.appendChild(btn);
  });

  function showImages(categorySWL) {
    gallery.innerHTML = '';
    categorized[categorySWL].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
    function appelimgSWL() {
  return [
   
 // vehicules
  'vehicules/vehicules_1.jpg', 'vehicules/vehicules_2.jpg'
];
}
    function initializeGalerieSWS() {
  const imageFilenamesSWS = appelimgSWS();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filtersSWS = document.getElementById('filtersSWS');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenamesSWS.forEach(filename => {
  const categorySWS = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[categorySWS]) categorized[categorySWS] = [];
  categorized[categorySWS].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenamesSWS.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filtersSWS button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filtersSWS.appendChild(btn);
  });

  function showImages(categorySWS) {
    gallery.innerHTML = '';
    categorized[categorySWS].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
    function appelimgSWS() {
  return [
   
 

      // Bandes
 'bandes/bandes_8.jpg',
     'bandes/bandes_9.jpg', 'bandes/bandes_10.jpg', 'bandes/bandes_11.jpg', 'bandes/bandes_12.jpg', 'bandes/bandes_14.jpg', 'bandes/bandes_15.jpg',
 
     // Décors
  'décors/décors_2.jpg', 'décors/décors_12.jpg', 'décors/décors_13.jpg'
];
}
    function initializeGalerie40k() {
  const imageFilenames40k = appelimg40k();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filters40k = document.getElementById('filters40k');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenames40k.forEach(filename => {
  const category40k = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[category40k]) categorized[category40k] = [];
  categorized[category40k].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenames40k.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filters40k button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filters40k.appendChild(btn);
  });

  function showImages(category40k) {
    gallery.innerHTML = '';
    categorized[category40k].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
    function appelimg40k() {
  return [
   
   // Monstres
  'monstres/monstres_5.jpg', 'monstres/monstres_10.jpg', 'monstres/monstres_6.jpg', 'monstres/monstres_12.jpg', 'monstres/monstres_19.jpg',
   'monstres/monstres_17.jpg',

     // Bandes
  'bandes/bandes_5.jpg',
     // Armées
   'armées/armées_2.jpg', 'armées/armées_6.jpg', 'armées/armées_4.jpg', 
  // Titans
   'titans/titans_1.jpg', 'titans/titans_2.jpg', 'titans/titans_3.jpg', 'titans/titans_4.jpg',
      'titans/titans_5.jpg', 'titans/titans_6.jpg', 'titans/titans_7.jpg',   'titans/titans_8.jpg', 'titans/titans_9.jpg', 'titans/titans_12.jpg', 
     // Décors
  'décors/décors_4.jpg','décors/décors_9.jpg','décors/décors_14.jpg','décors/décors_15.jpg',
  // Cavalerie
  'cavaleries/cavaleries_13.jpg', 'cavaleries/cavaleries_15.jpg', 
  // Véhicules
  'vehicules/vehicules_7.jpg', 'vehicules/vehicules_5.jpg', 'vehicules/vehicules_3.jpg', 'vehicules/vehicules_6.jpg', 'vehicules/vehicules_9.jpg',
  'vehicules/vehicules_10.jpg', 'vehicules/vehicules_11.jpg', 'vehicules/vehicules_12.jpg', 'vehicules/vehicules_13.jpg', 'vehicules/vehicules_14.jpg',
  'vehicules/vehicules_15.jpg','vehicules/vehicules_16.jpg','vehicules/vehicules_17.jpg',
'vehicules/vehicules_18.jpg', 'vehicules/vehicules_19.jpg', 'vehicules/vehicules_20.jpg', 'vehicules/vehicules_25.jpg',


  // Infanterie
  'infanteries/infanteries_1.jpg', 'infanteries/infanteries_3.jpg', 
  'infanteries/infanteries_8.jpg',
  'infanteries/infanteries_11.jpg', 'infanteries/infanteries_13.jpg', 
 'infanteries/infanteries_18.jpg', 'infanteries/infanteries_19.jpg', 'infanteries/infanteries_20.jpg',
  'infanteries/infanteries_21.jpg', 'infanteries/infanteries_22.jpg', 'infanteries/infanteries_23.jpg',  'infanteries/infanteries_24.jpg', 
   'infanteries/infanteries_25.jpg', 'infanteries/infanteries_26.jpg', 'infanteries/infanteries_28.jpg',
 'infanteries/infanteries_30.jpg', 
  'infanteries/infanteries_33.jpg',
 'infanteries/infanteries_44.jpg',  'infanteries/infanteries_45.jpg', 'infanteries/infanteries_41.jpg',
 'infanteries/infanteries_49.jpg', 
  // Personnages
  'personnages/personnages_4.jpg', 'personnages/personnages_2.jpg', 'personnages/personnages_7.jpg', 'personnages/personnages_14.jpg',
  'personnages/personnages_12.jpg', 'personnages/personnages_19.jpg', 'personnages/personnages_24.jpg', 'personnages/personnages_20.jpg', 'personnages/personnages_25.jpg',
  'personnages/personnages_29.jpg', 'personnages/personnages_34.jpg', 'personnages/personnages_33.jpg', 'personnages/personnages_31.jpg', 
  'personnages/personnages_30.jpg', 'personnages/personnages_35.jpg', 'personnages/personnages_37.jpg', 'personnages/personnages_38.jpg'
];
}
    function initializeGalerieToW() {
  const imageFilenamesToW = appelimgToW();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filtersToW = document.getElementById('filtersToW');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenamesToW.forEach(filename => {
  const categoryToW = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[categoryToW]) categorized[categoryToW] = [];
  categorized[categoryToW].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenamesToW.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filtersToW button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filtersToW.appendChild(btn);
  });

  function showImages(categoryToW) {
    gallery.innerHTML = '';
    categorized[categoryToW].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
    function appelimgToW() {
  return [
   
   // Monstres
  'monstres/monstres_3.jpg', 'monstres/monstres_14.jpg', 'monstres/monstres_11.jpg', 
 
  // Titans
   'titans/titans_10.jpg',   'titans/titans_11.jpg', 
     // Décors
  'décors/décors_14.jpg', 'décors/décors_15.jpg', 'décors/décors_9.jpg',



  // Véhicules
  'vehicules/vehicules_4.jpg', 'vehicules/vehicules_8.jpg', 

  // Infanterie
  'infanteries/infanteries_9.jpg', 'infanteries/infanteries_6.jpg', 'infanteries/infanteries_27.jpg', 'infanteries/infanteries_35.jpg', 'infanteries/infanteries_46.jpg',
  'infanteries/infanteries_47.jpg', 'infanteries/infanteries_2.jpg', 

  // Personnages
  'personnages/personnages_6.jpg', 'personnages/personnages_23.jpg'
];
}

        function initializeGalerieStudio() {
  const imageFilenamesStudio = appelimgStudio();
  const basePath = 'img/';
  const gallery = document.getElementById('gallery');
  const filtersStudio = document.getElementById('filtersStudio');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const categorized = {};

 // Catégorisation automatique par dossier
imageFilenamesStudio.forEach(filename => {
  const categoryStudio = filename.split('/')[0]; // ← récupère le dossier avant le "/"
  if (!categorized[categoryStudio]) categorized[categoryStudio] = [];
  categorized[categoryStudio].push(basePath + filename);
});

  // Ajout de la catégorie "Tous"
  categorized['Tous'] = imageFilenamesStudio.map(f => basePath + f);

  // Création des boutons de filtre
  Object.keys(categorized).forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    if (cat === 'Tous') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filtersStudio button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showImages(cat);
    });
    filtersStudio.appendChild(btn);
  });

  function showImages(categoryStudio) {
    gallery.innerHTML = '';
    categorized[categoryStudio].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
       img.alt = "Miniature Studio Peinture Figurine";
      img.classList.add('gallery-img');
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = src;
      });
      gallery.appendChild(img);
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  // Affichage initial
  showImages('Tous');
}
    function appelimgStudio() {
  return [


   
  // Expo
  'jeuxvideo/expo_1.jpg', 'expo/expo_2.jpg', 'expo/expo_3.jpg', 'jeuxvideo/expo_4.jpg', 'jeuxvideo/expo_5.jpg',
  'expo/expo_6.jpg', 'manga/expo_7.jpg', 'jeuxvideo/expo_8.jpg', 'concours/expo_9.jpg',  'manga/expo_10.jpg', 'expo/expo_11.jpg', 'concours/expo_12.jpg', 'concours/expo_13.jpg', 'concours/expo_14.jpg',
  'expo/expo_15.jpg', 'jeuxvideo/expo_16.jpg', 'manga/expo_17.jpg', 'manga/expo_18.jpg',  'jeuxvideo/expo_19.jpg', 'jeuxvideo/expo_20.jpg', 'concours/expo_21.jpg','expo/expo_8.jpg'
];
}
