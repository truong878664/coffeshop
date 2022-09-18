import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faRemove } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './ProductPay.module.scss';
import { useShopingCart } from '~/Context/CartOderProvider';

const cx = classNames.bind(style);

function ProductPay({ image, name, size, price, quantity, id, label }) {
    const { increseItemQuantity, decreseItemQuantity, removeItemQuantity } = useShopingCart();
    return (
        <div className={cx('product-item')}>
            <img className={cx('image-item')} src={image} alt="" />
            <div className={cx('info')}>
                <p className={cx('name')}>{name}</p>
                <div className={cx('')}>
                    <div className={cx('price')}>
                        Giá: <span> </span>
                        <span>
                            {isNaN(Number.parseInt(label))
                                ? (Number.parseInt(price) * quantity * 1000).toLocaleString()
                                : Math.round(
                                      quantity * Number.parseInt(price) * (1 + Number.parseInt(label) / 100) * 1000,
                                  ).toLocaleString()}
                        </span>{' '}
                        đ
                    </div>
                    {/* <div><span className={cx('size')}>{size}</span></div> */}
                    <div className={cx('quantily')}>
                        <span className={cx('label')}>Sl:</span>
                        <button className={cx('quantily-btn')} onClick={() => decreseItemQuantity(id, size)}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={cx('input-quantity')}>{quantity}</span>
                        <button className={cx('quantily-btn')} onClick={() => increseItemQuantity(id, size)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <div>
                            <span className={cx('size')}> {size}</span>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={() => removeItemQuantity(id, size)} className={cx('remove-btn')}>
                <FontAwesomeIcon icon={faRemove} />
            </button>
        </div>
    );
}

export default ProductPay;
