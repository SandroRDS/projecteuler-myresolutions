const linhas = document.querySelectorAll("pre l");

linhas.forEach((linha, indice) => {
    linha.setAttribute('data-line-number', indice+1);
});