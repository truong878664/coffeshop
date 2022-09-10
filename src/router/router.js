import Home from '~/page/Home';
import Product from '~/page/Product';
import MainLayout from '~/layout/MainLayout';
import routes from '~/config/routes';
import PayLayout from '~/layout/Paylayout/Paylayout';
import Pay from '~/page/Pay/Pay';

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
        element: Pay,
        layout: PayLayout,
    },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
