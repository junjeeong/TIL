let list = [
    "john", 
    27, 
    function hello_func(){
    console.log("hello");
    }
];

let obj = {
    name : "john",
    age : 27,
    hello_func() {
        console.log("hello");
    }
};

function hello_func() { console.log("hello");}

hello_func();
obj.hello_func();
list[2]();
