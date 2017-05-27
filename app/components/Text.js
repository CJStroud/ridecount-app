import React from 'react'
import { Text as RNText } from 'react-native'
import fontMaker from '../utils/fontMaker'

export default class Text extends React.PureComponent {
  static defaultProps = {
    weight: 'normal'
  }

  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps)
  }


  render () {
    return <RNText
      ref={ref => {this._root = ref}}
      style={
        [{
          ...fontMaker({ weight: this.props.weight }),
          backgroundColor: 'transparent'
        },
        this.props.style
      ]}
    >
      {this.props.children}
    </RNText>
  }
}
