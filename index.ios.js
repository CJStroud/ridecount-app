import { Navigation } from 'react-native-navigation'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { registerScreens } from './app/screens'
import { createStore } from 'redux'
import * as reducers from './app/reducers'
import Colors from './app/colors'

const reducer = combineReducers(reducers)
let store = createStore(reducer)

registerScreens(store, Provider); // this is where you register all of your app's screens

Navigation.startTabBasedApp({
  tabsStyle: {
    tabBarBackgroundColor: Colors.BACKGROUND,
    tabBarTextFontFamily: 'Advent Pro',
    tabBarTextFontSize: 15,
    tabBarButtonColor: Colors.PRIMARY,
    tabBarSelectedButtonColor: Colors.SECONDARY
  },
  tabs: [
    {
      label: 'Dashboard',
      screen: 'rc.Dashboard', // this is a registered name for a screen
      // icon: require('../img/one.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Home'
    },
    {
      label: 'Trips',
      screen: 'rc.Trips',
      // icon: require('../img/two.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Trips'
    },
    {
      label: 'Settings',
      screen: 'rc.Settings',
      // icon: require('../img/two.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Settings'
    }
  ]
})



