import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './DockItem.module.scss';

const cx = classNames.bind(style);

function DockItem({ to, icon, title }) {
    return (
        <NavLink to={to} className={(nav) => cx('dock-btn', { active: nav.isActive })}>
            {icon}
            <p>{title}</p>
        </NavLink>
    );
}

export default DockItem;
