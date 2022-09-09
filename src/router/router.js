import Home from '~/page/Home';
import Product from '~/page/Product';
import MainLayout from '~/layout/MainLayout';
import routes from '~/config/routes';
import PayLayout from '~/layout/Paylayout/Paylayout';

const publicRoutes = [
    {
        path: routes.home,
        element: Home,
        layout: MainLayout,
    },
    {
        path: routes.product,
        element: Product,
        layout: MainLayout,
    },
    {
        path: routes.pay,
        element: Home,
        layout: PayLayout,
    },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
