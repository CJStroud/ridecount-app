import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

export default class FirstTabScreen extends React.Component {
  pushScreen = () => {
    // this would go inside the Component implementation of one of your screens, like FirstTabScreen.js
    this.props.navigator.push({
      screen: 'example.PushedScreen',
      title: 'Pushed Screen',
      backButtonTitle: 'Back'
    });
  }

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 1</Text>
        <TouchableHighlight
          onPress={this.pushScreen}
        >
          <Text>Push a screen</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
