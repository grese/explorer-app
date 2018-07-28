import { createSwitchNavigator } from 'react-navigation';
import {reduxifyNavigator, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import * as ScreenNames from './screen_names';
import HomeScreen from '../containers/Home';
import SignupNavigator from './signup';
import MainNavigator from './main';
import MapNavigator from './map';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigationData
);

const RootNavigator = createSwitchNavigator(
  {
    [ScreenNames.HOME_SCREEN]: HomeScreen,
    [ScreenNames.SIGNUP_FLOW]: SignupNavigator,
    [ScreenNames.MAIN_FLOW]: MainNavigator,
    [ScreenNames.MAP_FLOW]: MapNavigator
  },
  {
    initialRouteName: ScreenNames.HOME_SCREEN,
    headerMode: 'none'
  }
);

const AppWithNavState = reduxifyNavigator(RootNavigator, 'root');
const mapStateToProps = state => ({
  state: state.navigationData,
});
const AppNavigator = connect(mapStateToProps)(AppWithNavState);

export {
  RootNavigator,
  AppNavigator,
  navMiddleware
};
export default AppNavigator;
