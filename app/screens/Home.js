import React from 'react'
import { Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class Home extends React.Component {

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
      </View>
    )
  }
}