import { appendChildList, makeDomWithProperties} from "../utils/dom.js"
import { getCartToggleButton } from "./carToggleButton.js";

export const getProductCard =  (productInfo, removeCartCallback) => {
    const {
            imgSrc,
            name,
            discountPercent,
            price,
            originalPrice
    }= productInfo;

    const productCard = makeDomWithProperties('div', {
        className : 'product-card',
    });
    
    // ----product-image----
    const productImageCon = makeDomWithProperties('div', {
        className : 'product-image-con',
    });
    
    const productImage = makeDomWithProperties('img', {
        src : imgSrc,
        alt : name,
    });

    const cartToggleBtn = getCartToggleButton(productInfo, removeCartCallback);

    appendChildList(productImageCon, [productImage, cartToggleBtn]);
    
    // ----END)product-image----
    
    // ----start)product-description----
    const productDescription = makeDomWithProperties('div', {
        className : "product-description"
    });
    
    const productName = makeDomWithProperties('div', {
        className : "product-name",
        innerHTML : name,
    });
    
    const productPriceContainer = makeDomWithProperties('div', {
        className : "product-price-con"
    });
    
    const productDiscount = makeDomWithProperties('div', {
        className : "product-discount-percent",
        innerHTML : `${discountPercent}%`
    });
    
    const productPrice = makeDomWithProperties('div', {
        className : "product-price",
        innerHTML : `${price.toLocaleString()}원` 
    });
    
    const productOriginPrice = makeDomWithProperties('div', {
        className : "product-original-price",
        innerHTML : `${originalPrice.toLocaleString()}원`
    }); 
    
    appendChildList(productPriceContainer, [productDiscount, productPrice]);
    appendChildList(productDescription, [productName, productPriceContainer, productOriginPrice]);
    // ----END)product-description----
    
    appendChildList(productCard, [productImageCon, productDescription]);

    return productCard;
}