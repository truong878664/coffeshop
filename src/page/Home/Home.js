import classNames from 'classnames/bind';
import style from './Home.module.scss';

import ProductItem from '~/components/ProductItem';

import productDatas from '~/data/product.json';

const cx = classNames.bind(style);

function Home() {
    const titleElement = document.querySelector('title');
    titleElement.innerText = 'See Tea | Home';

    const getNewItem = (() => {
        const productNew = productDatas.filter((data) => data.label === 'New');
        const newDatas = productNew.splice(productNew.length - 4, productNew.length).reverse();
        return newDatas;
    })();

    const getComonItem = (() => {
        const productNew = productDatas.filter((data) => data.label === 'Hot');
        const newDatas = productNew.splice(productNew.length - 3, productNew.length).reverse();
        return newDatas;
    })();

    const getSaleItem = (() => {
        const productNew = productDatas.filter((data) => data.label.indexOf('%') !== -1);
        const newDatas = productNew
            .splice(productNew.length - 3, productNew.length)
            .sort((a, b) => Number.parseInt(b.label) - Number.parseInt(a.label))
            .reverse();
        return newDatas;
    })();

    return (
        <div className={cx('wrapper', 'grid', 'wide')}>
            {/* new product */}

            <div className={cx('row')}>
                <div className={cx('col', 'l-12', 'l-o-2')}>
                    <div className={cx('heading')}>Sản phẩm mới</div>
                </div>

                {getNewItem.map((data, index) => {
                    if (index === 0) {
                        return (
                            <div key={data.id} className={cx('col', 'l-2', 'l-o-2')}>
                                <ProductItem name={data.name} price={data.price} sticker={data.label} src={data.src} />
                            </div>
                        );
                    } else {
                        return (
                            <div key={data.id} className={cx('col', 'l-2')}>
                                <ProductItem name={data.name} price={data.price} sticker={data.label} src={data.src} />
                            </div>
                        );
                    }
                })}
            </div>

            {/* common product */}

            <div className={cx('row')}>
                <div className={cx('col', 'l-12', 'l-o-2')}>
                    <div className={cx('heading')}>Sản phẩm bán chạy</div>
                </div>
                {getComonItem.map((data, index) => {
                    if (index === 0) {
                        return (
                            <div key={data.id} className={cx('col', 'l-4', 'l-o-2')}>
                                <ProductItem
                                    name={data.name}
                                    price={data.price}
                                    sticker={data.label}
                                    StickerPosition="right"
                                    large
                                    src={data.src}
                                />
                            </div>
                        );
                    } else {
                        return (
                            <div key={data.id} className={cx('col', 'l-2')}>
                                <ProductItem
                                    name={data.name}
                                    price={data.price}
                                    sticker={data.label}
                                    large
                                    src={data.src}
                                />
                            </div>
                        );
                    }
                })}
            </div>

            {/* sale product */}

            <div className={cx('row')}>
                <div className={cx('col', 'l-12', 'l-o-2')}>
                    <div className={cx('heading')}>Siêu giảm giá</div>
                </div>
                {getSaleItem.map((data, index) => {
                    if (index === 0) {
                        return (
                            <div key={data.id} className={cx('col', 'l-4', 'l-o-2')}>
                                <ProductItem
                                    name={data.name}
                                    price={data.price}
                                    sticker={data.label}
                                    StickerPosition="right"
                                    large
                                    src={data.src}
                                />
                            </div>
                        );
                    } else {
                        return (
                            <div key={data.id} className={cx('col', 'l-2')}>
                                <ProductItem
                                    name={data.name}
                                    price={data.price}
                                    sticker={data.label}
                                    large
                                    src={data.src}
                                />
                            </div>
                        );
                    }
                })}

                {/* <div className={cx('col', 'l-4')}>
                    <ProductItem
                        name={'Trà thạch vải'}
                        StickerPosition="right"
                        price={35}
                        sticker="-12%"
                        large
                        src={'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRATHACHDAO.png'}
                    />
                </div>
                <div className={cx('col', 'l-2')}>
                    <ProductItem
                        name={'Trà thạch đào'}
                        price={35}
                        sticker="-15%"
                        large
                        src={'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRATHACHDAO.png'}
                    />
                </div> */}
            </div>
        </div>
    );
}

export default Home;
