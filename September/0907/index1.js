const btn = document.querySelector("#button");
const result = document.querySelector("#btn_result");


btn.addEventListener('click', () => {
    let num = result.innerHTML;
    console.log(typeof num);
    result.innerHTML = Number(result.innerHTML) + 1;
});
