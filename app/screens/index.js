import { Navigation } from 'react-native-navigation'

import Dashboard from './Dashboard'
import Trips from './Trips'
import CreateTrip from './CreateTrip'
import Settings from './Settings'
import Login from './Login'
import Intro from './Intro'
import Register from './Register'
import Rides from './Rides'

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('rc.Intro', () => Intro, store, Provider)
  Navigation.registerComponent('rc.Dashboard', () => Dashboard, store, Provider)
  Navigation.registerComponent('rc.Trips', () => Trips, store, Provider)
  Navigation.registerComponent('rc.CreateTrip', () => CreateTrip, store, Provider)
  Navigation.registerComponent('rc.Settings', () => Settings, store, Provider)
  Navigation.registerComponent('rc.Login', () => Login, store, Provider)
  Navigation.registerComponent('rc.Register', () => Register, store, Provider)
  Navigation.registerComponent('rc.Rides', () => Rides, store, Provider)
}
