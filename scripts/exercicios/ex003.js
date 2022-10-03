var limiteBusca = 1;
var numerosPrimos = [];
var numero = 600851475143;

function buscarNumerosPrimos()
{
    var numerosEncontrados = 0;
    var i = limiteBusca;

    while(numerosEncontrados < 10)
    {
        var quantidadeDivisores = 0;

        for(var j = 1; j <= i; j++)
        {
            if(i%j == 0)
            {
                quantidadeDivisores++;
            }
        }

        if(quantidadeDivisores == 2)
        {
            numerosPrimos.push(i);
            numerosEncontrados++;
        }

        i++;
    }

    limiteBusca = i;
    console.log(numerosPrimos)
}

while(numero > 1)
{
    buscarNumerosPrimos();
    
    for(var i = 0; i < numerosPrimos.length; i++)
    {
        if(numero % numerosPrimos[i] == 0)
        {
            numero /= numerosPrimos[i];
            i--;
        }

        if(numero == 1)
        {
            break;
        }
    }
}