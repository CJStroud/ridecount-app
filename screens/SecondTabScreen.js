import React from 'react'
import { Text, View } from 'react-native'

export default class FirstScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 2</Text>
      </View>
    )
  }
}
