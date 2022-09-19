import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import React from 'react';
import productDatas from '~/data/product.json';
import useDebounced from '~/hoocks/useDebounced.js';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import ProductItemSearch from './ProductItemSearch';

const cx = classNames.bind(style);

function Search() {
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const debounced = useDebounced(searchValue, 500);

    const [searchProductValue, setSearchProductValue] = useState([]);

    const searchProduct = (datas, value) => {
        if (value && value !== null) {
            const valueNew = value
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim()
                .replaceAll(' ', '')
                .replaceAll('đ', 'd');
            const data = datas.filter(
                (data) =>
                    data.name
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .toLowerCase()
                        .trim()
                        .replaceAll(' ', '')
                        .replaceAll('đ', 'd')
                        .replaceAll('-', '')
                        .indexOf(valueNew) !== -1,
            );
            return data;
        }
    };

    useEffect(() => {
        const data = searchProduct(productDatas, debounced);
        setSearchProductValue(data);
    }, [debounced]);
    return (
        <div className={cx('search')}>
            <input
                placeholder="Tìm kiếm sản phẩm"
                value={searchValue}
                className={cx('search-input')}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
                onFocus={() => setIsShowSearch(true)}
            />

            <div className={cx('search-btn', { rotate: isShowSearch })}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            {isShowSearch && (
                <>
                    <div
                        onClick={() => {
                            setIsShowSearch(false);
                            setSearchValue('');
                        }}
                        className={cx('overlay')}
                    ></div>
                    <div className={cx('search-value')}>
                        <h5 className={cx('heading')}>
                            Kết quả tìm kiếm
                            <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                        </h5>
                        <div className={cx('content')}>
                            {searchProductValue && searchProductValue.length > 0 ? (
                                searchProductValue.map((item) => (
                                    <ProductItemSearch key={item.id} data={{ item, setIsShowSearch, setSearchValue }} />
                                ))
                            ) : (
                                <p>
                                    Bạn chưa nhập tìm kiếm hoặc không có sản phẩm nào phù hợp, vui lòng nhập từ khóa
                                    khác!
                                </p>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Search;
