import Header from '../component/Header';
import Dock from '../component/Dock';

function MainLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            {children}
            <Dock />
        </div>
    );
}

export default MainLayout;
