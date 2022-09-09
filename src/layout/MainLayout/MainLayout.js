import classNames from 'classnames/bind';
import style from './MainLayout.module.scss';

import Header from '../component/Header';
import Dock from '../component/Dock';
import Cart from '../component/Cart';

const cx = classNames.bind(style);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Cart></Cart>
            {children}
            <Dock />
        </div>
    );
}

export default MainLayout;
