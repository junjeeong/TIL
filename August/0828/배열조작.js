let fruits = ["사과", "포도", "오렌지"];
let ve = [1,2,3];
Array.isArray(fruits);

fruits.push("포도");
console.log(fruits);

fruits.pop();

console.log(fruits);

fruits.unshift("첫번쨰 과일");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.concat(ve));
