/* 재귀 함수(reculsive function) : 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
 재귀 함수는 특정 조건을 걸어줌으로써 자신을 그만호출할 수 있도록 제한하는 exit code가 필요함 -> 마치 
*/

function reculsive(num){
    
    if(num == 0) return 1;
    reculsive(num-1);
    return num * reculsive(num-1);
}




