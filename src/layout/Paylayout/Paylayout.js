import Header from '../component/Header';
import Dock from '../component/Dock';

function PayLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Dock />
        </div>
    );
}

export default PayLayout;
