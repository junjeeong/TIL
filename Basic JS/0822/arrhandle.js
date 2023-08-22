//LIFO Last In First Out

let fruits = ["melon", "watermelon", "aplle", "banana"];
let num = [1, 2, 3, 4, 5];

console.log(fruits);
fruits.push("junjeong");

console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("junjeong");
console.log(fruits);

fruits.shift();
console.log(fruits);

num.splice(0, 5, 100);
console.log(num);

num.push(200, 300, 400);
console.log(num);

console.log(num.concat("junjeong", "hi"));