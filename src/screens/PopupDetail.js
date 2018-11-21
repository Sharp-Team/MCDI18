import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

let modalVisiable = false
// eslint-disable-next-line arrow-body-style
const PopupDetail = () => {
  const setModalVisiable = () => {
    modalVisiable = !modalVisiable
  }
  return (
    <View>
      <Text>Test Screen</Text>
      <TouchableHighlight onPress={setModalVisiable}>
        <Text>aaaa</Text>
      </TouchableHighlight>
      <Text>{modalVisiable ? 'aa' : 'bb'}</Text>
    </View>
  )
}

export default PopupDetail
