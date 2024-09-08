var listAproved = [];

function notaAluno(){
    var j = prompt('informe seu nome');
    var i = parseFloat(prompt('informe sua nota'));
    var k = parseFloat(prompt('informe sua nota'));
    var nota = (i + k) / 2;
    if (nota >= 9.5){
        listAproved.push({aluno:j, nota:nota});
    }else{
        alert('Aluno REPROVADO pq ele é burro');
    }
}        

function aproved(){
    if (listAproved){
        for (let dados in listAproved){
            alert('Aluno: ' + listAproved[dados].aluno +'; Nota: ' + listAproved[dados].nota + ' APROVADO(A)');
            
        }
    }
    verify();
}

function verify(){
    var i = prompt('Calcular a média de outro aluno S/N?').toLowerCase();
    if (i == 's'){
        notaAluno();
    }else{
        ;
    }
}

notaAluno();
aproved();