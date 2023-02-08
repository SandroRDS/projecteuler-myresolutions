//Problema 1 - Múltiplos de 3 ou 5

const limite = 1000;
let soma = 0;

for(let i = 3; i < limite; i++)
{
    if((i%3 === 0) || (i%5 === 0))
    {
        soma += i;
    }
}

console.log(soma);