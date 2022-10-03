var navbar = document.querySelector(".navbar");
var navbarButton = document.querySelector(".navbar__botao");
var navbarButtonIcon = document.querySelector(".navbar__botao span");
var escondido = true;

navbarButton.onclick = function(){
    
    navbar.classList.toggle("navbar--recolhida");

    if(escondido)
    {
        navbarButtonIcon.innerHTML = "reply";
    }
    else
    {
        navbarButtonIcon.innerHTML = "start";
    }

    escondido = !escondido;
}