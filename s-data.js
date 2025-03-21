let messageinfo;

fetch('../data/messageinfo.txt')
    .then(response => response.text())
    .then(texte => {
        messageinfo = texte;
    });
function updateParagraph() {
    const paragraph = document.getElementById('infoParagraph');
    if (paragraph) {
        paragraph.textContent = messageinfo; // Met le contenu dans le <p>
    }
}

let messageinfo-es;

fetch('../data/messageinfo-es.txt')
    .then(response => response.text())
    .then(texte => {
        messageinfo-es= texte;
    });
function updateParagraph() {
    const paragraph = document.getElementById('infoParagraph');
    if (paragraph) {
        paragraph.textContent = messageinfo-es; // Met le contenu dans le <p>
    }
}
let delaidispo;

fetch('../data/delaidispo.txt')
    .then(response => response.text())
    .then(texte => {
        delaidispo = texte;
    });
fetch('../data/delaidispo-es.txt')
    .then(response => response.text())
    .then(texte => {
        delaidispo = texte;
    });
