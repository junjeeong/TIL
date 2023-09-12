export const makeDomWithProperties = (domType, propertyMap) => {
    const dom = document.createElement(domType);
    Object.keys(propertyMap).forEach((key) => {
        dom[key] = propertyMap[key];
    });

    return dom; 
};

export const appendChildList = (target, childrenList) => {
    if(!Array.isArray(childrenList)) return;

    childrenList.forEach((children) =>{
        target.appendChild(children);
    })
};