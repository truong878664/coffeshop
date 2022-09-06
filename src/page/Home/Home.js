import classNames from 'classnames/bind';
import style from './Home.module.scss';

import Product from '~/components/Product';

const cx = classNames.bind(style);

function Home() {
    const handleRandom = () => Math.floor(Math.random() * 30 - 10);

    const translatex = Math.floor(Math.random() * 20 + 30);
    console.log(translatex);
    return (
        <div className={cx('wrapper', 'grid', 'wide')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-6', 'l-o-3')}>
                    <div className={cx('heading')}>Sản phẩm mới</div>
                </div>
            </div>
            <div className={cx('row', 'row-center')}>
                <Product rotate={handleRandom()} translatex={translatex} />
                <Product rotate={handleRandom()} translatex={translatex} />
                <Product rotate={handleRandom()} translatex={translatex} />
            </div>
        </div>
    );
}

export default Home;
