const numero = 600851475143;
let [primoAtual, maiorPrimo] = [3, 0];

const buscarNumeroPrimo = () => {
    let primo = true;
    primoAtual += 2;

    for(let i = 3; i < primoAtual; i += 2)
    {
        primo = !(primoAtual%i === 0);
    }

    if(!primo)
    {
        buscarNumeroPrimo();
    }
}

while(primoAtual <= numero)
{
    buscarNumeroPrimo();

    if(numero%primoAtual === 0)
    {
        maiorPrimo = primoAtual;
    }
}

console.log(maiorPrimo);