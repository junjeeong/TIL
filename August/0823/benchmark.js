// let date = new Date(Date.UTC(2023,8,23));

// console.log(date);

// let ms_year = date.setFullYear(2023,8,23);
// console.log(date);
// console.log(new Date(ms_year));

// date.setDate(1);
// console.log(date);
// date.setDate(0);
// console.log(date);

// date.setHours(date.getHours()+0)
// console.log(date);

let ms_parse = Date.parse("2023-08-23T:00:00:00:00:000");
console.log(ms_parse);

//벤치마크 성능평가 할때 시간을 가지고 측정할 수 밖에 없다. 로직 전후로 스타트와 현재시간을 구해서 측정 전과 측정 후에 시차를 측정함

function dateSub(old_date, new_date) {
    return new_date - old_date;
}

function getTimeSub(old_date, new_date){
    return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func){
    let date_1 = new Date("2023-08-23");
    let date_2 = new Date();
    
    let start = Date.now();
    for (let i = 0; i < 10000; i++){
        callback_func(date_1, date_2);
    }
    return Date.now() - start;
}

console.log("dateSub : " + benchmark(dateSub) + "ms");
console.log("getTimeSub:" + benchmark(getTimeSub) + "ms");

