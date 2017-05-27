/**
 * Source: https://hiddentao.com/archives/2017/03/10/get-custom-fonts-working-in-react-native/
 */

import { Platform } from 'react-native'

// we define available font weight and styles for each font here
const font = {
  AdventPro: {
    weights: {
      ExtraBold: '800',
      Bold: '700',
      SemiBold: '600',
      Light: '300',
      ExtraLight: '100',
      Normal: '400'
    },
    styles: {
      Italic: 'italic'
    }
  }
}

// generate styles for a font with given weight and style
export default fontMaker = (options = {}) => {
  let { weight, style, family } = Object.assign({
    weight: null,
    style: null,
    family: 'Advent Pro'
  }, options)

  const { weights, styles } = font[family.replace(' ', '')]

  if (Platform.OS === 'android') {
    weight = weights[weight] ? weight : ''
    style = styles[style] ? style : ''

    const suffix = weight + style

    return {
      fontFamily: family + (suffix.length ? `-${suffix}` : '')
    }
  } else {
    weight = weights[weight] || weights.Normal
    style = styles[style] || 'normal'

    return {
      fontFamily: family,
      fontWeight: weight,
      fontStyle: style
    }
  }
}
