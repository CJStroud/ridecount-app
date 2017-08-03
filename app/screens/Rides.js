import React from 'react'
import { Text, View, Animated, TextInput, DatePickerIOS, TouchableHighlight, StyleSheet, FlatList } from 'react-native'
import { MutedText } from '../components/Typography'
import Button from '../components/GradientButton'
import moment from 'moment'

export default class RidesScreen extends React.Component {

  state = {
  }

  renderCard ({item}) {
    return (
      <View style={styles.card} key={item.id}>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <MutedText>{'Spinning ride'}</MutedText>
      </View>
    )
  }

  render () {

    return (
      <View style={{ flex: 1 }}>

        <Text>Here you can add the rides you went on, the number of times your rode them</Text>

        <FlatList
          horizontal={true}
          paginate={true}
          data={[
            {title: 'The super awesome carousel 1', id: 1},
            {title: 'The super awesome carousel 2', id: 2},
            {title: 'The super awesome carousel 3', id: 3}
          ]}
          renderItem={this.renderCard}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 16,
    // borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#DDD',
    padding: 16,
    borderRadius: 2,
    shadowColor: '#DDD',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2}
  }
})
