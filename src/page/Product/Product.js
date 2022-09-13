import classNames from 'classnames/bind';
import style from './Product.module.scss';

import ProductItem from '~/components/ProductItem';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faListSquares } from '@fortawesome/free-solid-svg-icons';
import productDatas from '~/data/product.json';
import images from '~/asscet/images';

const cx = classNames.bind(style);

const MENU_ITEM = [
    {
        name: 'Cà phê',

        children: {
            title: 'Cà phê',
            data: [
                {
                    name: 'Cà phê đen',
                },
                {
                    name: 'Cà phê sữa',
                },
            ],
        },
    },
    {
        name: 'Trà',

        children: {
            title: 'Trà',
            data: [
                {
                    name: 'Trà thạch',
                },
                {
                    name: 'Trà nhiệt đới',
                },
            ],
        },
    },
    {
        name: 'FREEZE',
        children: {
            title: 'FREEZE',
            data: [
                {
                    name: 'Freeze Cà Phê Phin',
                },
                {
                    name: 'Freeze Không Cà Phê',
                },
            ],
        },
    },
];

function Product() {
    const titleElement = document.querySelector('title');
    titleElement.innerText = 'See Tea | Sản phẩm';

    const datas = [{ data: MENU_ITEM }];
    const [menuItem, setMenuItem] = useState(datas);
    const currentItem = menuItem[menuItem.length - 1];

    const onBack = () => {
        const newMenuItem = menuItem.splice(0, menuItem.length - 1);
        setMenuItem(newMenuItem);
        setcurrentMenuTitle('');
    };
    const [currentMenuTitle, setcurrentMenuTitle] = useState('');

    const currentProduct = productDatas.filter((data) => {
        let currentType = '';
        if (currentMenuTitle.indexOf('Trà', 0) !== -1) {
            currentType = 'tea';
        } else if (currentMenuTitle.indexOf('Cà phê', 0) !== -1) {
            currentType = 'coffee';
        } else if (currentMenuTitle.indexOf('FREEZE', 0) !== -1) {
            currentType = 'freeze';
        }
        return data.type === currentType;
    });

    const [isShowPaner, setIsShowPaner] = useState(true);
    useEffect(() => {
        if (menuItem.length <= 1) {
            setIsShowPaner(true);
        } else {
            setIsShowPaner(false);
        }
    }, [menuItem]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col, l-2')}>
                        <div className={cx('catelary')}>
                            <p className={cx('heading')}>Thực đơn</p>
                            {menuItem.length > 1 && (
                                <div className={cx('heading-menu')}>
                                    <FontAwesomeIcon
                                        icon={faCaretLeft}
                                        className={cx('icon-back-menu')}
                                        onClick={onBack}
                                    />

                                    <p className={cx('title-menu')}>{currentItem.title}</p>
                                </div>
                            )}
                            <ul className={cx('menu')}>
                                {currentItem.data.map((item, index) => {
                                    const isParent = !!item.children;
                                    return (
                                        <li
                                            key={index}
                                            className={cx('item')}
                                            onClick={(e) => {
                                                setcurrentMenuTitle(e.target.innerText);
                                                if (isParent) {
                                                    setMenuItem((prev) => [...prev, item.children]);
                                                }
                                            }}
                                        >
                                            {item.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col', 'l-10')}>
                        <div className={cx('product')}>
                            <div className={cx('row')}>
                                {currentProduct.map((data, index) => (
                                    <div key={index} className={cx('col', 'l-2-4', 'product-item')}>
                                        <ProductItem
                                            name={data.name}
                                            price={data.price}
                                            sticker={data.label}
                                            src={data.src}
                                        />
                                    </div>
                                ))}
                                {isShowPaner && <div className={cx('panner')}>See Tea.</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
