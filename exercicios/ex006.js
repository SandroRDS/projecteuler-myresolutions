//Problema 6 - Diferença da Soma Quadrada

const limite = 100;
let [somaDosQuadrados, quadradoDaSoma] = [0,0];

for(let i = 1; i <= limite; i++)
{
    somaDosQuadrados += Math.pow(i, 2);
    quadradoDaSoma += i;
}

quadradoDaSoma = Math.pow(quadradoDaSoma, 2); 

let diferenca = quadradoDaSoma - somaDosQuadrados;

console.log(`Soma dos Quadrados = ${somaDosQuadrados}`);
console.log(`Quadrado da Soma = ${quadradoDaSoma}`);
console.log(`Diferença = ${quadradoDaSoma} - ${somaDosQuadrados} = ${diferenca}`);