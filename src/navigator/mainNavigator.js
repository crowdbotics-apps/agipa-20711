import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList111095Navigator from '../features/ArticleList111095/navigator';
import Maps111082Navigator from '../features/Maps111082/navigator';
import SignUp21111077Navigator from '../features/SignUp21111077/navigator';
import SignUp22111076Navigator from '../features/SignUp22111076/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList111095: { screen: ArticleList111095Navigator },
Maps111082: { screen: Maps111082Navigator },
SignUp21111077: { screen: SignUp21111077Navigator },
SignUp22111076: { screen: SignUp22111076Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
