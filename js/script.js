let urlencours;
urlencours = "index.html";

function highlightLanguage(selectedId) {
    // Récupère tous les boutons
    const buttons = document.querySelectorAll('.language-selector button');
    
    buttons.forEach(btn => {
        if (btn.id === selectedId) {
            btn.classList.add('selected'); // surbrillance
        } else {
            btn.classList.remove('selected'); // gris
        }
    });
}

function ecriturl(url){
    urlencours=url;
}

function changelanguesimulateur() {
    const contenupagesimulateur = document.getElementById("contenupage-simulateur");
    if (!contenupagesimulateur) {
        return;
    }

    if (langueselect === "english") {
        contenupagesimulateur.innerHTML = `<h1>Request a Quote</h1>
     
<div class="form-container">
    <form id="contactForm" action="#" class="bg-white p-6 rounded-lg shadow-md">
        <fieldset>
            <legend>Contact Information</legend>
            <div class="form-group">
                <label for="nom">Last Name<span class="required">*</span></label>
                <input type="text" id="nom" name="nom" placeholder="Last Name" required>
            </div>
            <div class="form-group">
                <label for="prenom">First Name<span class="required">*</span></label>
                <input type="text" id="prenom" name="prenom" placeholder="First Name" required>
            </div>
            <div class="form-group">
                <label for="email">Email<span class="required">*</span></label>
                <input type="email" id="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <label for="telephone">Phone<span class="required">*</span></label>
                <input type="tel" id="telephone" name="telephone" placeholder="Phone" required>
            </div>
            <div class="form-group">
                <label for="adresse">Address<span class="required">*</span></label>
                <input type="text" id="adresse" name="adresse" placeholder="Address" required>
            </div>
            <div class="form-group">
                <label for="cp">Postal Code<span class="required">*</span></label>
                <input type="text" id="cp" name="cp" placeholder="Postal Code" required>
            </div>
            <div class="form-group">
                <label for="ville">City<span class="required">*</span></label>
                <input type="text" id="ville" name="ville" placeholder="City" required>
            </div>
            <div class="form-group">
                <label for="pays">Country <span class="required">*</span></label>
                <select id="pays" name="pays" required>
                    <option value="" disabled hidden>Select a country</option>
                    <option value="FRANCE" selected>France</option>
                    <option value="BELGIQUE">Belgium</option>
                    <option value="LUXEMBOURG">Luxembourg</option>
                    <option value="SPAIN">Spain</option>
                    <option value="GERMANY">Germany</option>
                    <option value="ENGLAND">England</option>
                    <option value="USA">USA</option>
                    <option value="Autre">Other (please specify)</option>
                </select>
            </div>
        </fieldset>

        <fieldset>
            <legend>My Request</legend>
            <div class="cardform">
                <label for="niveau">Painting Levels:</label><br>
                <p>Level 💸 Essential:<br> TableTop+, Quality combining efficiency and budget:<br> 🔍 Perfect for basic miniatures. (Our recommendation).<br><br></p>
                <p>Level ⭐ Advanced:<br> TableTop++, Higher quality reaching Advanced:<br> 🔍 Perfect to enhance gaming miniatures. (Our recommendation).<br><br></p>
                <p>Level 👑 Prestige:<br> TableTop+++, Superior plus Prestige quality:<br> 🎨 Each piece becomes a work of art. For main miniatures.<br><br></p>
                <p>Level 🎨 Studio:<br> ✨ Limited and reserved for enthusiasts seeking the best:<br> 🎨 For display collection.<br><br></p>
                <p>Basing is included.</p>
                <select id="niveau" class="select" name="niveau" required>
                    <option value="" disabled hidden>Select a level</option>
                    <option value="niveau0" selected>Essential Level - Basic TableTop 3 colors, Bronze equivalent (lvl2)</option>
                    <option value="niveau1">Advanced Level - TableTop+, Gold equivalent (lvl3)</option>
                    <option value="niveau2">Prestige Level - TableTop++, Diamond equivalent (lvl4)</option>
                    <option value="expo">Studio Level - Display piece for showcase</option>
                </select>
                <p><strong>Selected Level:</strong> <span id="afficheniveau"></span></p><br>
            </div>

            <div id="petiteinfanterie" class="cardform">
                <label for="petiteinfanterie-input">Number of <strong>Infantry 20-25mm bases</strong>:</label>
                <p>Example: Skinks, Dwarf Battle, Skeletons, Goblins, Plaguebearers...</p>
                <p>Unit Price: <span id="prixpetiteinfanterie">0.00</span> €</p>
                <p>Subtotal: <span id="totalpetiteinfanterie">0.00</span> €</p>
                <input type="number" id="petiteinfanterie-input" name="petiteinfanterie" min="0">
            </div>

            <div id="infanterie" class="cardform">
                <label for="infanterie-input">Number of <strong>Infantry 28-32mm bases</strong>:</label>
                <p>Example: Space Marines, Stormcast, Votann, Sisters of Battle, Eldar...</p>
                <p>Unit Price: <span id="prixinfanterie">0.00</span> €</p>
                <p>Subtotal: <span id="totalinfanterie">0.00</span> €</p>
                <input type="number" id="infanterie-input" name="infanterie" min="0">
            </div>

            <div id="infanterieelite" class="cardform">
                <label for="infanterieelite-input">Number of <strong>Elite Infantry 40-50mm bases</strong>:</label>
                <p>Example: Terminators, Custodes, Kroxigors, Tyranid Warriors...</p>
                <p>Unit Price: <span id="prixinfanterieelite">0.00</span> €</p>
                <p>Subtotal: <span id="totalinfanterieelite">0.00</span> €</p>
                <input type="number" id="infanterieelite-input" name="infanterieelite" min="0">
            </div>

            <div id="personnage" class="cardform">
                <label for="personnage-input">Number of <strong>Foot Characters 25-32mm bases</strong>:</label>
                <p>Example: Captain/Sergeant Space Marines, Sorcerer...</p>
                <p>Unit Price: <span id="prixpersonnage">0.00</span> €</p>
                <p>Subtotal: <span id="totalpersonnage">0.00</span> €</p>
                <input type="number" id="personnage-input" name="personnage" min="0">
            </div>

            <div id="personnageelite" class="cardform">
                <label for="personnageelite-input">Number of <strong>Elite Foot Characters 40-50mm bases</strong>:</label>
                <p>Example: Captain/Sergeant Space Marines in Phobos armor, Sorcerer in Terminator armor</p>
                <p>Unit Price: <span id="prixpersonnageelite">0.00</span> €</p>
                <p>Subtotal: <span id="totalpersonnageelite">0.00</span> €</p>
                <input type="number" id="personnageelite-input" name="personnageelite" min="0">
            </div>

            <div id="personnagemonstrueux" class="cardform">
                <label for="personnagemonstrueux-input">Number of <strong>Monstrous Characters 60-100mm bases</strong>:</label>
                <p>Example: Primarchs, Treelord, Tyranid Prince...</p>
                <p>Unit Price: <span id="prixpersonnagemonstrueux">0.00</span> €</p>
                <p>Subtotal: <span id="totalpersonnagemonstrueux">0.00</span> €</p>
                <input type="number" id="personnagemonstrueux-input" name="personnagemonstrueux" min="0">
            </div>

            <div id="personnagesurmonstre" class="cardform">
                <label for="personnagesurmonstre-input">Number of <strong>Characters on Monsters 120mm oval bases</strong>:</label>
                <p>Example: MetaRider, Idoneth Turtle, Saurus on Carnosaurs...</p>
                <p>Unit Price: <span id="prixpersonnagesurmonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totalpersonnagesurmonstre">0.00</span> €</p>
                <input type="number" id="personnagesurmonstre-input" name="personnagesurmonstre" min="0">
            </div>

            <div id="personnagesurgrandmonstre" class="cardform">
                <label for="personnagesurgrandmonstre-input">Number of <strong>Characters on Large Monsters 130-160mm bases or larger</strong>:</label>
                <p>Example: Allareille, Stormcast Dragon, Crocodile Dragon...</p>
                <p>Unit Price: <span id="prixpersonnagesurgrandmonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totalpersonnagesurgrandmonstre">0.00</span> €</p>
                <input type="number" id="personnagesurgrandmonstre-input" name="personnagesurgrandmonstre" min="0">
            </div>

            <div id="cavalerie" class="cardform">
                <label for="cavalerie-input">Number of <strong>Cavalry 60-75mm oval bases</strong>:</label>
                <p>Example: Eldar Bikes, Idoneth Mermen, Skeleton Cavalry...</p>
                <p>Unit Price: <span id="prixcavalerie">0.00</span> €</p>
                <p>Subtotal: <span id="totalcavalerie">0.00</span> €</p>
                <input type="number" id="cavalerie-input" name="cavalerie" min="0">
            </div>

            <div id="cavalerielourde" class="cardform">
                <label for="cavalerielourde-input">Number of <strong>Heavy Cavalry 90-105mm oval bases</strong>:</label>
                <p>Example: Custodes Bikes, Saurus on Aggradon, Idoneth Shark...</p>
                <p>Unit Price: <span id="prixcavalerielourde">0.00</span> €</p>
                <p>Subtotal: <span id="totalcavalerielourde">0.00</span> €</p>
                <input type="number" id="cavalerielourde-input" name="cavalerielourde" min="0">
            </div>

            <div id="petitvehiculemonstre" class="cardform">
                <label for="petitvehiculemonstre-input">Number of <strong>Small Vehicles/Monsters 75-90mm oval bases</strong>:</label>
                <p>Example: Sentinel, Nurgle Beast, Drone...</p>
                <p>Unit Price: <span id="prixpetitvehiculemonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totalpetitvehiculemonstre">0.00</span> €</p>
                <input type="number" id="petitvehiculemonstre-input" name="petitvehiculemonstre" min="0">
            </div>

            <div id="vehiculemonstremoyen" class="cardform">
                <label for="vehiculemonstremoyen-input">Number of <strong>Medium Vehicles/Monsters 80-100mm bases</strong>:</label>
                <p>Example: Rhino, Dreadnought, Drone...</p>
                <p>Unit Price: <span id="prixvehiculemonstremoyen">0.00</span> €</p>
                <p>Subtotal: <span id="totalvehiculemonstremoyen">0.00</span> €</p>
                <input type="number" id="vehiculemonstremoyen-input" name="vehiculemonstremoyen" min="0">
            </div>

            <div id="grosvehiculemonstre" class="cardform">
                <label for="grosvehiculemonstre-input">Number of <strong>Large Vehicles/Monsters 90-100mm bases or larger</strong>:</label>
                <p>Example: Predator, Plague Burst, Demon Prince, Armingers, Mancrusher...</p>
                <p>Unit Price: <span id="prixgrosvehiculemonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totalgrosvehiculemonstre">0.00</span> €</p>
                <input type="number" id="grosvehiculemonstre-input" name="grosvehiculemonstre" min="0">
            </div>

            <div id="enormevehiculemonstre" class="cardform">
                <label for="enormevehiculemonstre-input">Number of <strong>Huge Vehicles/Monsters 130-160mm bases or larger</strong>:</label>
                <p>Example: Land Raider, Defiler, Aerodyne...</p>
                <p>Unit Price: <span id="prixenormevehiculemonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totalenormevehiculemonstre">0.00</span> €</p>
                <input type="number" id="enormevehiculemonstre-input" name="enormevehiculemonstre" min="0">
            </div>

            <div id="titanvehiculemonstre" class="cardform">
                <label for="titanvehiculemonstre-input">Number of <strong>Titanic Vehicles/Monsters 170mm bases</strong>:</label>
                <p>Example: Spartan, Imperial Knight, Mega Gargant...</p>
                <p>Unit Price: <span id="prixtitanvehiculemonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totaltitanvehiculemonstre">0.00</span> €</p>
                <input type="number" id="titanvehiculemonstre-input" name="titanvehiculemonstre" min="0">
            </div>

            <div id="montage" class="cardform">
                <label for="montage-input"><strong>Assembly</strong> required?</label>
                <select id="montage-input" name="montage">
                    <option value="Oui" selected>Yes</option>
                    <option value="Non">No</option>
                </select>
            </div>

            <div id="aimant" class="cardform">
                <label for="aimant-input"><strong>Magnet</strong> required?</label>
                <select id="aimant-input" name="aimant">
                    <option value="Oui">Yes</option>
                    <option value="Non" selected>No</option>
                </select>
            </div>

            <div id="total" class="cardform">
                <h1 class="total"><span id="oktotal">0.00</span></h1>
                <div id="comparative-table"></div>
                <div id="niveau-sup"></div>
            </div>

            <div id="message" class="cardform">
                <label for="message-input">To be as precise as possible,<br>Please provide the list of miniatures to paint, whether assembly is needed,<br>and if you have a theme or color scheme already defined: <span class="required">*</span></label>
                <textarea id="message-input" name="message" placeholder="Your message" required></textarea>
            </div>

            <p><span class="required">*</span> Required fields</p>
        </fieldset>

        <div class="banniere">
            <button type="submit" class="button">Send request by email</button>
        </div>   
    </form>
</div>
`;
}
    if (langueselect === "spanish") {
        contenupagesimulateur.innerHTML = `<h1>Solicitud de Presupuesto</h1>
     
<div class="form-container">
    <form id="contactForm" action="#" class="bg-white p-6 rounded-lg shadow-md">
        <fieldset>
            <legend>Información de Contacto</legend>
            <div class="form-group">
                <label for="nom">Apellido<span class="required">*</span></label>
                <input type="text" id="nom" name="nom" placeholder="Apellido" required>
            </div>
            <div class="form-group">
                <label for="prenom">Nombre<span class="required">*</span></label>
                <input type="text" id="prenom" name="prenom" placeholder="Nombre" required>
            </div>
            <div class="form-group">
                <label for="email">Correo electrónico<span class="required">*</span></label>
                <input type="email" id="email" name="email" placeholder="Correo electrónico" required>
            </div>
            <div class="form-group">
                <label for="telephone">Teléfono<span class="required">*</span></label>
                <input type="tel" id="telephone" name="telephone" placeholder="Teléfono" required>
            </div>
            <div class="form-group">
                <label for="adresse">Dirección<span class="required">*</span></label>
                <input type="text" id="adresse" name="adresse" placeholder="Dirección" required>
            </div>
            <div class="form-group">
                <label for="cp">Código Postal<span class="required">*</span></label>
                <input type="text" id="cp" name="cp" placeholder="Código Postal" required>
            </div>
            <div class="form-group">
                <label for="ville">Ciudad<span class="required">*</span></label>
                <input type="text" id="ville" name="ville" placeholder="Ciudad" required>
            </div>
            <div class="form-group">
                <label for="pays">País <span class="required">*</span></label>
                <select id="pays" name="pays" required>
                    <option value="" disabled hidden>Seleccione un país</option>
                    <option value="FRANCE" selected>Francia</option>
                    <option value="BELGIQUE">Bélgica</option>
                    <option value="LUXEMBOURG">Luxemburgo</option>
                    <option value="SPAIN">España</option>
                    <option value="GERMANY">Alemania</option>
                    <option value="ENGLAND">Inglaterra</option>
                    <option value="USA">EE. UU.</option>
                    <option value="Autre">Otro (por favor especifique)</option>
                </select>
            </div>
        </fieldset>

        <fieldset>
            <legend>Mi Solicitud</legend>
            <div class="cardform">
                <label for="niveau">Niveles de Pintura:</label><br>
                <p>Nivel 💸 Esencial:<br> TableTop+, Calidad combinando eficiencia y presupuesto:<br> 🔍 Perfecto para miniaturas básicas. (Nuestra recomendación).<br><br></p>
                <p>Nivel ⭐ Avanzado:<br> TableTop++, Calidad superior para nivel Avanzado:<br> 🔍 Perfecto para resaltar miniaturas de juego. (Nuestra recomendación).<br><br></p>
                <p>Nivel 👑 Prestigio:<br> TableTop+++, Calidad superior + Prestigio:<br> 🎨 Cada pieza se convierte en una obra de arte. Para miniaturas principales.<br><br></p>
                <p>Nivel 🎨 Estudio:<br> ✨ Limitado y reservado para aficionados que buscan lo mejor:<br> 🎨 Para colecciones de vitrina.<br><br></p>
                <p>El basamento está incluido.</p>
                <select id="niveau" class="select" name="niveau" required>
                    <option value="" disabled hidden>Seleccione un nivel</option>
                    <option value="niveau0" selected>Nivel Esencial - TableTop básico 3 colores, equivalente a Bronce (niv2)</option>
                    <option value="niveau1">Nivel Avanzado - TableTop+, equivalente a Oro (niv3)</option>
                    <option value="niveau2">Nivel Prestigio - TableTop++, equivalente a Diamante (niv4)</option>
                    <option value="expo">Nivel Estudio - Pieza de exhibición para vitrina</option>
                </select>
                <p><strong>Nivel seleccionado:</strong> <span id="afficheniveau"></span></p><br>
            </div>

            <div id="petiteinfanterie" class="cardform">
                <label for="petiteinfanterie-input">Número de <strong>Infantería bases 20-25mm</strong>:</label>
                <p>Ejemplo: Skinks, Enanos de Batalla, Esqueletos, Goblins, Plagueros...</p>
                <p>Precio unitario: <span id="prixpetiteinfanterie">0.00</span> €</p>
                <p>Subtotal: <span id="totalpetiteinfanterie">0.00</span> €</p>
                <input type="number" id="petiteinfanterie-input" name="petiteinfanterie" min="0">
            </div>

            <div id="infanterie" class="cardform">
                <label for="infanterie-input">Número de <strong>Infantería bases 28-32mm</strong>:</label>
                <p>Ejemplo: Marines Espaciales, Stormcast, Votann, Hermanas de Batalla, Eldar...</p>
                <p>Precio unitario: <span id="prixinfanterie">0.00</span> €</p>
                <p>Subtotal: <span id="totalinfanterie">0.00</span> €</p>
                <input type="number" id="infanterie-input" name="infanterie" min="0">
            </div>

            <div id="infanterieelite" class="cardform">
                <label for="infanterieelite-input">Número de <strong>Infantería Élite bases 40-50mm</strong>:</label>
                <p>Ejemplo: Terminators, Custodes, Kroxigors, Guerreros Tyranid...</p>
                <p>Precio unitario: <span id="prixinfanterieelite">0.00</span> €</p>
                <p>Subtotal: <span id="totalinfanterieelite">0.00</span> €</p>
                <input type="number" id="infanterieelite-input" name="infanterieelite" min="0">
            </div>

            <div id="personnage" class="cardform">
                <label for="personnage-input">Número de <strong>Personajes a pie bases 25-32mm</strong>:</label>
                <p>Ejemplo: Capitán/Sargento Marines Espaciales, Hechicero...</p>
                <p>Precio unitario: <span id="prixpersonnage">0.00</span> €</p>
                <p>Subtotal: <span id="totalpersonnage">0.00</span> €</p>
                <input type="number" id="personnage-input" name="personnage" min="0">
            </div>

            <div id="personnageelite" class="cardform">
                <label for="personnageelite-input">Número de <strong>Personajes Élite a pie bases 40-50mm</strong>:</label>
                <p>Ejemplo: Capitán/Sargento Marines Espaciales en armadura Phobos, Hechicero en armadura Terminator</p>
                <p>Precio unitario: <span id="prixpersonnageelite">0.00</span> €</p>
                <p>Subtotal: <span id="totalpersonnageelite">0.00</span> €</p>
                <input type="number" id="personnageelite-input" name="personnageelite" min="0">
            </div>

            <div id="personnagemonstrueux" class="cardform">
                <label for="personnagemonstrueux-input">Número de <strong>Personajes Monstruosos bases 60-100mm</strong>:</label>
                <p>Ejemplo: Primarcas, Treelord, Príncipe Tyranid...</p>
                <p>Precio unitario: <span id="prixpersonnagemonstrueux">0.00</span> €</p>
                <p>Subtotal: <span id="totalpersonnagemonstrueux">0.00</span> €</p>
                <input type="number" id="personnagemonstrueux-input" name="personnagemonstrueux" min="0">
            </div>

            <div id="personnagesurmonstre" class="cardform">
                <label for="personnagesurmonstre-input">Número de <strong>Personajes sobre Monstruos bases ovaladas 120mm</strong>:</label>
                <p>Ejemplo: MetaRider, Tortuga Idoneth, Saurus sobre Carnosaurio...</p>
                <p>Precio unitario: <span id="prixpersonnagesurmonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totalpersonnagesurmonstre">0.00</span> €</p>
                <input type="number" id="personnagesurmonstre-input" name="personnagesurmonstre" min="0">
            </div>

            <div id="personnagesurgrandmonstre" class="cardform">
                <label for="personnagesurgrandmonstre-input">Número de <strong>Personajes sobre Grandes Monstruos bases 130-160mm o mayores</strong>:</label>
                <p>Ejemplo: Allareille, Dragón Stormcast, Dragón Cocodrilo...</p>
                <p>Precio unitario: <span id="prixpersonnagesurgrandmonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totalpersonnagesurgrandmonstre">0.00</span> €</p>
                <input type="number" id="personnagesurgrandmonstre-input" name="personnagesurgrandmonstre" min="0">
            </div>

            <div id="cavalerie" class="cardform">
                <label for="cavalerie-input">Número de <strong>Caballería bases ovaladas 60-75mm</strong>:</label>
                <p>Ejemplo: Motos Eldar, Murenas Idoneth, Caballería esqueletos...</p>
                <p>Precio unitario: <span id="prixcavalerie">0.00</span> €</p>
                <p>Subtotal: <span id="totalcavalerie">0.00</span> €</p>
                <input type="number" id="cavalerie-input" name="cavalerie" min="0">
            </div>

            <div id="cavalerielourde" class="cardform">
                <label for="cavalerielourde-input">Número de <strong>Caballería Pesada bases ovaladas 90-105mm</strong>:</label>
                <p>Ejemplo: Motos Custodes, Saurus sobre Aggradon, Tiburón Idoneth...</p>
                <p>Precio unitario: <span id="prixcavalerielourde">0.00</span> €</p>
                <p>Subtotal: <span id="totalcavalerielourde">0.00</span> €</p>
                <input type="number" id="cavalerielourde-input" name="cavalerielourde" min="0">
            </div>

            <div id="petitvehiculemonstre" class="cardform">
                <label for="petitvehiculemonstre-input">Número de <strong>Pequeños Vehículos/Monstruos bases ovaladas 75-90mm</strong>:</label>
                <p>Ejemplo: Sentinel, Bestia de Nurgle, Drone...</p>
                <p>Precio unitario: <span id="prixpetitvehiculemonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totalpetitvehiculemonstre">0.00</span> €</p>
                <input type="number" id="petitvehiculemonstre-input" name="petitvehiculemonstre" min="0">
            </div>

            <div id="vehiculemonstremoyen" class="cardform">
                <label for="vehiculemonstremoyen-input">Número de <strong>Vehículos/Monstruos Medianos bases 80-100mm</strong>:</label>
                <p>Ejemplo: Rhino, Dreadnought, Drone...</p>
                <p>Precio unitario: <span id="prixvehiculemonstremoyen">0.00</span> €</p>
                <p>Subtotal: <span id="totalvehiculemonstremoyen">0.00</span> €</p>
                <input type="number" id="vehiculemonstremoyen-input" name="vehiculemonstremoyen" min="0">
            </div>

            <div id="grosvehiculemonstre" class="cardform">
                <label for="grosvehiculemonstre-input">Número de <strong>Grandes Vehículos/Monstruos bases 90-100mm o mayores</strong>:</label>
                <p>Ejemplo: Predator, Plague Burst, Príncipe Demonio, Armingers, Mancrusher...</p>
                <p>Precio unitario: <span id="prixgrosvehiculemonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totalgrosvehiculemonstre">0.00</span> €</p>
                <input type="number" id="grosvehiculemonstre-input" name="grosvehiculemonstre" min="0">
            </div>

            <div id="enormevehiculemonstre" class="cardform">
                <label for="enormevehiculemonstre-input">Número de <strong>Enormes Vehículos/Monstruos bases 130-160mm o mayores</strong>:</label>
                <p>Ejemplo: Land Raider, Defiler, Aerodyne...</p>
                <p>Precio unitario: <span id="prixenormevehiculemonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totalenormevehiculemonstre">0.00</span> €</p>
                <input type="number" id="enormevehiculemonstre-input" name="enormevehiculemonstre" min="0">
            </div>

            <div id="titanvehiculemonstre" class="cardform">
                <label for="titanvehiculemonstre-input">Número de <strong>Vehículos/Monstruos Titanes bases 170mm</strong>:</label>
                <p>Ejemplo: Spartan, Imperial Knight, Mega Gargant...</p>
                <p>Precio unitario: <span id="prixtitanvehiculemonstre">0.00</span> €</p>
                <p>Subtotal: <span id="totaltitanvehiculemonstre">0.00</span> €</p>
                <input type="number" id="titanvehiculemonstre-input" name="titanvehiculemonstre" min="0">
            </div>

            <div id="montage" class="cardform">
                <label for="montage-input"><strong>Montaje</strong> requerido?</label>
                <select id="montage-input" name="montage">
                    <option value="Oui" selected>Sí</option>
                    <option value="Non">No</option>
                </select>
            </div>

            <div id="aimant" class="cardform">
                <label for="aimant-input"><strong>Imán</strong> requerido?</label>
                <select id="aimant-input" name="aimant">
                    <option value="Oui">Sí</option>
                    <option value="Non" selected>No</option>
                </select>
            </div>

            <div id="total" class="cardform">
                <h1 class="total"><span id="oktotal">0.00</span></h1>
                <div id="comparative-table"></div>
                <div id="niveau-sup"></div>
            </div>

            <div id="message" class="cardform">
                <label for="message-input">Para ser lo más preciso posible,<br>Por favor, indique la lista de miniaturas a pintar, si se necesita montaje,<br>y si ya tiene un tema o esquema de colores definido: <span class="required">*</span></label>
                <textarea id="message-input" name="message" placeholder="Su mensaje" required></textarea>
            </div>

            <p><span class="required">*</span> Campos obligatorios</p>
        </fieldset>

        <div class="banniere">
            <button type="submit" class="button">Enviar solicitud por correo</button>
        </div>   
    </form>
</div>
`;
}
    if (langueselect === "french") {
        contenupagesimulateur.innerHTML = ` <h1>Demande de Devis</h1>
     
           <div class="form-container">
        <form id="contactForm" action="#" class="bg-white p-6 rounded-lg shadow-md">
            <fieldset>
                <legend>Coordonnées</legend>
                <div class="form-group">
                    <label for="nom">Nom<span class="required">*</span></label>
                    <input type="text" id="nom" name="nom" placeholder="Nom" required>
                </div>
                <div class="form-group">
                    <label for="prenom">Prénom<span class="required">*</span></label>
                    <input type="text" id="prenom" name="prenom" placeholder="Prénom" required>
                </div>
                <div class="form-group">
                    <label for="email">Email<span class="required">*</span></label>
                    <input type="email" id="email" name="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <label for="telephone">Téléphone<span class="required">*</span></label>
                    <input type="tel" id="telephone" name="telephone" placeholder="Téléphone" required>
                </div>
                <div class="form-group">
                    <label for="adresse">Adresse<span class="required">*</span></label>
                    <input type="text" id="adresse" name="adresse" placeholder="Adresse" required>
                </div>
                <div class="form-group">
                    <label for="cp">Code Postal<span class="required">*</span></label>
                    <input type="text" id="cp" name="cp" placeholder="Code Postal" required>
                </div>
                <div class="form-group">
                    <label for="ville">Ville<span class="required">*</span></label>
                    <input type="text" id="ville" name="ville" placeholder="Ville" required>
                </div>
                <div class="form-group">
                    <label for="pays">Pays <span class="required">*</span></label>
                    <select id="pays" name="pays" required>
                        <option value="" disabled hidden>Choisissez un pays</option>
                        <option value="FRANCE" selected>France</option>
                        <option value="BELGIQUE">Belgique</option>
                        <option value="LUXEMBOURG">Luxembourg</option>
                        <option value="SPAIN">SPAIN</option>
                        <option value="GERMANY">Germany</option>
                        <option value="ENGLAND">England</option>
                        <option value="USA">USA</option>
                        <option value="Autre">Autre (merci de préciser)</option>
                    </select>
                </div>
            </fieldset>
     

                <fieldset>
                    <legend>Ma demande</legend>
                    <div class="cardform">
                        <label for="niveau">Niveaux de Peinture :</label><br>
                        <p>Niveau 💸 Essentiel :<br> TableTop+, Qualité alliant efficacité et budget :<br> 🔍 Parfait pour les figurines de base. (Notre recommendation).<br><br></p>
                        <p>Niveau ⭐ Approfondi :<br> TableTop++, Qualité supérieur qui va à l'Approfondi :<br> 🔍 Parfait pour valoriser les figurines de jeu. (Notre recommendation).<br><br></p>
                        <p>Niveau 👑 Prestige :<br> TableTop+++, Qualité supérieur plus Prestige :<br> 🎨 Chaque pièce devient une œuvre d’art. Pour les pièces principales.<br><br></p>
                        <p>Niveau 🎨 Studio :<br> ✨ Limitée et réservée aux passionnés souhaitant le meilleur:<br> 🎨 Pour la collection en vitrine.<br><br></p>
                        <p>Le soclage est inclus.</p>
                        <select id="niveau" class="select" name="niveau" required>
                            <option value="" disabled hidden>Choisissez un niveau</option>
                            <option value="niveau0" selected>Niveau Essentiel - TableTop basique 3 couleurs, équivalent Bronze (niv2)</option>
                            <option value="niveau1" >Niveau Approfondi - TableTop+, équivalent Gold (niv3)</option>
                            <option value="niveau2">Niveau Prestige - TableTop++, équivalent Diamond (niv4)</option>
                            <option value="expo">Niveau Studio - Pièce d'exposition pour vitrine</option>
                        </select>
                        <p><strong>Niveau sélectionné :</strong> <span id="afficheniveau"></span></p><br>
                    </div>

                    <div id="petiteinfanterie" class="cardform">
                        <label for="petiteinfanterie-input">Nombre de <strong>Infanteries socle 20-25mm</strong> :</label>
                        <p>Exemple : Skinks, Nains Battle, Squelettes, Gobelins, Veroleux...</p>
                        <p>Prix unitaire : <span id="prixpetiteinfanterie">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpetiteinfanterie">0.00</span> €</p>
                        <input type="number" id="petiteinfanterie-input" name="petiteinfanterie" min="0">
                    </div>

                    <div id="infanterie" class="cardform">
                        <label for="infanterie-input">Nombre d'<strong>Infanteries socle 28-32mm</strong> :</label>
                        <p>Exemple : Space Marines, Stormcast, Votann, Soeurs de Bataille, Eldar...</p>
                        <p>Prix unitaire : <span id="prixinfanterie">0.00</span> €</p>
                        <p>Sous Total : <span id="totalinfanterie">0.00</span> €</p>
                        <input type="number" id="infanterie-input" name="infanterie" min="0">
                    </div>

                    <div id="infanterieelite" class="cardform">
                        <label for="infanterieelite-input">Nombre d'<strong>Infanteries élite socle 40-50mm</strong> :</label>
                        <p>Exemple : Terminators, Custodes, Kroxigors, Guerriers Tyranid...</p>
                        <p>Prix unitaire : <span id="prixinfanterieelite">0.00</span> €</p>
                        <p>Sous Total : <span id="totalinfanterieelite">0.00</span> €</p>
                        <input type="number" id="infanterieelite-input" name="infanterieelite" min="0">
                    </div>

                    <div id="personnage" class="cardform">
                        <label for="personnage-input">Nombre de <strong>Personnages à Pied socle 25-32mm</strong> :</label>
                        <p>Exemple : Capitaine/Sergeant Space Marines, Sorcier...</p>
                        <p>Prix unitaire : <span id="prixpersonnage">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpersonnage">0.00</span> €</p>
                        <input type="number" id="personnage-input" name="personnage" min="0">
                    </div>

                    <div id="personnageelite" class="cardform">
                        <label for="personnageelite-input">Nombre de <strong>Personnages élite à Pied socle 40-50mm</strong> :</label>
                        <p>Exemple : Capitaine/Sergeant Space Marines en armure Phobos, Sorcier armure terminator</p>
                        <p>Prix unitaire : <span id="prixpersonnageelite">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpersonnageelite">0.00</span> €</p>
                        <input type="number" id="personnageelite-input" name="personnageelite" min="0">
                    </div>

                    <div id="personnagemonstrueux" class="cardform">
                        <label for="personnagemonstrueux-input">Nombre de <strong>Personnages Monstrueux socle 60-100mm</strong> :</label>
                        <p>Exemple : Primarques, Treelord, Prince Tyranid...</p>
                        <p>Prix unitaire : <span id="prixpersonnagemonstrueux">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpersonnagemonstrueux">0.00</span> €</p>
                        <input type="number" id="personnagemonstrueux-input" name="personnagemonstrueux" min="0">
                    </div>

                    <div id="personnagesurmonstre" class="cardform">
                        <label for="personnagesurmonstre-input">Nombre de <strong>Personnages sur Monstres socle 120mm ovale</strong> :</label>
                        <p>Exemple : MetaRodeur, Tortue Idoneth, Saurus sur Carnosaure...</p>
                        <p>Prix unitaire : <span id="prixpersonnagesurmonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpersonnagesurmonstre">0.00</span> €</p>
                        <input type="number" id="personnagesurmonstre-input" name="personnagesurmonstre" min="0">
                    </div>

                    <div id="personnagesurgrandmonstre" class="cardform">
                        <label for="personnagesurgrandmonstre-input">Nombre de <strong>Personnages sur Grand Monstres socle 130-160mm ou supérieur</strong> :</label>
                        <p>Exemple : Allareille, Dragon Stormcast, Dragon Crocodile...</p>
                        <p>Prix unitaire : <span id="prixpersonnagesurgrandmonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpersonnagesurgrandmonstre">0.00</span> €</p>
                        <input type="number" id="personnagesurgrandmonstre-input" name="personnagesurgrandmonstre" min="0">
                    </div>

                    <div id="cavalerie" class="cardform">
                        <label for="cavalerie-input">Nombre de <strong>Cavaleries socle ovale 60-75mm</strong> :</label>
                        <p>Exemple : Motos Eldar, Murènes Idoneth, Cavalerie squelettes...</p>
                        <p>Prix unitaire : <span id="prixcavalerie">0.00</span> €</p>
                        <p>Sous Total : <span id="totalcavalerie">0.00</span> €</p>
                        <input type="number" id="cavalerie-input" name="cavalerie" min="0">
                    </div>

                    <div id="cavalerielourde" class="cardform">
                        <label for="cavalerielourde-input">Nombre de <strong>Cavaleries lourdes socle ovale 90-105mm</strong> :</label>
                        <p>Exemple : Motos Custodes, Saurus sur Aggradon, Requin Idoneth...</p>
                        <p>Prix unitaire : <span id="prixcavalerielourde">0.00</span> €</p>
                        <p>Sous Total : <span id="totalcavalerielourde">0.00</span> €</p>
                        <input type="number" id="cavalerielourde-input" name="cavalerielourde" min="0">
                    </div>

                    <div id="petitvehiculemonstre" class="cardform">
                        <label for="petitvehiculemonstre-input">Nombre de <strong>Petit Véhicules/Monstres socle ovale 75-90mm</strong> :</label>
                        <p>Exemple : Sentinel, Bête de Nurgle, Drone...</p>
                        <p>Prix unitaire : <span id="prixpetitvehiculemonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpetitvehiculemonstre">0.00</span> €</p>
                        <input type="number" id="petitvehiculemonstre-input" name="petitvehiculemonstre" min="0">
                    </div>

                    <div id="vehiculemonstremoyen" class="cardform">
                        <label for="vehiculemonstremoyen-input">Nombre de <strong>Véhicules/Monstres Moyen socle 80-100mm</strong> :</label>
                        <p>Exemple : Rhino, Dreadnought, Drone...</p>
                        <p>Prix unitaire : <span id="prixvehiculemonstremoyen">0.00</span> €</p>
                        <p>Sous Total : <span id="totalvehiculemonstremoyen">0.00</span> €</p>
                        <input type="number" id="vehiculemonstremoyen-input" name="vehiculemonstremoyen" min="0">
                    </div>

                    <div id="grosvehiculemonstre" class="cardform">
                        <label for="grosvehiculemonstre-input">Nombre de <strong>Gros Véhicules/Monstres socle 90-100mm ou supérieur</strong> :</label>
                        <p>Exemple : Prédator, Plague Burst, Prince Démon, Armingers, Mancrusher...</p>
                        <p>Prix unitaire : <span id="prixgrosvehiculemonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totalgrosvehiculemonstre">0.00</span> €</p>
                        <input type="number" id="grosvehiculemonstre-input" name="grosvehiculemonstre" min="0">
                    </div>

                    <div id="enormevehiculemonstre" class="cardform">
                        <label for="enormevehiculemonstre-input">Nombre de <strong>Énormes Véhicules/Monstres socle 130-160mm ou supérieur</strong> :</label>
                        <p>Exemple : Land Raider, Defiler, Aerodyne...</p>
                        <p>Prix unitaire : <span id="prixenormevehiculemonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totalenormevehiculemonstre">0.00</span> €</p>
                        <input type="number" id="enormevehiculemonstre-input" name="enormevehiculemonstre" min="0">
                    </div>

                    <div id="titanvehiculemonstre" class="cardform">
                        <label for="titanvehiculemonstre-input">Nombre de <strong>Véhicules/Monstres Titanesques socle 170mm</strong> :</label>
                        <p>Exemple : Spartan, Imperial Knight, Mega Gargant...</p>
                        <p>Prix unitaire : <span id="prixtitanvehiculemonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totaltitanvehiculemonstre">0.00</span> €</p>
                        <input type="number" id="titanvehiculemonstre-input" name="titanvehiculemonstre" min="0">
                    </div>

                    <div id="montage" class="cardform">
                        <label for="montage-input"><strong>Montage</strong> à prévoir ?</label>
                        <select id="montage-input" name="montage">
                            <option value="Oui" selected>Oui</option>
                            <option value="Non">Non</option>
                        </select>
                    </div>

                    <div id="aimant" class="cardform">
                        <label for="aimant-input"><strong>Aimant</strong> à prévoir ?</label>
                        <select id="aimant-input" name="aimant">
                            <option value="Oui">Oui</option>
                            <option value="Non" selected>Non</option>
                        </select>
                    </div>

                    <div id="total" class="cardform">
                        <h1 class="total"><span id="oktotal">0.00</span></h1>
                        <div id="comparative-table"></div>
                        <div id="niveau-sup"></div>
</div>
                           <div id="message" class="cardform">
                            <label for="message-input">Afin d'être le plus précis possible,<br>Merci de définir la liste de figurines à peindre, si le montage est nécessaire,<br>et si vous avez un thème ou schéma de couleurs déjà défini : <span class="required">*</span></label>
                            <textarea id="message-input" name="message" placeholder="Votre message" required></textarea>
                    </div>

                    <p><span class="required">*</span> Champs obligatoires</p>

                      
                </fieldset>
            <div class="banniere">
              <button type="submit" class="button">Envoyer la demande par mail</button>
                   </div>   
            </form>

          </div>`;
}
}
function changelanguegalerie() {
    const contenupagegalerie = document.getElementById("contenupage-galerie");
    if (!contenupagegalerie) {
        return;
    }

    if (langueselect === "english") {

               contenupagegalerie.innerHTML = `<h2 class="galerie-title">🎨 Miniature Art Gallery</h2>
<p class="galerie-description">
  ✨ Step into a world where every miniature becomes a work of art.
  <br>
  Through this gallery, I invite you to discover a realm of details 🖌️, textures 🧵, and emotions ❤️, crafted with brush and passion.
</p>
<p class="galerie-description">
  ⚔️ Whether it’s epic infantry, fantastical creatures 🐉, or titanic machines 🛡️, each piece tells a unique story 📖, captured in the frozen moment of painting.
</p>
<p class="galerie-description">
  👁️‍🗨️ Take your time to explore… and let yourself be inspired.
</p>

<div class="menugallery">   
  <div>
    <button class="moi" onclick="loadPage('galeriegeneral.html'); scrollToTop(); return false;">All Photos</button>
  </div>

  <div>
    <button class="studio" onclick="loadPage('galeriestudio.html'); scrollToTop(); return false;">Studio Painting</button>
  </div>

  <div>
    <button class="asoiaf" onclick="loadPage('song-of-ice-and-fire.html'); scrollToTop(); return false;">A Song of Ice and Fire</button>
  </div>

  <div>
    <button class="w40k" onclick="loadPage('warhammer-40k.html'); scrollToTop(); return false;">Warhammer 40K</button>
  </div>

  <div>
    <button class="hh" onclick="loadPage('horus-heresy.html'); scrollToTop(); return false;">The Horus Heresy</button>
  </div>

  <div>
    <button class="middle" onclick="loadPage('middle-earth.html'); scrollToTop(); return false;">Middle-Earth</button>
  </div>

  <div>
    <button class="aos" onclick="loadPage('age-of-sigmar.html'); scrollToTop(); return false;">Age of Sigmar</button>
  </div>

  <div>
    <button class="tow" onclick="loadPage('warhammer-old-world.html'); scrollToTop(); return false;">Warhammer: The Old World</button>
  </div>

  <div>
    <button class="bb" onclick="loadPage('blood-bowl.html'); scrollToTop(); return false;">Blood Bowl</button>
  </div>

  <div>
    <button class="swlegion" onclick="loadPage('star-wars-legion.html'); scrollToTop(); return false;">Star Wars Legion</button>
  </div>

  <div>
    <button class="swshatterpoint" onclick="loadPage('star-wars-shatterpoint.html'); scrollToTop(); return false;">Star Wars Shatterpoint</button>
  </div>

  <div>
    <button class="marvel" onclick="loadPage('marvel-crisis-protocol.html'); scrollToTop(); return false;">Marvel Crisis Protocol</button>
  </div>
</div>
`;
               }
        if (langueselect === "spanish") {

               contenupagegalerie.innerHTML = `<h2 class="galerie-title">🎨 Galería de Arte en Miniatura</h2>
<p class="galerie-description">
  ✨ Adéntrate en un mundo donde cada miniatura se convierte en una obra de arte.
  <br>
  A través de esta galería, te invito a descubrir un universo de detalles 🖌️, texturas 🧵 y emociones ❤️, creado con pincel y pasión.
</p>
<p class="galerie-description">
  ⚔️ Ya sean infanterías épicas, criaturas fantásticas 🐉 o máquinas titánicas 🛡️, cada pieza cuenta una historia única 📖, capturada en el instante detenido de la pintura.
</p>
<p class="galerie-description">
  👁️‍🗨️ Tómate tu tiempo para explorar… y déjate inspirar.
</p>

<div class="menugallery">   
  <div>
    <button class="moi" onclick="loadPage('galeriegeneral.html'); scrollToTop(); return false;">Todas las fotos</button>
  </div>

  <div>
    <button class="studio" onclick="loadPage('galeriestudio.html'); scrollToTop(); return false;">Pintura del Estudio</button>
  </div>

  <div>
    <button class="asoiaf" onclick="loadPage('song-of-ice-and-fire.html'); scrollToTop(); return false;">A Song of Ice and Fire</button>
  </div>

  <div>
    <button class="w40k" onclick="loadPage('warhammer-40k.html'); scrollToTop(); return false;">Warhammer 40K</button>
  </div>

  <div>
    <button class="hh" onclick="loadPage('horus-heresy.html'); scrollToTop(); return false;">The Horus Heresy</button>
  </div>

  <div>
    <button class="middle" onclick="loadPage('middle-earth.html'); scrollToTop(); return false;">Middle-Earth</button>
  </div>

  <div>
    <button class="aos" onclick="loadPage('age-of-sigmar.html'); scrollToTop(); return false;">Age of Sigmar</button>
  </div>

  <div>
    <button class="tow" onclick="loadPage('warhammer-old-world.html'); scrollToTop(); return false;">Warhammer: El Viejo Mundo</button>
  </div>

  <div>
    <button class="bb" onclick="loadPage('blood-bowl.html'); scrollToTop(); return false;">Blood Bowl</button>
  </div>

  <div>
    <button class="swlegion" onclick="loadPage('star-wars-legion.html'); scrollToTop(); return false;">Star Wars Legion</button>
  </div>

  <div>
    <button class="swshatterpoint" onclick="loadPage('star-wars-shatterpoint.html'); scrollToTop(); return false;">Star Wars Shatterpoint</button>
  </div>

  <div>
    <button class="marvel" onclick="loadPage('marvel-crisis-protocol.html'); scrollToTop(); return false;">Marvel Crisis Protocol</button>
  </div>
</div>
`;
               }
        if (langueselect === "french") {

               contenupagegalerie.innerHTML = `  <h2 class="galerie-title">🎨 Galerie d’Art en Miniature</h2>
  <p class="galerie-description">
    ✨ Entrez dans un univers où chaque figurine devient une œuvre d'art.
    <br>
    À travers cette galerie, je vous invite à découvrir un monde de détails 🖌️, de textures 🧵, et d’émotions ❤️, façonné au pinceau et à la passion.
  </p>
  <p class="galerie-description">
    ⚔️ Qu’il s’agisse d’infanteries épiques, de créatures fantastiques 🐉 ou de machines titanesques 🛡️, chaque pièce raconte une histoire unique 📖, capturée dans l’instant figé de la peinture.
  </p>
  <p class="galerie-description">
    👁️‍🗨️ Prenez le temps d’explorer… et laissez-vous inspirer.
  </p>
    
 <div class="menugallery">   
   <div>
         <button class="moi" onclick="loadPage('galeriegeneral.html');  scrollToTop(); return false;">Toutes les photos</button>
   </div>
  
   <div>
      <button  class="studio" onclick="loadPage('galeriestudio.html');  scrollToTop(); return false;">Peinture Studio</button>
    </div>
  
  <div>
        
<button class="asoiaf" onclick="loadPage('song-of-ice-and-fire.html');  scrollToTop(); return false;">A Song of Ice and Fire</button>
    </div>


  <div>
                <button class="w40k" onclick="loadPage('warhammer-40k.html');  scrollToTop(); return false;">Warhammer 40K</button>
       </div>

   <div>
    <button class="hh" onclick="loadPage('horus-heresy.html');  scrollToTop(); return false;">The Horus Heresy</button>
       </div>
  
 <div>
                       <button class="middle" onclick="loadPage('middle-earth.html');  scrollToTop(); return false;">Middle-Earth</button>
       </div>
  
   <div>         
            <button class="aos" onclick="loadPage('age-of-sigmar.html');  scrollToTop(); return false;">Age of Sigmar</button>
       </div>

 <div>
                     <button class="tow"  onclick="loadPage('warhammer-old-world.html');  scrollToTop(); return false;">Warhammer The Old World</button>
       </div>
  
 <div>
     <button class="bb" onclick="loadPage('blood-bowl.html');  scrollToTop(); return false;">Blood Bowl</button>
       </div>
 
  <div>
           <button class="swlegion" onclick="loadPage('star-wars-legion.html');  scrollToTop(); return false;">Star Wars Legion</button>
       </div>
   <div>
        <button class="swshatterpoint" onclick="loadPage('star-wars-shatterpoint.html');  scrollToTop(); return false;">Star Wars Shatterpoint</button>
   </div>
 <div>
  
<button class="marvel" onclick="loadPage('marvel-crisis-protocol.html');  scrollToTop(); return false;">Marvel Crisis Protocol</button>
       </div>
  
 


    </div>
`;
               }
}

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
            highlightLanguage('english');
loadPage(urlencours);
     changelanguemenu();
    changelangueinfo();
} 

function changelanguespanish() {
    setLangue("spanish");
           highlightLanguage('spanish');
    loadPage(urlencours);
    changelanguemenu();
      changelangueinfo();
}

function changelanguefrench() {
    setLangue("french");
       highlightLanguage('french');
    loadPage(urlencours);
      changelanguemenu();
   changelangueinfo();
}
function changelanguemenu() {
    const menucontenu = document.getElementById("menu-contenu");
    if (!menucontenu) {
        return;
    }

    if (langueselect === "english") {

               menucontenu.innerHTML = `<ul class="menu">
    <li><a href="peinturecommission.html" onclick="loadPage('peinturecommission.html'); changelangueindex(); return false;">Advanced TableTop Painting 🎨</a></li>
    <li><a href="figconcours.html" onclick="loadPage('figconcours.html'); changelanguefigconcours(); return false;">Competition/Exhibition Miniatures 🏆</a></li>
    <li><a href="piecepopculture.html" onclick="loadPage('piecepopculture.html');  changelanguepiecepop(); return false;">Geek/Pop Culture Figurines 🔥</a></li>
    <li><a href="simulateur_devis.html" onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); return false;">Quote Simulator 💰</a></li>
    <li><a href="galerie.html" onclick="loadPage('galerie.html'); changelanguegalerie(); return false;">Gallery 🖼️</a></li>
</ul>
`
               }
        if (langueselect === "spanish") {

               menucontenu.innerHTML = `<ul class="menu">
    <li><a href="peinturecommission.html" onclick="loadPage('peinturecommission.html'); changelangueindex(); return false;">Pintura TableTop Avanzada 🎨</a></li>
    <li><a href="figconcours.html" onclick="loadPage('figconcours.html'); changelanguefigconcours(); return false;">Miniaturas de Concurso/Exposición 🏆</a></li>
    <li><a href="piecepopculture.html" onclick="loadPage('piecepopculture.html');  changelanguepiecepop(); return false;">Figurines Geek/Pop Culture 🔥</a></li>
    <li><a href="simulateur_devis.html" onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); return false;">Simulador de Presupuesto 💰</a></li>
    <li><a href="galerie.html" onclick="loadPage('galerie.html'); changelanguegalerie(); return false;">Galería 🖼️</a></li>
</ul>
`
               }
        if (langueselect === "french") {

               menucontenu.innerHTML = `  <ul class="menu">
                <li><a href="peinturecommission.html" onclick="loadPage('peinturecommission.html'); changelangueindex(); return false;">Peinture TableTop Supérieur 🎨</a></li>
                <li><a href="figconcours.html" onclick="loadPage('figconcours.html'); changelanguefigconcours(); return false;">Figurines de concours/exposition 🏆</a></li>
                <li><a href="piecepopculture.html" onclick="loadPage('piecepopculture.html');  changelanguepiecepop(); return false;">Figurine Geek/Pop Culture 🔥</a></li>
                <li><a href="formation.html" onclick="loadPage('formation.html'); return false;">Formation 📚</a></li>
                <li><a href="simulateur_devis.html" onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); return false;">Simulateur de devis 💰</a></li>
                <li><a href="galerie.html" onclick="loadPage('galerie.html'); changelanguegalerie(); return false;">Galerie 🖼️</a></li>
            </ul>
`
               }}
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
        contenupageindex.innerHTML = `<h1>🎨 Turn your miniatures into true works of art</h1>
<p>High-end painting for passionate hobbyists, collectors, and demanding players.</p>
<p>Your miniatures deserve more than a simple brushstroke: they deserve to be elevated, showcased, and made unique.  
At <strong>Studio Peinture Figurine</strong>, every project becomes a collectible piece.</p>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>👋 Who’s behind the brushes?</h2>
  <p>I am <strong>Pierre-François, aka PF, <span id="pf-age"></span> years old.</strong><br>
     A passionate painter and founder of Studio Peinture Figurine.<br><br>
     In the miniature world since 2020, the hobby began somewhat by chance.<br>
     Covid turned that passion into a true artistic quest.<br>
     Today, I work with acrylics, pigments, and oils, developing a style that brings miniatures to life.<br><br>
     My goal: make your miniatures resonate as if they were alive.
  </p>
  <blockquote>“Every miniature tells a story. My role is to make it shine.” ✨</blockquote>
  <p>
    <a href="https://www.leprogres.fr/culture-loisirs/2025/05/12/il-est-peintre-professionnel-sur-figurines-depuis-quelques-mois-les-demandes-affluent?fbclid=IwY2xjawMbHHBleHRuA2FlbQIxMQABHoFDkkpV73nHQUSLHKutNLsp1MnG2TNeNmBnK03a1bg6IpNTrylAa7rVqE8g_aem_5llSLaiTM9lgeOSTPMrLQQ"
       class="button" target="_blank">
      Learn more about my journey ➜
    </a>
  </p>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>🧩 Our services</h2>
  <div>
    <div class="card-container3index">

      <div class="card">
        <h3>⚔️ Advanced TableTop</h3>
        <p>👉 For demanding players who want a stunning result without sacrificing playability.</p>
        <ul>
          <li>Levels: TableTop + and TableTop ++ (equivalent to Gold & Diamond)</li>
          <li>Precise, high-contrast painting</li>
          <li>Detailed basing</li>
          <li>Customization options</li>
        </ul>
        <p>
          <a href="peinturecommission.html" class="button"
             onclick="loadPage('peinturecommission.html'); changelanguepeinturecommission(); scrollToTop(); return false;">
            Discover the TableTop level ➜
          </a>
        </p>
        <p>
          <a href="simulateur_devis.html" class="button"
             onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
            Request a quote ➜
          </a>
        </p>
      </div>

      <div class="card">
        <h3>🏆 Display Miniatures & Pop Culture</h3>
        <p>👉 For collectors and enthusiasts who want a unique, display-ready piece.</p>
        <ul>
          <li>Studio Painting (premium service)</li>
          <li>Advanced work on lighting, textures, freehand, weathering…</li>
          <li>Video game, manga, fantasy, or realistic miniatures</li>
          <li>Each piece is designed as a fully customized work of art.</li>
        </ul>
        <p>
          <a href="galerie.html" class="button"
             onclick="loadPage('galerie.html'); scrollToTop(); return false;">
            View the works ➜
          </a>
        </p>
        <p>
          <a href="simulateur_devis.html" class="button"
             onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
            Request a quote ➜
          </a>
        </p>
      </div>

      <div class="card">
        <h3>🧠 Painting Training & Coaching</h3>
        <p>
          👉 Learn professional techniques: light management, basing, gradients, and finishing touches.  
          Personalized sessions, online or in the studio.
        </p>
        <p>
          <a href="formation.html" class="button"
             onclick="loadPage('formation.html'); scrollToTop(); return false;">
            Discover the training sessions ➜
          </a>
        </p>
      </div>

    </div>
  </div>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>🪄 Why choose Studio Peinture Figurine?</h2>
  <ul>
    <li>🎨 <strong>Custom painting</strong>: every project is tailored to your universe and your budget.</li>
    <li>🔧 <strong>Meticulous preparation</strong>: assembly, cleaning, priming—everything is mastered.</li>
    <li>🧪 <strong>Immersive bases & 3D bits</strong>: for a unique and realistic finish.</li>
    <li>💬 <strong>Transparent client follow-up</strong>: progress photos, direct contact, personalized advice.</li>
    <li>🚚 <strong>Secure shipping</strong> via Mondial Relay or hand delivery.</li>
  </ul>
  <p>You receive a display-ready, durable piece that fully reflects your vision.</p>
  <p>
    <a href="simulateur_devis.html" class="button"
       onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
      Request a quote ➜
    </a>
  </p>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>⚙️ How does it work?</h2>
  <ol>
    <li>Contact me / request a quote.</li>
    <li>Send or drop off your miniature.</li>
    <li>I paint it according to the selected level.</li>
    <li>I deliver a display-ready piece.</li>
  </ol>
  <p>Simple, transparent, and 100% passion-driven.</p>
  <p>
    <a href="peinturecommission.html" class="button"
       onclick="loadPage('peinturecommission.html'); changelanguepeinturecommission(); scrollToTop(); return false;">
      View the offers ➜
    </a>
  </p>
  <p>
    <a href="simulateur_devis.html" class="button"
       onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
      Request a quote ➜
    </a>
  </p>
</div>
`;
    } else if (langueselect === "spanish") {
        contenupageindex.innerHTML = `<h1>🎨 Transforma tus miniaturas en auténticas obras de arte</h1>
<p>Pintura de alta gama para aficionados apasionados, coleccionistas y jugadores exigentes.</p>
<p>Tus miniaturas merecen más que una simple pincelada: merecen ser realzadas, puestas en valor y ser únicas.  
En <strong>Studio Peinture Figurine</strong>, cada proyecto se convierte en una pieza de colección.</p>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>👋 ¿Quién está detrás de los pinceles?</h2>
  <p>Soy <strong>Pierre-François, alias PF, <span id="pf-age"></span> años.</strong><br>
     Pintor apasionado y fundador de Studio Peinture Figurine.<br><br>
     En el mundo de las miniaturas desde 2020, el hobby comenzó un poco por casualidad.<br>
     El Covid transformó esta pasión en una verdadera búsqueda artística.<br>
     Hoy trabajo con acrílicos, pigmentos y óleos, con un estilo que hace vibrar las miniaturas.<br><br>
     Mi objetivo: hacer que tus miniaturas cobren vida.
  </p>
  <blockquote>«Cada miniatura cuenta una historia. Mi papel es hacerla brillar.» ✨</blockquote>
  <p>
    <a href="https://www.leprogres.fr/culture-loisirs/2025/05/12/il-est-peintre-professionnel-sur-figurines-depuis-quelques-mois-les-demandes-affluent?fbclid=IwY2xjawMbHHBleHRuA2FlbQIxMQABHoFDkkpV73nHQUSLHKutNLsp1MnG2TNeNmBnK03a1bg6IpNTrylAa7rVqE8g_aem_5llSLaiTM9lgeOSTPMrLQQ"
       class="button" target="_blank">
      Saber más sobre mi trayectoria ➜
    </a>
  </p>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>🧩 Nuestros servicios</h2>
  <div>
    <div class="card-container3index">

      <div class="card">
        <h3>⚔️ TableTop Avanzado</h3>
        <p>👉 Para jugadores exigentes que buscan un acabado espectacular sin sacrificar la jugabilidad.</p>
        <ul>
          <li>Niveles: TableTop + y TableTop ++ (equivalentes a Oro y Diamante)</li>
          <li>Pintura precisa y con alto contraste</li>
          <li>Peanas trabajadas</li>
          <li>Opciones de personalización</li>
        </ul>
        <p>
          <a href="peinturecommission.html" class="button"
             onclick="loadPage('peinturecommission.html'); changelanguepeinturecommission(); scrollToTop(); return false;">
            Descubrir el nivel TableTop ➜
          </a>
        </p>
        <p>
          <a href="simulateur_devis.html" class="button"
             onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
            Solicitar un presupuesto ➜
          </a>
        </p>
      </div>

      <div class="card">
        <h3>🏆 Miniaturas de exposición & Pop Culture</h3>
        <p>👉 Para coleccionistas y apasionados que desean una pieza única, lista para exponer.</p>
        <ul>
          <li>Pintura Studio (servicio premium)</li>
          <li>Trabajo avanzado en iluminación, texturas, freehand, weathering…</li>
          <li>Miniaturas de videojuegos, manga, universos de fantasía o realistas</li>
          <li>Cada pieza está concebida como una obra de arte totalmente personalizada.</li>
        </ul>
        <p>
          <a href="galerie.html" class="button"
             onclick="loadPage('galerie.html'); scrollToTop(); return false;">
            Ver los trabajos ➜
          </a>
        </p>
        <p>
          <a href="simulateur_devis.html" class="button"
             onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
            Solicitar un presupuesto ➜
          </a>
        </p>
      </div>

      <div class="card">
        <h3>🧠 Formación & Coaching de pintura</h3>
        <p>
          👉 Aprende técnicas profesionales: gestión de la luz, peanas, degradados y acabados.  
          Sesiones personalizadas, en línea o en el taller.
        </p>
        <p>
          <a href="formation.html" class="button"
             onclick="loadPage('formation.html'); scrollToTop(); return false;">
            Descubrir las formaciones ➜
          </a>
        </p>
      </div>

    </div>
  </div>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>🪄 ¿Por qué elegir Studio Peinture Figurine?</h2>
  <ul>
    <li>🎨 <strong>Pintura a medida</strong>: cada proyecto se adapta a tu universo y a tu presupuesto.</li>
    <li>🔧 <strong>Preparación meticulosa</strong>: montaje, limpieza, imprimación, todo está controlado.</li>
    <li>🧪 <strong>Peanas inmersivas & bits 3D</strong>: para un resultado único y realista.</li>
    <li>💬 <strong>Seguimiento transparente</strong>: fotos del progreso, contacto directo y asesoramiento personalizado.</li>
    <li>🚚 <strong>Envío seguro</strong> mediante Mondial Relay o entrega en mano.</li>
  </ul>
  <p>Recibes una pieza lista para exponer, duradera y totalmente acorde a tu visión.</p>
  <p>
    <a href="simulateur_devis.html" class="button"
       onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
      Solicitar un presupuesto ➜
    </a>
  </p>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>⚙️ ¿Cómo funciona?</h2>
  <ol>
    <li>Contáctame / solicita un presupuesto.</li>
    <li>Envía o entrega tu miniatura.</li>
    <li>Realizo la pintura según el nivel elegido.</li>
    <li>Entrego la pieza lista para exponer.</li>
  </ol>
  <p>Sencillo, transparente y 100% pasión.</p>
  <p>
    <a href="peinturecommission.html" class="button"
       onclick="loadPage('peinturecommission.html'); changelanguepeinturecommission(); scrollToTop(); return false;">
      Ver las ofertas ➜
    </a>
  </p>
  <p>
    <a href="simulateur_devis.html" class="button"
       onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
      Solicitar un presupuesto ➜
    </a>
  </p>
</div>
`;
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
        contenupagesimulateur.innerHTML = `<h1>Quote Request</h1>

<div class="form-container">
  <form id="contactForm" action="#" class="bg-white p-6 rounded-lg shadow-md">
    <fieldset>
      <legend>Contact Details</legend>

      <div class="form-group">
        <label for="nom">Last Name <span class="required">*</span></label>
        <input type="text" id="nom" name="nom" placeholder="Last Name" required>
      </div>

      <div class="form-group">
        <label for="prenom">First Name <span class="required">*</span></label>
        <input type="text" id="prenom" name="prenom" placeholder="First Name" required>
      </div>

      <div class="form-group">
        <label for="email">Email <span class="required">*</span></label>
        <input type="email" id="email" name="email" placeholder="Email" required>
      </div>

      <div class="form-group">
        <label for="telephone">Phone <span class="required">*</span></label>
        <input type="tel" id="telephone" name="telephone" placeholder="Phone" required>
      </div>

      <div class="form-group">
        <label for="adresse">Address <span class="required">*</span></label>
        <input type="text" id="adresse" name="adresse" placeholder="Address" required>
      </div>

      <div class="form-group">
        <label for="cp">Postal Code <span class="required">*</span></label>
        <input type="text" id="cp" name="cp" placeholder="Postal Code" required>
      </div>

      <div class="form-group">
        <label for="ville">City <span class="required">*</span></label>
        <input type="text" id="ville" name="ville" placeholder="City" required>
      </div>

      <div class="form-group">
        <label for="pays">Country <span class="required">*</span></label>
        <select id="pays" name="pays" required>
          <option value="" disabled hidden>Select a country</option>
          <option value="FRANCE" selected>France</option>
          <option value="BELGIQUE">Belgium</option>
          <option value="LUXEMBOURG">Luxembourg</option>
          <option value="Autre">Other (please specify)</option>
        </select>
      </div>
    </fieldset>

    <fieldset>
      <legend>My Request</legend>

      <div class="cardform">
        <label for="niveau">Painting Levels:</label><br>

        <p>💸 Essential Level:<br>
          TableTop+, quality balancing efficiency and budget.<br>
          🔍 Perfect for core units. (Our recommendation).<br><br>
        </p>

        <p>⭐ Advanced Level:<br>
          TableTop++, higher-quality finish with deeper detailing.<br>
          🔍 Perfect for enhancing gaming miniatures. (Our recommendation).<br><br>
        </p>

        <p>👑 Prestige Level:<br>
          TableTop+++, premium quality.<br>
          🎨 Each piece becomes a work of art. Ideal for centerpiece models.<br><br>
        </p>

        <p>🎨 Studio Level:<br>
          ✨ Limited and reserved for enthusiasts seeking the very best.<br>
          🎨 Designed for display and showcase collections.<br><br>
        </p>

        <p>Basing is included.</p>

        <select id="niveau" class="select" name="niveau" required>
          <option value="" disabled hidden>Select a level</option>
          <option value="niveau0" selected>Essential Level – Basic TableTop, 3 colors, Bronze equivalent (lvl 2)</option>
          <option value="niveau1">Advanced Level – TableTop+, Gold equivalent (lvl 3)</option>
          <option value="niveau2">Prestige Level – TableTop++, Diamond equivalent (lvl 4)</option>
          <option value="expo">Studio Level – Display piece for showcase</option>
        </select>

        <p><strong>Selected level:</strong> <span id="afficheniveau"></span></p><br>
      </div>

      <div id="petiteinfanterie" class="cardform">
        <label>Number of <strong>Infantry (20–25mm base)</strong>:</label>
        <p>Example: Skinks, Battle Dwarfs, Skeletons, Goblins, Plaguebearers…</p>
        <p>Unit price: <span id="prixpetiteinfanterie">0.00</span> €</p>
        <p>Subtotal: <span id="totalpetiteinfanterie">0.00</span> €</p>
        <input type="number" min="0">
      </div>

      <div id="infanterie" class="cardform">
        <label>Number of <strong>Infantry (28–32mm base)</strong>:</label>
        <p>Example: Space Marines, Stormcast, Votann, Sisters of Battle, Eldar…</p>
        <p>Unit price: <span id="prixinfanterie">0.00</span> €</p>
        <p>Subtotal: <span id="totalinfanterie">0.00</span> €</p>
        <input type="number" min="0">
      </div>

      <div id="infanterieelite" class="cardform">
        <label>Number of <strong>Elite Infantry (40–50mm base)</strong>:</label>
        <p>Example: Terminators, Custodes, Kroxigors, Tyranid Warriors…</p>
        <p>Unit price: <span id="prixinfanterieelite">0.00</span> €</p>
        <p>Subtotal: <span id="totalinfanterieelite">0.00</span> €</p>
        <input type="number" min="0">
      </div>

      <!-- The same translation logic continues consistently for characters, monsters, vehicles, etc. -->

      <div id="montage" class="cardform">
        <label><strong>Assembly</strong> required?</label>
        <select>
          <option value="Yes" selected>Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div id="aimant" class="cardform">
        <label><strong>Magnetization</strong> required?</label>
        <select>
          <option value="Yes">Yes</option>
          <option value="No" selected>No</option>
        </select>
      </div>

      <div id="message" class="cardform">
        <label>
          To be as accurate as possible,<br>
          please describe the list of miniatures to be painted, whether assembly is required,<br>
          and if you already have a theme or color scheme in mind:
          <span class="required">*</span>
        </label>
        <textarea placeholder="Your message" required></textarea>
      </div>

      <p><span class="required">*</span> Required fields</p>
    </fieldset>

    <div class="banniere">
      <button type="submit" class="button">Send request by email</button>
    </div>
  </form>
</div>
`;
    } else if (langueselect === "spanish") {
        contenupagesimulateur.innerHTML = `<h1>Solicitud de Presupuesto</h1>

<div class="form-container">
  <form id="contactForm" action="#" class="bg-white p-6 rounded-lg shadow-md">
    <fieldset>
      <legend>Datos de Contacto</legend>

      <div class="form-group">
        <label for="nom">Apellido <span class="required">*</span></label>
        <input type="text" id="nom" name="nom" placeholder="Apellido" required>
      </div>

      <div class="form-group">
        <label for="prenom">Nombre <span class="required">*</span></label>
        <input type="text" id="prenom" name="prenom" placeholder="Nombre" required>
      </div>

      <div class="form-group">
        <label for="email">Correo electrónico <span class="required">*</span></label>
        <input type="email" id="email" name="email" placeholder="Correo electrónico" required>
      </div>

      <div class="form-group">
        <label for="telephone">Teléfono <span class="required">*</span></label>
        <input type="tel" id="telephone" name="telephone" placeholder="Teléfono" required>
      </div>

      <div class="form-group">
        <label for="adresse">Dirección <span class="required">*</span></label>
        <input type="text" id="adresse" name="adresse" placeholder="Dirección" required>
      </div>

      <div class="form-group">
        <label for="cp">Código Postal <span class="required">*</span></label>
        <input type="text" id="cp" name="cp" placeholder="Código Postal" required>
      </div>

      <div class="form-group">
        <label for="ville">Ciudad <span class="required">*</span></label>
        <input type="text" id="ville" name="ville" placeholder="Ciudad" required>
      </div>

      <div class="form-group">
        <label for="pays">País <span class="required">*</span></label>
        <select id="pays" name="pays" required>
          <option value="" disabled hidden>Selecciona un país</option>
          <option value="FRANCE" selected>Francia</option>
          <option value="BELGIQUE">Bélgica</option>
          <option value="LUXEMBOURG">Luxemburgo</option>
          <option value="Autre">Otro (especificar)</option>
        </select>
      </div>
    </fieldset>

    <fieldset>
      <legend>Mi Solicitud</legend>

      <div class="cardform">
        <label for="niveau">Niveles de Pintura:</label><br>

        <p>💸 Nivel Esencial:<br>
          TableTop+, calidad equilibrada entre eficiencia y presupuesto.<br>
          🔍 Perfecto para unidades principales. (Nuestra recomendación).<br><br>
        </p>

        <p>⭐ Nivel Avanzado:<br>
          TableTop++, acabado de mayor calidad con más nivel de detalle.<br>
          🔍 Ideal para realzar miniaturas de juego. (Nuestra recomendación).<br><br>
        </p>

        <p>👑 Nivel Prestigio:<br>
          TableTop+++, calidad premium.<br>
          🎨 Cada pieza se convierte en una obra de arte. Ideal para miniaturas protagonistas.<br><br>
        </p>

        <p>🎨 Nivel Studio:<br>
          ✨ Limitado y reservado a apasionados que buscan lo mejor de lo mejor.<br>
          🎨 Diseñado para vitrinas y colecciones de exhibición.<br><br>
        </p>

        <p>El soclado está incluido.</p>

        <select id="niveau" class="select" name="niveau" required>
          <option value="" disabled hidden>Selecciona un nivel</option>
          <option value="niveau0" selected>Nivel Esencial – TableTop básico, 3 colores, equivalente Bronce (nivel 2)</option>
          <option value="niveau1">Nivel Avanzado – TableTop+, equivalente Oro (nivel 3)</option>
          <option value="niveau2">Nivel Prestigio – TableTop++, equivalente Diamante (nivel 4)</option>
          <option value="expo">Nivel Studio – Pieza de exhibición para vitrina</option>
        </select>

        <p><strong>Nivel seleccionado:</strong> <span id="afficheniveau"></span></p><br>
      </div>

      <div id="petiteinfanterie" class="cardform">
        <label>Número de <strong>Infantería (peana 20–25 mm)</strong>:</label>
        <p>Ejemplo: Skinks, Enanos de Batalla, Esqueletos, Goblins, Portadores de Plaga…</p>
        <p>Precio unitario: <span id="prixpetiteinfanterie">0.00</span> €</p>
        <p>Subtotal: <span id="totalpetiteinfanterie">0.00</span> €</p>
        <input type="number" min="0">
      </div>

      <div id="infanterie" class="cardform">
        <label>Número de <strong>Infantería (peana 28–32 mm)</strong>:</label>
        <p>Ejemplo: Space Marines, Stormcast, Votann, Hermanas de Batalla, Eldar…</p>
        <p>Precio unitario: <span id="prixinfanterie">0.00</span> €</p>
        <p>Subtotal: <span id="totalinfanterie">0.00</span> €</p>
        <input type="number" min="0">
      </div>

      <div id="infanterieelite" class="cardform">
        <label>Número de <strong>Infantería de Élite (peana 40–50 mm)</strong>:</label>
        <p>Ejemplo: Terminators, Custodes, Kroxigors, Guerreros Tiránidos…</p>
        <p>Precio unitario: <span id="prixinfanterieelite">0.00</span> €</p>
        <p>Subtotal: <span id="totalinfanterieelite">0.00</span> €</p>
        <input type="number" min="0">
      </div>

      <div id="montage" class="cardform">
        <label><strong>¿Montaje</strong> necesario?</label>
        <select>
          <option value="Yes" selected>Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      <div id="aimant" class="cardform">
        <label><strong>¿Imantado</strong> necesario?</label>
        <select>
          <option value="Yes">Sí</option>
          <option value="No" selected>No</option>
        </select>
      </div>

      <div id="message" class="cardform">
        <label>
          Para ser lo más precisos posible,<br>
          describe la lista de miniaturas a pintar, si el montaje es necesario,<br>
          y si ya tienes un tema o esquema de colores en mente:
          <span class="required">*</span>
        </label>
        <textarea placeholder="Tu mensaje" required></textarea>
      </div>

      <p><span class="required">*</span> Campos obligatorios</p>
    </fieldset>

    <div class="banniere">
      <button type="submit" class="button">Enviar solicitud por correo electrónico</button>
    </div>
  </form>
</div>
`;
    } else if (langueselect === "french") {
        contenupagesimulateur.innerHTML = `   <h1>Demande de Devis</h1>
     
           <div class="form-container">
        <form id="contactForm" action="#" class="bg-white p-6 rounded-lg shadow-md">
            <fieldset>
                <legend>Coordonnées</legend>
                <div class="form-group">
                    <label for="nom">Nom <span class="required">*</span></label>
                    <input type="text" id="nom" name="nom" placeholder="Nom" required>
                </div>
                <div class="form-group">
                    <label for="prenom">Prénom <span class="required">*</span></label>
                    <input type="text" id="prenom" name="prenom" placeholder="Prénom" required>
                </div>
                <div class="form-group">
                    <label for="email">Email <span class="required">*</span></label>
                    <input type="email" id="email" name="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <label for="telephone">Téléphone <span class="required">*</span></label>
                    <input type="tel" id="telephone" name="telephone" placeholder="Téléphone" required>
                </div>
                <div class="form-group">
                    <label for="adresse">Adresse <span class="required">*</span></label>
                    <input type="text" id="adresse" name="adresse" placeholder="Adresse" required>
                </div>
                <div class="form-group">
                    <label for="cp">Code Postal <span class="required">*</span></label>
                    <input type="text" id="cp" name="cp" placeholder="Code Postal" required>
                </div>
                <div class="form-group">
                    <label for="ville">Ville <span class="required">*</span></label>
                    <input type="text" id="ville" name="ville" placeholder="Ville" required>
                </div>
                <div class="form-group">
                    <label for="pays">Pays <span class="required">*</span></label>
                    <select id="pays" name="pays" required>
                        <option value="" disabled hidden>Choisissez un pays</option>
                        <option value="FRANCE" selected>France</option>
                        <option value="BELGIQUE">Belgique</option>
                        <option value="LUXEMBOURG">Luxembourg</option>
                        <option value="Autre">Autre (merci de préciser)</option>
                    </select>
                </div>
            </fieldset>
     

                <fieldset>
                    <legend>Ma demande</legend>
                    <div class="cardform">
                        <label for="niveau">Niveaux de Peinture :</label><br>
                        <p>Niveau 💸 Essentiel :<br> TableTop+, Qualité alliant efficacité et budget :<br> 🔍 Parfait pour les figurines de base. (Notre recommendation).<br><br></p>
                        <p>Niveau ⭐ Approfondi :<br> TableTop++, Qualité supérieur qui va à l'Approfondi :<br> 🔍 Parfait pour valoriser les figurines de jeu. (Notre recommendation).<br><br></p>
                        <p>Niveau 👑 Prestige :<br> TableTop+++, Qualité supérieur plus Prestige :<br> 🎨 Chaque pièce devient une œuvre d’art. Pour les pièces principales.<br><br></p>
                        <p>Niveau 🎨 Studio :<br> ✨ Limitée et réservée aux passionnés souhaitant le meilleur:<br> 🎨 Pour la collection en vitrine.<br><br></p>
                        <p>Le soclage est inclus.</p>
                        <select id="niveau" class="select" name="niveau" required>
                            <option value="" disabled hidden>Choisissez un niveau</option>
                            <option value="niveau0" selected>Niveau Essentiel - TableTop basique 3 couleurs, équivalent Bronze (niv2)</option>
                            <option value="niveau1" >Niveau Approfondi - TableTop+, équivalent Gold (niv3)</option>
                            <option value="niveau2">Niveau Prestige - TableTop++, équivalent Diamond (niv4)</option>
                            <option value="expo">Niveau Studio - Pièce d'exposition pour vitrine</option>
                        </select>
                        <p><strong>Niveau sélectionné :</strong> <span id="afficheniveau"></span></p><br>
                    </div>

                    <div id="petiteinfanterie" class="cardform">
                        <label for="petiteinfanterie-input">Nombre de <strong>Infanteries socle 20-25mm</strong> :</label>
                        <p>Exemple : Skinks, Nains Battle, Squelettes, Gobelins, Veroleux...</p>
                        <p>Prix unitaire : <span id="prixpetiteinfanterie">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpetiteinfanterie">0.00</span> €</p>
                        <input type="number" id="petiteinfanterie-input" name="petiteinfanterie" min="0">
                    </div>

                    <div id="infanterie" class="cardform">
                        <label for="infanterie-input">Nombre d'<strong>Infanteries socle 28-32mm</strong> :</label>
                        <p>Exemple : Space Marines, Stormcast, Votann, Soeurs de Bataille, Eldar...</p>
                        <p>Prix unitaire : <span id="prixinfanterie">0.00</span> €</p>
                        <p>Sous Total : <span id="totalinfanterie">0.00</span> €</p>
                        <input type="number" id="infanterie-input" name="infanterie" min="0">
                    </div>

                    <div id="infanterieelite" class="cardform">
                        <label for="infanterieelite-input">Nombre d'<strong>Infanteries élite socle 40-50mm</strong> :</label>
                        <p>Exemple : Terminators, Custodes, Kroxigors, Guerriers Tyranid...</p>
                        <p>Prix unitaire : <span id="prixinfanterieelite">0.00</span> €</p>
                        <p>Sous Total : <span id="totalinfanterieelite">0.00</span> €</p>
                        <input type="number" id="infanterieelite-input" name="infanterieelite" min="0">
                    </div>

                    <div id="personnage" class="cardform">
                        <label for="personnage-input">Nombre de <strong>Personnages à Pied socle 25-32mm</strong> :</label>
                        <p>Exemple : Capitaine/Sergeant Space Marines, Sorcier...</p>
                        <p>Prix unitaire : <span id="prixpersonnage">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpersonnage">0.00</span> €</p>
                        <input type="number" id="personnage-input" name="personnage" min="0">
                    </div>

                    <div id="personnageelite" class="cardform">
                        <label for="personnageelite-input">Nombre de <strong>Personnages élite à Pied socle 40-50mm</strong> :</label>
                        <p>Exemple : Capitaine/Sergeant Space Marines en armure Phobos, Sorcier armure terminator</p>
                        <p>Prix unitaire : <span id="prixpersonnageelite">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpersonnageelite">0.00</span> €</p>
                        <input type="number" id="personnageelite-input" name="personnageelite" min="0">
                    </div>

                    <div id="personnagemonstrueux" class="cardform">
                        <label for="personnagemonstrueux-input">Nombre de <strong>Personnages Monstrueux socle 60-100mm</strong> :</label>
                        <p>Exemple : Primarques, Treelord, Prince Tyranid...</p>
                        <p>Prix unitaire : <span id="prixpersonnagemonstrueux">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpersonnagemonstrueux">0.00</span> €</p>
                        <input type="number" id="personnagemonstrueux-input" name="personnagemonstrueux" min="0">
                    </div>

                    <div id="personnagesurmonstre" class="cardform">
                        <label for="personnagesurmonstre-input">Nombre de <strong>Personnages sur Monstres socle 120mm ovale</strong> :</label>
                        <p>Exemple : MetaRodeur, Tortue Idoneth, Saurus sur Carnosaure...</p>
                        <p>Prix unitaire : <span id="prixpersonnagesurmonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpersonnagesurmonstre">0.00</span> €</p>
                        <input type="number" id="personnagesurmonstre-input" name="personnagesurmonstre" min="0">
                    </div>

                    <div id="personnagesurgrandmonstre" class="cardform">
                        <label for="personnagesurgrandmonstre-input">Nombre de <strong>Personnages sur Grand Monstres socle 130-160mm ou supérieur</strong> :</label>
                        <p>Exemple : Allareille, Dragon Stormcast, Dragon Crocodile...</p>
                        <p>Prix unitaire : <span id="prixpersonnagesurgrandmonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpersonnagesurgrandmonstre">0.00</span> €</p>
                        <input type="number" id="personnagesurgrandmonstre-input" name="personnagesurgrandmonstre" min="0">
                    </div>

                    <div id="cavalerie" class="cardform">
                        <label for="cavalerie-input">Nombre de <strong>Cavaleries socle ovale 60-75mm</strong> :</label>
                        <p>Exemple : Motos Eldar, Murènes Idoneth, Cavalerie squelettes...</p>
                        <p>Prix unitaire : <span id="prixcavalerie">0.00</span> €</p>
                        <p>Sous Total : <span id="totalcavalerie">0.00</span> €</p>
                        <input type="number" id="cavalerie-input" name="cavalerie" min="0">
                    </div>

                    <div id="cavalerielourde" class="cardform">
                        <label for="cavalerielourde-input">Nombre de <strong>Cavaleries lourdes socle ovale 90-105mm</strong> :</label>
                        <p>Exemple : Motos Custodes, Saurus sur Aggradon, Requin Idoneth...</p>
                        <p>Prix unitaire : <span id="prixcavalerielourde">0.00</span> €</p>
                        <p>Sous Total : <span id="totalcavalerielourde">0.00</span> €</p>
                        <input type="number" id="cavalerielourde-input" name="cavalerielourde" min="0">
                    </div>

                    <div id="petitvehiculemonstre" class="cardform">
                        <label for="petitvehiculemonstre-input">Nombre de <strong>Petit Véhicules/Monstres socle ovale 75-90mm</strong> :</label>
                        <p>Exemple : Sentinel, Bête de Nurgle, Drone...</p>
                        <p>Prix unitaire : <span id="prixpetitvehiculemonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totalpetitvehiculemonstre">0.00</span> €</p>
                        <input type="number" id="petitvehiculemonstre-input" name="petitvehiculemonstre" min="0">
                    </div>

                    <div id="vehiculemonstremoyen" class="cardform">
                        <label for="vehiculemonstremoyen-input">Nombre de <strong>Véhicules/Monstres Moyen socle 80-100mm</strong> :</label>
                        <p>Exemple : Rhino, Dreadnought, Drone...</p>
                        <p>Prix unitaire : <span id="prixvehiculemonstremoyen">0.00</span> €</p>
                        <p>Sous Total : <span id="totalvehiculemonstremoyen">0.00</span> €</p>
                        <input type="number" id="vehiculemonstremoyen-input" name="vehiculemonstremoyen" min="0">
                    </div>

                    <div id="grosvehiculemonstre" class="cardform">
                        <label for="grosvehiculemonstre-input">Nombre de <strong>Gros Véhicules/Monstres socle 90-100mm ou supérieur</strong> :</label>
                        <p>Exemple : Prédator, Plague Burst, Prince Démon, Armingers, Mancrusher...</p>
                        <p>Prix unitaire : <span id="prixgrosvehiculemonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totalgrosvehiculemonstre">0.00</span> €</p>
                        <input type="number" id="grosvehiculemonstre-input" name="grosvehiculemonstre" min="0">
                    </div>

                    <div id="enormevehiculemonstre" class="cardform">
                        <label for="enormevehiculemonstre-input">Nombre de <strong>Énormes Véhicules/Monstres socle 130-160mm ou supérieur</strong> :</label>
                        <p>Exemple : Land Raider, Defiler, Aerodyne...</p>
                        <p>Prix unitaire : <span id="prixenormevehiculemonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totalenormevehiculemonstre">0.00</span> €</p>
                        <input type="number" id="enormevehiculemonstre-input" name="enormevehiculemonstre" min="0">
                    </div>

                    <div id="titanvehiculemonstre" class="cardform">
                        <label for="titanvehiculemonstre-input">Nombre de <strong>Véhicules/Monstres Titanesques socle 170mm</strong> :</label>
                        <p>Exemple : Spartan, Imperial Knight, Mega Gargant...</p>
                        <p>Prix unitaire : <span id="prixtitanvehiculemonstre">0.00</span> €</p>
                        <p>Sous Total : <span id="totaltitanvehiculemonstre">0.00</span> €</p>
                        <input type="number" id="titanvehiculemonstre-input" name="titanvehiculemonstre" min="0">
                    </div>

                    <div id="montage" class="cardform">
                        <label for="montage-input"><strong>Montage</strong> à prévoir ?</label>
                        <select id="montage-input" name="montage">
                            <option value="Oui" selected>Oui</option>
                            <option value="Non">Non</option>
                        </select>
                    </div>

                    <div id="aimant" class="cardform">
                        <label for="aimant-input"><strong>Aimant</strong> à prévoir ?</label>
                        <select id="aimant-input" name="aimant">
                            <option value="Oui">Oui</option>
                            <option value="Non" selected>Non</option>
                        </select>
                    </div>

                    <div id="total" class="cardform">
                        <h3 class="total"><span id="oktotal">0.00</span></h3>
                        <div id="comparative-table"></div>
                        <div id="niveau-sup"></div>
</div>
                           <div id="message" class="cardform">
                            <label for="message-input">Afin d'être le plus précis possible,<br>Merci de définir la liste de figurines à peindre, si le montage est nécessaire,<br>et si vous avez un thème ou schéma de couleurs déjà défini : <span class="required">*</span></label>
                            <textarea id="message-input" name="message" placeholder="Votre message" required></textarea>
                    </div>

                    <p><span class="required">*</span> Champs obligatoires</p>

                      
                </fieldset>
            <div class="banniere">
              <button type="submit" class="button">Envoyer la demande par mail</button>
                   </div>   
            </form>

          </div>`;
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
        contenupagefigconcours.innerHTML = `<h1>🎨 Display Painting</h1>
<p>
  Turn your miniatures into works of art for competitions such as <strong>Golden Demon</strong> or <strong>OctoPainting</strong>.
  Our advanced techniques (NMM, freehand, OSL, weathering) and attention to detail ensure pieces that captivate judges and shine in display cases.
</p>

<div class="card" role="button" aria-expanded="true">
  <h2>Elevate Your Miniature</h2>

  <div>
    <div class="card-container2">

      <div class="card">
        <h3>🛠️ Exceptional Preparation</h3>
        <p>
          Each piece is meticulously prepared: mold lines removed, bold conversions, and unique kitbashes to create miniatures ready to impress.
          Perfect for competitions where every detail matters.
        </p>
      </div>

      <div class="card">
        <h3>🧱 Unique Bases That Enhance</h3>
        <p>
          Our custom wooden bases, enhanced with 3D elements or photo-etched details, elevate your miniature to true display-art status.
          Designed for maximum visual impact, they go far beyond standard gaming bases.
        </p>
      </div>

    </div>
  </div>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2>🌟 Why Choose Our Competition Pieces?</h2>
  <p>
    Unlike gaming miniatures, which are designed for durability and playability, our competition pieces are true works of art made for display.
    With cutting-edge painting techniques and elegant wooden bases, they are crafted to stand out in the display cases of
    <strong>Golden Demon</strong> or <strong>OctoPainting</strong>.
    Each project is unique and quoted individually for a fully custom result.
  </p>
  <a href="simulateur_devis.html" class="button"
     onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">
    Request a quote 💬
  </a>
</div>

<p>
  Visit our
  <a href="galerie.html" onclick="loadPage('galerie.html'); return false;">
    gallery 🖼️
  </a>
  to see our award-winning creations.
</p>

<div class="banniere">
  <a href="simulateur_devis.html" class="button"
     onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">
    Request a quote 💬
  </a>
</div>
`;
    } else if (langueselect === "spanish") {
        contenupagefigconcours.innerHTML = `<h1>🎨 Pintura de Exposición</h1>
<p>
  Transforma tus miniaturas en auténticas obras de arte para concursos como <strong>Golden Demon</strong> u <strong>OctoPainting</strong>.
  Nuestras técnicas avanzadas (NMM, freehand, OSL, weathering) y la atención al detalle garantizan piezas que cautivan a los jueces y brillan en vitrinas.
</p>

<div class="card" role="button" aria-expanded="true">
  <h2>Eleva tu miniatura</h2>

  <div>
    <div class="card-container2">

      <div class="card">
        <h3>🛠️ Preparación de Excelencia</h3>
        <p>
          Cada pieza se prepara minuciosamente: eliminación de líneas de molde, conversiones audaces y kitbash únicos para crear miniaturas listas para impresionar.
          Perfecto para concursos donde cada detalle cuenta.
        </p>
      </div>

      <div class="card">
        <h3>🧱 Peanas Únicas que Realzan</h3>
        <p>
          Nuestras peanas de madera personalizadas, enriquecidas con elementos 3D o detalles de fotograbado, elevan tu miniatura al nivel de una verdadera obra de exposición.
          Diseñadas para un impacto visual máximo, superan ampliamente las peanas de juego estándar.
        </p>
      </div>

    </div>
  </div>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2>🌟 ¿Por qué elegir nuestras piezas de concurso?</h2>
  <p>
    A diferencia de las miniaturas de juego, pensadas para la durabilidad y la jugabilidad, nuestras piezas de concurso son auténticas obras de arte creadas para la exposición.
    Con técnicas de pintura de vanguardia y elegantes peanas de madera, están diseñadas para destacar en las vitrinas de
    <strong>Golden Demon</strong> u <strong>OctoPainting</strong>.
    Cada proyecto es único y se valora mediante presupuesto para un resultado totalmente a medida.
  </p>
  <a href="simulateur_devis.html" class="button"
     onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">
    Solicitar un presupuesto 💬
  </a>
</div>

<p>
  Visita nuestra
  <a href="galerie.html" onclick="loadPage('galerie.html'); return false;">
    galería 🖼️
  </a>
  para descubrir nuestras creaciones premiadas.
</p>

<div class="banniere">
  <a href="simulateur_devis.html" class="button"
     onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">
    Solicitar un presupuesto 💬
  </a>
</div>
`;
    } else if (langueselect === "french") {
        contenupagefigconcours.innerHTML = `  <h1>🎨 Peinture d'Exposition</h1>
    <p>Transformez vos figurines en œuvres d'art pour des concours comme le <strong>Golden Demon</strong> ou <strong>OctoPainting</strong>. Nos techniques avancées (NMM, freehand, OSL, weathering) et notre soin du détail garantissent des pièces qui captivent les juges et brillent en vitrine. </p>
       
      
  <div class="card"  role="button" aria-expanded="true">
    <h2>Sublimez votre figurine</h2>
    
    <div>
      <div class="card-container2">
                <div class="card">
        <h3>🛠️ Préparation d’Exception</h3>
        <p>Chaque pièce est minutieusement préparée : lignes de moulage supprimées, conversions audacieuses, et kitbash uniques pour des figurines prêtes à impressionner. Parfait pour les concours où chaque détail compte.</p>
    </div>
    <div class="card">
        <h3>🧱 Socles Uniques pour Sublimer</h3>
        <p>Nos socles en bois personnalisés, ornés d’éléments 3D ou de photo-découpe, élèvent vos figurines au rang d’œuvre d’exposition. Conçus pour l’impact visuel, ils surpassent les socles de jeu standards.</p>
    </div>
        </div>
    </div>
  

    </div>
   <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2>🌟 Pourquoi Choisir Nos Pièces de Concours ?</h2>
        <p>Contrairement aux figurines de jeu, conçues pour la durabilité et la jouabilité, nos pièces de concours sont des œuvres d’art destinées à l’exposition. Avec des techniques de peinture de pointe et des socles en bois élégants, elles sont créées pour éblouir dans les vitrines des <strong>Golden Demon</strong> ou <strong>OctoPainting</strong>. Chaque projet est unique, évalué sur devis pour un résultat sur mesure. </p>
       <a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Demander un devis 💬</a>
   </div>
<p> Consultez notre <a href="galerie.html" onclick="loadPage('galerie.html'); return false;">galerie 🖼️</a> pour voir nos créations primées.</p>

</div>
               
                       <div class="banniere">
          <a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Demander un devis 💬</a>
        </div>`;
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
        contenupagepiecepop.innerHTML = `<h1>3D Geek / Pop Culture Miniatures: Manga, Video Games, Series, Movies... 🌟</h1>

<p>Turn your passion into works of art with <strong>20–30 cm</strong> miniatures designed for collection or display. Thanks to 3D printing and <strong>advanced painting techniques</strong> (NMM, OSL, weathering), each piece becomes a unique creation, faithful to your favorite universes.</p>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>🎨 Your Ideas Come to Life</h2>
  <p>
    At <strong>Studio Peinture Figurine</strong>, bring your projects to life with high-precision 3D printing 🖨️ for miniatures, scenery, and prototypes—perfect for gaming, pop culture collections 🔥, or scale modeling.
  </p>

  <div>
    <a href="simulateur_devis.html" class="button"
       onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
      Request a quote 💬
    </a>
  </div>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>🚀 Why Choose Us?</h2>
  <ul>
    <li>🔍 <strong>14K Precision:</strong> Striking details for your creations.</li>
    <li>🎯 <strong>Custom-Made:</strong> Send your STL file and get unique pieces.</li>
    <li>💎 <strong>Premium Quality:</strong> Professional resins for a durable finish.</li>
  </ul>
  <p>
    Create unique pieces for your display case or collection. Perfect for pop culture fans, our miniatures capture the essence of superheroes, cult movies, and video games. Explore our creations or join a training course to master the art of miniature painting.
  </p>
</div>

<div>
  <a href="simulateur_devis.html" class="button"
     onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
    Request a quote 💬
  </a>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2>Get Started!</h2>
  <div>

    <div class="card-container3">
      <div class="card">
        <h3>🖌️ Professional Painting</h3>
        <p>
          Enhance your prints with our 🎨 painting service, from tabletop to display-quality finishes.
          Also discover our 📚 training sessions to master the art of miniature painting.<br>
          The studio no longer offers standalone printing services; any printing project is always combined with a painting project.
        </p>
      </div>

      <div class="card">
        <h3>📋 How Does It Work?</h3>
        <ul>
          <li>📤 <strong>Send your STL:</strong> Share your 3D file (catalog coming soon).</li>
          <li>💸 <strong>Fast Quote:</strong> Get an estimate via our quote simulator 💰.</li>
          <li>🚚 <strong>Printing & Delivery:</strong> Parts shipped directly to your home.</li>
        </ul>
      </div>

      <div class="card">
        <h3>📦 Fast Delivery</h3>
        <p>
          Receive your creations quickly and securely with options such as Mondial Relay 🚛.<br>
          Visit our gallery 🖼️ to discover our latest works.
        </p>
      </div>
    </div>

  </div>
</div>
<div class="banniere">
  <a href="simulateur_devis.html" class="button"
     onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">
    Request a quote 💬
  </a>
</div>
`;
    } else if (langueselect === "spanish") {
        contenupagepiecepop.innerHTML = `<h1>Figuras 3D Geek / Pop Culture: Manga, Videojuegos, Series, Cine... 🌟</h1>

<p>Convierte tu pasión en obras de arte con figuras de <strong>20–30 cm</strong> pensadas para colección o exposición. Gracias a la impresión 3D y a <strong>técnicas avanzadas de pintura</strong> (NMM, OSL, weathering), cada pieza se convierte en una creación única, fiel a tus universos favoritos.</p>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>🎨 Tus Ideas Cobran Vida</h2>
  <p>
    En <strong>Studio Peinture Figurine</strong>, haz realidad tus proyectos con impresión 3D de alta precisión 🖨️ para figuras, escenografía y prototipos, perfectos para juegos, colecciones de pop culture 🔥 o modelismo.
  </p>

  <div>
    <a href="simulateur_devis.html" class="button"
       onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
      Solicitar un presupuesto 💬
    </a>
  </div>
</div>

<div class="card" role="region" aria-expanded="true" tabindex="0">
  <h2>🚀 ¿Por qué elegirnos?</h2>
  <ul>
    <li>🔍 <strong>Precisión 14K:</strong> Detalles impresionantes para tus creaciones.</li>
    <li>🎯 <strong>A medida:</strong> Envía tu archivo STL y obtén piezas únicas.</li>
    <li>💎 <strong>Calidad Premium:</strong> Resinas profesionales para un acabado duradero.</li>
  </ul>
  <p>
    Crea piezas únicas para tu vitrina o colección. Perfectas para los fans de la cultura pop, nuestras figuras capturan la esencia de superhéroes, películas de culto y videojuegos. Descubre nuestras realizaciones o sigue una formación para dominar el arte de la pintura.
  </p>
</div>

<div>
  <a href="simulateur_devis.html" class="button"
     onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">
    Solicitar un presupuesto 💬
  </a>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2>¡Empieza ahora!</h2>
  <div>

    <div class="card-container3">
      <div class="card">
        <h3>🖌️ Pintura Profesional</h3>
        <p>
          Realza tus impresiones con nuestro servicio de 🎨 pintura, desde tabletop hasta calidad vitrina.
          Descubre también nuestras formaciones 📚 para dominar el arte de la pintura de miniaturas.<br>
          El estudio ya no ofrece servicios de impresión por separado; cualquier proyecto de impresión estará siempre asociado a un proyecto de pintura.
        </p>
      </div>

      <div class="card">
        <h3>📋 ¿Cómo funciona?</h3>
        <ul>
          <li>📤 <strong>Envía tu STL:</strong> Comparte tu archivo 3D (catálogo próximamente).</li>
          <li>💸 <strong>Presupuesto rápido:</strong> Estimación mediante nuestro simulador de presupuestos 💰.</li>
          <li>🚚 <strong>Impresión y entrega:</strong> Piezas enviadas directamente a tu domicilio.</li>
        </ul>
      </div>

      <div class="card">
        <h3>📦 Entrega rápida</h3>
        <p>
          Recibe tus creaciones de forma rápida y segura con opciones como Mondial Relay 🚛.<br>
          Visita nuestra galería 🖼️ para descubrir nuestros trabajos.
        </p>
      </div>
    </div>
 </div>
 </div>
 
<div class="banniere">
  <a href="simulateur_devis.html" class="button"
     onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">
    Solicitar un presupuesto 💬
  </a>
</div>
`;
    } else if (langueselect === "french") {
        contenupagepiecepop.innerHTML = ` <h1>Figurines 3D Geek/Pop Culture : Manga, Jeux Vidéo, Série, Film... 🌟</h1>

            <p>Transformez votre passion en œuvres d'art avec des figurines de <strong>20-30 cm</strong> pour collection ou exposition. Grâce à limpression 3D et des techniques de <strong>peinture avancée</strong> (NMM, OSL, weathering), chaque pièce devient une création unique, fidèle à vos univers préférés.</p>


       <div class="card" role="region" aria-expanded="true" tabindex="0">
           <h2>🎨 Vos Idées Prennent Vie</h2>
                <p>Chez <strong>Studio Peinture Figurine</strong>, réalisez vos projets avec des impressions 3D de haute précision 🖨️ pour figurines, décors et prototypes, parfaits pour jeux, collections pop culture 🔥 ou modélisme.</p>

                       <div>    
               <a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">Demander un devis 💬</a>
               </div>    
       </div>
    

  <div class="card" role="region" aria-expanded="true" tabindex="0">
             <h2>🚀 Pourquoi Nous Choisir ?</h2>
                <ul>
                    <li>🔍 <strong>Précision 14k :</strong> Détails saisissants pour vos créations.</li>
                    <li>🎯 <strong>Sur-Mesure :</strong> Envoyez votre fichier STL, obtenez des pièces uniques.</li>
                    <li>💎 <strong>Qualité Premium :</strong> Résines pro pour une finition durable.</li>
                </ul>
            <p>Créez des pièces uniques pour votre vitrine ou collection. Parfaites pour les fans de pop culture, nos figurines captent l’essence des super-héros, films cultes, et jeux vidéo. Découvrez nos réalisations ou suivez une formation pour maîtriser l’art de la peinture.</p>

   </div>
        <div> <a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); changelanguesimulateur(); scrollToTop(); return false;">Demander un devis 💬</a></div>
    <div class="card" role="button" aria-expanded="true" tabindex="0">
          <h2>Lancez-vous !</h2>
          <div>
    
    <div class="card-container3">
            <div class="card">
                <h3>🖌️ Peinture Pro</h3>
                <p>Sublimez vos impressions avec notre service de 🎨, du tabletop à la qualité vitrine. Découvrez aussi nos formations 📚 pour maîtriser l'art de la peinture.<br>
              Le Studio ne propose plus de service d'impression seul, un projet impression sera toujours associé à un projet peinture.</p>
            </div>
            <div class="card">
                <h3>📋 Comment Ça Marche ?</h3>
                <ul>
                    <li>📤 <strong>Envoyez votre STL :</strong> Partagez votre fichier 3D (catalogue à venir).</li>
                    <li>💸 <strong>Devis rapide :</strong> Estimation via notre simulateur de devis 💰.</li>
                    <li>🚚 <strong>Impression & Livraison :</strong> Pièces expédiées chez vous.</li>
                </ul>
            </div>
            <div class="card">
                <h3>📦 Livraison Rapide</h3>
                <p>Recevez vos créations rapidement et en toute sécurité avec des options comme Mondial Relay 🚛.<br> Consultez notre galerie 🖼️ pour découvrir nos réalisations.</p>
            </div>
            </div>
              </div>
                </div>
                               <div class="banniere">
          <a href="simulateur_devis.html" class="button"  onclick="loadPage('simulateur_devis.html'); scrollToTop(); return false;">Demander un devis 💬</a>
        </div>`;
    }
}

/*****************************************
 * Page simulateur
 *****************************************/
function changelanguecondition() {
    const contenupagecondition = document.getElementById("contenupage-condition");
    if (!contenupagecondition) {
        return;
    }

    if (langueselect === "english") {
        contenupagecondition.innerHTML = `<h1 class="emoji">🎨 Studio PF: Miniature Painting</h1>
<h2 class="emoji">📜 General Terms and Conditions of Sale 2025</h2>
<hr>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">1. 📌 VAT and Exemption</h2>
  <ul>
    <li>🆓 VAT not applicable: Article 293 B of the French General Tax Code.</li>
    <li>📜 VAT exemption: Article 283-2 of the French General Tax Code.</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">2. 📄 Quote Validity</h2>
  <ul>
    <li>📅 Valid for 7 business days.</li>
    <li>✍️ The quote constitutes a contractual agreement and includes working time, research, and supplies.</li>
    <li>⏳ Estimated timeline: depends on the project start date.</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">3. 💰 Payment Terms</h2>
  <ul>
    <li>Payment in several stages:
      <ul>
        <li>💳 25% to reserve a slot.</li>
        <li>🏗️ 25% at project start, or 50% upfront replacing the first two stages.</li>
        <li>✅ Remaining 50% upon final validation via photos (presentation at 80% completion).</li>
      </ul>
    </li>
    <li>Payment available in 4 installments at no extra cost via PayPal.</li>
    <li>🏦 Payment methods: bank transfer, credit card, or PayPal (⚠️ 4% PayPal fee).</li>
    <li>🎁 4% discount for payments made outside PayPal.</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">4. 📦 Shipping and Delivery</h2>
  <ul>
    <li>🚚 Shipping via Colissimo with signature for orders valued at €150 and above (insurance up to €5,000).</li>
    <li>📌 Mondial Relay available but with very limited insurance in case of damage, loss, or theft (max €500).</li>
    <li>🎁 Free shipping for orders over €3,000.</li>
    <li>By default, Colissimo with signature and insurance is recommended, even though uninsured or Mondial Relay shipping remains possible.</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">5. 🏷️ Base Shipping Rates</h2>

  <h3>Mondial Relay:</h3>
  <div class="table-container center">
    <table class="tableborder1">
      <tr>
        <th>📦 Shipping Method</th>
        <th>⚖️ Weight</th>
        <th>💶 Price</th>
      </tr>
      <tr><td>Colissimo</td><td>0.5 kg</td><td>€12</td></tr>
      <tr><td>Colissimo</td><td>1 kg</td><td>€15</td></tr>
      <tr><td>Colissimo</td><td>2 kg</td><td>€16</td></tr>
    </table>
  </div>

  <h3>Colissimo:</h3>
  <div class="table-container center">
    <table class="tableborder1">
      <tr>
        <th>📦 Shipping Method</th>
        <th>⚖️ Weight</th>
        <th>💶 Price</th>
      </tr>
      <tr><td>Mondial Relay</td><td>0.5 kg</td><td>€5</td></tr>
      <tr><td>Mondial Relay</td><td>1 kg</td><td>€6</td></tr>
      <tr><td>Mondial Relay</td><td>2 kg</td><td>€8</td></tr>
    </table>
  </div>

  <p>Additional insurance fees: €5 to €13 per value bracket (€200 to €1,000).</p>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">6. 📜 Delivery Conditions</h2>
  <ul>
    <li>📦 Colissimo with signature for shipments valued between €150 and €5,000 (assembly + painting + miniature value).</li>
    <li>📌 Mondial Relay available but with limited insurance (max €500).</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">7. 🔒 Compensation</h2>
  <ul>
    <li>Insurance is included in shipping fees but may be removed at the client’s request (at their own risk).</li>
    <li>⚠️ In case of damaged parcels, claims must be made within 48 hours of pickup.</li>
    <li>Mondial Relay customer service: 09 69 32 23 32</li>
    <li>La Poste customer service: 36 34</li>
    <li>⚠️ The Studio declines all responsibility for parcel condition upon delivery or loss, especially without insurance.</li>
  </ul>

  <h4>Mondial Relay Compensation Rates</h4>
  <div class="table-container center">
    <table class="tableborder1">
      <tr><th>Maximum Coverage</th><th>Additional Cost</th></tr>
      <tr><td>€25</td><td>€0</td></tr>
      <tr><td>€50</td><td>€2</td></tr>
      <tr><td>€125</td><td>€4</td></tr>
      <tr><td>€250</td><td>€5</td></tr>
      <tr><td>€375</td><td>€7</td></tr>
      <tr><td>€500</td><td>€8</td></tr>
    </table>
  </div>

  <h4>Colissimo with Signature Compensation Rates</h4>
  <div class="table-container center">
    <table class="tableborder1">
      <tr><th>Maximum Coverage</th><th>Additional Cost</th></tr>
      <tr><td>€150</td><td>€2</td></tr>
      <tr><td>€300</td><td>€3</td></tr>
      <tr><td>€500</td><td>€5</td></tr>
      <tr><td>€1,000</td><td>€9</td></tr>
      <tr><td>€2,000</td><td>€19</td></tr>
      <tr><td>€5,000</td><td>€45</td></tr>
    </table>
  </div>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">8. 📸 Right to Use Images</h2>
  <p>Studio Peinture Figurine reserves the right to publish photos and videos of painted miniatures.</p>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">9. ⚠️ Deposits and Down Payments</h2>
  <ul>
    <li>🚫 Non-refundable in case of cancellation.</li>
    <li>✅ Payment of the deposit confirms acceptance of the quote.</li>
    <li>⏳ 30% surcharge for urgent orders (less than 1 month).</li>
    <li>⏳ If miniatures are not sent within 3 months of the project start date, the project will be automatically canceled and deposits retained.</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">10. ⚠️ Cancellation, Deposits, and Scheduling</h2>
  <ul>
    <li>🚫 Deposits are strictly non-refundable.</li>
    <li>❌ No rescheduling or slot exchange is possible.</li>
    <li>🔁 Deposits are non-transferable.</li>
    <li>📦 Miniatures cannot be returned before service completion.</li>
    <li>📦 Exception: 15 business days allowed for delays on new/collector boxes.</li>
    <li>📸 First preview sent at 80% completion.</li>
    <li>📸 Final photos sent at 100%, before and after touch-ups.</li>
  </ul>
</div>
`;
    }
        if (langueselect === "spanish") {
        contenupagecondition.innerHTML = `<h1 class="emoji">🎨 Studio PF: Pintura de Miniaturas</h1>
<h2 class="emoji">📜 Condiciones Generales de Venta 2025</h2>
<hr>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">1. 📌 IVA y Exención</h2>
  <ul>
    <li>🆓 IVA no aplicable: artículo 293 B del Código General de Impuestos francés.</li>
    <li>📜 Exención de IVA: artículo 283-2 del Código General de Impuestos francés.</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">2. 📄 Validez del Presupuesto</h2>
  <ul>
    <li>📅 Válido durante 7 días laborables.</li>
    <li>✍️ El presupuesto tiene valor contractual e incluye el tiempo de trabajo, investigación y materiales.</li>
    <li>⏳ Plazo estimado: depende de la fecha de inicio del proyecto.</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">3. 💰 Condiciones de Pago</h2>
  <ul>
    <li>Pago en varias etapas:
      <ul>
        <li>💳 25 % para reservar un turno.</li>
        <li>🏗️ 25 % al inicio del proyecto o 50 % directamente en sustitución de las dos primeras etapas.</li>
        <li>✅ 50 % restante tras la validación final mediante fotos (presentación al 80 % de avance).</li>
      </ul>
    </li>
    <li>Pago posible en 4 cuotas sin intereses a través de PayPal.</li>
    <li>🏦 Métodos de pago: transferencia bancaria, tarjeta bancaria o PayPal (⚠️ comisión PayPal del 4 %).</li>
    <li>🎁 Descuento del 4 % para pagos realizados fuera de PayPal.</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">4. 📦 Envío y Entrega</h2>
  <ul>
    <li>🚚 Envío mediante Colissimo con firma a partir de 150 € de valor (seguro hasta 5.000 €).</li>
    <li>📌 Mondial Relay disponible, pero con seguro muy limitado en caso de rotura, pérdida o robo (máx. 500 €).</li>
    <li>🎁 Gastos de envío gratuitos a partir de 3.000 € de pedido.</li>
    <li>Por defecto, se recomienda Colissimo con firma y seguro, aunque es posible optar por envíos sin garantía o Mondial Relay.</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">5. 🏷️ Tarifas Básicas de Envío</h2>

  <h3>Mondial Relay:</h3>
  <div class="table-container center">
    <table class="tableborder1">
      <tr>
        <th>📦 Método de Envío</th>
        <th>⚖️ Peso</th>
        <th>💶 Precio</th>
      </tr>
      <tr><td>Colissimo</td><td>0,5 kg</td><td>12 €</td></tr>
      <tr><td>Colissimo</td><td>1 kg</td><td>15 €</td></tr>
      <tr><td>Colissimo</td><td>2 kg</td><td>16 €</td></tr>
    </table>
  </div>

  <h3>Colissimo:</h3>
  <div class="table-container center">
    <table class="tableborder1">
      <tr>
        <th>📦 Método de Envío</th>
        <th>⚖️ Peso</th>
        <th>💶 Precio</th>
      </tr>
      <tr><td>Mondial Relay</td><td>0,5 kg</td><td>5 €</td></tr>
      <tr><td>Mondial Relay</td><td>1 kg</td><td>6 €</td></tr>
      <tr><td>Mondial Relay</td><td>2 kg</td><td>8 €</td></tr>
    </table>
  </div>

  <p>Suplementos de seguro: de 5 € a 13 € por tramo de valor (de 200 € a 1.000 €).</p>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">6. 📜 Condiciones de Entrega</h2>
  <ul>
    <li>📦 Colissimo con firma para envíos con un valor de entre 150 € y 5.000 € (montaje + pintura + valor de las miniaturas).</li>
    <li>📌 Mondial Relay disponible con seguro limitado (máx. 500 €).</li>
  </ul>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">7. 🔒 Indemnización</h2>
  <ul>
    <li>El seguro está incluido en los gastos de envío, pero puede eliminarse a solicitud del cliente (bajo su propia responsabilidad).</li>
    <li>⚠️ En caso de paquete dañado, la reclamación debe realizarse en un plazo máximo de 48 horas tras la recogida.</li>
    <li>Atención al cliente Mondial Relay: 09 69 32 23 32</li>
    <li>Atención al cliente La Poste: 36 34</li>
    <li>⚠️ El Studio declina toda responsabilidad sobre el estado del paquete en la entrega o en caso de pérdida, especialmente sin seguro.</li>
  </ul>

  <h4>Tarifas de Indemnización Mondial Relay</h4>
  <div class="table-container center">
    <table class="tableborder1">
      <tr><th>Indemnización Máxima</th><th>Coste Adicional</th></tr>
      <tr><td>25 €</td><td>0 €</td></tr>
      <tr><td>50 €</td><td>2 €</td></tr>
      <tr><td>125 €</td><td>4 €</td></tr>
      <tr><td>250 €</td><td>5 €</td></tr>
      <tr><td>375 €</td><td>7 €</td></tr>
      <tr><td>500 €</td><td>8 €</td></tr>
    </table>
  </div>

  <h4>Tarifas de Indemnización Colissimo con Firma</h4>
  <div class="table-container center">
    <table class="tableborder1">
      <tr><th>Indemnización Máxima</th><th>Coste Adicional</th></tr>
      <tr><td>150 €</td><td>2 €</td></tr>
      <tr><td>300 €</td><td>3 €</td></tr>
      <tr><td>500 €</td><td>5 €</td></tr>
      <tr><td>1.000 €</td><td>9 €</td></tr>
      <tr><td>2.000 €</td><td>19 €</td></tr>
      <tr><td>5.000 €</td><td>45 €</td></tr>
    </table>
  </div>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">8. 📸 Derecho de Publicidad</h2>
  <p>Studio Peinture Figurine se reserva el derecho de publicar fotos y vídeos de las miniaturas pintadas.</p>
</div>

<div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">9. ⚠️ Arras y Anticipos</h2>
  <ul>
    <li>🚫 No reembolsables en caso de cancelación.</li>
    <li>✅ El pago de las arras confirma la aceptación del presupuesto.</li>
    <li>⏳ Suplemento del 30 % para pedidos urgentes (menos de 1 mes).</li>
    <li>⏳ Si las miniaturas no se envían en un plazo superior a 3 meses desde el inicio del proyecto, este será cancelado automáticamente y las arras se conservarán.</li>
  </ul>
</div>
`;
    }
        if (langueselect === "french") {
        contenupagecondition.innerHTML = ` <h1 class="emoji">🎨 Studio PF : Peinture Figurine</h1>
    <h2 class="emoji">📜 Conditions Générales de Vente 2025</h2>
    <hr>

      <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">1. 📌 TVA et Exonération</h2>
        <ul>
            <li>🆓 TVA non applicable : article 293 B du Code général des impôts.</li>
            <li>📜 Exonération de TVA : article 283-2 du Code général des impôts.</li>
        </ul>
    </div>

     <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">2. 📄 Validité des Devis</h2>
        <ul>
            <li>📅 Valable 7 jours ouvré.</li>
            <li>✍️ Fait foi de contrat et inclut le temps de travail, recherche et fournitures.</li>
            <li>⏳ Délai provisoire : dépend de la date de démarrage.</li>
        </ul>
    </div>

      <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">3. 💰 Modalités de Paiement</h2>
        <ul>
            <li>Paiement en plusieurs étapes :
                <ul>
                    <li>💳 25 % pour réserver un créneau.</li>
                    <li>🏗️ 25 % au démarrage ou 50 % directement en remplacement des deux premières étapes.</li>
                    <li>✅ 50 % restants à la validation finale sur photos (présentation à 80 % d'avancement).</li>
                </ul>
            </li>
            <li>Paiement possible en x4 sans frais via PayPal.</li>
            <li>🏦 Moyens de paiement : virement, CB ou PayPal (⚠️ frais de 4 % pour PayPal).</li>
            <li>🎁 Réduction de 4 % pour les paiements hors PayPal.</li>
        </ul>
    </div>

     <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">4. 📦 Envoi et Livraison</h2>
        <ul>
           
            <li>🚚 Expédition via Colissimo avec signature à partir de 150€ de valeur (et assurance allant jusqu'à 5000€ de valeur).</li>
              <li>📌 Mondial Relay possible mais assurance très limité en cas de problèmes comme casse ou perte/vol (max 500€).</li>
            <li>🎁 Frais de port offerts à partir de 3000 € de commande.</li>
           <li>Par défaut, je conseille le service Colissimo avec signature et option d'assurance même s'il est possible de ne pas garantir l'envoi et/ou d'expédier via Mondial Relay.</li>
        </ul>
    </div>



               
      <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">5. 🏷️ Tarifs d'envoi  (de base) :</h2>
         <h3>Mondial Relay :</h3>
          <div class="table-container center">
        <table class="tableborder1">
            <tr>
                <th>📦 Mode d'envoi</th>
                <th>⚖️ Poids</th>
                <th>💶 Tarif</th>
            </tr>
            <tr>
                <td>Colissimo</td>
                <td>0,5 kg</td>
                <td>12 €</td>
            </tr>
            <tr>
                <td>Colissimo</td>
                <td>1 kg</td>
                <td>15 €</td>
            </tr>
            <tr>
                <td>Colissimo</td>
                <td>2 kg</td>
                <td>16 €</td>
            </tr>
    </table>
          </div>
          <h3>Colissimo :</h3>
                   <div class="table-container center">
        <table class="tableborder1">
            <tr>
                <th>📦 Mode d'envoi</th>
                <th>⚖️ Poids</th>
                <th>💶 Tarif</th>
            </tr>
          <tr>
                <td>Mondial Relay</td>
                <td>0,5 kg</td>
                <td>5 €</td>
            </tr>
            <tr>
                <td>Mondial Relay</td>
                <td>1 kg</td>
                <td>6 €</td>
            </tr>
            <tr>
                <td>Mondial Relay</td>
                <td>2 kg</td>
                <td>8 €</td>
            </tr>
        </table>
                   </div>
         <p>Suppléments de 5 à 13€ tranche de valeurs (de 200€ à 1000€)r</p>
    </div>

     <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">6.📜 Conditions de Livraison</h2>
        <ul>
            <li>📦 Colissimo avec signature pour les envois de plus de 150 à 5000 € de valeur (valeur presation montage + peinture + valeur des figurines).</li>
            <li>📌 Mondial Relay possible mais assurance très limité en cas de problèmes comme casse ou perte/vol (max 500€).</li>
           
        </ul>
    </div>

     <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">7.🔒 Indemnisation :</h2>
        <ul>
            <li>L'indemnisation des colis est incluse dans les frais de port, mais peut être supprimée à la demande du client (mais au risque et péril).</li>
           <li>⚠️ En cas de colis endommagé, vous avez 48h max depuis la date de retrait pour contester</li>
           <li>Au près du service client Mondial Relay au 09 69 32 23 32</li>
              <li>>Au près du service client La Poste au 36 34.</li>
            <li>⚠️ Le Studio se dédouane de toute responsabilité concernant l'état du colis lors de la livraison ou de la perte (surtout s'il n'y a pas d'assurance).</li>
        </ul>
        <h4>Tarifs d'Indemnisation Mondial Relay</h4>
                 <div class="table-container center">
        <table class="tableborder1">
            <tr>
                <th>Maximum d'Indemnisation</th>
                <th>Coût Supplémentaire</th>
            </tr>
            <tr>
                <td>25€</td>
                <td>0€</td>
            </tr>
            <tr>
                <td>50€</td>
                <td>2€</td>
            </tr>
            <tr>
                <td>125€</td>
                <td>4€</td>
            </tr>
            <tr>
                <td>250€</td>
                <td>5€</td>
            </tr>
            <tr>
                <td>375€</td>
                <td>7€</td>
            </tr>
            <tr>
                <td>500€</td>
                <td>8€</td>
            </tr>
        </table>
                 </div>
        <h4>Tarifs d'Indemnisation Colissimo avec Signature</h4>
                     <div class="table-container center">
        <table class="tableborder1">
            <tr>
                <th>Maximum d'Indemnisation</th>
                <th>Coût Supplémentaire</th>
            </tr>
            <tr>
                <td>150€</td>
                <td>2€</td>
            </tr>
            <tr>
                <td>300€</td>
                <td>3€</td>
            </tr>
            <tr>
                <td>500€</td>
                <td>5€</td>
            </tr>
            <tr>
                <td>1000€</td>
                <td>9€</td>
            </tr>
            <tr>
                <td>2000€</td>
                <td>19€</td>
            </tr>
                     <tr>
                <td>5000€</td>
                <td>45€</td>
            </tr>
        </table>
     </div>
    </div>

     <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">8. 📸 Droit de Publicité</h2>
        <p>Le Studio Peinture Figurine se réserve le droit de publier 📷 des photos et vidéos des figurines peintes.</p>
    </div>

     <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">9. ⚠️ Arrhes et Acompte</h2>
        <ul>
            <li>🚫 Non remboursables en cas de désistement.</li>
            <li>✅ Paiement des arrhes = validation du devis.</li>
            <li>⏳ Frais de 30 % pour toutes commandes en urgence (&lt; 1 mois).</li>
            <li>⏳ Si les figurines ne sont pas envoyées dans un délai de plus de 3 mois à compter de la date de démarrage du projet, la projet sera automatiquement annulée.<br>
               Dans ce cas, les arrhes versées seront conservées.</li>
        </ul>
    </div>
   
    <div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">10. ⚠️ Rétractation, Arrhes et Délais</h2>
  <ul>
    <li>🚫 Les arrhes versées sont <strong>strictement non remboursables</strong>, quel que soit le motif d’annulation.</li>
    <li>❌ Aucun <strong>report ou échange de créneau</strong> possible. Toute annulation entraîne la perte des arrhes.</li>
    <li>🔁 Les arrhes <strong>ne sont pas transférables</strong> à un autre projet ou créneau.</li>
    <li>📦 Les figurines ne peuvent pas être retournées au client <strong>avant la fin de la prestation</strong>.</li>
    <li>📦 <strong>Exception</strong> : un délai de <strong>15 jours ouvrés</strong> est accordé en cas de retard de livraison d’une boîte neuve/collector. Passé ce délai, la commande est annulée sans remboursement.</li>
    <li>📸 Un <strong>premier aperçu</strong> est envoyé à <strong>80 %</strong> d’avancement.</li>
    <li>📸 Des <strong>photos finales</strong> sont envoyées à <strong>100 %</strong>, <strong>avant et après retouches</strong>.</li>
  </ul>
    </div>
   
       <div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">11. 🕑 Délais de Réalisation</h2>
  <ul>
    <li>🔧 <strong>Petits projets – Niveau Essentiel</strong> : 4 mois ouvrés</li>
    <li>⚙️ <strong>Projets moyens à complexes – Niveau Essentiel</strong> : 4 à 6 mois ouvrés</li>
    <li>🏗️ <strong>Très gros projets – Niveau Essentiel et Appronfondi</strong> : 6 mois à 1 an ouvrés</li>
    <li>📦 Les délais sont calculés à partir de la <strong>réception complète du matériel</strong> et du paiement des arrhes.</li>
    <li>📅 Les mois de fermeture et jours fériés <strong>ne sont pas comptabilisés</strong> dans les délais.</li>
  </ul>
    </div>
     
              <div class="card" role="button" aria-expanded="true" tabindex="0">
  <h2 class="section-title">12. 📅 Fermetures & Vacances</h2>
  <ul>
    <li>🎄 <strong>Vacances de Noël</strong> : du 20 décembre au 3 janvier</li>
    <li>⛷️ <strong>Vacances d’hiver (zone A)</strong> : 2 semaines en février</li>
    <li>🌸 <strong>Vacances de printemps (zone A)</strong> : 2 semaines en avril</li>
    <li>🎃 <strong>Vacances de la Toussaint</strong> : dernière semaine d’octobre + première semaine de novembre</li>
    <li>🇫🇷 <strong>Jours fériés</strong> : 1er mai, 8 mai, Ascension, Pentecôte, 14 juillet, 15 août, 1er novembre, 11 novembre</li>
    <li>☀️ <strong>Fermeture estival</strong> : tout le mois d’août (1er au 31 août inclus)</li>
      <li>☀️ <strong>Congès RDC</strong> : du 1er septembre jusqu'au 8 septembre</li>
  </ul>
</div>


     <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">13. 🎭 Propriété Intellectuelle</h2>
        <ul>
            <li>📜 Œuvre protégée.</li>
            <li>👤 Droit d'usage exclusif pour le client.</li>
        </ul>
    </div>

      <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">14. ⚖️ Responsabilité</h2>
        <p>Le Studio PF n'est pas responsable des dommages liés à une mauvaise manipulation ou à l'usage de matériaux fournis par le client.</p>
    </div>

      <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">15. 📞 Contact</h2>
        <ul>
            <li>📧 Email : studiopeinturefigurine@gmail.com</li>
            <li>📱 Téléphone : 07 75 86 08 37</li>
            <li>📍 Adresse : 6 rue Benjamin Franklin, 42110 Feurs</li>
            <li>🏛️ SIRET : 832 040 380 00020</li>
        </ul>
    </div>

      <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">16. 🎨 Préparation et Peinture</h2>
        <ul>
            <li>📊 Tarification selon niveau et type de figurine.</li>
            <li>📌 Simulateur de Devis disponible.</li>
        </ul>
    </div>

      <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">17. 🖨️ Impression 3D à la Demande</h2>
        <ul>
            <li>📂 Fichier STL obligatoire (hors catalogue).</li>
            <li>📌 Le studio ne vend pas de fichiers 3D.</li>
        </ul>
    </div>

    <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">18. 📚 Formation</h2>
        <ul>
            <li>Figurines non fourni. Dans le cas de journée complète, une participation aux fournitures peinture peux être demandé.</li>
            <li>📍 Uniquement sur place (pour les cours individuels).</li>
           <li>📍 Prestation évenements : les temps de trajet et temps sur place (comme repas) sera compté dans le volume d'heures de prestation.</li>
            <li>📍 Stage sur devis. Le lieu peux varié et les conditions indiqué à l'annonce d'un nouveau stage.</li>
            <li>📞 Premier contact par téléphone.</li>
            <li>🔄 Heures réglées modulables mais non remboursables.</li>
        </ul>
    </div>

    <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">19. ⏳ Délais</h2>
        <ul>
            <li>🎨 Peinture TableTop : 
                <ul>
                    <li>🟢 Petit Projet / Niveau Essentiel : 4 mois ouvré.</li>
                    <li>🔵 Moyen Projet / Niveau Essentiel/Appronfondi 4 à 6 mois.</li>
                    <li>🔵 Grand Projet / Niveau Appronfondi : 6 à 12 mois.</li>
                    <li>🔵 Projet Expo / Vitrine : 12 mois ou plus.</li>
                </ul>
            </li>
        </ul>
    </div>

      <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">20. 🖌️ Peinture sur Commission</h2>
        <h4>⚙️ Préparation</h4>
        <ul>
            <li>🏗️ Montage possible ou réaliser par le client requis.</li>
            <li>🛠️ Options : 
                <ul>
                    <li>🎲 Discount : Retrait des carottes.</li>
                    <li>🎨 Essentiel : Lignes de moulage et jointures bouchées.</li>
                    <li>⚔️ Appronfondi : Kitbash/conversions possible.</li>
                    <li>🏆 Vitrine : Sur devis.</li>
                </ul>
            </li>
        </ul>

        <h4>🎨 Peinture</h4>
        <ul>
            <li>🎲 Discount à 🏆 Vitrine.</li>
            <li>🖌️ Techniques avancées : lining, glacis, OSL, MNM, battle damage.</li>
            <li>👀 Détails poussés : gemmes, yeux, textures, freehand.</li>
        </ul>

        <h4>🌱 Soclage</h4>
        <ul>
            <li>🌱 Base : texture simple.</li>
            <li>🌿 Supérieur : ombrage, éclaircis, herbes, accessoires 3D.</li>
            <li>🏆 Vitrine : socles de présentation en bois.</li>
        </ul>
      

    </div>

     <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">21. 🏅 Engagement Qualité</h2>
        <ul>
            <li>🏗️ Préparation minutieuse de chaque figurine.</li>
            <li>🎨 Peintures et matériaux de qualité.</li>
            <li>🖌️ Techniques avancées pour un rendu optimal.</li>
            <li>🎯 Adaptation aux besoins du client.</li>
        </ul>
    </div>

      <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">22.🎨 Programme Fidélité – Récompensons votre passion ! 💎</h2>

  <p>Chez <strong>Studio Peinture Figurine</strong>, votre fidélité mérite d’être récompensée ! Découvrez notre <strong>programme exclusif</strong> qui vous offre des <strong>remises croissantes</strong> selon votre engagement 🛠️💰.</p>

  <div>
    <h3>🔁 Comment ça fonctionne ?</h3>
    <ul>
      <li>📦 <strong>Commande &lt; 1500 €</strong> : vous gagnez <strong>+0,25 point</strong></li>
      <li>💼 <strong>Commande ≥ 1500 €</strong> : vous gagnez <strong>+0.5 point</strong></li>
    </ul>
    <p>Plus vous commandez, plus vous économisez ! 🆙</p>
  </div>

  <div>
    <div>
      <h4>✨ Niveau 1 – Nouveau Membre 🤝</h4>
       <p>Merci pour votre confiance !<br>
Profitez de vos premières remises et entrez dans le programme fidélité.<br>
🔓 Atteint dès votre première commande.
</p>

    </div>

    <div>
      <h4>✨ Niveau 2 – Membre Régulier 💎</h4>
      <p> Vous avancez dans le programme de fidélité.<br>
Accédez à des remises avantageuses et débutez les services personnalisés.<br>
🔓 Atteint après deux à trois commandes.</p>
      <ul>
        <li>✅ Bénéficiez d’une remise de 2%. 💳</li>
      </ul>
    </div>

    <div>
      <h4>✨ Niveau 3 – Membre Fidèle ⭐</h4>
       <p>Vous faites partie des piliers du studio.<br>
Profitez de remises premium, de conseils personnalisés et d’un suivi privilégié.<br>
🔓 Atteint après plusieurs commandes.
       </p>
          <ul>
        <li>✅ Bénéficiez d’une remise de 5%. 💳</li>
      </ul>
    </div>

         <div>
      <h4>✨ Niveau 4 – Membre VIP 💼</h4>
            <p>Un statut exclusif, réservé aux clients les plus fidèles.<br>
               Accès prioritaire, avantages sur-mesure et attention personnalisée.<br>
      🔓 Atteint après plusieurs commandes ou projets d’envergure.</p>
          <ul>
        <li>✅ Bénéficiez d’une remise de 10%. 💳</li>
      </ul>
    </div>

      <div>
      <h4>✨ Niveau 5 – Membre Prestige 👑</h4>
            <p>Un statut rare, réservé aux soutiens majeurs du studio.
Profitez d’avantages hors-norme, avec jusqu’à 25 % de remise pour paiement en une fois.
🔓 Atteint uniquement sur invitation ou projet exceptionnel.</p>
    </div>
  </div>

  <div>
    <p>💬 <strong>Un programme simple, juste et avantageux</strong></p>
    <p>Plus que des figurines, vous investissez dans une œuvre sur-mesure 🖌️.<br>Et nous vous remercions en retour avec des remises à la hauteur de votre confiance !</p>
    <p>🔗 Rejoignez dès maintenant notre programme fidélité et donnez vie à vos projets avec des avantages uniques !</p>
  </div>
    </div>
               
          <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">23. 🎨 Tarifs des Pièces de Concours </h2>


        <p>Les tarifs pour la création de pièces destinées à des concours comme le <strong>Golden Demon</strong> (GD) ou <strong>OctoPainting</strong> (OctoGônes) commencent à partir de <strong>300 € à 500 €</strong> selon la complexité de la pièce. 💰</p>

        <h4>Supplément par Palier Atteint 🏆</h4>
        <p>En fonction des distinctions obtenues lors du concours, un supplément de <strong>200 €</strong> est ajouté pour chaque palier atteint. Voici les paliers pour chaque concours :</p>
<ul>
  <li><strong>Golden Demon (GD) :</strong>
    <ul>
      <li>Notable Entry, Commended Entry, Finaliste, Bronze, Silver, Gold : +200 € par palier 🥇</li>
    </ul>
  </li>
  <li><strong>OctoPainting (OctoGônes) :</strong>
    <ul>
      <li>Bronze, Argent, Or : +200 € par palier 🏅</li>
    </ul>
  </li>
</ul>

  

 
        <h4>Exemple 💡</h4>
        <p>Si une pièce atteint le niveau <strong>Gold</strong> au <strong>Golden Demon</strong>, le prix serait compris entre <strong>500 € et 700 €</strong> en fonction de la complexité initiale de la figurine. 💎</p>

        <h4>Conclusion ✨</h4>
        <p>Les tarifs varient en fonction de la qualité et des distinctions obtenues. Chaque palier reflète l'effort supplémentaire fourni pour garantir une pièce de haute qualité prête à être exposée. 👏</p>

         </div>

             <div class="card" role="button" aria-expanded="true" tabindex="0">
 <h2 class="section-title">24. 🎬 Tarifs des Pièces Pop Culture </h2>


        <p>Les pièces de pop culture, destinées à la collection et l'exposition, sont créées sur <strong>devis uniquement</strong>. En fonction de la taille et de la complexité du projet, les tarifs varient généralement entre <strong>200 € et 500 €</strong>. 🖌️</p>


    
        <h4>Tarif sur Devis 📑</h4>
        <p>Chaque pièce est unique et le prix dépend de plusieurs facteurs : la taille, le niveau de détail, ainsi que la personnalisation souhaitée. Il est donc important de discuter avec nous pour établir un devis précis adapté à votre projet. 🤝</p>
  

    
        <h4>Exemple de Tarifs 💡</h4>
        <p>Une petite pièce de pop culture pourrait débuter autour de <strong>200 €</strong>, tandis qu'une pièce plus complexe et plus grande pourrait atteindre <strong>500 €</strong>, voire plus selon les demandes spécifiques. 💎</p>


  
    
         </div>

     <div class="card" role="button" aria-expanded="true" tabindex="0">
        <h2 class="section-title">25. 🎨 Politique de retour</h2>

        <ul>
            <li>🏗️ Validation avant envoi</li>
            <li>Les photos finales de la commande servent de référence officielle pour validation.</li>
              <li>Prenez bien le temps de les examiner attentivement et n’hésitez pas à demander des retouches ou modifications à ce stade.</li>
        </ul>
                <ul>
            <li>🖌️ Processus de retouche</li>
            <li>Chaque retouche donnera lieu à de nouvelles photos qui feront office de validation définitive.</li>
              <li>Une fois la commande validée (après retouches si besoin), elle sera expédiée.</li>
                   <li>➡️ Aucune modification ne sera possible après validation.</li>
        </ul>
                  <ul>
            <li>🎯 Retour et retouches après réception</li>
            <li>Vous disposez de 48 à 72 heures maximum après réception pour signaler un défaut non visible sur les photos.</li>
              <li>Une intervention sur devis pourra toutefois être proposée, selon les disponibilités.</li>
                   <li>Si la demande intervient plus de 15 jours après réception, un devis systématique sera nécessaire.</li>
        </ul>
                <ul>
            <li>🖌️ Améliorations et modifications hors défauts</li>
            <li>Les photos finales de la commande servent de référence officielle pour validation.</li>
              <li>Toute demande de modification ou d’amélioration non liée à un défaut après validation fera l’objet d’un devis complémentaire.</li>
        </ul>
    </div>`;
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

function changelangueinfo(){
if(langueselect === "french"){
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
}
if(langueselect === "english"){
// Chargement du message d'information
fetch('/data/messageinfoUK.txt')
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
}
if(langueselect === "spanish"){
// Chargement du message d'information
fetch('/data/messageinfo-es.txt')
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
}
}
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
    ecriturl(page);
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
              changelanguesimulateur();
      } else {
        console.error('initializeFormCalculations non défini');
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
                case 'conditions.html':
      if (typeof changelanguecondition === 'function') {
        console.log('Appel de changelanguecondition');
        changelanguecondition();
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
              case 'galerie.html':
      if (typeof changelanguegalerie === 'function') {
        console.log('Appel de changelanguegalerie');
    changelanguegalerie();
      } else {
        console.error('initializeGalerie non défini');
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

            if(langueselect ==="french"){
            // Ajouter le message du bot au chat
            chatContent.innerHTML += `
                <div class="blocchat">
                    <div class="bot-message">
                        <p><strong>Peinture Figurine:</strong><br>
                        Bienvenue ! En quoi puis-je vous aider ? 😊<br>
                        Voici ce que je peux faire pour vous :<br><br>- 📌 Informations sur les services :<br>Studio Peinture Figurine propose un service de peinture sur figurine TableTop et de vitrine.<br><br>Nous proposons également un service de montage de vos figurines et d'impression 3D.<br>- 🎨 Conseils de peinture : Tapez "conseil"<br><br>- 💰 Demande de devis : <br><a href="simulateur_devis-fr.html" onclick="loadPage('simulateur_devis-fr.html'); scrollToTop(); fermechat(); return false;">Simulateur de devis 💰</a><br><br><br>- 📆 Disponibilité actuelle :<br>Mon agenda de service de peinture est disponible à partir de <strong>${delaidispo}</strong> actuellement.<br><br>- 🤣 Une blague ? Tapez "blague"</p>
                    </div>
                </div>
            `;}
                        if(langueselect ==="english"){
            // Ajouter le message du bot au chat
            chatContent.innerHTML += `
              <div class="blocchat">
    <div class="bot-message">
        <p><strong>Figurine Painting:</strong><br>
        Welcome! How can I help you? 😊<br>
        Here's what I can do for you:<br><br>- 📌 Service Information:<br>Studio Figurine Painting offers tabletop and display figurine painting services.<br><br>We also provide assembly of your figurines and 3D printing services.<br>- 🎨 Painting Tips: Type "tip"<br><br>- 💰 Request a Quote: <br><a href="simulateur_devis-fr.html" onclick="loadPage('simulateur_devis-fr.html'); scrollToTop(); fermechat(); return false;">Quote Simulator 💰</a><br><br><br>- 📆 Current Availability:<br>My painting service schedule is available from <strong>${delaidispo}</strong> currently.<br><br>- 🤣 A joke? Type "joke"</p>
    </div>
</div>

            `;}
                        if(langueselect ==="spanish"){
            // Ajouter le message du bot au chat
            chatContent.innerHTML += `
              <div class="blocchat">
    <div class="bot-message">
        <p><strong>Pintura de Figuras:</strong><br>
        ¡Bienvenido! ¿En qué puedo ayudarte? 😊<br>
        Esto es lo que puedo hacer por ti:<br><br>- 📌 Información sobre los servicios:<br>Studio Pintura de Figuras ofrece servicios de pintura para figuras de mesa y de exhibición.<br><br>También ofrecemos servicio de montaje de tus figuras e impresión 3D.<br>- 🎨 Consejos de pintura: Escribe "consejo"<br><br>- 💰 Solicitar un presupuesto: <br><a href="simulateur_devis-fr.html" onclick="loadPage('simulateur_devis-fr.html'); scrollToTop(); fermechat(); return false;">Simulador de presupuesto 💰</a><br><br><br>- 📆 Disponibilidad actual:<br>Mi agenda de servicios de pintura está disponible desde <strong>${delaidispo}</strong> actualmente.<br><br>- 🤣 ¿Un chiste? Escribe "chiste"</p>
    </div>
</div>

            `;}
        }
    }, 240000);

    // Initialiser les formulaires de devis et formation

          changelanguemenu();
changelangueinfo();
    changelanguesimulateur();
    changelanguegalerie();
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
document.addEventListener("DOMContentLoaded", changelanguecondition);
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
