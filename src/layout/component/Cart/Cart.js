import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import routes from '~/config/routes';
import style from './Cart.module.scss';
import images from '~/asscet/images';

import ProductPay from '../../../components/ProductPay/ProductPay';

import { useShopingCart } from '~/Context/CartOderProvider.js';
import productDatas from '~/data/product.json';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Cart() {
    const { cartItems, totalQuantity } = useShopingCart();

    const totalPriceCart = cartItems.reduce((total, item) => {
        const dataPrice = productDatas.find((data) => data.id === item.id);
        return total + dataPrice.price * item.quantity;
    }, 0);

    const [isShowCart, setIsShowCart] = useState(false);

    return (
        <>
            {isShowCart ? (
                <div className={cx('wrapper', 'hide')}>
                    <div className={cx('header')}>
                        <div className={cx('cart-logo')}>
                            <img className={cx('image')} src={images.cart} alt="" />
                            <div className={cx('total-quantity')}>
                                <p>{totalQuantity}</p>
                            </div>
                        </div>
                        <p className={cx('heading')}>Giỏ hàng</p>
                        <FontAwesomeIcon
                            icon={faSquareXmark}
                            className={cx('hide-btn')}
                            onClick={() => {
                                setIsShowCart(false);
                            }}
                        ></FontAwesomeIcon>
                    </div>
                    <div className={cx('content')}>
                        {cartItems.map((item, index) => {
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
                        })}
                    </div>
                    <div className={cx('footer')}>
                        <Link to={routes.pay} className={cx('pay-btn')}>
                            Đặt hàng
                        </Link>
                        <div className={cx('total')}>
                            <p className={cx('label')}>Tổng:</p>
                            <p>
                                {(totalPriceCart * 1000).toLocaleString()}
                                <span> đ</span>
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={cx('wrapper-empty')}
                    onClick={() => {
                        setIsShowCart(true);
                    }}
                >
                    <img className={cx('image-empty')} src={images.cart} alt="" />
                    <div className={cx('total-quantity')}>
                        <p>{totalQuantity}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;
