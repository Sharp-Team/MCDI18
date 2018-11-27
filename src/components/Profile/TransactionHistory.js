import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import MenuTransaction from './MenuTransaction'
import ContentsTransaction from './ContentTransaction'

const styles = StyleSheet.create({
  menuTransWrapper: {
    backgroundColor: '#f9f9f9',
  },
})

export class TransactionHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transaction: [
        {
          id: 1,
          time: '16:55:35',
          date: '28/08/2018',
          problem: 'Sửa ống nước',
          worker: 'Doranobita',
          star: 0,
          status: 'Đang thực hiện',
          detail: 'Đường ống nước hỏng nghiêm trọng',
        },
        {
          id: 2,
          time: '14:24:35',
          date: '28/09/2018',
          problem: 'Vá xăm xe máy',
          worker: 'Tuấn Hưng',
          star: 1.5,
          status: 'Yêu cầu bị hủy',
          detail: 'Xăm bị chuột cắn nát',
        },
        {
          id: 3,
          time: '14:24:35',
          date: '28/09/2018',
          problem: 'Sửa lap',
          worker: 'bacode',
          star: 5,
          status: 'Đã hoàn thành',
          detail: 'Lap bị vỡ màn hình',
        },
      ],
    }
  }

  render() {
    const { transaction } = this.state
    return (
      <View style={styles.transHistoryContainer}>
        <View style={styles.menuTransWrapper}>
          <MenuTransaction />
        </View>
        <View style={styles.menuContentWrapper}>
          <ContentsTransaction listTransaction={transaction} />
        </View>
      </View>
    )
  }
}

export default TransactionHistory
