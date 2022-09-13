export const discount = (sticker, price) => {
    const percenDiscount = Number.parseInt(sticker);
    const priceNumber = Number.parseInt(price);
    if (isNaN(percenDiscount)) {
        return priceNumber;
    } else {
        const newPrice = priceNumber + (percenDiscount * price) / 100;
        return newPrice.toFixed();
    }
};

export const getParent = (child, classParent) => {
    let parent = child.parentElement;
    while (parent) {
        if (parent.classList.contains(classParent)) {
            break;
        }
        parent = parent.parentElement;
    }
    return parent;
};
