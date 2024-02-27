
let immagini= ["assets/img/book1.jpg", "assets/img/book2.jpg", "assets/img/book3.jpg"]; 
let hero = document.getElementById("hero");
let indice=0; 

function cambiaImmagine(){
    // Cambia l'immagine del background
    hero.style.backgroundImage = 'url(' + immagini[indice] + ')';
    indice = (indice + 1) % immagini.length;   
    
}

cambiaImmagine(); 
setInterval(cambiaImmagine, 5000);


let tendina = document.querySelector('#tendina');

function gestisciMenu() {
    if (tendina.style.display === 'none' || tendina.style.display === '') {
        tendina.style.display = 'block';
        tendinaMenu.style.display = 'none';
    } else {
        tendina.style.display = 'none';
    }
}


let tendinaMenu= document.querySelector('.tendinaMenu');

function apriMenu(){
    if (tendinaMenu.style.display === 'none' || tendinaMenu.style.display === '') {
        tendinaMenu.style.display = 'block';
        tendina.style.display = 'none';
    } else {
        tendinaMenu.style.display = 'none';
    }
}

