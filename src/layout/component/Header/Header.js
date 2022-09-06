import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>See Tea.</div>
            <div className={cx('search')}>
                <input placeholder="Search" className={cx('search-input')} />
                <div className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
            <div className={cx('profile')}>
                <img
                    className={cx('avatar')}
                    src="https://i.pinimg.com/236x/97/bf/62/97bf6201f74106ebe75b2ee49a7857e2.jpg"
                    alt="avatar"
                />
                <div>
                    <h4 className={cx('name')}>quoc_truong</h4>
                    <p className={cx('greeting')}>Chào buổi sáng</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
