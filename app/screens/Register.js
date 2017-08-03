import React from 'react'
import { View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import GradientInput from '../components/GradientInput'
import Button from '../components/GradientButton'

export default class Register extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  render () {
    return (
      <LinearGradient colors={['#2480EE', '#EA20B7']} style={styles.linearGradient}>
        <View style={{ flex: 3 }}>
          <GradientInput
            autoCapitalize={'none'}
            autoCorrect={false}
            placeholder={'Email address'}
          />
          <GradientInput
            placeholder={'Username'}
            secureTextEntry
          />
          <Button
            onPress={this.handleLogin}
            title={'Next'}
          />
        </View>
      </LinearGradient>
    )
  }
}

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
