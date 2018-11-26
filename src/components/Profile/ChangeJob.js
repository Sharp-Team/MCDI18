import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TEXT_GRAY } from '../../../constants/color'

const ChangeJob = () => {
  const styles = {
    changeJobContainer: {
      backgroundColor: '#fff',
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    type: {
      color: '#37474F',
      fontSize: 16,
      fontWeight: '500',
    },
    account: {
      color: TEXT_GRAY,
      fontSize: 14,
    },
    buttonWraper: {
      backgroundColor: '#efefef',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#37474F',
      fontSize: 14,
      fontWeight: '500',
    },
  }
  return (
    <View style={styles.changeJobContainer}>
      <View style={styles.typeAccount}>
        <Text style={styles.type}>Loại tài khoản</Text>
        <Text style={styles.account}>Khách hàng</Text>
      </View>
      <TouchableOpacity style={styles.buttonWraper}>
        <Text style={styles.buttonText}>Chuyển sang Worker</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChangeJob
