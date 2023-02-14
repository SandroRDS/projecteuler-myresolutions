var somaDosQuadrados = 0, quadradoDaSoma = 0, limite = 100;

for(var i = 1; i <= limite; i++)
{
    somaDosQuadrados += Math.pow(i, 2);
    quadradoDaSoma += i;
}

quadradoDaSoma *= quadradoDaSoma; 

var diferenca = quadradoDaSoma - somaDosQuadrados;

console.log(quadradoDaSoma, somaDosQuadrados, diferenca);