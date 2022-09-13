import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import classNames from 'classnames/bind';
import style from './Cart.module.scss';

const cx = classNames.bind(style);

function ProductPay({ image, name, size, price }) {
    const [quantityNew, setQuantily] = useState(1);

    const handleQuantilyMinus = () => {
        if (quantityNew <= 0) {
            setQuantily(0);
            return;
        } else {
            setQuantily(quantityNew - 1);
        }
    };
    const handleQuantilyPlus = () => setQuantily(quantityNew + 1);
    return (
        <div className={cx('product-item')}>
            <img className={cx('image-item')} src={image} alt="" />
            <div className={cx('info')}>
                <p className={cx('name')}>{name}</p>
                <div className={cx('')}>
                    <div>
                        <span>size: </span>
                        <span className={cx('size')}>{size}</span>
                    </div>
                    <div className={cx('quantily')}>
                        <span className={cx('label')}>số lượng</span>
                        <button className={cx('quantily-btn')} onClick={handleQuantilyMinus}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={cx('input-quantity')}>{quantityNew}</span>
                        <button className={cx('quantily-btn')} onClick={handleQuantilyPlus}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('price')}>
                {/* <span className={cx('old-price')}>{Number.parseInt(price)}$</span> */}
                <span className={cx('new-price')}>{Number.parseInt(price) * quantityNew}$</span>
            </div>
        </div>
    );
}

export default ProductPay;
