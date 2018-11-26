import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import InputCustom from '../components/common'
import { TEXT_GRAY_DARKER, PRIMARY } from '../../constants/color'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  formTitle: {
    fontSize: 32,
    color: TEXT_GRAY_DARKER,
    letterSpacing: 1.2,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 30,
  },

  buttonGroup: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 20,
  },

  buttonCustom: {
    flex: 1,
    borderRadius: 4,
  },

  textOb: {
    paddingVertical: 14,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
})

export default () => (
  <ScrollView style={styles.container}>
    <Text style={styles.formTitle}>Đổi mật khẩu</Text>
    <InputCustom secure placeholder="Nhập mật khẩu cũ của bạn" inputLabel="Mật khẩu cũ" />
    <InputCustom secure placeholder="Nhập mật khẩu mới của bạn" inputLabel="Mật khẩu mới" />
    <InputCustom secure placeholder="Nhập lại mật khẩu mới" inputLabel="Mật lại khẩu mới" />
    <View style={styles.buttonGroup}>
      <TouchableHighlight style={[styles.buttonCustom, { backgroundColor: 'transparent' }]}>
        <Text style={[styles.textOb, { color: '#828282' }]}>Hủy</Text>
      </TouchableHighlight>
      <View style={{ width: 20 }} />
      <TouchableHighlight style={[styles.buttonCustom, { backgroundColor: PRIMARY }]}>
        <Text style={[styles.textOb, { color: '#fff' }]}>Cập nhật</Text>
      </TouchableHighlight>
    </View>
  </ScrollView>
)
