var valorInicial = 1;
var valorUsuario = parseInt(prompt("informe o valor que a tabuada irá "));

while (valorInicial <= valorUsuario){
    for(i=1; i <=10; i++){
        var multiplicacao = valorInicial * i;
        document.write(`<p>${valorInicial}x${i} = ${multiplicacao}</p>`);
    }
    document.write(`</br>`);
    valorInicial++;
}