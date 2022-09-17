import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import routes from '~/config/routes';
import style from './Cart.module.scss';
import images from '~/asscet/images';

import ProductPay from '../../../components/ProductPay/ProductPay';

import { useShopingCart } from '~/Context/CartOderProvider.js';
import productDatas from '~/data/product.json';

const cx = classNames.bind(style);

function Cart() {
    const { cartItems } = useShopingCart();

    const totalPriceCart = cartItems.reduce((total, item) => {
        const dataPrice = productDatas.find((data) => data.id === item.id);
        return total + dataPrice.price * item.quantity;
    }, 0);

    if (cartItems.length) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img className={cx('image')} src={images.cart} alt="" />
                    <p className={cx('heading')}>Giỏ hàng</p>
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
                        Đặt mua ngay
                    </Link>
                    <div className={cx('total')}>
                        <p className={cx('label')}>Tổng:</p>
                        <p>
                            {totalPriceCart}
                            <span className={cx('unit')}>k</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper-empty')}>
                <img className={cx('image-empty')} src={images.cart} alt="" />
                <span className={cx('note')}>Chưa có sản phẩm</span>
            </div>
        );
    }
}

export default Cart;
