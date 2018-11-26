import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
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
      check: false,
    }
    this.onHandleTag = this.onHandleTag.bind(this)
    this.onHandleSubmitInput = this.onHandleSubmitInput.bind(this)
  }

  onHandleTag(name) {
    const { initialDataSearch } = this.state
    const newData = initialDataSearch
    newData.map((item, index) => {
      if (item.endsWith(name)) {
        newData.splice(index, 1)
      }
      this.setState({ initialDataSearch: newData })
      return ''
    })
  }

  onHandleSubmitInput(name) {
    const { initialDataSearch, check } = this.state
    const newData = initialDataSearch
    if (name === '') {
      return
    }
    newData.map(item => {
      if (item === name) {
        this.setState({ check: true })
        console.log('true')
        return null
      }
      return null
    })
    console.log('false', check)
    if (check === false) {
      console.log('false12')
      newData.push(name)
      this.setState({ initialDataSearch: newData })
    }
    this.setState({ check: false })
  }

  render() {
    const { initialDataSearch } = this.state
    return (
      <ScrollView contentContainerStyle={styles.cardScanContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>TÌM QUANH ĐÂY</Text>
        </View>
        <CardLocation />
        <CardSearchWork
          tagWork={initialDataSearch}
          onHandleTag={this.onHandleTag}
          onHandleSubmitInput={this.onHandleSubmitInput}
        />
        <CardScopeScan />
        <TouchableOpacity style={styles.buttonScan}>
          <Text style={styles.buttonText}>Bắt đầu quét</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
