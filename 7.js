var notas = [];
var soma = 0;

for (i = 0; i < 6; i++) {
    var nota = parseInt(prompt("Informe a sua nota: "));

    while (nota < 0 || nota > 10) {
        nota = parseInt(prompt("Nota inválida. Digite novamente: "));
    }
    notas.push(nota);
    soma += nota;

}

var media = soma / notas.length;
document.write(`A sua média é: ${parseInt(media)}`);