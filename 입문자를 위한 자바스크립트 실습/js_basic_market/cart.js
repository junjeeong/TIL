import { CART_COOKIE_KEY } from "./constants/cart.js";
import { getCartInfo } from "./module/carToggleButton.js";
import { getProductList } from "./module/productList.js";
import { makeDomWithProperties } from "./utils/dom.js";
import { setPayInfo } from "./module/paymodule.js";

const sectionDOM = document.getElementsByTagName('section')[0];
const cartPayContainerDOM = document.getElementById('cart-pay-container');  

const cartInfo = getCartInfo(); //장바구니 정보 가져오기 -> productList와 연결해주어야 함.

const reloadPage = () => location.reload();

if(cartInfo.length < 1){
    const noticeDOM = makeDomWithProperties('div', {
        innerHTML : "장바구니에 상품이 없습니다.",
        className : "product-list-con",
    });
    sectionDOM.insertBefore(noticeDOM, cartPayContainerDOM);
} else {
    const productListDOM = getProductList(cartInfo, reloadPage);
    sectionDOM.insertBefore(productListDOM, cartPayContainerDOM);
}

const cartAllDeleteButtonDOM = document.getElementById('remove-all-button');

if(cartInfo.length >= 1){
    cartAllDeleteButtonDOM.onclick = ()=>{
        //로컬 스토리지에 들어있는 장바구니 물품목록 정보가 전부 삭제되어야 한다.
        if(confirm("전체삭제를 하시겠습니까?")){
            localStorage.removeItem(CART_COOKIE_KEY); //cartInfo라는 키를 가진 키-값 쌍이 삭제    
            location.reload(); //새로고침 하면 위에서부터 코드가 다시 실행됨.
        }else return;
    };
}
setPayInfo();