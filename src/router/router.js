import Home from '~/page/Home';
import Product from '~/page/Product';
import MainLayout from '~/layout/MainLayout';

const publicRoutes = [
    {
        path: '/',
        element: Home,
        layout: MainLayout,
    },
    {
        path: '/product',
        element: Product,
        layout: MainLayout,
    },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
