    
let menuColuna = document.querySelector(".divSection");
let menuHamburguer = document.querySelector("nav");

function abrirMenu(){
  menuColuna.classList.toggle("abrirMenu");
}

menuHamburguer.onclick = abrirMenu;