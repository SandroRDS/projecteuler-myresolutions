var numerosPrimos = []

function buscarNumerosPrimos()
{
    var limite = 2000000;
    var soma = 2;
    var quantidadeDivisores = 0;

    for(var i = 3; i < limite; i += 2)
    {
        for(var j = 1; j <= i; j += 2)
        {
            if(i%j == 0)
            {
                quantidadeDivisores++;
            }
            
            if(quantidadeDivisores == 2)
            {
                quantidadeDivisores = 0;
                
                if(j == i)
                {
                    soma += i;
                }
                else
                {
                    break;
                }
            }
        }
    }
}

buscarNumerosPrimos()