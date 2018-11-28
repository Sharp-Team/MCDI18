import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types'

const TagWork = ({ name, onHandleTag }) => {
  const styles = {
    tagContainer: {
      marginTop: 5,
      backgroundColor: '#dcdcdc',
      position: 'relative',
      borderRadius: 18,
      marginLeft: 3,
    },
    name: {
      fontSize: 16,
      paddingVertical: 7,
      paddingLeft: 10,
      paddingRight: 30,
      fontWeight: '500',
      color: '#fff',
    },
    icon: {
      position: 'absolute',
      right: 13,
      top: 6,
    },
  }
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.icon} onPress={() => onHandleTag(name)}>
        <Icon.Ionicons name="ios-close" size={23} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

TagWork.propTypes = {
  name: PropTypes.string.isRequired,
  onHandleTag: PropTypes.func.isRequired,
}

export default TagWork
