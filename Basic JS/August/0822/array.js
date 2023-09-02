let arr = new Array(10);
let arr2 = [10, 20, 30];

//Hash  기반의 객체 Hash?
//메모리가 연속적인 밀집 배열(dense array) 이 아닌 비 연속적인 희소 배열 (sparse array)

let num = 1;
let nums = [];
nums[0] = "one";
nums[2] = "two";

console.log(nums.length);
console.log(nums);

console.log(Object.getOwnPropertyDescriptors);

//배열 타입 확인
console.log(Array.isArray(nums));
console.log(Array.isArray(num));
console.log(typeof num);

delete nums[2];
