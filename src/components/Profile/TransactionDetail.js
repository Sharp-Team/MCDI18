import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Rating } from 'react-native-elements'
import { Icon } from 'expo'
import PropTypes from 'prop-types'

const DetailTransaction = ({ detailTrans, closeModal }) => {
  const styles = {
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
    headerDetail: {
      backgroundColor: '#fff',
      padding: 15,
      flexDirection: 'column',
      alignItems: 'left',
    },
    titleContent: {
      fontSize: 20,
      fontWeight: '600',
      color: '#333333',
    },
    titleDetail: {
      fontSize: 12,
      paddingBottom: 20,
      fontWeight: '400',
    },
    contentDetail: {
      fontSize: 15,
      fontWeight: '400',
      color: '#737373',
    },
    bodyDetail: {
      backgroundColor: '#fff',
      padding: 30,
      flexDirection: 'column',
      alignItems: 'left',
    },
  }

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

  return (
    <View>
      <View style={styles.headerDetail}>
        <TouchableOpacity onPress={() => closeModal()}>
          <Icon.Ionicons
            style={styles.icon}
            name="ios-arrow-round-back"
            size={35}
            color="#2DD754"
          />
        </TouchableOpacity>
        <Text style={styles.titleContent}>CHI TIẾT GIAO DỊCH</Text>
      </View>
      <View style={styles.contentTransContainer}>
        <View style={styles.contentTime}>
          <Text style={styles.title}>{detailTrans.time}</Text>
          <Text style={styles.subtitle}>{detailTrans.date}</Text>
        </View>
        <View style={styles.contentWork}>
          <Text style={styles.title}>{detailTrans.problem}</Text>
          <Text style={styles.subtitle}>{detailTrans.worker}</Text>
        </View>
        <View style={styles.contentStatus}>
          <Rating
            type="custom"
            imageSize={16}
            readonly
            startingValue={detailTrans.star}
            ratingBackgroundColor="#CCCCCC"
            ratingColor="#F1DC24"
            style={styles.rating}
          />
          {statusColor(detailTrans.status)}
        </View>
      </View>
      <View style={styles.bodyDetail}>
        <Text style={styles.titleDetail}>NỘI DUNG CÔNG VIỆC</Text>
        <View style={styles.detailWork}>
          <Text style={styles.contentDetail}>{detailTrans.detail}</Text>
        </View>
      </View>
    </View>
  )
}

DetailTransaction.propTypes = {
  detailTrans: PropTypes.shape({
    id: PropTypes.number,
    time: PropTypes.string,
    date: PropTypes.string,
    problem: PropTypes.string,
    worker: PropTypes.string,
    star: PropTypes.number,
    status: PropTypes.string,
    detail: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default DetailTransaction
