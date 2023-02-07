const numero = 600851475143;
let numeroAtual = 3, maiorPrimo = 0;
let numeroAchado = false;

const verificarNumeroPrimo = (numero) => {
    let primo = true;

    for(let i = 3; i < numero; i += 2)
    {
        if(numero%i === 0)
        {
            primo = false;
            break;
        }
    }

    return primo;
}

while(numeroAtual < numero)
{
    numeroAtual += 2;
    
    if(numero%numeroAtual === 0)
    {
        if(verificarNumeroPrimo(numeroAtual))
        {
            console.log(numeroAtual);
            maiorPrimo = numeroAtual;
        }
    }
}

console.log(`Maior Fator Primo: ${maiorPrimo}`);