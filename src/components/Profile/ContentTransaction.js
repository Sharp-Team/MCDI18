import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Rating } from 'react-native-elements'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import DetailTransaction from './TransactionDetail'

const styles = StyleSheet.create({
  contentTransContainer: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#F9F9F9',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#979797',
  },
  working: {
    fontSize: 14,
    fontWeight: '400',
    color: '#979797',
  },
  cancel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F24033',
  },
  done: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2DD754',
  },
})

const statusColor = status => {
  switch (status) {
    case 'Đang thực hiện':
      return <Text style={styles.working}>{status}</Text>
    case 'Yêu cầu bị hủy':
      return <Text style={styles.cancel}>{status}</Text>
    default:
      return <Text style={styles.done}>{status}</Text>
  }
}

export class ContentTransaction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
      transactionItem: props.listTransaction[0],
    }
  }

  toggleModal = () => this.setState({ isModalVisible: false })

  render() {
    const { isModalVisible, transactionItem } = this.state
    const { listTransaction } = this.props
    return (
      <View>
        {listTransaction.map(transaction => (
          <View key={transaction.id}>
            <TouchableOpacity
              onPress={() =>
                this.setState({ isModalVisible: !isModalVisible, transactionItem: transaction })
              }
            >
              <View style={styles.contentTransContainer}>
                <View style={styles.contentTime}>
                  <Text style={styles.title}>{transaction.time}</Text>
                  <Text style={styles.subtitle}>{transaction.date}</Text>
                </View>
                <View style={styles.contentWork}>
                  <Text style={styles.title}>{transaction.problem}</Text>
                  <Text style={styles.subtitle}>{transaction.worker}</Text>
                </View>
                <View style={styles.contentStatus}>
                  <Rating
                    type="custom"
                    imageSize={16}
                    readonly
                    startingValue={transaction.star}
                    ratingBackgroundColor="#CCCCCC"
                    ratingColor="#F1DC24"
                    style={styles.rating}
                  />
                  {statusColor(transaction.status)}
                </View>
                <Modal onBackdropPress={() => this.toggleModal()} isVisible={isModalVisible}>
                  <DetailTransaction
                    detailTrans={transactionItem}
                    closeModal={() => this.toggleModal()}
                  />
                </Modal>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    )
  }
}

ContentTransaction.propTypes = {
  listTransaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      time: PropTypes.string,
      date: PropTypes.string,
      problem: PropTypes.string,
      worker: PropTypes.string,
      star: PropTypes.number,
      status: PropTypes.string,
      detail: PropTypes.string,
    }),
  ).isRequired,
}

export default ContentTransaction
