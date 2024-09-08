var list = [];
var sum = 0;
for (var i=15; i > 100; i++){
    list.push(i)
}

for (let value of list){
    sum += value;
}
sum = sum / list.length();
