import { fetchSectionListData } from "./module/fetch.js";
import { getProductSection } from "./module/productSection.js";

const body = document.getElementsByTagName('body')[0];

try {
    const sectionInfoList = await fetchSectionListData();

    sectionInfoList.forEach((sectionInfo) => {
        const { sectionTitle, productList } = sectionInfo;
        const productSectionDom = getProductSection(sectionTitle, productList);
        body.appendChild(productSectionDom);
    })
} catch (error){
    console.log(error);
}