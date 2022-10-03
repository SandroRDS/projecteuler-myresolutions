var menorNumero;
var numeroEncontrado = false, divisivel = true;
var i = 20;

while(!numeroEncontrado)
{
    for(var j = 1; j <= 20; j++)
    {
        if(i % j != 0)
        {
            divisivel = false;
            break;
        }
    }

    if(divisivel)
    {
        numeroEncontrado = true;
        menorNumero = i;
    }
    else
    {
        i++;
        divisivel = true;
    }
}