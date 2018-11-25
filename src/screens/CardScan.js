import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { CardLocation, CardScopeScan, CardSearchWork } from '../components/CardScan'

const styles = StyleSheet.create({
  cardScanContainer: {
    flex: 1,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonScan: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    paddingVertical: 15,
    alignSelf: 'center',
    backgroundColor: '#2DD754',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
})

export default class CardScan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialDataSearch: ['Sửa xe máy', 'Sửa xe đạp', 'Vá xăm', 'Thay dầu'],
    }
    this.onHandleTag = this.onHandleTag.bind(this)
  }

  onHandleTag(name) {
    const { initialDataSearch } = this.state
    const newData = initialDataSearch
    newData.map((item, index) => {
      if (item === name) {
        newData.splice(index, 1)
      }
      this.setState({ initialDataSearch: newData })
      return ''
    })
  }

  render() {
    const { initialDataSearch } = this.state
    return (
      <View style={styles.cardScanContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>TÌM QUANH ĐÂY</Text>
        </View>
        <CardLocation />
        <CardSearchWork tagWork={initialDataSearch} onHandleTag={this.onHandleTag} />
        <CardScopeScan />
        <TouchableOpacity style={styles.buttonScan}>
          <Text style={styles.buttonText}>Bắt đầu quét</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
