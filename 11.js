
var valoresEntreIntervalo = [];
var valoresForaInteravlo = [];

for(i=0; i<10; i++){
    var valor = parseInt(prompt("Informe um valor: "));
    
    if(valor >= 24 && valor <= 42){
        valoresEntreIntervalo.push(valor);
    } else {
        valoresForaInteravlo.push(valor);
    }
}
document.write(`<p> A quantidade de valores entre os números 24 e 42 são ${valoresEntreIntervalo.length}, eles são: ${valoresEntreIntervalo}</p>
<p> A quantidade de valores fora deste intervalo são ${valoresForaInteravlo.length}, eles são: ${valoresForaInteravlo}</p>`);