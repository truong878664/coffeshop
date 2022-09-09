import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './Header.module.scss';

import { handleGreeting } from '~/components/function/handle';

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide', 'container')}>
                <div className={cx('row', 'row-space')}>
                    <div className={cx('col', 'l-2', 'm-3', 'c-6')}>
                        <div className={cx('logo')}>See Tea.</div>
                    </div>
                    <div className={cx('col', 'l-3', 'm-4', 'c-0')}>
                        <div className={cx('search')}>
                            <input placeholder="Search" className={cx('search-input')} />
                            <div className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-3', 'm-4', 'c-6')}>
                        <div className={cx('profile')}>
                            <img
                                className={cx('avatar')}
                                src="https://i.pinimg.com/236x/97/bf/62/97bf6201f74106ebe75b2ee49a7857e2.jpg"
                                alt="avatar"
                            />
                            <div>
                                <h4 className={cx('name')}>quoc_truong</h4>
                                <p className={cx('greeting')}>{handleGreeting()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
