function add(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x+y;
}

function calculator(callback, x,y){ //callback함수를 파라미터로 전달받는 고차함수
    return callback(x,y);
}

console.log(calculator(add,7,3));//add라는 함수를 받아 호출하는 고차함수);
console.log(calculator(sub,7,3));
console.log(calculator(mul,7,3));
console.log(calculator(div,7,3));

