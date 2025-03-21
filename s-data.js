let messageinfo;

fetch('../data/messageinfo.txt')
    .then(response => response.text())
    .then(texte => {
        messageinfo = texte;
    });


let messageinfo-es;

fetch('../data/messageinfo-es.txt')
    .then(response => response.text())
    .then(texte => {
        messageinfo-es= texte;
    });

let delaidispo;

fetch('../data/delaidispo.txt')
    .then(response => response.text())
    .then(texte => {
        delaidispo = texte;
    });
