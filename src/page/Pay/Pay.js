import classNames from 'classnames/bind';
import style from './Pay.module.scss';

const cx = classNames.bind(style);

function Pay() {
    return (
        <div className={cx('wrapper', 'grid', 'wide')}>
            <div className={cx('header', 'row')}>
                <div className={cx('col', 'l-12')}>
                    <h3 className={cx('Heading')}>Thanh Toán</h3>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('form', 'col', 'l-6')}>
                    <div className={cx('row')}>
                        <input placeholder="Họ" className={cx('col', 'l-6', 'form-input')} />
                        <input placeholder="Tên" className={cx('col', 'l-6', 'form-input')} />
                        {/* <label>tên</label> */}
                    </div>
                    <div className={cx('row', 'form-input')}>
                        <input placeholder="Số điện thoại" className={cx('col', 'l-12', 'form-input')} />
                    </div>
                    <div className={cx('row', 'form-input')}>
                        <input placeholder="Địa chỉ" className={cx('col', 'l-12', 'form-input')} />
                    </div>
                    <div className={cx('row', 'form-input')}>
                        <input placeholder="Voucher" className={cx('col', 'l-12', 'form-input')} />
                    </div>
                </div>
                <div className={cx('cart', 'col', 'l-6')}>cart</div>
            </div>
        </div>
    );
}

export default Pay;
