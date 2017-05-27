import React from 'react'
import { ScrollView, StyleSheet, StatusBar, View, TouchableHighlight, Alert, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Navigation } from 'react-native-navigation'
import Text from '../components/Text'
import GradientInput from '../components/GradientInput'
import Button from '../components/Button'

export default class Login extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  constructor (props) {
    super(props)
    this.state = {
      focused: false,
      loading: false
    }
  }

  handleLogin = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
      // start the app
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'Home',
            screen: 'example.Home', // this is a registered name for a screen
            // icon: require('../img/one.png'),
            // selectedIcon: require('../img/one_selected.png'), // iOS only
            title: 'Home'
          },
          {
            label: 'Trips',
            screen: 'example.Trips',
            // icon: require('../img/two.png'),
            // selectedIcon: require('../img/two_selected.png'), // iOS only
            title: 'Trips'
          },
          {
            label: 'Settings',
            screen: 'example.Settings',
            // icon: require('../img/two.png'),
            // selectedIcon: require('../img/two_selected.png'), // iOS only
            title: 'Settings'
          }
        ]
      })
    }, 2000)
  }

  render () {
    return (
      <LinearGradient colors={['#2480EE', '#EA20B7']} style={styles.linearGradient}>
        <ScrollView
          contentContainerStyle={{...StyleSheet.absoluteFillObject, justifyContent: 'flex-end'}}
          keyboardShouldPersistTaps='handled'
          keyboardDismissMode='on-drag'
          scrollEnabled={false}
        >
          <StatusBar barStyle={'light-content'} />

          <View style={{ flex: 1 }} />

          <View style={{ flex: 3 }}>
            <GradientInput
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder={'Username/Email'}
            />
            <GradientInput
              placeholder={'Password'}
              secureTextEntry
            />
            <Button
              loading={this.state.loading}
              onPress={this.handleLogin}
              title={'Sign in'}
            />
          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20, marginBottom: 10 }} weight={'ExtraLight'}>New to ridecount?</Text>
            <TouchableOpacity>
              <Text style={{ color: '#fff' }}>Register now</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </LinearGradient>
    )
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 30
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  }
})
