import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types'
import TagWork from './TagWork'

const CardSearchWork = ({ tagWork, onHandleTag }) => {
  const styles = {
    cardScopeScan: {
      marginTop: 15,
      backgroundColor: '#fff',
      padding: 15,
    },
    inputContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
      marginVertical: 5,
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: '#979797',
    },
    iconSearch: {
      margin: 5,
    },
    titleText: {
      fontSize: 15,
      color: '#333',
      fontWeight: '500',
    },
  }
  return (
    <View style={styles.cardScopeScan}>
      <Text style={styles.titleText}>Chọn công việc</Text>
      <View style={styles.inputContainer}>
        <Icon.Ionicons style={styles.iconSearch} name="ios-search" size={20} color="#bbb" />
        <TextInput style={styles.input} placeholder="Nhập công việc bạn làm được" />
      </View>
      <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
        {tagWork.map((item, id) => (
          <TagWork key={id.toString()} name={item} onHandleTag={onHandleTag} />
        ))}
      </View>
    </View>
  )
}

CardSearchWork.propTypes = {
  tagWork: PropTypes.shape.isRequired,
  onHandleTag: PropTypes.func.isRequired,
}

export default CardSearchWork
