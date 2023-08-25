//find()
let users = [
    { name : "bob", age : 17 , job : false},
    {name : "alice", age : 20, job : true},
    {name : "john", age : 27, job : false}
];

let find_job = users.find(function(user){
    return user.job == true;
})

console.log(find_job.name);

let find_age = users.find(function(user){
    return user.age >= 18;
});

console.log(find_age.name);