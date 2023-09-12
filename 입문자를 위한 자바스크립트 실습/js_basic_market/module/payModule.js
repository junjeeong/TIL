import { getCartInfo } from "./carToggleButton.js";

const DELIVERY_FREE_PRICE = 20000; 
const DELIVERY_PRICE = 3000;

const originalPriceDOM = document.getElementById('original-price');
const discountPriceDOM = document.getElementById('discount-price');
const deliveryPriceDOM = document.getElementById('delivery-price');
const totalPriceDOM = document.getElementById('total-price');

export const setPayInfo = () =>{

    const cartInfoList = getCartInfo();

    let originalPrice = 0;
    let discountPrice = 0;
    let deliveryPrice = 0;
    let totalPrice =0;
    
    cartInfoList.forEach((cartInfo) => {
        originalPrice += cartInfo.originalPrice;
        discountPrice += (cartInfo.originalPrice - cartInfo.price);
    });

    const payPrice = originalPrice - discountPrice;
    if(payPrice >= DELIVERY_FREE_PRICE){
        deliveryPrice = 0;
    }else {
        deliveryPrice = DELIVERY_PRICE;
    }

    totalPrice = payPrice + deliveryPrice;

    originalPriceDOM.innerHTML = originalPrice; 
    discountPriceDOM.innerHTML = discountPrice;
    deliveryPriceDOM.innerHTML = deliveryPrice;
    totalPriceDOM.innerHTML = totalPrice;
    
}
