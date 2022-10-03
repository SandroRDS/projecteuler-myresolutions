var resposta = document.querySelector("#resposta");
var a = 1, b = 2, c = 3;
var numeroEncontrado = false;
var resultado;

while(c <= 1000)
{
    for(b = 2; b < c; b++)
    {
        for(a = 1; a < b; a++)
        {
            var somaCatetos = Math.pow(a, 2) + Math.pow(b, 2);
            var hipotenusa = Math.pow(c, 2);

            if(somaCatetos == hipotenusa)
            {
                if(a + b + c == 1000)
                {
                    resultado = a * b * c;
                    resposta.innerHTML = resultado;
                }
            }
        }
    }
    
    c++;
}