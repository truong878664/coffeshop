import { Routes, Route, useParams } from 'react-router-dom';

import { publicRoutes } from './router/router';

import CartOderProvider from './Context/CartOderProvider.js';

function App() {
    return (
        <CartOderProvider>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Element = route.element;
                    const Layout = route.layout;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Element />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </CartOderProvider>
    );
}

export default App;
