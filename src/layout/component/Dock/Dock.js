import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMugSaucer, faCreditCard } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './Dock.module.scss';

const cx = classNames.bind(style);

function Dock() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('home', 'dock-btn')}>
                <FontAwesomeIcon icon={faHouse} />
                <p className={cx('span')}>Home</p>
            </div>
            <div className={cx('product', 'dock-btn', 'active')}>
                <FontAwesomeIcon icon={faMugSaucer} />
                <p className={cx('span')}>Product</p>
            </div>
            <div className={cx('pay', 'dock-btn')}>
                <FontAwesomeIcon icon={faCreditCard} />
                <p className={cx('span')}>Pay</p>
            </div>
        </div>
    );
}

export default Dock;
