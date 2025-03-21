let messageinfo;

fetch('messageinfo.txt')
    .then(response => response.text())
    .then(texte => {
        messageinfo = texte;
    });


let messageinfo-es;

fetch('messageinfo-es.txt')
    .then(response => response.text())
    .then(texte => {
        messageinfo-es= texte;
    });

let delaidispo;

fetch('delaidispo.txt')
    .then(response => response.text())
    .then(texte => {
        delaidispo = texte;
    });
