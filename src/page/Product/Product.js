import classNames from 'classnames/bind';
import style from './Product.module.scss';

import ProductItem from '~/components/ProductItem';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

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
    const datas = [{ data: MENU_ITEM }];
    const [menuItem, setMenuItem] = useState(datas);
    const currentItem = menuItem[menuItem.length - 1];
    const onBack = () => {
        const newMenuItem = menuItem.splice(0, menuItem.length - 1);
        setMenuItem(newMenuItem);
    };

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
                                            onClick={() => {
                                                if (isParent) {
                                                    // console.log(item.children);
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
                                <div className={cx('col', 'l-2-4')}>
                                    <ProductItem
                                        name={'Trà ổi nhiệt đới'}
                                        price={35}
                                        sticker="New"
                                        src={
                                            'https://www.highlandscoffee.com.vn/vnt_upload/product/07_2022/thumbs/270_crop_oi-hong.png'
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
