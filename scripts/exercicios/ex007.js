function buscarNumerosPrimos()
{
    var numerosEncontrados = 0;
    var i = 2;
    var numeroPrimo;
    var limite = 10001;

    while(numerosEncontrados < limite)
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
            numeroPrimo = i;
            numerosEncontrados++;
        }
        
        i++;
    }
}

buscarNumerosPrimos();