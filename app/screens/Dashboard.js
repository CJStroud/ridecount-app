import React from 'react'
import { View, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Text from '../components/Text'
import Colors from '../colors'

export default class Dashboard extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  renderCircle (value, label) {
    return (
      <View style={{flex: 1, alignItems: 'center' }}>
        <View style={{ width: 100, height: 100, borderWidth: 2, borderColor: Colors.PRIMARY, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, color: Colors.PRIMARY }}>{value}</Text>
        </View>
        <Text style={{ color: Colors.PRIMARY }}>{label}</Text>
      </View>
    )
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.BACKGROUND }}>
        <StatusBar barStyle={'light-content'} />
        <LinearGradient
          colors={['#2480EE', '#725ba4', '#EA20B7']}
          style={{ padding: 20, paddingTop: 30 }}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 30 }}>my ridecount</Text>
        </LinearGradient>

        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
          {this.renderCircle(123, 'rides')}
          {this.renderCircle(20, 'trips')}
        </View>

        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
          {this.renderCircle(123, 'rides')}
          {this.renderCircle(20, 'trips')}
        </View>

      </View>
    )
  }
}
