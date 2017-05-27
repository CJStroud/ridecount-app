import React from 'react'
import { ActivityIndicator, TouchableHighlight, StyleSheet } from 'react-native'
import color from 'color'
import Text from '../components/Text'

export default class Button extends React.Component {
  renderInner () {
    if (this.props.loading) {
      return <ActivityIndicator color={'#fff'} />
    }

    return <Text style={styles.buttonText}>{this.props.title}</Text>
  }

  render () {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={color('#fff').fade(0.6)}
        {...this.props}
      >
        {this.renderInner()}
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    backgroundColor: color('#fff').fade(0.75),
    padding: 10,
    height: 60,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 28,
    textAlign: 'center',
    color: '#fff'
  },
})
