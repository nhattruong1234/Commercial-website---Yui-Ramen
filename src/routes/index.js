import routesConfig from '~/config/routes'
// import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Contacts from '~/pages/Contacts';

export const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.product, component: Product },
  { path: routesConfig.contacts, component: Contacts /*layout: HeaderOnly*/ },
];
export const privateRoutes = [];
