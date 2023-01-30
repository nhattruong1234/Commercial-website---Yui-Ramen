import routesConfig from '~/config/routes'
// import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Booking from '~/pages/Booking';

export const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.product, component: Product },
  { path: routesConfig.booking, component: Booking /*layout: HeaderOnly*/ },
];
export const privateRoutes = [];
