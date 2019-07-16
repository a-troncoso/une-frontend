import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

// Components
import App from './App';
import Home from './pages/home/Home';
import Welcome from './pages/welcome/Welcome';
import Places from './pages/places/Places';
import Sellers from './pages/sellers/Sellers';
import PlaceInformation from './pages/place-information/PlaceInformation';
import UserInformation from './pages/user-information/UserInformation';
import Search from './pages/search/Search';
import Profile from './pages/profile/Profile';

export function registerScreens() {
  Navigation.registerComponent('UneFront.App', () => gestureHandlerRootHOC(App));
  Navigation.registerComponent('UneFront.Home', () => gestureHandlerRootHOC(Home));
  Navigation.registerComponent('UneFront.Welcome', () => gestureHandlerRootHOC(Welcome));
  Navigation.registerComponent('UneFront.Places', () => gestureHandlerRootHOC(Places));
  Navigation.registerComponent('UneFront.Sellers', () => gestureHandlerRootHOC(Sellers));
  Navigation.registerComponent('UneFront.Search', () => gestureHandlerRootHOC(Search));
  Navigation.registerComponent('UneFront.Profile', () => gestureHandlerRootHOC(Profile));
  Navigation.registerComponent('UneFront.PlaceInformation', () => gestureHandlerRootHOC(PlaceInformation));
  Navigation.registerComponent('UneFront.UserInformation', () => gestureHandlerRootHOC(UserInformation));
  
}