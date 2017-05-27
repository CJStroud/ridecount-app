import { Navigation } from 'react-native-navigation'

import Home from './Home'
import Trips from './Trips'
import CreateTrip from './CreateTrip'
import Settings from './Settings'
import Login from './Login'
import Intro from './Intro'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.Intro', () => Intro)
  Navigation.registerComponent('example.Home', () => Home)
  Navigation.registerComponent('example.Trips', () => Trips)
  Navigation.registerComponent('example.CreateTrip', () => CreateTrip)
  Navigation.registerComponent('example.Settings', () => Settings)
  Navigation.registerComponent('example.Login', () => Login)
}
