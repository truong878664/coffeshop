import classNames from 'classnames/bind';
import style from './ProductItem.module.scss';
import { discount } from '~/components/function/function.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

import { useShopingCart } from '~/Context/CartOderProvider.js';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

function Product({ sticker, StickerPosition, large, src, name, price, id }) {
    const RandomRolate = () => Math.floor(Math.random() * 30 - 10);
    const RandomTranlatex = () => Math.floor(Math.random() * 20 + 10);
    const isDiscount = !isNaN(Number.parseInt(sticker));
    const classes = cx('wrapper', 'product-item', { large });

    const { setCartItemQuantity } = useShopingCart();

    const handleOrder = (e) => {
        setCartItemQuantity(id, e.target.innerText);
        e.stopPropagation();
    };

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/product/${id}`)} className={classes}>
            <div className={cx('sticker', StickerPosition, sticker)}>{sticker}</div>
            <img
                className={cx('img-product', { large })}
                style={{
                    transform: `rotate(${RandomRolate()}deg) translateX(${RandomTranlatex()}px) translateY(${-40}px)`,
                }}
                src={src}
                alt=""
            />
            <div className={cx('info-item')}>
                <div className={cx('name')}> {name}</div>
                <div className={cx('order')}>
                    <div className={cx('order-btn')}>
                        <FontAwesomeIcon icon={faSquarePlus} />
                    </div>
                    <div className={cx('wrapper-size')}>
                        <p onClick={handleOrder}>s</p>
                        <p onClick={handleOrder}>m</p>
                        <p onClick={handleOrder}>l</p>
                    </div>
                </div>
                <div>
                    {isDiscount && (
                        <p className={cx('price')}>
                            {price}
                            <span className={cx('unit')}>k</span>
                        </p>
                    )}
                    <div className={cx('new-price', 'price-oder')}>
                        {discount(sticker, price)}
                        <span className={cx('unit')}>k</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
