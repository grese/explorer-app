import { NavigationActions } from 'react-navigation';
import * as ScreenNames from '../navigators/screen_names';
import RNExitApp from 'react-native-exit-app';

export const navigateBack = () => NavigationActions.back();

export const navigateToMainFlow = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.MAIN_FLOW,
    params
  });

export const navigateToSignupFlow = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.SIGNUP_FLOW,
    params
  });

export const navigateToContactsTab = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.CONTACTS_TAB,
    params
  });

export const navigateToMapsTab = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.MAPS_TAB,
    params
  });

export const navigateToProfileTab = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.PROFILE_TAB,
    params
  });

export const navigateToSignup = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.SIGNUP,
    params
  });

export const navigateToSignupVerify = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.SIGNUP_VERIFY,
    params
  });

export const navigateToMap = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.MAP,
    params
  });

export const navigateToContacts = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.CONTACTS,
    params
  });

export const navigateToContactDetails = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.CONTACT_DETAILS,
    params
  });


export const navigateToProfile = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.USER_PROFILE,
    params
  });

export const navigateToCreateMap = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.CREATE_MAP,
    params
  });

export const navigateToMapList = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.MAP_LIST,
    params
  });

export const navigateToCreateGroup = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.CREATE_GROUP,
    params
  });

export const navigateToConfirmGroup = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.CONFIRM_GROUP,
    params
  });

export const navigateToDisplayMap = params =>
  NavigationActions.navigate({
    routeName: ScreenNames.DISPLAY_MAP,
    params
  });

export const exitApp = () => {
  RNExitApp.exitApp();
};
