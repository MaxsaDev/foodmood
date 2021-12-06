import {MUNUDISHES_ROUTE, HOME_ROUTE, ADMIN_ROUTE} from './const';
import {MenuDishes} from "../page/MenuDishes";
import {Admin} from "../page/Admin";
import Home from "../page/Home";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home/>
  },
  {
    path: MUNUDISHES_ROUTE,
    Component: <MenuDishes/>
  },

];

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin/>
  }
]