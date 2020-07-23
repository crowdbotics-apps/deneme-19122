import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList83797Navigator from '../features/ArticleList83797/navigator';
import ArticleList83796Navigator from '../features/ArticleList83796/navigator';
import ArticleList83795Navigator from '../features/ArticleList83795/navigator';
import ArticleList83778Navigator from '../features/ArticleList83778/navigator';
import ArticleList83777Navigator from '../features/ArticleList83777/navigator';
import ArticleList83776Navigator from '../features/ArticleList83776/navigator';
import ArticleList83759Navigator from '../features/ArticleList83759/navigator';
import ArticleList83758Navigator from '../features/ArticleList83758/navigator';
import ArticleList83757Navigator from '../features/ArticleList83757/navigator';
import ArticleList483753Navigator from '../features/ArticleList483753/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList83797: { screen: ArticleList83797Navigator },
ArticleList83796: { screen: ArticleList83796Navigator },
ArticleList83795: { screen: ArticleList83795Navigator },
ArticleList83778: { screen: ArticleList83778Navigator },
ArticleList83777: { screen: ArticleList83777Navigator },
ArticleList83776: { screen: ArticleList83776Navigator },
ArticleList83759: { screen: ArticleList83759Navigator },
ArticleList83758: { screen: ArticleList83758Navigator },
ArticleList83757: { screen: ArticleList83757Navigator },
ArticleList483753: { screen: ArticleList483753Navigator },

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
