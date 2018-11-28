import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { CardLocation, CardScopeScan, CardSearchWork } from '../components/CardScan'
import { PRIMARY } from '../../constants/color'

const styles = StyleSheet.create({
  cardScanContainer: {
    flex: 1,
    marginBottom: 30,
  },
  titleContainer: {
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    paddingTop: 80,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  buttonScan: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 10,
    paddingVertical: 15,
    backgroundColor: PRIMARY,
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
      initialDataSearch: [],
      initialData: [
        'Sửa xe máy',
        'Sửa xe đạp',
        'Vá xăm',
        'Thay dầu',
        'Sửa máy tính',
        'Sửa máy tính',
        'Sửa ô tô',
      ],
      check: false,
    }
    this.onHandleTag = this.onHandleTag.bind(this)
    this.onSelectTag = this.onSelectTag.bind(this)
  }

  onHandleTag = name => {
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

  onSelectTag = name => {
    const { initialDataSearch } = this.state
    let { check } = this.state
    const newData = initialDataSearch
    newData.map(item => {
      if (item === name) {
        check = true
        return null
      }
      return null
    })
    if (check === false) {
      newData.push(name)
      this.setState({ initialDataSearch: newData })
    }
    this.setState({ check: false })
  }

  render() {
    const { initialData, initialDataSearch } = this.state
    return (
      <ScrollView contentContainerStyle={styles.cardScanContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>TÌM QUANH ĐÂY</Text>
        </View>
        <CardLocation />
        <CardSearchWork
          tagWork={initialDataSearch}
          onHandleTag={this.onHandleTag}
          onSelectTag={this.onSelectTag}
          initialData={initialData}
        />
        <CardScopeScan />
        <TouchableOpacity style={styles.buttonScan}>
          <Text style={styles.buttonText}>Bắt đầu quét</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
