import discountCodes from '~/data/discountcode.json';

function discount(discountCode, cartItems, priceSum, setIsValid) {
    const discountInfomation = discountCodes.find((discount) => discount.code === discountCode.toUpperCase());
    const totalQtl = cartItems.reduce((totalQuantity, item) => {
        return totalQuantity + item.quantity;
    }, 0);

    if (discountInfomation === undefined) {
        setIsValid(false);
        return priceSum;
    } else {
        if (totalQtl >= discountInfomation.item && priceSum >= discountInfomation.sumPrice) {
            const newPrice = priceSum * (1 - discountInfomation.discount / 100);
            setIsValid(true);
            return newPrice;
        } else {
            setIsValid(false);
            return priceSum;
        }
    }
}

export default discount;
