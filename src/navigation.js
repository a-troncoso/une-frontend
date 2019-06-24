import { Navigation } from 'react-native-navigation'
// import Home from './pages/home/Home';

export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'HomeId',
      children: [
        {
          component: {
            name: 'UneFront.Home',
          }
        }
      ]
    }
  }
})