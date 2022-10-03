var limite = 4000000;
var termo1 = 1, termo2 = 2, termo3 = 3, soma = 2;
var parada = true;

while(parada)
{
    if(termo1 + termo2 > limite)
    {
        parada = false;
    }
    else
    {
        termo3 = termo1 + termo2;
        
        if(termo3%2 == 0)
        {
            soma += termo3;
            console.log(termo3);
        }
    }

    termo1 = termo2;
    termo2 = termo3;
}