var i = parseInt(prompt('informe um numero'));
var j = parseInt(prompt('informe um numero'));
var list = [];
var sum = 0;

for(i; i < j; i++){
    list.push(i);
}
for (let value of list){
    sum += value;
}
sum = sum / list.length();