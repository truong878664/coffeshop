import { useContext } from 'react';
import classNames from 'classnames/bind';
import style from './ProductItem.module.scss';
import { discount } from '~/components/function/function.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

import { CartOderContext } from '~/Context/CartOderProvider.js';

const cx = classNames.bind(style);

function Product({ sticker, StickerPosition, large, src, name, price }) {
    const RandomRolate = () => Math.floor(Math.random() * 30 - 10);
    const RandomTranlatex = () => Math.floor(Math.random() * 20 + 10);
    const isDiscount = !isNaN(Number.parseInt(sticker));
    const classes = cx('wrapper', { large });

    const setProductOderValue = useContext(CartOderContext);

    const getParent = (child, classParent) => {
        let parent = child.parentElement;
        while (parent) {
            if (parent.classList.contains(classParent)) {
                break;
            }
            parent = parent.parentElement;
        }
        return parent;
    };

    const handleOrder = (e) => {
        const parent = getParent(e.target, 'ProductItem_wrapper__3ueCn');

        const image = parent.querySelector('img').src;
        const name = parent.querySelector('.name').innerText;
        const size = e.target.innerText;
        const quantity = 1;
        const price = parent.querySelector('.price-oder').innerText;

        const itemOder = {
            image,
            name,
            size,
            quantity,
            price,
        };

        setProductOderValue.setProductOder((prev) => [...prev, itemOder]);
    };
    return (
        <div className={classes}>
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
                    {isDiscount && <p className={cx('price')}>{price} $</p>}
                    <div className={cx('new-price', 'price-oder')}>{discount(sticker, price)} $</div>
                </div>
            </div>
        </div>
    );
}

export default Product;
