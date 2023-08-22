function MAX(x,y){
    if (x > y) return x;
    else if (y > x) return y;
    else console.log("x,y는 똑같습니다.");
}

console.log(MAX(0,3)); // 3
console.log(MAX(-1,5)); // 5 
console.log(MAX(100,7)); // 100