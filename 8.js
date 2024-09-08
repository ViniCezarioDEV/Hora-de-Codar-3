var valor = parseInt(prompt("Insira um valor: "));
            
while(valor <= 0){
    valor = parseInt(prompt("Insira um valor maior que 0, por favor."));
}

for(i=0; i < valor; i++){

document.write(`<p> Contagem: ${i+1} </p>`);
}