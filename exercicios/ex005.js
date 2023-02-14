//Problema 5 - Menor múltiplo

let primoAtual = 2;

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

const montarArraySequencial = (inicio, fim) => {
    const array = [];

    for(let i = inicio; i <= fim; i++)
    {
        array.push(i);
    }

    return array;
}

const encontrarMMC = (numeros) => {
    let divisores = 1;
    
    while(!numeros.every(numero => numero === 1))
    {
        let algumDivisivel = false;
    
        numeros = numeros.map((numero) => {
            if(numero % primoAtual === 0)
            {
                algumDivisivel = true;
                return numero / primoAtual;
            }
            else
            {
                return numero;
            }
        });

        console.log(numeros);

        if(!algumDivisivel)
        {
            buscarNumeroPrimo();
        }
        else
        {
            divisores *= primoAtual;
        }
    }

    return divisores;
}

const array = montarArraySequencial(1, 20);
const menorMultiplo = encontrarMMC(array);

console.log("Menor Múltiplo: " + menorMultiplo);
