import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types'

const TagWork = ({ name, onHandleTag }) => {
  const styles = {
    tagContainer: {
      marginTop: 5,
      backgroundColor: '#cecece',
      position: 'relative',
      borderRadius: 18,
      marginLeft: 3,
    },
    name: {
      fontSize: 16,
      paddingVertical: 7,
      paddingLeft: 10,
      paddingRight: 45,
      fontWeight: '500',
      color: '#fff',
    },
    icon: {
      position: 'absolute',
      paddingHorizontal: 8,
      backgroundColor: '#fff',
      borderRadius: 30,
      right: 4,
      top: 3,
    },
  }
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.icon} onPress={() => onHandleTag(name)}>
        <Icon.Ionicons name="ios-close" size={23} color="#ccc" lineHeight={20} />
      </TouchableOpacity>
    </View>
  )
}

TagWork.propTypes = {
  name: PropTypes.string.isRequired,
  onHandleTag: PropTypes.func.isRequired,
}

export default TagWork
