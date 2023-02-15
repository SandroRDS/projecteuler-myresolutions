//Soma de primos

let primoAtual = 0, limite = 2000000, soma = 0;

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

while(primoAtual < limite)
{
    soma += primoAtual;
    buscarNumeroPrimo();
}

console.log(`Soma dos primos: ${soma}`);