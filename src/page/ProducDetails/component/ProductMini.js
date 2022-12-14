import React from 'react';
import classNames from 'classnames/bind';
import style from './ProductMini.module.scss';
import images from '~/asscet/images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBahai, faTag } from '@fortawesome/free-solid-svg-icons';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(style);

function ProductMini(data) {
    const currentItem = data.data;
    return (
        <Link to={`/product/${currentItem.id}`} className={cx('image-product')}>
            <div className={cx('circle')} style={{ backgroundColor: currentItem.color }}></div>
            <div className={cx('layer')} style={{ backgroundImage: `url("${images.coffeeNut}")` }}></div>
            <img src={currentItem?.src} alt="avatar product" className={cx('image')} />
            <div className={cx('label')}>
                {currentItem.label}
                <div className={cx('icon')}>
                    {currentItem.label.indexOf('%') !== -1 ? (
                        <FontAwesomeIcon icon={faTag} className={cx('icon-sale')} />
                    ) : currentItem.label === 'New' ? (
                        <FontAwesomeIcon icon={faBahai} className={cx('icon-new')} />
                    ) : currentItem.label === 'Hot' ? (
                        <FontAwesomeIcon icon={faHotjar} className={cx('icon-hot')} />
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <p className={cx('name')}>{currentItem.name}</p>
        </Link>
    );
}

export default ProductMini;
