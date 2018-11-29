import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native'
import { CardLocation, CardSearchWork } from '../components/CardScan'
import { PRIMARY } from '../../constants/color'

const styles = StyleSheet.create({
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
  titleMul: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    marginBottom: 6,
  },
  buttonScan: {
    marginVertical: 30,
    paddingVertical: 15,
    backgroundColor: PRIMARY,
    textAlign: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
  multipleLine: {
    height: 100,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#cecece',
    paddingHorizontal: 8,
  },
  buttonSignUp: {
    backgroundColor: '#2DD754',
    borderRadius: 4,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 50,
  },

  textSignUp: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
    textAlign: 'center',
    fontWeight: '600',
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
        <View
          style={{
            marginTop: 18,
            backgroundColor: '#fff',
            paddingHorizontal: 12,
            paddingVertical: 20,
          }}
        >
          <Text style={styles.titleMul}>Nội dung công việc</Text>
          <TextInput
            placeholder="Nhập miêu tả công việc chi tiết"
            multiline
            style={styles.multipleLine}
          />
        </View>
        <TouchableOpacity style={styles.buttonSignUp}>
          <Text style={styles.textSignUp}>Phát thông báo</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
