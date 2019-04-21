    
let menuColuna = document.querySelector(".divSection");
let menuHamburguer = document.querySelector(".hamburguer");

function abrirMenu(){
  menuColuna.classList.toggle("abrirMenu");
}

menuHamburguer.onclick = abrirMenu;