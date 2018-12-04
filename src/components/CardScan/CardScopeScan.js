import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'
import { PRIMARY, TEXT_GRAY_DARKER } from '../../../constants/color'

const styles = StyleSheet.create({
  cardSearchContainer: {
    padding: 15,
    marginTop: 15,
    backgroundColor: '#fff',
  },
  textContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textScope: {
    fontSize: 15,
    color: TEXT_GRAY_DARKER,
    fontWeight: '500',
  },
  scopeValue: {
    fontSize: 15,
    color: PRIMARY,
    fontWeight: '500',
  },
})

export default class CardScopeScan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valueSlider: 21,
    }
  }

  render() {
    const { valueSlider } = this.state
    return (
      <View style={styles.cardSearchContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textScope}>Phạm vi quyét</Text>
          <Text style={styles.scopeValue}>{valueSlider}km</Text>
        </View>
        <Slider
          maximumValue={30}
          value={valueSlider}
          step={1}
          minimumTrackTintColor={PRIMARY}
          thumbTintColor={PRIMARY}
          onValueChange={value => {
            this.setState({ valueSlider: value })
          }}
        />
      </View>
    )
  }
}
