var algarismos, algarismosInvertidos = [], mult, maiorPalindromo = 0;
var palindromo = true;

for(var i = 100; i <= 999; i++)
{
    for(var j = 100; j <= 999; j++)
    {
        mult = i * j;

        algarismos = String(mult).split('');
        
        for(k = algarismos.length - 1; k >= 0; k--)
        {
            if(algarismos[k] != algarismos[algarismos.length - 1 - k])
            {
                palindromo = false;
                break;
            }
        }

        
        if(palindromo && (mult > maiorPalindromo))
        {
            maiorPalindromo = mult;
        }

        palindromo = true;
    }   
}