import { Navigation } from 'react-native-navigation'

import { registerScreens } from './app/screens'

registerScreens(); // this is where you register all of your app's screens


Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.Intro', // unique ID registered with Navigation.registerScreen
  },
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});



