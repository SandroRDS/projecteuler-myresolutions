let [numeroTriangular, contagem] = [1, 1];
let numeroEncontrado = false;
let primoAtual;

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

const contarDivisores = (numero) => {
    let quantidadeDeDivisores = 1, expoente = 0;
    primoAtual = 2;

    while(numero > 1)
    {
        if(numero % primoAtual === 0)
        {
            expoente++;
            numero /= primoAtual;

            if(numero === 1)
            {
                quantidadeDeDivisores *= expoente + 1;
            }
        }
        else
        {
            quantidadeDeDivisores *= expoente + 1;
            expoente = 0;
            buscarNumeroPrimo();
        }
    }

    return quantidadeDeDivisores;
};

while(!numeroEncontrado)
{
    contagem++;
    numeroTriangular += contagem;

    const quantidadeDeDivisores = contarDivisores(numeroTriangular);
    console.log(`Número Triangular: ${numeroTriangular} | Quantidade de Divisores: ${quantidadeDeDivisores}`);
    
    numeroEncontrado = quantidadeDeDivisores > 500;
}

console.log("Número Triangular Altamente Divisível: " + numeroTriangular);