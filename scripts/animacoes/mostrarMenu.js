var seta = document.querySelector(".cabecalho__navegacao__seta");
var menu = document.querySelector(".cabecalho__navegacao");
var escondido = true;

seta.onclick = function()
{
    menu.classList.toggle("cabecalho__navegacao--recolhido");
    
    if(escondido)
    {
        seta.innerHTML = "navigate_next";
    }
    else
    {
        seta.innerHTML = "chevron_left";
    }

    escondido = !escondido;
}