import React from 'react'
import { Text, View, Animated, TextInput, DatePickerIOS, TouchableHighlight, StyleSheet } from 'react-native'
import moment from 'moment'

export default class PushedScreen extends React.Component {

  datepicker = null

  state = {
    date: null,
    showDatePicker: false,
    datePickerAnimation: new Animated.Value(0)
  }

  datepickerToggle () {
    this.setState({
      showDatePicker: !this.state.showDatePicker
    })

    Animated.timing(this.state.datePickerAnimation, {
      duration: 230,
      toValue: !this.state.showDatePicker ? 1 : 0
    }).start()
  }

  render () {

    return (
      <View style={{ flex: 1 }}>

        <Text style={{ padding: 16 }}>Enter your trip details here so you can start tracking rides!</Text>

        <TouchableHighlight
          onPress={() => this.datepickerToggle()}
          style={{ paddingHorizontal: 16, justifyContent: 'center', height: 40, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#CCC' }}
          underlayColor={'#DDD'}
        >
          <View>
            {this.state.date && <Text>{moment(this.state.date).format('Do MMMM YYYY')}</Text>}
            {!this.state.date && <Text style={{ color: '#888'}}>{'The date of your trip'}</Text>}
          </View>
        </TouchableHighlight>

        <View onLayout={({nativeEvent}) => this.setState({ datePickerHeight: nativeEvent.layout.height })}>
          <DatePickerIOS
            ref={ref => { this.datepicker = ref }}
            date={this.state.date || new Date()}
            mode={'date'}
            onDateChange={(date) => this.setState({date})}
          />
        </View>

        <Animated.View
          style={{
            height: this.state.datePickerHeight,
            backgroundColor: 'white',
            transform: [{
              translateY: this.state.datePickerAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-this.state.datePickerHeight, 0]
              })
            }]
          }}
        >

        </Animated.View>
      </View>
    )
  }
}
