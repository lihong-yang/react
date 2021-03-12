import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import examplesReducer from '../features/examples/redux/reducer';
import demoReducer from '../features/demo/redux/reducer';
import loginReducer from '../features/login/redux/reducer';
import orderReducer from '../features/order/redux/reducer';
import indexReducer from '../features/index/redux/reducer';
import detailReducer from '../features/detail/redux/reducer';
import cartReducer from '../features/cart/redux/reducer';
import myReducer from '../features/my/redux/reducer';
import settingReducer from '../features/setting/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage them.

const reducerMap = {
  router: routerReducer,
  home: homeReducer,
  common: commonReducer,
  examples: examplesReducer,
  demo: demoReducer,
  login: loginReducer,
  order: orderReducer,
  index: indexReducer,
  detail: detailReducer,
  cart: cartReducer,
  my: myReducer,
  setting: settingReducer,
};

export default combineReducers(reducerMap);
