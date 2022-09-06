import React from 'react';
import classNames from 'classnames/bind';
import style from './Product.module.scss';

const cx = classNames.bind(style);

function Product(props) {
    return (
        <div className={cx('col', 'l-2')}>
            <div className={cx('item')}>
                <div className={cx('sticker')}>New</div>
                <img
                    className={cx('img-product')}
                    style={{
                        transform: `rotate(${props.rotate}deg) translateX(${props.translatex}px) translateY(${-40}px)`,
                    }}
                    src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRATHACHDAO.png"
                    alt=""
                />
                <div className={cx('info-item')}>
                    <div className={cx('name')}> Trà đào cam sả</div>
                    <div className={cx('price')}>35$</div>
                </div>
            </div>
        </div>
    );
}

export default Product;
