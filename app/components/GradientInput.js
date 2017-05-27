import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import color from 'color'
import fontMaker from '../utils/fontMaker'

export default class GradientInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = { focused: false }
  }

  handleFocus = () => {
    this.setState({ focused: true })
  }

  handleBlue = () => {
    this.setState({ focused: false })
  }

  render () {
    return (
      <TextInput
        {...this.props}
        style={[
          styles.input,
          this.state.focused && styles.focused,
          this.props.style
        ]}
        placeholderTextColor={color('#fff').fade(0.1)}
        onFocus={this.handleFocus}
        onBlur={this.handleBlue}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    ...fontMaker(),
    fontSize: 24,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color('#fff').fade(0.75),
    borderRadius: 2,
    height: 50,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  focused: {
    backgroundColor: color('#fff').fade(0.75),
  }
})
