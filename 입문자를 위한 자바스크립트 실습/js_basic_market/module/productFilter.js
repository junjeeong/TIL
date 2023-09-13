import { makeDomWithProperties } from "../utils/dom.js";
import { getProductList } from "./productList.js";

const MAX_PRICE = Number.MAX_VALUE;

const minPriceFilter = document.getElementById('price-min-filter');
const maxPriceFilter = document.getElementById('price-max-filter');
const discountFilter = document.getElementById('discount-filter');
const filterButton = document.getElementsByClassName('product-filter-con')[0]?.lastElementChild;

const convertPriceToNumber = (originalPrice) => {
    const formattedString = String(originalPrice).replace('원','').replace(',', '');  
    const formattedNumber = Number(formattedString);
    return isNaN(formattedNumber) ? 0 : formattedNumber;
}

const formatToPrice = (event) => {
    const value = event.target.value;
    const result = Number(value);
    if(isNaN(result)) {
        alert("숫자를 입력하시오.");
    } 

    event.target.value = `${result.toLocaleString()}원`;
}

const convertPercentToNumber = (originalValue) => {
    const formattedString = String(originalValue).replace('%', '');
    const formattedNumber = Number(formattedString);
    return isNaN(formattedNumber) ? 0 : formattedNumber;
}

export const setButtonEvent = (productList) => {
    filterButton.onclick = () => {
        const minPrice = convertPriceToNumber(minPriceFilter.value) || 0;
        const maxPrice = convertPriceToNumber(maxPriceFilter.value) || MAX_PRICE;
        const discountRate = convertPercentToNumber(discountFilter.value) || 0;
    
        const newProductList = productList.filter((productInfo)=>{
            const { price, discountPercent} = productInfo;
            return price >= minPrice && price <= maxPrice && discountRate <= discountPercent;
        }); 

        const sectionDOM = document.getElementsByTagName('section')[0];
        const originalProductListDOM = document.getElementsByClassName('product-list-con')[0];
        sectionDOM.removeChild(originalProductListDOM);

        if (newProductList.length > 0) {
            const productListDOM = getProductList(newProductList);
            sectionDOM.appendChild(productListDOM);
        } else {
            const emptyProductListDOM = makeDomWithProperties('div', {
                className : 'product-list-con empty',
                innerHTML : '조건에 해당하는 상품이 없습니다.',
            });
            sectionDOM.appendChild(emptyProductListDOM);
        }
    };
};

export const setFilterEvent = () => {
    minPriceFilter.onfocus = (event) => { 
        event.target.value = convertPriceToNumber(event.target.value);
    };
    minPriceFilter.onblur = formatToPrice;
    maxPriceFilter.onfocus = (event) => { 
        event.target.value = convertPriceToNumber(event.target.value);
    };
    maxPriceFilter.onblur = formatToPrice;
    discountFilter.onfocus = (event) => {
        event.target.value = convertPercentToNumber(event.target.value);
    };
    discountFilter.onblur = (event) => {
        const value = event.target.value;
        const result = Number(value);
        if(isNaN(result)) {
            alert("숫자를 입력하시오.");
            event.target.value = 0;
            return;
        } 
        if(result > 100 || result < 0){
            alert("0 이상 100 이하의 숫자를 입력해주세요.");
            return;
        }

        event.target.value = `${result.toLocaleString()}%`;
    };
};