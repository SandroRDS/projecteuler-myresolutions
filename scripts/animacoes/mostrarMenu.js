var botaoMenu = document.querySelector(".cabecalho__menu");
var menu = document.querySelector(".cabecalho__navegacao");

botaoMenu.onclick = function()
{
    menu.classList.toggle("cabecalho__navegacao--recolhido");
}