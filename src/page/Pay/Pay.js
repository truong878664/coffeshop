import classNames from 'classnames/bind';
import style from './Pay.module.scss';
import { useShopingCart } from '~/Context/CartOderProvider';
import ProductPay from '~/components/ProductPay/ProductPay';
import productDatas from '~/data/product.json';
import discount from '~/components/function/discount';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function Pay() {
    const { cartItems } = useShopingCart();
    const [isdiscount, setIsDiscount] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const priceSum = cartItems.reduce((total, item) => {
        const infoItem = productDatas.find((data) => data.id === item.id);
        return total + infoItem.price * item.quantity * 1000;
    }, 0);
    const [priceTotal, setpriceTotal] = useState(priceSum);

    const [discountCode, setDiscountCode] = useState('');

    const [priceDiscount, setPriceDiscount] = useState(0);

    useEffect(() => {
        setPriceDiscount(priceSum - priceTotal);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [priceTotal]);

    useEffect(() => {
        setpriceTotal(discount(discountCode, cartItems, priceSum, setIsValid));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems]);

    return (
        <div className={cx('grid', 'wide', 'wrapper')}>
            {/* cart */}
            <div className={cx('cart')}>
                <h3 className={cx('cart-heading')}>Giỏ hàng</h3>
                <div className={cx('content')}>
                    {cartItems.length !== 0 ? (
                        cartItems.map((item, index) => {
                            const data = productDatas.find((data) => data.id === item.id);
                            return (
                                <ProductPay
                                    key={index}
                                    name={data.name}
                                    size={item.size}
                                    price={data.price}
                                    image={data.src}
                                    quantity={item.quantity}
                                    id={data.id}
                                    label={data.label}
                                />
                            );
                        })
                    ) : (
                        <p className={cx('note')}>Giỏ hàng trống </p>
                    )}
                </div>
            </div>

            {/* payment */}
            <div className={cx('payment')}>
                <h3 className={cx('payment-heading')}>Đơn hàng</h3>
                <div className={cx('discount')}>
                    <label> Mã khuyến mãi</label>
                    <div className={cx('input-discount')}>
                        <input
                            placeholder="Nhập mã giảm giá"
                            value={discountCode}
                            onFocus={() => setIsDiscount(false)}
                            onChange={(e) => {
                                setDiscountCode(e.target.value);
                            }}
                        />
                        <button
                            onClick={() => {
                                setpriceTotal(discount(discountCode, cartItems, priceSum, setIsValid));
                                setIsDiscount(true);
                                setDiscountCode('');
                            }}
                        >
                            Áp dụng
                        </button>
                    </div>
                    {!isdiscount ? (
                        <p></p>
                    ) : isValid ? (
                        <p className={cx('valid')}>Đã áp dụng mã giảm giá thành công</p>
                    ) : (
                        <p className={cx('illegal')}>
                            Mã khuyến mãi không hợp lệ do sai cú pháp hoặc quá thời hạn áp dụng. bạn hãy thử nhập mã là
                            "CMT81975", Với điều kiện mua trên 3 sản phẩm, tổng đơn hàng trên 100.000 đ. Và bạn được
                            giảm luôn 20%.
                            <br /> Hoặc là nhập "EMYEUANH" để giảm 99%.
                        </p>
                    )}
                </div>
                <div className={cx('title-price', 'price')}>
                    <p>Đơn hàng</p>
                    <p>
                        {priceSum.toLocaleString()}
                        <span> đ</span>
                    </p>
                </div>
                <div className={cx('title-price', 'price-discount')}>
                    <p>Giá giảm</p>
                    <p>
                        -{priceDiscount.toLocaleString()} <span>đ</span>
                    </p>
                </div>
                <div className={cx('title-price', 'price-total')}>
                    <p>Tạm tính</p>
                    <p>
                        {priceTotal.toLocaleString()} <span>đ</span>
                    </p>
                </div>
                <button className={cx('pay-btn')}>Tiếp tục thanh toán</button>
            </div>
        </div>
    );
}

export default Pay;
