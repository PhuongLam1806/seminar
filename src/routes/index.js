//layouts
import { HeaderOnly } from '../components/Layout';
import Contact from '../pages/Contact/Contact';

import Following from '../pages/About/About';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import About from '../pages/About/About';
import DetailPage from '../pages/Home/DetailPage';
import CartFeature from '../components/Cart/CartFeature';

const publicRoutes = [
    { path: '/', component: Home },
    { path: `/:productId`, component: DetailPage, layout: HeaderOnly },
    { path: `/cart`, component: CartFeature, layout: HeaderOnly },
    { path: '/about', component: About, layout: HeaderOnly },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/contact', component: Contact, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
