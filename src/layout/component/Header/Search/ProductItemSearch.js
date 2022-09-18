import React from 'react';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

function ProductItemSearch({ data }) {
    const { item, setIsShowSearch, setSearchValue } = data;
    const navigate = useNavigate();
    return (
        <div
            className={cx('wrapper')}
            onClick={() => {
                navigate(`/product/${item.id}`);
                setIsShowSearch(false);
                setSearchValue('');
            }}
        >
            <img className={cx('image')} src={item.src} alt="" />
            <div className={cx('info')}>
                <h5 className={cx('name')}>{item.name}</h5>
                <h6>
                    Giá: <span>{(item.price * 1000).toLocaleString()}</span> đ
                </h6>
            </div>
        </div>
    );
}

export default ProductItemSearch;
