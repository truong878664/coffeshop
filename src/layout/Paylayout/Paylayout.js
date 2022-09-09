import Header from '../component/Header';
import Dock from '../component/Dock';
import Cart from '../component/Cart';

function PayLayout({ children }) {
    return (
        <div>
            <Header />
            <Cart />
            {children}
            <Dock />
        </div>
    );
}

export default PayLayout;
