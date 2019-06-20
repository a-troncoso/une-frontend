import { Navigation } from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('UneFront.App', (sc) => require('./App').default);
  Navigation.registerComponent('UneFront.Home', () => require('./pages/home/Home').default);
  Navigation.registerComponent('UneFront.Welcome', () => require('./pages/welcome/Welcome').default);
}