import { useContext } from 'react';
import classNames from 'classnames/bind';
import style from './Cart.module.scss';
import images from '~/asscet/images';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import { CartOderContext } from '~/Context/CartOderProvider.js';

import ProductPay from './ProductPay';

const cx = classNames.bind(style);

function Cart() {
    const CartOdervalue = useContext(CartOderContext);
    const datas = CartOdervalue.productOder;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('image')} src={images.cart} alt="" />
                <p className={cx('heading')}>Giỏ hàng</p>
            </div>
            <div className={cx('content')}>
                {datas
                    ? datas.map((data, index) => (
                          <ProductPay
                              key={index}
                              image={data.image}
                              name={data.name}
                              size={data.size}
                              price={data.price}
                              quantity={data.quantity}
                          />
                      ))
                    : ''}
            </div>
            <div className={cx('footer')}>
                <Link to={routes.pay} className={cx('pay-btn')}>
                    Đặt mua ngay
                </Link>
                <div className={cx('total')}>
                    <p className={cx('label')}>Tổng:</p>
                    <p>
                        {datas.reduce((total, data) => {
                            const price = Number.parseInt(data.price);
                            return total + price;
                        }, 0)}
                        <span> $</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cart;
