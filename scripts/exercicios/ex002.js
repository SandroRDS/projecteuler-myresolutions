//Problema 2 - Números pares de Fibonacci

const limite = 4*10e5;
let [termoAntecessor, termoAtual, soma] = [1, 2, 2];

while(termoAtual < limite)
{
    termoAtual += termoAntecessor;
    termoAntecessor = termoAtual - termoAntecessor;

    if(termoAtual%2 === 0)
    {
        soma += termoAtual;
    }
}

console.log(`Soma dos números pares até ${limite}: ${soma}`);