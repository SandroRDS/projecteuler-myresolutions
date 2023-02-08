//Problema 3 - Maior fator primo

let numero = 600851475143;
let primoAtual = 0, maiorPrimo = 0;
let numeroAchado = false;

const buscarNumeroPrimo = () => {
    let primo = true;
    primoAtual += primoAtual !== 2 ? 2 : 1;

    for(let i = 3; i < primoAtual; i += 2)
    {
        if(primoAtual%i === 0)
        {
            primo = false;
            break;
        }
    }

    if(!primo)
    {
        buscarNumeroPrimo();
    }
}

while(numero > 1)
{
    if(numero%primoAtual === 0)
    {
        console.log(`${numero} / ${primoAtual}:`);
        maiorPrimo = primoAtual;
        numero /= primoAtual;
        console.log(numero);
    }
    else
    {
        buscarNumeroPrimo();
    }

    if(primoAtual > numero)
    {
        break;
    }
}

console.log(`Maior Fator Primo: ${maiorPrimo}`);