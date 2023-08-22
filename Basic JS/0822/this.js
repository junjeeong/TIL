let user = { name : "john", func : hello_func};
let admin = {name : "admin", func : hello_func};

function hello_func() {
    console.log("hello" + this.name);
}

user.func();
admin.func();

//메서드 : 객체의 프로퍼티 값이 함수인 경우
//프로퍼티 : 객체의 속성 key, value와 같은 구조가 프로퍼티