import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Navigation } from 'react-native-navigation'
import Text from '../components/Text'
import Button from '../components/Button'

export default class Intro extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  handleNextScreen = () => {
    this.props.navigator.push({
      screen: 'example.Login', // unique ID registered with Navigation.registerScreen
      animated: true, // does the push have transition animation or does it happen immediately (optional)
    });
  }

  render () {
    return (
      <LinearGradient colors={['#2480EE', '#EA20B7']} style={styles.linearGradient}>
        <StatusBar barStyle={'light-content'} />

        <View style={{ marginBottom: 100, marginHorizontal: 20 }}>
          <Text style={styles.heading}>Hello</Text>

          <Text style={styles.text}>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children.</Text>
        </View>
        <Button
          onPress={this.handleNextScreen}
          title={'Let\'s go!'}
        />

      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30
  },
  heading: {
    fontSize: 60,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff'
  },
  text: {
    fontSize: 18,
    color: '#fff'
  }
})
