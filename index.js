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
        children: [
        //   {
        //   bottomTabs: {
        //     children: [
        //       {
        //         component: {
        //           name: 'UneFront.Places',
        //           options: {
        //             bottomTab: {
        //               text: 'Tab 2',
        //               icon: require('./src/assets/img/tab1.png')
        //             }
        //           }
        //         }
        //       },
        //       {
        //         component: {
        //           name: 'UneFront.Sellers',
        //           options: {
        //             bottomTab: {
        //               text: 'Tab 2',
        //               icon: require('./src/assets/img/tab1.png')
        //             }
        //           }
        //         }
        //       }
        //     ],
        //     options: {
        //       topBar: {
        //         visible: false
        //       }
        //     }
        //   }
        // },
        // {
        //   component: {
        //     name: 'UneFront.Home',
        //   }
        // },
        {
          component: {
            id: 'AppScreen',
            name: 'UneFront.App'
          }
        }]
      }
    }
  });
});