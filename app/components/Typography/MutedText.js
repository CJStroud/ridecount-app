import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default class MutedText extends React.Component {
  render () {
    return (
      <Text
        {...this.props}
        style={[
          this.props.style,
          styles.mutedText
        ]}
      />
    )
  }
}

const styles = StyleSheet.create({
  mutedText: {
    color: '#888'
  }
})
