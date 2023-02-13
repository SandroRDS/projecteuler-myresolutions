//Problema 4 - Maior produto palíndromo

const limite = 999;
let maiorPalindromo = 0;

const isPalindrome = (numero) => {
    const numeroInvertido = numero.toString().split('').reverse().toString().replaceAll(',', '');
    return parseInt(numeroInvertido) === numero;
};

for(let i = 100; i <= limite; i++)
{
    for(let j = 100; j <= limite; j++)
    {
        const produto = i * j;

        if(isPalindrome(produto))
        {
            if(maiorPalindromo < produto)
            {
                maiorPalindromo = produto;
                console.log(`${i} x ${j} = ${produto}`);
            }
        }
    }
}

console.log("Maior palíndromo: " + maiorPalindromo);