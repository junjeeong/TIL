//하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수 return function
//sort forEach map find filter reduce

//고차함수 sort(); -> 오름차순과 내림차순

// sort의 한계점 -> 문자 하나하나의 아스키 코드로 비교하기 떄문에 대소문자 구분이 안되고, 숫자의 자릿수 또한 구분하지 못하여 10과 1을 구분하지 못하고 Orange와 orange를 구분하지 못함

// let ascending_order = function(x,y){
//     x = x.toUpperCase();
//     y = y.toUpperCase();

//     if(x>y) return 1;
//     else if (y>x) return -1;
//     else return 0;
// }

// let decending_order = function(x,y){
//     x = x.toUppercase();
//     y = y.toUppercase();

//     if(x<y) return 1;
//     else if (y<x) return -1;
//     else return 0;
// }

// let fruits = ["apple", "orange", "Oragne", "melon"];

// console.log(fruits.sort(ascending_order));
// console.log(fruits.reverse(decending_order));

let nums = [1, -1, 4, 0, 10, 20, 12];
let fruits = ["apple", "orange", "Oragne", "melon"];

let ascending_order = function(x,y){
    if(typeof x === "string") x = x.toUpperCase();
    if(typeof y === "string") x = y.toUpperCase();
    return x>y ? 1: -1;
};

let decending_order = function(x,y){
    if(typeof x === "string") x = x.toUpperCase();
    if(typeof y === "string") x = y.toUpperCase();
    return x<y ? 1: -1;
};

console.log(fruits.sort(ascending_order));
console.log(fruits.reverse(decending_order));

