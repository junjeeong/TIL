import { getProductSection } from "./module/productSection.js";

const body = document.getElementsByTagName('body')[0];

try {
    const response = await fetch('public/mock/sectionListData.json'); 
    const data = await response.json();
    const sectionInfoList = data.sectionInfoList;

    sectionInfoList.forEach((sectionInfo) => {
        const { sectionTitle, productList } = sectionInfo;
        const productSectionDom = getProductSection(sectionTitle, productList);
        body.appendChild(productSectionDom);
    })
} catch (error){
    console.log(error);
}