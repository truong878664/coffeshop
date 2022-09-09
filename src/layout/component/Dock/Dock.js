import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMugSaucer, faCreditCard } from '@fortawesome/free-solid-svg-icons';

import DockItem from './DockItem';
import classNames from 'classnames/bind';
import style from './Dock.module.scss';
import routes from '~/config/routes';

const cx = classNames.bind(style);

function Dock() {
    return (
        <div className={cx('wrapper')}>
            <DockItem to={routes.home} icon={<FontAwesomeIcon icon={faHouse} />} title="Home" />
            <DockItem to={routes.product} icon={<FontAwesomeIcon icon={faMugSaucer} />} title="Product" />
            <DockItem to={routes.pay} icon={<FontAwesomeIcon icon={faCreditCard} />} title="Pay" />

            {/* <NavLink to="/" className={cx('dock-btn')}>
                <FontAwesomeIcon icon={faHouse} />
                <p className={cx('span')}>Home</p>
            </NavLink>
            <NavLink to="/product" className={cx('dock-btn')}>
                <FontAwesomeIcon icon={faMugSaucer} />
                <p className={cx('span')}>Product</p>
            </NavLink>
            <NavLink to="/pay" className={cx('dock-btn')}>
                <FontAwesomeIcon icon={faCreditCard} />
                <p className={cx('span')}>Pay</p>
            </NavLink> */}
        </div>
    );
}

export default Dock;
