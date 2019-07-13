import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

// Components
import App from './App';
import Home from './pages/home/Home';
import Welcome from './pages/welcome/Welcome';
import Places from './pages/places/Places';
import Sellers from './pages/sellers/Sellers';

export function registerScreens() {
  Navigation.registerComponent('UneFront.App', () => (App));
  Navigation.registerComponent('UneFront.Home', () => (Home));
  Navigation.registerComponent('UneFront.Welcome', () => (Welcome));
  Navigation.registerComponent('UneFront.Places', () => (Places));
  Navigation.registerComponent('UneFront.Sellers', () => (Sellers));
}