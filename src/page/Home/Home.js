import classNames from 'classnames/bind';
import style from './Home.module.scss';

import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(style);

function Home() {
    const titleElement = document.querySelector('title');
    titleElement.innerText = 'See Tea | Home';

    return (
        <div className={cx('wrapper', 'grid', 'wide')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-12', 'l-o-2')}>
                    <div className={cx('heading')}>Sản phẩm mới</div>
                </div>

                <div className={cx('col', 'l-2', 'l-o-2')}>
                    <ProductItem
                        name={'Trà ổi nhiệt đới'}
                        price={35}
                        sticker="New"
                        src={
                            'https://www.highlandscoffee.com.vn/vnt_upload/product/07_2022/thumbs/270_crop_oi-hong.png'
                        }
                    />
                </div>
                <div className={cx('col', 'l-2')}>
                    <ProductItem
                        name={'Trà sen vàng'}
                        price={45}
                        sticker="New"
                        src={
                            'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRASENVANG.png'
                        }
                    />
                </div>
                <div className={cx('col', 'l-2')}>
                    <ProductItem
                        name={'Trà xanh đậu đỏ'}
                        price={35}
                        sticker="New"
                        src={'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRAXANHDAUDO.png'}
                    />
                </div>
                <div className={cx('col', 'l-2')}>
                    <ProductItem
                        name={'Trà thạch vải'}
                        price={39}
                        sticker="New"
                        src={'https://www.highlandscoffee.com.vn/vnt_upload/product/04_2020/TRATHACHVAI_1.png'}
                    />
                </div>
            </div>

            <div className={cx('row')}>
                <div className={cx('col', 'l-12', 'l-o-2')}>
                    <div className={cx('heading')}>Sản phẩm bán chạy</div>
                </div>

                <div className={cx('col', 'l-4', 'l-o-2')}>
                    <ProductItem
                        name={'Trà thanh đào'}
                        price={42}
                        sticker="Hot"
                        StickerPosition="right"
                        large
                        src={'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRATHANHDAO.png'}
                    />
                </div>
                <div className={cx('col', 'l-2')}>
                    <ProductItem
                        name={'CARAMEL PHIN FREEZE'}
                        price={35}
                        sticker="Hot"
                        large
                        src={'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/.png'}
                    />
                </div>
                <div className={cx('col', 'l-2')}>
                    <ProductItem
                        name={'Bạc sỉu đá'}
                        price={35}
                        sticker="Hot"
                        large
                        src={'https://www.highlandscoffee.com.vn/vnt_upload/product/04_2020/Bac_Xiu_Da.png'}
                    />
                </div>
            </div>

            <div className={cx('row')}>
                <div className={cx('col', 'l-12', 'l-o-2')}>
                    <div className={cx('heading')}>Siêu giảm giá</div>
                </div>

                <div className={cx('col', 'l-2', 'l-o-2')}>
                    <ProductItem
                        name={'PHIN SỮA ĐÁ'}
                        price={35}
                        sticker="-25%"
                        large
                        src={'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/PHIN-SUA-DA.png'}
                    />
                </div>
                <div className={cx('col', 'l-4')}>
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
                </div>
            </div>
        </div>
    );
}

export default Home;
