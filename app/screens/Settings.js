import React from 'react'
import { Text, View, Switch } from 'react-native'

export default class Settings extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ marginRight: 10 }}>Notifications</Text>
          <Switch />
        </View>
      </View>
    )
  }
}
