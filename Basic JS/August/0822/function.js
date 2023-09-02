function print_add(x,y =20){
    console.log(x+y);
}

print_add(10);

function print_add2(){
    console.log(arguments[0] + arguments[2]);
}

print_add2(10,20,30);

function add(x,y){
    return x+y;
}

let ret = add(10,20);
console.log(ret);


function checkAge(age){
    if(age>=18) return true;
    else return false;
}

console.log(checkAge(14));
console.log(checkAge(20));