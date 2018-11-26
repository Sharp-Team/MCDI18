import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types'
import { TEXT_GRAY_DARKER, PRIMARY } from '../../../constants/color'

const ProfileItem = ({ value, title, confirmPhone, confirmPass }) => {
  const styles = {
    itemContainer: {
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      borderBottomColor: '#efefef',
    },
    valueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    valueText: {
      color: PRIMARY,
      fontSize: 14,
      fontWeight: '400',
      marginRight: 7,
    },
    titleText: {
      color: TEXT_GRAY_DARKER,
      fontSize: 16,
      fontWeight: '500',
    },
    confirmPhone: {
      fontSize: 12,
      color: '#828282',
    },
  }
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, { color: title === 'Đăng xuất' ? PRIMARY : TEXT_GRAY_DARKER }]}>
          {title}
        </Text>
        {confirmPhone !== 'none' && <Text style={styles.confirmPhone}>{confirmPhone}</Text>}
      </View>
      <View style={styles.valueContainer}>
        {value !== 'none' && <Text style={styles.valueText}>{value}</Text>}
        <Icon.Ionicons
          name={confirmPass ? 'ios-arrow-down' : 'ios-arrow-forward'}
          size={20}
          color="#bbb"
        />
      </View>
    </View>
  )
}

ProfileItem.defaultProps = {
  confirmPhone: 'none',
  title: 'Title',
  value: 'none',
  confirmPass: false,
}

ProfileItem.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  confirmPhone: PropTypes.string,
  confirmPass: PropTypes.bool,
}

export default ProfileItem
