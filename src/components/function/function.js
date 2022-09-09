export const discount = (sticker, price) => {
    const percenDiscount = Number.parseInt(sticker);
    if (isNaN(percenDiscount)) {
        return price;
    } else {
        const newPrice = price + (percenDiscount * price) / 100;
        return newPrice.toFixed();
    }
};
