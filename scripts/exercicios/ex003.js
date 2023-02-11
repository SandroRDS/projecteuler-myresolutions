//Problema 3 - Maior fator primo

let numero = 600851475143;
let [primoAtual, maiorPrimo] = [0, 0];

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
    else //Caso o número não seja divisível pelo primo atual, buscar o próximo primo na sequência
    {
        buscarNumeroPrimo();
    }
}

console.log(`Maior Fator Primo: ${maiorPrimo}`);