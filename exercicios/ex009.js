//Problema 9 - Terno pitagórico especial

let [a, b, c] = [,, 3];
let ternoEncontrado = false;
let produtoTerno;

const testarTernoPitagorico = (a, b, c) => {
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) 
}

while(!ternoEncontrado)
{
    c++;

    for(b = 2; b < c; b++)
    {
        for(a = 1; a < b; a++)
        {
            if(testarTernoPitagorico(a, b, c))
            {
                console.log(`a: ${a} b: ${b} c: ${c}`);

                if(a + b + c === 1000)
                {
                    produtoTerno = a * b * c;
                    ternoEncontrado = true;
                    break;
                }
            }
        }

        if(ternoEncontrado)
        {
            break;
        }
    }
}

console.log(`Produto do terno pitagórico especial: ${produtoTerno}`);