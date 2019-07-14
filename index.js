/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import { registerScreens } from './src/screens';

registerScreens();


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'MainStack',
        children: [{
          component: {
            id: 'AppScreen',
            name: 'UneFront.App'
          }
        }],
        options: {
          topBar: {
            drawBehind: true,
            visible: false
          }
        }
      }
    }
  });
});