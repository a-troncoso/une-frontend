import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

// Components
import App from './App';
import Home from './pages/home/Home';
import Welcome from './pages/welcome/Welcome';
import Places from './pages/places/Places';
import Sellers from './pages/sellers/Sellers';

export function registerScreens() {
  Navigation.registerComponent('UneFront.App', () => gestureHandlerRootHOC(App));
  Navigation.registerComponent('UneFront.Home', () => gestureHandlerRootHOC(Home));
  Navigation.registerComponent('UneFront.Welcome', () => gestureHandlerRootHOC(Welcome));
  Navigation.registerComponent('UneFront.Places', () => gestureHandlerRootHOC(Places));
  Navigation.registerComponent('UneFront.Sellers', () => gestureHandlerRootHOC(Sellers));
}