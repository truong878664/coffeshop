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
        </div>
    );
}

export default Dock;
