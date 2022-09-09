import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

import { publicRoutes } from './router/router';
export const PropProductOder = createContext();

function App() {
    const [productOder, setProductOder] = useState([]);
    return (
        <div className="App">
            <PropProductOder.Provider value={{ productOder, setProductOder }}>
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
            </PropProductOder.Provider>
        </div>
    );
}

export default App;
