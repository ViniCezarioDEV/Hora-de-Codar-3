
var i = null;
var j = null;
var verify = true;

while (verify == true){
    while(i, j != null){
        i = parseInt(prompt('informe um número'));
        j = parseInt(prompt('informe outro número'));
        
        if (i <= 0 && j <= 0){
            alert('número abaixo ou igual a zero');
        }else{
            alert(i / j);
            verify = false;
        }
        
        
    }
}