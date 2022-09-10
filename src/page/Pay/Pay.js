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
                    <div className={cx('row', 'heading-form')}>
                        <div className={cx('col', 'l-12')}>
                            <h4>Thông tin</h4>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('form-input')}>
                                <input placeholder=" " className={cx('input')}></input>
                                <label>Họ</label>
                            </div>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('form-input')}>
                                <input placeholder=" " className={cx('input')} />
                                <label>Tên</label>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12')}>
                            <div className={cx('form-input')}>
                                <input placeholder=" " className={cx('input')} />
                                <label>Số điện thoại</label>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12')}>
                            <div className={cx('form-input')}>
                                <input placeholder=" " className={cx('input')} />
                                <label>Địa chỉ</label>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12')}>
                            <div className={cx('form-input')}>
                                <input placeholder=" " className={cx('input')} />
                                <label>Voucher</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('cart', 'col', 'l-6')}>
                    <div className={cx('')}></div>
                </div>
            </div>
        </div>
    );
}

export default Pay;
