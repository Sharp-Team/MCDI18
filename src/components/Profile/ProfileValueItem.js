import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const ProfileValueItem = ({ value, title }) => {
  const styles = {
    itemContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    valueText: {
      color: '#2dd754',
      fontSize: 12,
      fontWeight: '400',
      marginLeft: 10,
    },
    titleText: {
      color: '#979797',
      fontSize: 12,
    },
  }
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.titleText}>{title}:</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  )
}

ProfileValueItem.defaultProps = {
  value: '',
  title: '',
}

ProfileValueItem.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
}

export default ProfileValueItem
