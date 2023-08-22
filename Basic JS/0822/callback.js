//콜백 함수 : 다른 함수의 매개변수로 "함수"가 전달되어 수행되어지는 함수 (자기 자체가 arguments가 되는 함수)
//고차 함수 :  매개변수를 통해 함수를 받아 호출하는 함수 (함수를 파라미터로 받는 함수)

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

function calculator(callback, x,y){
    return callback(x+y);
}

console.log(calculator(add,7,3));
console.log(calculator(sub,7,3));
console.log(calculator(mul,7,3));
console.log(calculator(div,7,3));

