const obj = {};

let result = "";

// try{
//     result = obj.property.a;
// } catch (error){
//     result = "모름";
//     console.log(error);
// } finally {
//     console.log( `result = ${result}`);
// }

try{
throw new Error("이것은 커스텀 에러입니다.");
}catch(err){
    console.dir(err);
}finally{
    console.log('완료');
}