var soma = 0;

function iniciarAlgoritmo()
{
    for(var i = 3; i < 1000; i++)
    {
        console.log(`i = ${i} | soma = ${soma}`);

        if((i%3 == 0) || (i%5 == 0))
        {
            console.log(`${i} é múltiplo de 3 ou 5`);
            soma += i;
            console.log(`soma = ${soma - i} + ${i} = ${soma}`);
        }
        else
        {
            console.log(`${i} não é múltiplo de 3 ou 5`);
        }

        console.log("--------------------");
    }

    console.log(`Resultado Final = ${soma}`)
}