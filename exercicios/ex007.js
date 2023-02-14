//Problema 7 - 10001º primo

let primoAtual = 0, posicao = 10001;

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

for(let i = 1; i <= posicao; i++)
{
    buscarNumeroPrimo();
}

console.log(`${posicao}º primo: ${primoAtual}`);